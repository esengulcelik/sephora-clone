import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hata = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center mt-5 max-w-7xl p-8">
        <div className="items-center flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Aradığın Ürün Bulunamadı.</h1>
          <Image src="/images/Search.jpg" width={400} height={400} />
          <Link href="/" className="underline text-xl">
            Ana Sayfaya Git
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hata;
