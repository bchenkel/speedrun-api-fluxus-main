import { z } from "zod";

export const createLogSchema = z.object({
  type: z.enum(["IN", "OUT"]),
  studentId: z.number().int().positive(),
});

export const updateLogSchema = z.object({
  type: z.enum(["IN", "OUT"]).optional(),
  studentId: z.number().int().positive().optional(),
});
