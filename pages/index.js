
import Faq from "../components/Faq";
import Guardians from "../containers/Guardians";
import Header from "../components/Header";
import HowToPlay from "../components/HowToPlay";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Guardians />
      <HowToPlay />
      <Faq />
    </>
  )
}
