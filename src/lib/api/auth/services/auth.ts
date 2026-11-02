import { api } from "@/lib/axios";

import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  OtpGenerateRequest,
  OtpGenerateResponse,
  OtpCheckRequest,
  OtpCheckResponse,
  ForgotPassRequest,
  ForgotPassResponse,
  ResetPassRequest,
  ResetPassResponse,
  User,
} from "@/types/auth";

// Login
export const getLogin = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/api/auth/login", data);

  return response.data;
};

// Register
export const getRegister = async (
  data: RegisterRequest,
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>("/api/auth/register", data);

  return response.data;
};

// Generate OTP
export const getGenerateOtp = async (
  data: OtpGenerateRequest,
): Promise<OtpGenerateResponse> => {
  const response = await api.post<OtpGenerateResponse>(
    "/api/auth/otp/send",
    data,
  );

  return response.data;
};

// Verify OTP
export const getVerifyOtp = async (
  data: OtpCheckRequest,
): Promise<OtpCheckResponse> => {
  const response = await api.post<OtpCheckResponse>(
    "/api/auth/otp/verify",
    data,
  );

  return response.data;
};

// Forgot Password
export const getForgotPassword = async (
  data: ForgotPassRequest,
): Promise<ForgotPassResponse> => {
  const response = await api.post<ForgotPassResponse>(
    "/api/auth/forgot-password",
    data,
  );

  return response.data;
};

// Reset Password
export const getResetPassword = async (
  data: ResetPassRequest,
): Promise<ResetPassResponse> => {
  const response = await api.post<ResetPassResponse>(
    "/api/auth/reset-password",
    data,
  );

  return response.data;
};

// Current User
export const getCurrentUser = async (): Promise<User> => {
  const response = await api.get<User>("/api/auth/me");

  return response.data;
};

// Authentication Keys
export const authKeys = {
  me: ["auth", "me"] as const,
};
