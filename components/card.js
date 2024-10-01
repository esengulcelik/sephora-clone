import Image from "next/image";
const Urun = [
  {
    image: "/images/armanı.avif",
    name: "ARMANI-LANCOME-YSL",
    text: "3000 TL ve üzeri alışverişlerde 4 mini ürünlü set HEDİYE!",
    hediye: false,
  },
  {
    image: "/images/gunes.webp",
    name: "ARMANI-LANCOME-YSL",
    text: "3000 TL ve üzeri alışverişlerde 4 mini ürünlü set HEDİYE!",
    hediye: true,
  },
];
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
const card = () => {
  const rows = chunkArray(Urun, 2);

  return (
    <>
      <div className="container mx-auto max-w-7xl p-10 flex justify-center mt-5">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col lg:flex-row gap-10 justify-between"
          >
            {row.map((Urunler, index) => (
              <div
                key={index}
                className="flex border border-gray-300 rounded-lg w-1/2 h-auto"
              >
                <div className="w-1/2">
                  <Image
                    src={Urunler.image}
                    width={700}
                    height={700}
                    className="h-full"
                  />
                </div>
                <div className="pl-5 space-y-1">
                  <p className="font-bold text-xl mt-5">{Urunler.name}</p>
                  <p className="font-semibold">
                    3000 TL ve üzeri alışverişlerde{" "}
                    <span className="block">
                      {" "}
                      4 mini ürünlü set <strong>HEDİYE!</strong>
                    </span>
                  </p>
                  <button className="border-black border-2 w-1/2 transition-bg rounded-lg">
                    <p className="py-2 font-extrabold text-sm">KEŞFET</p>
                  </button>
                  {Urunler.hediye && (
                    <p className="text-gray-500 text-sm">
                      *Hediyeler stoklarla sınırlıdır.C&C siparişlerinde geçerli
                      değildir.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default card;
