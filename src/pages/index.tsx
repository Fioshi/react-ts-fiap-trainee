import { NormalizeCss } from "@/styles/normalize_css";

import Header from "../components/landing-page/header/header";
import Banner from "../components/landing-page/banner";
import EducationSection from "../components/landing-page/about";
import BreakImage from "../components/landing-page/break_image";
import StructureAccordion from "@/components/landing-page/structure";
import ContactSection from "@/components/landing-page/contact";
import ScrollTop from "@/components/landing-page/upper-button";
import { GlobalStyles } from "@/styles/global_styles";


export default function Home() {

  return (
    <>
    <NormalizeCss />
    <GlobalStyles />
    <Header />
    <Banner />
    <EducationSection />
    <BreakImage />
    <StructureAccordion />
    <ContactSection />
    <ScrollTop />
    </>
  );
}