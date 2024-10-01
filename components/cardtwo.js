import Image from "next/image";
const Urun = [
  {
    image: "/images/milkmakeup.jfif",
    name: "New IN Milk Makeup",
    text: "3000 TL ve üzeri alışverişlerde 4 mini ürünlü set HEDİYE!",
  },
  {
    image: "/images/mario.avif",
    name: "ARMANI-LANCOME-YSL",
    text: "3000 TL ve üzeri alışverişlerde 4 mini ürünlü set HEDİYE!",
  },
];
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
const cardtwo = () => {
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
                className="flex border border-gray-300 rounded-lg w-auto h-auto"
              >
                <div>
                  <Image src={Urunler.image} width={500} height={400} />
                </div>
                <div className="pl-5 space-y-2">
                  <p className="font-bold text-xl">{Urunler.name}</p>
                  <p className="font-semibold">
                    3000 TL ve üzeri alışverişlerde{" "}
                    <span className="block">
                      {" "}
                      4 mini ürünlü set <strong>HEDİYE!</strong>
                    </span>
                  </p>
                  <button className="border-black border-2 w-1/2 rounded-lg transition-bg">
                    <p className="py-2 font-extrabold text-sm">KEŞFET</p>
                  </button>
                  <p className="text-gray-500 text-sm">
                    *Hediyeler stoklarla sınırlıdır.C&C siparişlerindegeçerli
                    değildir.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default cardtwo;
