import { z } from "zod";

export const payloadSchema = z.object({
  id: z.number().int().positive(),
  email: z.string().email(),
  role: z.enum(["admin", "responsible", "student"]),
});
