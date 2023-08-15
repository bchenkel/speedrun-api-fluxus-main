import { z } from "zod";

export const paramLoginSchema = z.object({
  role: z
    .string()
    .refine((data) => ["admin", "responsible", "student"].includes(data), {
      message: "Role must be valid",
    }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
