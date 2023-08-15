import { z } from "zod";

export const strictStudentResponsibleSchema = z.object({
  responsibleId: z
    .string()
    .transform((value) => Number(value))
    .refine((value) => value > 0, {
      message: "responsibleId must be greater than 0",
    }),
  studentId: z
    .string()
    .transform((value) => Number(value))
    .refine((value) => value > 0, {
      message: "responsibleId must be greater than 0",
    }),
});

export const flexStudentResponsibleSchema = z.object({
  responsibleId: z
    .string()
    .transform((value) => Number(value))
    .refine((value) => value > 0, {
      message: "responsibleId must be greater than 0",
    })
    .optional(),
  studentId: z
    .string()
    .transform((value) => Number(value))
    .refine((value) => value > 0, {
      message: "responsibleId must be greater than 0",
    })
    .optional(),
});

export const createStudentResponsibleSchema = z.object({
  studentId: z.number().int().positive(),
  responsibleId: z.number().int().positive(),
});

export const updateStudentResponsibleSchema = z.object({
  studentId: z.number().int().positive().optional(),
  responsibleId: z.number().int().positive().optional(),
});
