import Faq from "../components/Faq";
import Guardians from "../containers/Guardians";
import Header from "../components/Header";
import Rules from "../components/Rules";

export default function Home() {
  return (
    <>
      <Header />
      <Guardians />
      <Rules />
      <Faq />
    </>
  )
}
