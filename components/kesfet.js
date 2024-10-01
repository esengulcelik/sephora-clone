import Image from "next/image";
import Link from "next/link";
const kartlar = [
  {
    image: "/images/sol.avif",
    name: "Sol de Janeiro",
  },
  {
    image: "/images/guer.avif",
    name: "Guerlain",
  },
  {
    image: "/images/milk.avif",
    name: "Milk Makeup",
  },
  {
    image: "/images/tarte.avif",
    name: "Tarte",
  },
  {
    image: "/images/sephora.avif",
    name: "Sephora Collection",
  },
];
const Kesfet = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center mt-5 max-w-7xl p-8">
        <div className="flex flex-col w-full gap-10">
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">
                100'den fazla marka sephora'da
              </h1>
              <p className="font-semibold">
                En yeni ve en sevilen markaları şimdi keşfet!
              </p>
            </div>
            <div>
              <p className="underline underline-offset-1 font-semibold">
                Keşfet
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            {kartlar.map((kart, index) => (
              <div key={index} className="w-1/5 flex">
                <Link href="/">
                  <div className="border rounded-md">
                    <Image src={kart.image} width={500} height={100} />
                    <p className="text-center font-extrabold py-4">
                      {kart.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Kesfet;
