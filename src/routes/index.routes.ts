import { Router } from "express";
import { go, login } from "../controllers";
import { errorAdapter } from "../middlewares/auth/error.middleware";

export const router = Router();

router.post("/login/:role", errorAdapter(login));
router.get("/go/:fingerprint", errorAdapter(go));
