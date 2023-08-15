import { z } from "zod";

export const fingerprintSchema = z.object({
  fingerprint: z.string(),
});
