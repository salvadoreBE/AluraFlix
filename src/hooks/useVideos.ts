import type { VideoRes, VideoPut } from "../types";
import { useState, useEffect } from "react";
import { toast } from 'sonner'


export const videoEditDefault = {
    title: "",
    category: "frontend",
    video: "",
    description: "",
    isDefault: true
} as const

export default function useVideos(baseUrl: string) {
    const [videos, setVideos] = useState<VideoRes[]>([]);
    const [confirmationModal, setConfirmationModal] = useState(false);
    const [formModal, setFormModal] = useState(false);
    const [modalVideoId, setModalVideoId] = useState<number>(Number);
    const [modalIsDefault, setModalIsDefault] = useState(false);
    const [videoSelected, setVideoSelected] = useState<VideoRes | undefined>(undefined);
    const [editForm, setEditForm] = useState<VideoPut>(videoEditDefault);

    const getVideos = async () => {
        try {
            const response = await fetch(baseUrl)

            if (!response.ok) {
                throw new Error(`Ha ocurrido un error al obtener los videos: ${response.status}`);
            }

            const videos = await response.json();
            setVideos(videos);
        } catch (error) {
            console.log(error);
        }
    }

    const getVideo = async (id: string) => {
        try {
            const response = await fetch(`${baseUrl}/${id}`);

            if (!response.ok) {
                throw new Error(`Ha ocurrido un error al obtener el video: ${response.status}`);
            }

            const video = await response.json();
            setEditForm(video);
            setVideoSelected(video);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteVideo = async (id: string, isDefault: boolean) => {

        setConfirmationModal(false);

        if (isDefault) {
            setVideos(videos.filter((video) => video.id !== id));
            toast.error('No se puede eliminar este video de la API porque es un video predeterminado. Por favor, intenta con un video creado por el usuario.');
            return;
        }

        try {
            const response = await fetch(`${baseUrl}/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`Ha ocurrido un error al borrar el video: ${response.status}`);
            }

            setVideos(videos.filter((video) => video.id !== id));
            getVideos();
            toast.success('Video eliminado correctamente');
        } catch (error) {
            console.log(error);
        }
    }

    const editVideo = async (id: string, video: VideoPut) => {
        try {
            const response = await fetch(`${baseUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(video)
            });

            if (!response.ok) {
                toast.error('Ha ocurrido un error al editar el video');
                throw new Error(`Ha ocurrido un error al editar el video: ${response.status}`);
            }

            setFormModal(false);
            getVideos();
            toast.success('Video editado correctamente');
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getVideos();
    }, []);

    const setModalData = (id: number, isDefault: boolean) => {
        setModalVideoId(id);
        setModalIsDefault(isDefault);
        setConfirmationModal(true)
    }

    const editClick = (id: number) => {
        getVideo(String(id));
        setModalVideoId(id);
        setFormModal(true);
    }

    return {
        videos,
        getVideos,
        deleteVideo,
        confirmationModal,
        modalVideoId,
        modalIsDefault,
        setModalData,
        setConfirmationModal,
        formModal,
        setFormModal,
        videoSelected,
        editClick,
        editForm,
        setEditForm,
        editVideo
    }
}
