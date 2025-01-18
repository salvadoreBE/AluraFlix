import { XIcon, CategoryIcon } from "../assets/Icons"
import type { VideoRes, VideoPut } from "../types"
import { useForm } from "react-hook-form";
import { formSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FormData } from "../schemas";
import { ChangeEvent, useEffect } from "react";
import { videoEditDefault } from "../hooks/useVideos";

type EditFormProps = {
    setFormModal: React.Dispatch<React.SetStateAction<boolean>>
    videoSelected: VideoRes | undefined
    editForm: VideoPut
    setEditForm: React.Dispatch<React.SetStateAction<VideoPut>>
    editVideo: (id: string, video: VideoPut) => Promise<void>
}

export default function EditForm({ setFormModal, videoSelected, editForm, setEditForm, editVideo }: EditFormProps) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: editForm
    })

    useEffect(() => {
        reset(editForm);
    }, [editForm, reset]);
    

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value, type } = e.target
        const filtredValue = type === "number" ? +value : value
        setEditForm({...editForm, [id]: filtredValue})
    }

    const onSubmit = (data: VideoPut) => {
        editVideo(String(videoSelected!.id), data)
    }

    return (
        <section className="backdrop-blur-sm flex fixed z-50 justify-center items-center w-full inset-0 h-full max-h-full">
            <form className="bg-[#03122F] rounded-lg w-5/6 md:w-2/3 lg:w-1/2 h-fit p-8 mx-auto" onSubmit={handleSubmit(() => onSubmit(editForm))}>
                <div className="flex w-full justify-between items-center mb-7">
                    <span className={`flex text-lg w-fit text-white items-center font-bold gap-x-3`}>
                            <CategoryIcon className='size-6'/>
                            Editar Vídeo
                    </span>
                    <button onClick={() => setFormModal(false)}>
                        <XIcon className="size-7 text-white"/>
                    </button>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    {errors.title ? <span className="text-red-500 text-sm">{errors.title.message}</span> 
                    : <label htmlFor="title" className="text-sm text-white font-bold">Título</label>}
                    <input type="text" id="title" {...register("title")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={`${editForm.title}`}
                    value={editForm.title}
                    onChange={handleChange}
                    />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    {errors.video ? <span className="text-red-500 text-sm">{errors.video.message}</span>
                    : <label htmlFor="video" className="text-sm text-white font-bold">Vídeo</label>}
                    <input type="text" id="video" {...register("video")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={`${editForm.video}`}
                    value={editForm.video}
                    onChange={handleChange}
                    />
                </div>
                <div className="w-full mb-5 group space-y-2">
                    <label htmlFor="video" className="text-sm text-white font-bold">Categoria</label>
                    <select id="category" {...register("category")} className="border border-gray-300 text-[#03122F] font-bold text-sm rounded-lg block w-full p-2.5 bg-gray-400 outline-none appearance-none"
                    value={editForm.category}
                    onChange={handleChange}
                    >
                        <option value="" disabled>Selecciona la categoria</option>
                        <option value="frontend">Front End</option>
                        <option value="backend">Back End</option>
                        <option value="innovation">Inovación y Gestión</option>
                    </select>
                </div>
                <div className="w-full mb-5 group">
                    {errors.description ? <span className="text-red-500 text-sm">{errors.description.message}</span>
                    : <label htmlFor="description" className="text-sm text-white font-bold">Descripción</label>}
                    <textarea id="description" {...register("description")} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 resize-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={`${editForm.description}`}
                    value={editForm.description}
                    onChange={handleChange}
                    />
                </div>
                <div className="flex w-full gap-x-5 items-center">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirmar</button>
                    <button type="reset" className="text-white border-blue-700 border-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    onClick={() => setEditForm(videoEditDefault)}>Limpiar</button>
                </div>
            </form>
        </section>
    )
}
