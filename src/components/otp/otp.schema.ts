import { z } from "zod";

export const otpSchema = z.object({
  digit1: z.string().regex(/^\d$/, "Enter all 6 digits"),
  digit2: z.string().regex(/^\d$/, "Enter all 6 digits"),
  digit3: z.string().regex(/^\d$/, "Enter all 6 digits"),
  digit4: z.string().regex(/^\d$/, "Enter all 6 digits"),
  digit5: z.string().regex(/^\d$/, "Enter all 6 digits"),
  digit6: z.string().regex(/^\d$/, "Enter all 6 digits"),
});

export type OtpFormData = z.infer<typeof otpSchema>;
