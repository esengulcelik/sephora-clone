import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "../components/loading";
import axios from "axios";
const Urun = ({ id }) => {
  const [products, setProducts] = useState({});
  const [control, setControl] = useState(false);
  const [loading, setLoading] = useState(true);
  const uzunluk = 100;
  const uzunMetin =
    "• Herkese yakışan ikonik Black Honey rengini hem dudaklara hem de yanaklara taşıyan 2si bir arada özel formül. • Safran çiçeği yağı, jojoba yağı, zeytinyağı, ayçiçeği tohumu yağı ve hint yağı gibi besleyici yağlardan oluşan içeriği sayesinde dudakları renklendirirken nemlendirmeye de yardımcı olur. • Yumuşak ve köşeli aplikatörü dudaklarda mükemmel şekilde kayar. • Yağ formülü sayesinde kolayca uygulanır: aplikatörü ile yanaklarına sürüp parmak uçlarınla kolayca dağıtabilirsin.• Yanaklara doğal ve nemli bir görünüm kazandırırken kendine has rengiyle makyaja ikonik bir ışıltı kazandırır.";
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        "https://566e-85-105-192-96.ngrok-free.app/api/product?productId=" + id
      );
      console.log(data);
      if (data.error) {
        window.location.href = "/error";
      } else {
        setProducts(data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getProduct();
  }, [id]);

  const today = new Date();
  const getDate15DaysAgo = () => {
    const pastDate = new Date(today);
    today.setDate(pastDate.getDate() - 15);
    return today;
  };

  const devamıOku = () => {
    setControl(!control);
  };
  const paraBirimi = Object.keys(products?.urun_fiyat_listesi || {})[0] || " ";

  const metin =
    uzunMetin.length > uzunluk
      ? uzunMetin.substring(0, uzunluk) + "..."
      : uzunMetin;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container mx-auto flex justify-center mt-5 max-w-7xl p-8">
        <div className="basis-1/2 w-full">
          <Image
            src={products?.urun_diger_bilgileri?.[0]?.urunresim?.[0]}
            width={450}
            height={450}
          />
        </div>
        <div className="flex flex-col basis-1/2 w-full gap-14">
          <div className="flex flex-col gap-5">
            {products.tarih < getDate15DaysAgo() ||
              (products.tarih > today && (
                <p className="bg-black text-white w-1/6 p-1 rounded-md flex items-center justify-center">
                  Yeni
                </p>
              ))}
            <p className="bg-green-900 whitespace-nowrap text-white w-1/4 p-2 rounded-md flex items-center justify-center">
              {products.teslimzamani === 0
                ? "Anında Teslimat"
                : products.teslimzamani > 0 && products.teslimzamani <= 6
                ? "Hızlı Teslimat"
                : "Standart Teslimat"}
            </p>

            <p className="text-xl font-semibold underline">
              {products?.modelkodu}{" "}
            </p>
            <h2 className="font-bold text-2xl whitespace-nowrap">
              {products?.urun_diger_bilgileri?.[0]?.urunadi}
            </h2>
            <p className="text-xl">
              {" "}
              {products?.urun_diger_bilgileri?.[0]?.metaaciklama}
            </p>
            <div>
              <p
                className={`h-20 overflow-y-scroll scrollbar-thin ${
                  control ? "max-h-64" : "max-h-0"
                }`}
              >
                {control ? uzunMetin : metin}
              </p>
              <button
                onClick={devamıOku}
                className="underline flex justify-start"
              >
                {control ? "Daha Az Göster" : "Devamını Oku"}
              </button>
            </div>
            <p className="font-bold text-xl">
              {products?.urun_fiyat_listesi?.TRY.toFixed(2)} {paraBirimi}
            </p>
          </div>
          {products.stok === 0 || products.aktif === 0 ? (
            <div className="flex justify-end font-bold" role="alert">
              Stokta Yok
            </div>
          ) : (
            <div className="flex justify-end">
              <button className="bg-black border-2 w-1/2 justify-end transition-bg rounded-lg">
                <p className="py-4 font-extrabold text-white text-sm">
                  Sepete Ekle
                </p>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Urun;
