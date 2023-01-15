import Faq from "../components/Faq";
import Guardians from "../containers/Guardians";
import Header from "../components/Header";
import HowToPlay from "../components/HowToPlay";
import Rules from "../components/Rules";

export default function Home() {
  return (
    <>
      <Header />
      <Rules />
      <Guardians />
      <HowToPlay />
      <Faq />
    </>
  )
}
