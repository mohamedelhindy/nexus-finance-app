import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(1, "Password is required")
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[!@#$%^&*(),_.?":{}|<>]/,
    "Password must contain at least one special character",
  );

export const loginSchema = z.object({
  email: z.email("Enter a valid email").trim().min(1, "Email is required"),
  password: passwordSchema,
});

export type LoginFormData = z.infer<typeof loginSchema>;
