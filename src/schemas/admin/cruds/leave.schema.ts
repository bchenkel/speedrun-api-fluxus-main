import { z } from "zod";

export const createLeaveSchema = z.object({
  beginning: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((value) => new Date(value)),
  end: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((value) => new Date(value)),
  reason: z.string(),
  studentId: z.number().int().positive(),
  responsibleId: z.number().int().positive(),
});

export const updateLeaveSchema = z.object({
  beginning: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((value) => new Date(value))
    .optional(),
  end: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .transform((value) => new Date(value))
    .optional(),
  reason: z.string().optional(),
  studentId: z.number().int().positive().optional(),
  responsibleId: z.number().int().positive().optional(),
});
