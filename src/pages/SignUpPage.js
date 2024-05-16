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
  fullname: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character")
    .required("This field is required"),
});
const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  console.log("🚀 ~ SignUpPage ~ errors:", errors);

  const handleSignUp = (values) => {
    console.log("🚀 ~ handleSignUp ~ values:", values);
  };
  const { value: acceptTerm, handleToggleValue: handleOnClickCheckBox } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleToggleShowPassword } =
    useToggleValue();
  return (
    <LayoutAuthentication>
      <div>
        <h1 className="mb-3 text-sm font-semibold text-center lg:text-xl text-text1 dark:text-white">
          Sign Up
        </h1>
        <p className="text-sm text-center lg:text-md text-text3 mb-6 lg:mb-7">
          Already have an account?
          <Link
            to={"/sign-in"}
            className="pl-1 font-bold underline cursor-pointer text-primary"
          >
            Sign in
          </Link>
        </p>
        <button className="w-full border border-strockColor dark:border-darkStrock flex items-center justify-center p-[13px] rounded-lg mb-4 lg:mb-8">
          <img srcSet="/images/google.png 2x" alt="google" />
          <p className="ml-2 text-sm font-semibold text-text2 dark:text-pureWhite lg:font-bold">
            Sign up with google
          </p>
        </button>
        <Link
          to={"/sign-up"}
          className="block text-center font-sm text-sm text-text2 dark:text-pureWhite"
        >
          Or sign up with email
        </Link>

        <form className="mt-5" onSubmit={handleSubmit(handleSignUp)}>
          <FormField>
            <Label htmlFor="fullname">Full Name *</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Kien Duong Trung"
              control={control}
              error={errors.fullname?.message}
            ></Input>
          </FormField>

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
              placeholder="Create a password"
              error={errors.password?.message}
              control={control}
            >
              <InputEyeToggle
                open={showPassword}
                onClick={handleToggleShowPassword}
              ></InputEyeToggle>
            </Input>
          </FormField>
          <div className="flex flex-row gap-x-5">
            <Checkbox
              name="term"
              checked={acceptTerm}
              onClick={handleOnClickCheckBox}
            >
              I agree to the Tearms of Use and have read and understand the
              Privacy policy.
            </Checkbox>
          </div>
          <Button type="submit" className="mt-6">
            Create a account
          </Button>
        </form>
      </div>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
