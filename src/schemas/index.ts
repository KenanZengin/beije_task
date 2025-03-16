import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string({
        message: "Password is required"
    }).min(6,{
        message: "Minumum 6 characters required"
    }),
});

