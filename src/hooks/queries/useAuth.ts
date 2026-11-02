"use client";

import { useQuery, useMutation } from "@tanstack/react-query";

import {
  getLogin,
  getRegister,
  getGenerateOtp,
  getVerifyOtp,
  getForgotPassword,
  getResetPassword,
  getCurrentUser,
  authKeys,
} from "@/lib/api/auth/services/auth";

export const useCurrentUser = () =>
  useQuery({
    queryKey: authKeys.me,
    queryFn: getCurrentUser,
    retry: false,
  });

export const useLogin = () =>
  useMutation({
    mutationFn: getLogin,
  });

export const useRegister = () =>
  useMutation({
    mutationFn: getRegister,
  });

export const useGenerateOtp = () =>
  useMutation({
    mutationFn: getGenerateOtp,
  });

export const useVerifyOtp = () =>
  useMutation({
    mutationFn: getVerifyOtp,
  });

export const useForgotPassword = () =>
  useMutation({
    mutationFn: getForgotPassword,
  });

export const useResetPassword = () =>
  useMutation({
    mutationFn: getResetPassword,
  });
