import Image from "next/image";
import Link from "next/link";
import Hata from "../../components/hata"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Error() {
    return (
        <>
            <div>
                <Header />
                <Hata />
                <Footer />
            </div>
        </>
    );
}

