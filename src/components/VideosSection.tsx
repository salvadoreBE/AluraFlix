import useVideos from "../hooks/useVideos"
import { TitleBadge } from "./TitleBadge"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { extractVideoId, truncateText } from "../utils";
import { EditIcon, TrahsIcon } from "../assets/Icons";
import ConfirmationModal from "./ConfirmationModal";
import EditForm from "./EditForm";

export default function VideosSection() {

  const { 
    videos, 
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
  } = useVideos('https://678225fbc51d092c3dce634a.mockapi.io/api/products/Videos');

  return (
    <>
        <section className="w-full h-full pt-24 md:p-0 bg-[#262626]">
          <div className="lg:px-20 md:px-11 px-8 pt-11">
            <div className="text-white w-full flex flex-col gap-y-24 overflow-x-auto">
              <div className="space-y-8">
                <TitleBadge slot="Front End" className="border-[#247ae5] text-[#247ae5]"/>
                <div className="flex pb-8 flex-nowrap justify-start scrollbar-front overflow-x-auto shrink-0 md:shrink gap-x-11 lg:gap-x-20">
                  {videos.filter((video) => video.category === "frontend")
                  .sort((a, b) => Number(b.id) - Number(a.id))
                  .map((video) => {
                    return (
                      <div key={video.id} className="flex w-fit gap-y-4 flex-col ">
                        <div className='w-[290px] xs:w-[340px] lg:w-[390px] overflow-hidden rounded-lg'>
                        <LiteYouTubeEmbed
                              id={extractVideoId(video.video)} 
                              title="Qué Significa Pensar Como Programador"
                              adNetwork={true}
                              playlist={false}
                              poster="hqdefault"
                              noCookie={true}
                          />
                        </div>
                        <div className="flex md:w-[335px] lg:w-[390px] flex-col gap-y-2">
                          <h3 className="text-lg font-bold text-[#247ae5]">{truncateText(video.title, 35)}</h3>
                          <p className="text-white text-sm">{truncateText(video.description, 110)}</p>
                        </div>
                        <div className="flex w-full justify-evenly font-bold">
                          <button className="flex gap-x-4 text-[#D62246] transition border-2 px-4 py-2 rounded-lg border-[#D62246] hover:bg-[#D62246] hover:text-white" onClick={() => setModalData(Number(video.id), video.isDefault)} >
                            <TrahsIcon className="size-6"/>
                            Borrar
                          </button>
                          <button className="flex gap-x-4 text-[#247ae5] transition border-2 px-4 py-2 rounded-lg border-[#247ae5] hover:bg-[#247ae5] hover:text-white" onClick={() => editClick(Number(video.id))}>
                            <EditIcon className="size-6"/>
                            Editar
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="space-y-8">
                <TitleBadge slot="Back End" className="border-[#00C86F] text-[#00C86F]"/>
                <div className="flex pb-8 flex-nowrap justify-start scrollbar-back overflow-x-auto shrink-0 md:shrink gap-x-11 lg:gap-x-20">
                  {videos.filter((video) => video.category === "backend")
                  .sort((a, b) => Number(b.id) - Number(a.id))
                  .map((video) => {
                    return (
                      <div key={video.id} className="flex w-fit gap-y-4 flex-col ">
                        <div className='w-[290px] xs:w-[340px] lg:w-[390px] overflow-hidden rounded-lg'>
                        <LiteYouTubeEmbed 
                              id={extractVideoId(video.video)} 
                              title="Qué Significa Pensar Como Programador"
                              adNetwork={true}
                              playlist={false}
                              poster="hqdefault"
                              noCookie={true}
                          />
                        </div>
                        <div className="flex md:w-[335px] lg:w-[390px] flex-col gap-y-2">
                          <h3 className="text-lg font-bold text-[#00C86F]">{truncateText(video.title, 35)}</h3>
                          <p className="text-white text-sm">{truncateText(video.description, 110)}</p>
                        </div>
                        <div className="flex w-full justify-evenly font-bold">
                          <button className="flex gap-x-4 text-[#D62246] transition border-2 px-4 py-2 rounded-lg border-[#D62246] hover:bg-[#D62246] hover:text-white" onClick={() => setModalData(Number(video.id), video.isDefault)}>
                            <TrahsIcon className="size-6"/>
                            Borrar
                          </button>
                          <button className="flex gap-x-4 text-[#00C86F] transition border-2 px-4 py-2 rounded-lg border-[#00C86F] hover:bg-[#00C86F] hover:text-white" onClick={() => editClick(Number(video.id))}>
                            <EditIcon className="size-6"/>
                            Editar
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="space-y-8">
                <TitleBadge slot="Innovación y Gestión" className="border-[#FFBA05] text-[#FFBA05]"/>
                <div className="flex pb-8 flex-nowrap justify-start scrollbar-inno overflow-x-auto shrink-0 md:shrink gap-x-11 lg:gap-x-20">
                  {videos.filter((video) => video.category === "innovation")
                  .sort((a, b) => Number(b.id) - Number(a.id))
                  .map((video) => {
                    return (
                      <div key={video.id} className="flex w-fit gap-y-4 flex-col">
                        <div className='w-[290px] xs:w-[340px] lg:w-[390px] overflow-hidden rounded-lg'>
                        <LiteYouTubeEmbed 
                              id={extractVideoId(video.video)} 
                              title="Qué Significa Pensar Como Programador"
                              adNetwork={true}
                              playlist={false}
                              poster="hqdefault"
                              noCookie={true}
                          />
                        </div>
                        <div className="flex md:w-[335px] lg:w-[390px] flex-col gap-y-2">
                          <h3 className="text-lg font-bold text-[#FFBA05]">{truncateText(video.title, 35)}</h3>
                          <p className="text-white text-sm">{truncateText(video.description, 110)}</p>
                        </div>
                        <div className="flex w-full justify-evenly font-bold">
                          <button className="flex gap-x-4 text-[#D62246] transition border-2 px-4 py-2 rounded-lg border-[#D62246] hover:bg-[#D62246] hover:text-white" onClick={() => setModalData(Number(video.id), video.isDefault)}>
                            <TrahsIcon className="size-6"/>
                            Borrar
                          </button>
                          <button className="flex gap-x-4 text-[#FFBA05] transition border-2 px-4 py-2 rounded-lg border-[#FFBA05] hover:bg-[#FFBA05] hover:text-white" onClick={() => editClick(Number(video.id))}>
                            <EditIcon className="size-6"/>
                            Editar
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          {confirmationModal && (
            <ConfirmationModal setConfirmationModal={setConfirmationModal} deleteVideo={deleteVideo} modalVideoId={modalVideoId} modalIsDefault={modalIsDefault}/>
          )}
          {formModal && (
            <EditForm setFormModal={setFormModal} videoSelected={videoSelected} editForm={editForm} setEditForm={setEditForm} editVideo={editVideo}/>
          )}
        </section>
    </>
  )
}
