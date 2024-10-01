"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Sepet = () => {
  const [card, setCard] = useState([]);
  console.log(card);

  useEffect(() => {
    const basketData = JSON.parse(localStorage.getItem("basketData")) || [];
    setCard(basketData);
  }, []);

  const sumValue = card
    .reduce((acc, item) => {
      const price = parseFloat(item.fiyat.replace(",", "."));
      return acc + price * (item.adet || 1);
    }, 0)
    .toFixed(2);

  const minus = (index) => {
    const updatedCard = [...card];
    if (updatedCard[index].adet > 1) {
      updatedCard[index].adet -= 1;
    } else {
      updatedCard.splice(index, 1);
    }
    setCard(updatedCard);
    localStorage.setItem("basketData", JSON.stringify(updatedCard));
  };
  const deleteValue = (index) => {
    const updatedCard = [...card];
    updatedCard.splice(index, 1);
    setCard(updatedCard);
    localStorage.setItem("basketData", JSON.stringify(updatedCard));
  };
  const plus = (index) => {
    const updatedCard = [...card];
    if (updatedCard[index].adet < 3) {
      updatedCard[index].adet += 1;
    } else alert("3'ten fazla ürün ekleyemezsiniz.");

    setCard(updatedCard);
    localStorage.setItem("basketData", JSON.stringify(updatedCard));
  };
  return (
    <div>
      <div className="container mx-auto max-w-7xl gap-10 flex mt-10">
        <div className="space-y-5 basis-2/3">
          {card.length === 0 ? (
            <p className="text-4xl font-bold text-center flx items-center">
              Sepetiniz boş.
            </p>
          ) : (
            card.map((urun, index) => {
              const price = parseFloat(urun.fiyat);
              const totalPrice = (price * urun.adet).toFixed(2);
              return (
                <div key={index} className="bg-slate-100 px-4 py-4 h-auto flex">
                  <h1 className="text-2xl font-bold">Sepet</h1>
                  <div className="flex mt-10 w-full gap-5">
                    <div className="basis-1/5">
                      <Image src={urun.image} width={150} height={150} />
                    </div>
                    <div className="basis-4/5 ">
                      <p className="font-bold">{urun.marka}</p>
                      <div className="flex justify-between py-14">
                        <div className="flex gap-5 ">
                          <select defaultValue={urun.adet}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                          </select>
                          <button
                            className="text-xl"
                            onClick={() => deleteValue(index)}
                          >
                            KALDIR
                          </button>
                        </div>
                        <div>
                          <p className="font-bold text-xl">{totalPrice} TL</p>
                          <div className="flex gap-3 items-center">
                            <p className="font-bold text-xl">Ürün Adedi:</p>
                            <button onClick={() => minus(index)}>
                              <FaMinus />
                            </button>
                            <p className="font-bold text-2xl">{urun.adet}</p>
                            <button onClick={() => plus(index)}>
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="basis-1/3 bg-slate-100 h-auto px-4 py-4">
          <div className="flex flex-col gap-6 ">
            <div>
              <h1 className="text-2xl font-bold">Sipariş özeti</h1>
            </div>
            <div className="flex justify-between">
              <p>Ara toplam</p>
              <p className="font-bold">{sumValue}</p>
            </div>
            <div className="flex justify-between">
              <p>Mağazadan Teslimat</p>
              <p className="font-bold">Ücretsiz</p>
            </div>
            <div className="border-b border-gray-800"></div>

            <div>
              <p className="font-bold">Ürünlerin Toplam Tutarı</p>
              <p>{sumValue}</p>
            </div>
            <div className="w-full rounded-md px-3 py-3 bg-black text-white font-bold flex items-center justify-center">
              <button>Alışverişi tamamla</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sepet;
