import { bcrypt } from "../utils/bcrypt.service";
import { jwt } from "./libs/jwt.service";
import { prisma } from "./libs/prisma.service";

export async function loginService(data) {
  const { role, email, password } = data;
  let user;
  switch (role) {
    case "admin":
      user = await prisma.admin.findUnique({
        where: {
          email,
        },
      });
      break;
    case "responsible":
      user = await prisma.responsible.findUnique({
        where: {
          email,
        },
      });
      break;
    default:
      throw new Error("Tipo de usuário inválido");
  }
  if (!user) {
    throw new Error("Email ou senha incorretos");
  }
  if (role === "responsible" && !user.active) {
    throw new Error("A conta está desativada");
  }
  if (!(await bcrypt.compare(password, user.password))) {
    throw new Error("Email ou senha incorretos");
  }
  const payload = {
    role,
    sub: user.id,
    email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });
  if (!token) {
    throw new Error("Erro ao gerar token");
  }
  return token;
}
