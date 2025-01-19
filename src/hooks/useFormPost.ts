import type { VideoPut } from "../types";
import { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { formPostSchema, PostFormData } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner'

const postFormStateDefault = {
    title: "",
    category: "frontend",
    video: "",
    description: "",
    isDefault: false
} as const

export default function useFormPost() {
    const [postFormState, setPostFormState] = useState<VideoPut>(postFormStateDefault);
    const Navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value, type } = e.target
        const filtredValue = type === "number" ? +value : value
        setPostFormState({...postFormState, [id]: filtredValue})
        console.log(postFormState)
    }

    const createPost = async (data: PostFormData) => {
        try {
            const response = await fetch("https://678225fbc51d092c3dce634a.mockapi.io/api/products/Videos/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                toast.error('Ha ocurrido un error al crear el video');
                throw new Error(`Ha ocurrido un error al crear el video: ${response.status}`);
            }

            toast.success('Video creado correctamente');
            
            setTimeout(() => {
                Navigate('/');
            }, 2000); 
        } catch (error) {
            console.log(error);
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm<PostFormData>({
        resolver: zodResolver(formPostSchema),
        defaultValues: postFormState
    })

    const resetForm = () => {
        setPostFormState(postFormStateDefault)
    }

    const onSubmit = (data: PostFormData) => {
        createPost(data)
    }

    return {
        postFormState,
        handleChange,
        register,
        handleSubmit,
        errors,
        resetForm,
        onSubmit
    }
}