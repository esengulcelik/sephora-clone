"use client";
import Urun from "../../../components/urun";
import Header from "../../../components/Header";

export default function YeniUrun({ params }) {
  const { id } = params;
  console.log(id);
  return (
    <>
      <div>
        <Header />
        <Urun id={id} />
      </div>
    </>
  );
}
