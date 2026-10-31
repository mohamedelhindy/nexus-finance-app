export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  country: string;
  timezone: string;
  profileImageUrl: string;
  emailVerified: boolean;
}

// Login Request & Response Typing
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  accessToken: string;
  tokenType: "bearer";
  expiresAt: string;
  user: User;
}

// Registration Request & Response Typing
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  interests: string[];
  country: string;
  timezone: string;
  termsAccepted: boolean;
  privacyAccepted: boolean;
}

export interface RegisterResponse {
  message: string;
  emailVerified: boolean;
}

// OTP Generation Request & Response Typing
export interface OtpGenerateRequest {
  email: string;
  purpose: "EMAIL_VERIFICATION";
}

export interface OtpGenerateResponse {
  message: string;
}

// OTP Checking Request & Response Typing
export interface OtpCheckRequest {
  email: string;
  purpose: "EMAIL_VERIFICATION";
  otp: string;
}

export interface OtpCheckResponse {
  message: string;
  verified: boolean;
}

// Forgot Password Request & Response Typing
export interface ForgotPassRequest {
  email: string;
}

export interface ForgotPassResponse {
  message: string;
}

// Reset Password Request & Response Typing
export interface ResetPassRequest {
  email: string;
  otp: string;
  newPassword: string;
}

export interface ResetPassResponse {
  message: string;
}
