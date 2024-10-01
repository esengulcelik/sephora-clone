import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header"
import Banner from "../components/banner"
import Card from "../components/card"
import Footer from "../components/Footer"
import Text from "../components/text"
import New from "../components/yeniler"
import Kesfet from "../components/kesfet"
import Cardtwo from "../components/cardtwo"
import Gunes from "../components/gunes"
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Card />
      <New />
      <Cardtwo />
      <Gunes />
      <Kesfet />
      <Text />
      <Footer />
    </>
  );
}
