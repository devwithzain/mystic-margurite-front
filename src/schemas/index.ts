import * as z from "zod";

export const loginFormSchema = z.object({
   email: z.string().email({
      message: "Email is required",
   }),
   password: z.string().min(1, {
      message: "Password is required",
   }),
});

export const registerFormSchema = z.object({
   name: z.string().min(1, {
      message: "Name is required",
   }),
   email: z.string().email({
      message: "Email is required",
   }),
   password: z.string().min(8, {
      message: "Minimum 8 characters required",
   }),
   confirmPassword: z.string().min(8, {
      message: "Minimum 8 characters required",
   }),
}).refine((data) => data.password === data.confirmPassword, {
   message: "Passwords don't match",
   path: ["confirmPassword"],
});

export const profileFormSchema = z.object({
   name: z.string().min(1, {
      message: "Name is required",
   }),
   email: z.string().email({
      message: "Email is required",
   }),
});

export const contactFormSchema = z.object({
   name: z.string().min(1),
   email: z.string().email(),
   specialMessage: z.string(),
});

export const bookNowFormSchema = z.object({
   name: z.string().min(1),
   lastName: z.string().min(1),
   email: z.string().email({
      message: "Email is required",
   }),
   services: z.string().min(1),
   // healingTopics: z.string().min(1),
   preferredTime: z.string().min(1),
   cityAndState: z.string().min(1),
   specialMessage: z.string().min(1),
});

export type TloginFormData = z.infer<typeof loginFormSchema>;
export type TregisterFormData = z.infer<typeof registerFormSchema>;
export type TcontactFormData = z.infer<typeof contactFormSchema>;
export type TbookNowFormData = z.infer<typeof bookNowFormSchema>;
