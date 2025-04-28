import { NormalizeCss } from "@/styles/normalize_css";

import Header from "../components/header/header";
import Banner from "../components/banner";
import EducationSection from "../components/about";
import BreakImage from "../components/break_image";
import StructureAccordion from "@/components/structure";
import ContactSection from "@/components/contact";
import ScrollTop from "@/components/upper-button";
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