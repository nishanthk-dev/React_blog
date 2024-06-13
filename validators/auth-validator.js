const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be of atleast 3 charecters" })
    .max(150, { message: "Name is too long please enter a valid name" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "Email must be of atleast 3 charecters" })
    .max(255, { message: "Email must not be more than 255 charecters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be of atleast 7 charecters" })
    .max(1024, { message: "Password cannot be more than 255 charecters" }),
});

module.exports = signupSchema;
