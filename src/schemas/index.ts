import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "E-posta gereklidir"
    }),
    password: z.string({
        message: "Şifre gereklidir"
    }).min(6, {
        message: "Şifre en az 6 karakter olmalıdır"
    }),
});
