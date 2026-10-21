import { z } from "zod";
import { passwordSchema } from "../login/login.schema";

export const signupSchema = z
  .object({
    // Personal information
    firstName: z
      .string()
      .trim()
      .min(1, "First name is required")
      .max(50, "First name is too long"),

    lastName: z
      .string()
      .trim()
      .min(1, "Last name is required")
      .max(50, "Last name is too long"),

    dateOfBirth: z.object({
      day: z.string().min(1, "Select a day"),
      month: z.string().min(1, "Select a month"),
      year: z.string().min(1, "Select a year"),
    }),

    // Account security
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .pipe(z.email("Enter a valid email address")),

    password: passwordSchema,

    confirmPassword: z.string().min(1, "Please confirm your password"),

    // Interests and region
    interests: z
      .array(z.string())
      .min(1, "Select at least one preferred sector"),

    country: z.string().min(1, "Select your country"),

    timezone: z.string().min(1, "Select your timezone"),

    // Review and create account
    termsAccepted: z
      .boolean()
      .refine((value) => value, "You must accept the Terms of Service"),

    privacyAccepted: z
      .boolean()
      .refine((value) => value, "You must accept the Privacy Policy"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupFormData = z.infer<typeof signupSchema>;
