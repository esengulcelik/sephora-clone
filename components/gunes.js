"use client";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import Image from "next/image";
const itemsPerPage = 4;
const Makyaj = [
  {
    id: 1,
    image: "/images/guneskremi.avif",
    marka: "GİVENCHY",
    model: "Prisme Libre",
    urun: "Matlaştırıcı ,Düzleştirici",
    fiyat: "2117 TL",
  },
  {
    id: 2,
    image: "/images/krem.avif",
    marka: "GİVENCHY",
    model: "Prisme Libre",
    urun: "Matlaştırıcı ,Düzleştirici",
    fiyat: "2117 TL",
  },
  {
    id: 3,
    image: "/images/balm.avif",
    marka: "GİVENCHY",
    model: "Prisme Libre",
    urun: "Matlaştırıcı ,Düzleştirici",
    fiyat: "2117 TL",
  },
  {
    id: 4,
    image: "/images/krem.avif",
    marka: "GİVENCHY",
    model: "Prisme Libre",
    urun: "Matlaştırıcı ,Düzleştirici",
    fiyat: "2117 TL",
  },
  {
    id: 5,
    image: "/images/gloss.webp",
    marka: "GİVENCHY",
    model: "Prisme Libre",
    urun: "Matlaştırıcı ,Düzleştirici",
    fiyat: "2117 TL",
  },
  {
    id: 6,
    image: "/images/ruj.avif",
    marka: "GİVENCHY",
    model: "Prisme Libre",
    urun: "Matlaştırıcı ,Düzleştirici",
    fiyat: "2117 TL",
  },
];

const Gunes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= Makyaj.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Makyaj.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="container mx-auto flex justify-center mt-5 max-w-7xl">
        <div className="relative py-4 px-4 bg-white h-auto">
          <div className="flex justify-between font-semibold mb-16">
            <div>
              <p className="text-3xl font-extrabold text-black">
                <span className="text-blue-300">GÜNEŞ BAKIM</span> ÖNE ÇIKANLAR
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-black underline underline-offset-1 font-semibold">
                Tüm Ürünleri İncele
              </p>
            </div>
          </div>
          <div className="flex items-center">
            {currentIndex > 0 && (
              <button
                className="absolute -left-4 border-2 border-gray-800 shadow-lg shadow-black-500/50 bg-gray-800 hover:bg-white rounded-full p-1 z-10"
                onClick={prevSlide}
              >
                <FiChevronLeft className="text-white hover:text-black text-3xl" />
              </button>
            )}
            <div className="flex gap-20 p-4">
              {Makyaj.slice(currentIndex, currentIndex + itemsPerPage).map(
                (name) => (
                  <div key={name.id}>
                    <p className="bg-orange-600 text-white w-2/5 p-1 flex items-center justify-center text-xs whitespace-nowrap">
                      2. Ürüne -%40
                    </p>
                    <Image src={name.image} width={250} height={250} />
                    <div className="text-center">
                      <p className="font-bold">{name.marka}</p>
                      <p className="font-bold">{name.model}</p>
                      <p>{name.urun}</p>
                      <p className="font-bold">{name.fiyat}</p>
                    </div>
                  </div>
                )
              )}
            </div>
            {currentIndex + itemsPerPage < Makyaj.length && (
              <button
                className="absolute -right-3 border-gray-800 border-2 shadow-lg shadow-black-500/50 bg-gray-800 hover:bg-white rounded-full p-1 z-10"
                onClick={nextSlide}
              >
                <FiChevronRight className="text-white hover:text-black text-3xl" />
              </button>
            )}
          </div>

          <div className="relative w-full h-1 bg-gray-300">
            <div
              className="absolute h-1 bg-black transition-all"
              style={{
                width: `${((currentIndex + 1) / Makyaj.length) * 100}%`,
                left: `${(currentIndex / Makyaj.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gunes;
