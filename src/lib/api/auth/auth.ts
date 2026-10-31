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
} from "@/types/auth";

// Login
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/api/auth/login", data);

  return response.data;
};

// Register
export const register = async (
  data: RegisterRequest,
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>("/api/auth/register", data);

  return response.data;
};

// Generate OTP
export const generateOtp = async (
  data: OtpGenerateRequest,
): Promise<OtpGenerateResponse> => {
  const response = await api.post<OtpGenerateResponse>(
    "/api/auth/otp/send",
    data,
  );

  return response.data;
};

// Verify OTP
export const verifyOtp = async (
  data: OtpCheckRequest,
): Promise<OtpCheckResponse> => {
  const response = await api.post<OtpCheckResponse>(
    "/api/auth/otp/verify",
    data,
  );

  return response.data;
};

// Forgot Password
export const forgotPassword = async (
  data: ForgotPassRequest,
): Promise<ForgotPassResponse> => {
  const response = await api.post<ForgotPassResponse>(
    "/api/auth/forgot-password",
    data,
  );

  return response.data;
};

// Reset Password
export const resetPassword = async (
  data: ResetPassRequest,
): Promise<ResetPassResponse> => {
  const response = await api.post<ResetPassResponse>(
    "/api/auth/reset-password",
    data,
  );

  return response.data;
};
