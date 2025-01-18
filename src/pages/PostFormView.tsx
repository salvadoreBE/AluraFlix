import { CategoryIcon } from "../assets/Icons"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useFormPost from "../hooks/useFormPost"
import { Toaster } from 'sonner';

export default function PostForm() {

    const { postFormState, handleChange, register, errors, handleSubmit, resetForm, onSubmit } = useFormPost()

    return (
        <>
            <Header/>
            <main className="w-full h-dvh bg-[#262626]">
            <Toaster position="top-left"/>
            <section className="bg-[#262626] flex justify-center lg:items-center w-full h-full">
                <form className="bg-[#262626] rounded-lg md:w-3/4 lg:w-1/2 h-fit p-8 mt-24 lg:mt-10 mx-auto" 
                    onSubmit={handleSubmit(() => onSubmit(postFormState))}>
                    <div className="flex w-full gap-y-3 flex-col justify-between items-center mb-7">
                        <span className={`flex text-3xl w-full justify-center text-white items-center font-bold gap-x-3`}>
                            <CategoryIcon className='size-8'/>
                            Nuevo Vídeo
                        </span>
                        <span className="text-white text-center">Complete el formulario para crear una nueva tarjeta de video</span>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" id="title" className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white focus:outline-none focus:ring-0 peer
                        ${errors.title ? "border-red-500 focus:border-red-400" : "border-gray-600 focus:border-blue-500"}`} 
                            placeholder=" " 
                            {...register("title")}
                            value={postFormState.title} 
                            onChange={handleChange}
                        />
                        <label className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 
                        ${errors.title ? "text-red-500 peer-focus:text-red-500" : "text-gray-400 peer-focus:text-blue-500"}`}>
                            {errors.title ? errors.title.message : "Título"}
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" id="video" className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white focus:outline-none focus:ring-0 peer
                        ${errors.video ? "border-red-500 focus:border-red-400" : "border-gray-600 focus:border-blue-500"}`} 
                            placeholder=" " 
                            {...register("video")}
                            value={postFormState.video} 
                            onChange={handleChange}
                        />
                        <label className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 
                        ${errors.video ? "text-red-500 peer-focus:text-red-500" : "text-gray-400 peer-focus:text-blue-500"}`}>
                            {errors.video ? errors.video.message : "Vídeo"}
                        </label>
                    </div>
                    <div className="w-full mb-5 group space-y-2">
                        <label htmlFor="category" className="text-sm text-white font-bold">Categoria</label>
                        <select id="category" className="border-gray-300 font-bold text-sm rounded-lg block w-full p-2.5 bg-gray-300 text-blue-600 outline-none appearance-none"
                            {...register("category")}
                            value={postFormState.category}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Selecciona la categoria</option>
                            <option value="frontend">Front End</option>
                            <option value="backend">Back End</option>
                            <option value="innovation">Inovación y Gestión</option>
                        </select>
                    </div>
                    <div className="w-full mb-5 group">
                        <label htmlFor="description" className={`text-sm font-bold 
                        ${errors.description ? "text-red-500" : "text-white"}`}>
                            {errors.description ? errors.description.message : "Descripción"}
                            </label>
                        <textarea id="description" className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white focus:outline-none focus:ring-0 peer resize-none
                        ${errors.description ? "border-red-500 focus:border-red-400" : "border-gray-600 focus:border-blue-500"}`}
                            {...register("description")}
                            value={postFormState.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex w-full gap-x-5 items-center">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button>
                        <button type="reset" className="text-white border-blue-700 border-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={resetForm}
                        >Limpiar</button>
                    </div>
                </form>
            </section>
            <Footer />
            </main>
        </>
    )
}
