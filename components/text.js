import Link from "next/link";

const Text = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center mt-5">
        <div className="bg-pinkbg flex max-w-7xl container mx-auto items-center justify-center py-3 gap-4">
          <p className="text-2xl font-bold">
            Sephora haberlerini ve tekliflerini ilk önce sen öğren!
          </p>
          <Link
            href="/"
            className="bg-black text-white rounded-md px-4 py-3 font-extrabold"
          >
            <p>Şimdi abone olun!</p>
          </Link>
        </div>
        <div className="flex max-w-6xl mx-auto justify-center text-sm leading-relaxed gap-5 mt-10">
          <div className="flex flex-row lg:flex-col gap-3">
            <p>
              {" "}
              1969 yılından beri, güzelligin nabzını tutan Sephora 150'den fazla
              marka ve 14.000 ürün ile müsterileirine essiz bir deneyim sunuyor.
              Aradıgınız parfüm, makyaj, cilt bakımı, saç bakımı, fondöten,
              eyeliner, yüz maskesi, makyaj setleri, maskara, oje, günes kremi,
              ruj, far, peeling ürünlerini sephora.com.tr'de bulabilirsin.
            </p>
            <p>
              Sephora'nın Chanel, Dior, Hermes, Sephora Collection, Benefit,
              Nars, Huda Beauty, Fenty Beauty, Too Faced
            </p>
          </div>
          <div className="border-l border-gray-300 mx-4"></div>
          <div className="flex flex-col gap-3">
            <p>
              Drunk Elephant, Foreo, Olaplex, Briogio, Moraccon Oil, Lancome,
              Armani, Yves Saint Laurent, Estee Lauder, Clinique, Tomford,
              Givenchy, Balmain, Guerlain, Gucci, La Mer, Mario Badescu, Dr.
              Jart+, Fenty skin, Fresh markalarını ve daha fazlasını kesfet.
            </p>

            <p>
              Sephora Collection, makyaj, cilt bakımı ve parfüm ürünleriyle tam
              şeffaflık politikasını ulaşılabilir fiyat anlayışı ile
              buluşturuyor. Ürün formüllerinden,
            </p>
          </div>
          <div className="border-l border-gray-300 mx-4"></div>
          <div className="flex flex-col gap-3">
            ambalajlarına ve üretim uygulamalarına kadar daha sürdürebilir bir
            dünya için ‘’ Good for ‘’ konseptini benimsiyor. Onlarca renk
            seçeneği bulunan rujlarını, her cilt tonuna uygun fondöten
            serisilerini ve doğal içeriklere sahip cilt ve saç bakım ürünlerini
            hemen keşfedin..
          </div>
        </div>
      </div>
    </>
  );
};

export default Text;
