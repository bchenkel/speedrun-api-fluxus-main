import { z } from "zod";

export const paramIdSchema = z.object({
  id: z
    .string()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, "id must be greater than 0"),
});
