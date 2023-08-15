import { jwt } from "../../services/libs/jwt.service";

export const roleMiddleware = (roles: string[]) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new Error("Unauthorized");
      }
      const token = authHeader.split(" ")[1];
      if (!token || !jwt.verify(token, process.env.JWT_SECRET as string)) {
        throw new Error("Unauthorized");
      }
      const { sub, email, role } = <any>jwt.decode(token);
      if (!roles.includes(role)) {
        throw new Error("Unauthorized");
      }
      req.payload = {
        id: sub,
        email,
        role,
      };
      next();
    } catch (error) {
      next(error);
    }
  };
};
