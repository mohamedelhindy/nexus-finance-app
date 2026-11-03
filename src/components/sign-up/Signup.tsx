"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { getRegister } from "@/lib/api/auth/services/auth";
import { InterestSignup } from "./InterestSignup";
import PersonalSignup from "./PersonalSignup";
import ReviewSignup from "./ReviewSignup";
import { SecuritySignup } from "./SecuritySignup";
import { signupSchema, type SignupFormData } from "./Signup.schema";
import SignupNavigation from "./shared/signupNavigation";
import SignupStepper from "./shared/SignupStepper";

const stepFields: Array<Array<keyof SignupFormData>> = [
  ["firstName", "lastName", "dateOfBirth"],
  ["email", "password", "confirmPassword"],
  ["interests", "country", "timezone"],
  ["termsAccepted", "privacyAccepted"],
];

const Signup = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [submitError, setSubmitError] = useState("");

  const methods = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      password: "",
      confirmPassword: "",
      interests: ["Technology", "Financial Services", "Energy"],
      country: "Egypt",
      timezone: "Africa/Cairo (GMT+02:00)",
      termsAccepted: false,
      privacyAccepted: false,
    },
  });

  const { handleSubmit, trigger, formState } = methods;

  const goNext = async () => {
    const valid = await trigger(stepFields[currentStep]);
    if (valid) {
      setSubmitError("");
      setCurrentStep((step) => Math.min(step + 1, 3));
    }
  };

  const goBack = () => {
    setSubmitError("");
    setCurrentStep((step) => Math.max(step - 1, 0));
  };

  const onSubmit = async (data: SignupFormData) => {
    setSubmitError("");

    try {
      await getRegister(data);
      router.push("/verify-email");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not create your account. Please try again.",
      );
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex min-h-[calc(100vh-65px)] flex-col bg-surface"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="mx-auto w-full max-w-[830px] flex-1 px-0 pb-10 pt-7 max-sm:px-5 max-sm:pt-7">
          <SignupStepper currentStep={currentStep} />

          {currentStep === 0 && <PersonalSignup />}
          {currentStep === 1 && <SecuritySignup />}
          {currentStep === 2 && <InterestSignup />}
          {currentStep === 3 && (
            <ReviewSignup onEdit={(step) => setCurrentStep(step)} />
          )}

          {submitError && (
            <p className="mt-5 text-sm text-destructive" role="alert">
              {submitError}
            </p>
          )}

        </div>
        <SignupNavigation
          currentStep={currentStep}
          isSubmitting={formState.isSubmitting}
          onBack={goBack}
          onNext={goNext}
        />
      </form>
    </FormProvider>
  );
};

export default Signup;
