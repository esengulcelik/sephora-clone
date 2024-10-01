"use client";
import { useState } from "react";
import Link from "next/link";

const siparis = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  if (!token) {
    window.location.href = "/kullaniciGirisi";
  }
  const deleteToken = () => {
    localStorage.removeItem("token");
    setToken("");
  };
  return (
    <>
      <div className="container mx-auto flex justify-center mt-5 max-w-7xl gap-5">
        <div className="basis-1/5 border-2 px-4 py-2">
          <p className="font-bold text-xl mt-5">HOŞ GELDİN ESENGÜL</p>
          <ul className="font-bold flex flex-col gap-5 text-xl mt-7 whitespace-nowrap">
            <Link href="/uyelik">HESABIM</Link>
            <li>SEPHORA KART PROGRAMI</li>
            <li>SİPARİŞLERİM</li>
            <li>FAVORİLERİM</li>
            <li>İLETİŞİM TERCİHLERİM</li>
            <li>RANDEVU AL</li>
            <li>ŞİFRE DEĞİŞTİR</li>
          </ul>
          <button
            onClick={deleteToken}
            className="font-bold text-xl border border-black rounded-md w-full mt-7 py-2 mb-5"
          >
            Çıkış Yap
          </button>
        </div>
        <div className="basis-4/5 px-5 flex flex-col gap-5 bg-gray-200 w-full">
          <h1 className="font-bold mt-10 text-2xl">SİPARİŞLERİM</h1>
          <p className="text-xl">Henüz bir sipariş vermediniz.</p>
        </div>
      </div>
    </>
  );
};

export default siparis;
