import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import VideosSection from "../components/VideosSection";
import { Toaster } from 'sonner';

export default function HomeView() {
  return (
    <>
      <Header />
      <main className="w-full h-fit bg-[#262626]">
        <Toaster position="top-left"/>
        <HomeBanner />
        <VideosSection />
        <Footer className="mt-24"/>
      </main>
    </>
  )
}
