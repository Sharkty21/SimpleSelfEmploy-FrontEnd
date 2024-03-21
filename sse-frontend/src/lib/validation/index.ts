import * as z from "zod";

// ============================================================
// JOB
// ============================================================
export const JobValidation = z.object({
  name: z
    .string()
    .min(1, { message: "Name must be at least 1 character long" })
    .max(100, {
      message: "Name must be less than or equal to 100 characters long",
    }),
  description: z
    .string()
    .max(1000, {
      message: "Description must be less than or equal to 1000 characters long",
    }),
  startDate: z
    .coerce.date(),
  customerName: z
    .string()
    .max(100, {
      message:
        "Customer Name must be less than or equal to 100 characters long",
    }),
});

export const SignUpValidation = z.object({
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters long" })
    .max(50, {
      message: "Username must be less than or equal to 50 characters long",
    })
    .refine((username) => /^[a-zA-Z0-9]+$/.test(username), {
      message: "Username can only contain letters and numbers",
    }),
  firstName: z
    .string()
    .min(1, { message: "First Name must be at least 1 character long" })
    .max(50, {
      message: "First Name must be less than or equal to 50 characters long",
    }),
  lastName: z
    .string()
    .min(1, { message: "Last Name must be at least 1 characters long" })
    .max(50, {
      message: "Last Name must be less than or equal to 50 characters long",
    }),
  email: z
    .string()
    .email()
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(100, {
      message: "Email must be less than or equal to 100 characters long",
    }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine((password) => /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/.test(password), {
      message: "Password contains invalid characters",
    })
    .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
      message: "Password must contain at least one special character",
    })
    .refine((password) => /\d/.test(password), {
      message: "Password must contain at least one number",
    })
    .refine((password) => password.length <= 64, {
      message: "Password must be at most 64 characters long",
    }),
});

export const SignInValidation = z.object({
  username: z
    .string()
    .max(50, {
      message: "Username must be less than or equal to 50 characters long",
    })
    .refine((username) => /^[a-zA-Z0-9]+$/.test(username), {
      message: "Username can only contain letters and numbers",
    }),
  password: z
    .string()
    .refine((password) => /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/.test(password), {
      message: "Password contains invalid characters",
    })
    .refine((password) => password.length <= 64, {
      message: "Password must be at most 64 characters long",
    }),
});
