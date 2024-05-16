import { Checkbox } from "../components/checkbox";
import { Input } from "../components/input";
import { InputEyeToggle } from "../components/icon";
import { Label } from "../components/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/button/Button";
import FormField from "../components/common/FormField";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import React from "react";
import useToggleValue from "../hooks/useToggleValue";

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character")
    .required("This field is required"),
});
const SignInPage = () => {
  const { value: acceptTerm, handleToggleValue: handleOnClickCheckBox } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleToggleShowPassword } =
    useToggleValue();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  console.log("🚀 ~ SignUpPage ~ errors:", errors);

  const handleSignIn = (values) => {
    console.log("🚀 ~ handleSignIn ~ values:", values);
  };

  return (
    <LayoutAuthentication>
      <div>
        <h1 className="mb-3 text-sm font-semibold text-center lg:text-xl dark:text-pureWhite text-text1">
          Welcome Back!
        </h1>
        <p className="text-sm text-center lg:text-md text-text3 mb-6 lg:mb-7">
          Don't have an account?
          <Link
            to={"/sign-up"}
            className="pl-1 font-bold underline cursor-pointer text-primary"
          >
            Sign up
          </Link>
        </p>

        <button className="w-full border border-strockColor dark:border-darkStrock flex items-center justify-center p-[13px] rounded-lg mb-4 lg:mb-8">
          <img srcSet="/images/google.png 2x" alt="google" />
          <p className="ml-2 text-sm font-semibold text-text2 dark:text-pureWhite lg:font-bold">
            Sign in with google
          </p>
        </button>

        <form className="mt-5" onSubmit={handleSubmit(handleSignIn)}>
          <FormField>
            <Label htmlFor="email">Email *</Label>
            <Input
              type="email"
              name="email"
              placeholder="kienduongtrung@gmail.com"
              error={errors.email?.message}
              control={control}
            ></Input>
          </FormField>

          <FormField>
            <Label htmlFor="password">Password *</Label>
            <Input
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Enter Password"
              error={errors.password?.message}
              control={control}
            >
              <InputEyeToggle
                open={showPassword}
                onClick={handleToggleShowPassword}
              ></InputEyeToggle>
            </Input>
          </FormField>
          <FormField>
            <span className="font-sm text-primary text-right">
              Forgot password
            </span>
          </FormField>

          <Button type="submit" className="mt-6">
            Sign in
          </Button>
        </form>
      </div>
    </LayoutAuthentication>
  );
};

export default SignInPage;
