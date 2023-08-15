import { fingerprintSchema } from "../schemas/fingerprint.schema";
import { loginSchema, paramLoginSchema } from "../schemas/login.schema";
import { goService } from "../services/go.service";
import { loginService } from "../services/login.service";

// Login
export const login = async (req, res) => {
  const { role } = paramLoginSchema.parse(req.params);
  const { email, password } = loginSchema.parse(req.body);
  const token = await loginService({ role, email, password });
  res.status(200).json({ token });
};

export const go = async (req, res) => {
  const { fingerprint } = fingerprintSchema.parse(req.params);
  const result = await goService({ fingerprint });
  res.status(200).json(result);
};
