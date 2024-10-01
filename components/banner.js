import Image from "next/image";

const banner = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center mt-5 max-w-7xl">
        <div className="relative">
          <div>
            <Image src="/images/banner.avif" width={1400} height={1400} />
          </div>
          <div className="border border-white w-auto h-1/3 gap-3 px-8 bg-white rounded-xl absolute inset-y-28 right-20 flex justify-center flex-col">
            <h2 className="font-bold text-xl">SAÇ BAKIMINDA SONSUZ ETKİ</h2>
            <p className="font-medium">
              Senin için seçtiğimiz saç bakım ürünlerini keşfet!
            </p>
            <button className="border-black border-2 w-1/2 transition-bg rounded-lg  ">
              <p className="py-2 font-extrabold">KEŞFET</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default banner;
