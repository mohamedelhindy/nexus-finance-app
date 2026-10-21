import { z } from "zod";

export const otpSchema = z.object({
  otp: z
    .string()
    .trim()
    .min(1, "Verification code is required")
    .regex(/^\d{6}$/, "Verification code must be exactly 6 digits"),
});

export type OtpFormData = z.infer<typeof otpSchema>;
