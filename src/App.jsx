import { useEffect, useState } from "react";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import DoctorsSection from "./components/sections/DoctorsSection";
import FacilitiesSection from "./components/sections/FacilitiesSection";
import PatientStorySection from "./components/sections/PatientStorySection";
import AppointmentSection from "./components/sections/AppointmentSection";
import DoctorsPage from "./components/pages/DoctorsPage";
import DoctorDetailPage from "./components/pages/DoctorDetailPage";
import CarePage from "./components/pages/CarePage";
import FacilitiesPage from "./components/pages/FacilitiesPage";
import AboutPage from "./components/pages/AboutPage";
import AppointmentsPage from "./components/pages/AppointmentsPage";
import { navigate, useRouter } from "./hooks/useRouter";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const isHindi = language === "hi";
  const { path } = useRouter();
  const t = (english, hindi) => isHindi ? hindi : english;
  useEffect(() => { document.documentElement.lang = isHindi ? "hi" : "en"; }, [isHindi]);
  const goAppointments = () => navigate("/appointments");
  const doctorSlug = path.startsWith("/doctors/") ? path.slice("/doctors/".length) : "";
  const page = doctorSlug ? <DoctorDetailPage t={t} slug={doctorSlug} /> :
    path === "/doctors" ? <DoctorsPage t={t} isHindi={isHindi} /> :
    path === "/care" ? <CarePage t={t} isHindi={isHindi} /> :
    path === "/facilities" ? <FacilitiesPage t={t} isHindi={isHindi} /> :
    path === "/about" ? <AboutPage t={t} /> :
    path === "/appointments" ? <AppointmentsPage t={t} /> :
    <><HeroSection t={t} onBook={goAppointments} /><AboutSection t={t} /><ServicesSection t={t} isHindi={isHindi} /><DoctorsSection t={t} /><FacilitiesSection t={t} isHindi={isHindi} /><PatientStorySection t={t} /><AppointmentSection t={t} onBook={goAppointments} /></>;

  return <div className="app-shell">
    <TopBar t={t} />
    <Navbar t={t} isHindi={isHindi} language={language} setLanguage={setLanguage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} onBook={goAppointments} />
    <main>{page}</main>
    <Footer t={t} />
  </div>;
}
