import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";

const category = [
  "Güneş",
  "Makyaj",
  "Parfüm",
  "Cilt Bakımı",
  "Vücut Ve Banyo",
  "Saç",
  "Sephora Collection",
  "Mins & More",
  "En Yeniler",
  "Markalar",
  "Trendler",
  "Kampanyalar",
];
const Header = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center max-w-7xl">
        <div className="bg-mavi flex flex-col text-sm justify-center items-center">
          <p className="font-bold">ARMANI-LANCOME-YSL</p>
          <p> 3000 TL ve Üzeri Alışverişlerde 4 Mini Ürünlü Set HEDİYE! </p>
        </div>
        <div className="flex gap-10 w-full items-center mt-5 px-6">
          <Link href="/" className="tracking-widest text-3xl font-semibold">
            SEPHORA
          </Link>
          <div className="relative flex items-center w-1/2">
            <IoSearchOutline className="absolute text-2xl left-3 text-black" />
            <input
              type="text"
              placeholder="Ürün, marka,kategori ara..."
              className="p-3 border text-sm rounded-3xl bg-gray-100 pl-10 placeholder-gray-800 w-full border-gray-300"
            />
          </div>
          <div className="flex gap-6 font-medium items-center text-sm">
            <Link href="/hesabim" className="flex items-center gap-2 ">
              <IoLocationOutline className="font-bold text-2xl" />
              <p className="whitespace-nowrap">Mağazalar ve Servisler</p>
            </Link>
            <Link href="/kullaniciGirisi" className="flex items-center gap-2">
              <CiUser className="font-bold text-2xl" />
              <p className="hidden lg:block whitespace-nowrap">Giriş Yap</p>
            </Link>
            <div className="flex items-center">
              <FiHeart className="font-bold text-2xl" />
            </div>
            <Link href="/sepet" className="flex items-center">
              <CiShoppingBasket className="font-bold text-2xl" />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <nav>
            <ul className="flex gap-8 mt-6 text-sm font-medium justify-center">
              {category.map((categories, index) => (
                <li key={index}>
                  <Link href="/">
                    <p
                      className={
                        categories == "Sephora Collection"
                          ? "text-red-600"
                          : "text-black"
                      }
                    >
                      {categories}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
