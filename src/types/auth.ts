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
export interface otpGenerateRequest {
  email: string;
  purpose: "EMAIL_VERIFICATION";
}

export interface otpGenerateResponse {
  message: string;
}

// OTP Checking Request & Response Typing
export interface otpCheckRequest {
  email: string;
  purpose: "EMAIL_VERIFICATION";
  otp: number;
}

export interface otpCheckResponse {
  message: string;
  verified: boolean;
}

// Forgot Password Request & Response Typing
export interface forgotPassRequest {
  email: string;
}

export interface forgotPassResponse {
  message: string;
}

// Reset Password Request & Response Typing
export interface resetPassRequest {
  email: string;
  otp: number;
  newPassword: string;
}

export interface resetPassResponse {
  message: string;
}
