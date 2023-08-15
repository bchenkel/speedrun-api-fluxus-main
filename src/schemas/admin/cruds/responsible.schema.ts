import { z } from "zod";

export const createResponsibleSchema = z.object({
  active: z.boolean().default(false).optional(),
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(6).max(255).optional(),
  cpf: z.string().length(11),
});

export const updateResponsibleSchema = z.object({
  active: z.boolean().default(false).optional(),
  name: z.string().min(3).max(255).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).max(255).optional(),
  cpf: z.string().length(11).optional(),
});
