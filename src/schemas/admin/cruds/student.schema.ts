import { z } from "zod";

export const createStudentSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  cpf: z.string().length(11),
  shift: z.enum(["MORNING", "AFTERNOON", "EVENING"]),
  enrollment: z.string(),
  birth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((value) => new Date(value)),
  fingerprint: z.string(),
});

export const updateStudentSchema = z.object({
  name: z.string().min(3).max(255).optional(),
  email: z.string().email().optional(),
  cpf: z.string().length(11).optional(),
  shift: z.enum(["MORNING", "AFTERNOON", "EVENING"]),
  enrollment: z.string().optional(),
  birth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((value) => new Date(value))
    .optional(),
  fingerprint: z.string().optional(),
});
