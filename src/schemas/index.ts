import { z } from "zod";

export const formSchema = z.object({
    title: z.string().min(1, "El titulo es obligatorio").max(50, "El titulo no puede tener más de 50 caracteres"),
    category: z.enum(["frontend", "backend", "innovation"]),
    video: z.string().url("El video debe ser una url valida").min(1, "El video es obligatorio"),
    description: z.string().min(1, "La descripción es obligatoria"),
    isDefault: z.boolean()
})

export const formPostSchema = z.object({
    title: z.string().min(1, "El titulo es obligatorio").max(50, "El titulo no puede tener más de 50 caracteres"),
    category: z.enum(["frontend", "backend", "innovation"]),
    video: z.string().url("El video debe ser una url valida").min(1, "El video es obligatorio"),
    description: z.string().min(1, "La descripción es obligatoria"),
    isDefault: z.boolean()
})

export type FormData = z.infer<typeof formSchema>;
export type PostFormData = z.infer<typeof formPostSchema>;