import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const image = [
  {
    image: "/images/ilk.avif",
    name: "Tıkla, Mağazadan Al",
    text: "Seçili mağazalarda",
  },
  {
    image: "/images/iki.avif",
    name: "Ücretsiz Kargo",
    text: "Toplam 1500TL veya Sephora Collection 1000TL üzeri alışverişlere ücretsiz kargo",
  },
  {
    image: "/images/üc.png",
    name: "Kolay Iade",
    text: "14 gün içinde ücretsiz iade",
  },
  {
    image: "/images/dort.png",
    name: "Güvenli Ödeme",
  },
  {
    image: "/images/bes.webp",
    name: "Müsteri Hizmetleri",
    text: "0 850 288 35 35 info@sephora.com.tr",
  },
];
const hakkimizda = [
  "Hakkımızda",
  "Mağazalar",
  "Profil Bilgilerim",
  "Siparişlerim",
  "Sephora Kart",
  "Kampanyalar",
  "Sephora Blog",
  "Sıkça Sorulan Sorular",
  "Bize Ulaşın",
];
const sözlesme = [
  "Üyelik Sözleşmesi",
  "Genel Şartlar ve Koşullar",
  "Çerez Aydınlatma Metni",
  "Müşteri Aydınlatma Metni",
  "Mesafeli Satış Sözleşmesi",
  "İade Prosedürü",
  "Gizlilik ve Güvenlik",
  "KVK Politikası",
  "Çerez Ayarları",
  "İletişim",
  "Yorumların yayınlanma koşulları",
];

const Footer = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center mt-5 max-w-7xl">
        <div className="flex bg-gri p-10 w-full gap-5">
          {image.map((images, index) => (
            <div className="w-1/5 flex justify-center items-center" key={index}>
              <Link href="/">
                <div className="flex flex-col items-center">
                  <Image src={images.image} width={100} height={100} />
                  <div className="flex flex-col items-center mt-2">
                    <p className="font-bold text-center">{images.name} </p>
                    <p className="text-center">{images.text} </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full gap-10 bg-black font-semibold p-14 text-white items-center">
          <div className="text-sm w-full flex justify-between items-center">
            <div>
              {hakkimizda.map((x, index) => (
                <div key={index}>
                  <p>{x}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              {sözlesme.map((y, i) => (
                <div key={i}>
                  <p>{y}</p>
                </div>
              ))}
            </div>

            <div>
              <Image src="/images/indir.jfif" width={90} height={90} />
            </div>
          </div>
          <div className="border-b w-full border-gray-300"></div>
          <div className="flex gap-3 text-xl justify-start">
            <div>
              <FaFacebookSquare />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
