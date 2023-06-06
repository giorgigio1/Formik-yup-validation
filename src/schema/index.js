import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .matches(/\.com$/, "Email must end with .com")
    .required("Email is required"),
  age: yup.number().positive().integer().required("Age is required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger pasword" })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "username must be at least 3 characters")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(
      ["designer", "developer", "manager", "other"],
      "Please select a job type"
    )
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "please accept the terms of service"),
});
