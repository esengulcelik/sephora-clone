"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const kullaniciGirisi = () => {
  const [token, setToken] = useState(
    typeof window !== "undefined" && localStorage.getItem("token")
  );
  const [userData, setUserData] = useState(null);
  const [day, setDay] = useState(" ");
  const [month, setMonth] = useState(" ");
  const [year, setYear] = useState(" ");
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 2011 - 1990 + 1 }, (_, i) => 2011 - i);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const user = JSON.parse(localStorage.getItem("data"));
  useEffect(() => {
    if (!token) {
      window.location.href = "/kullaniciGirisi";
    } else {
      setUserData(user);
      if (user && user.birthDate) {
        const birthDate = new Date(user.birthDate);
        setDay(birthDate.getDate());
        setMonth(birthDate.getMonth() + 1);
        setYear(birthDate.getFullYear());
      }
    }
  }, [token]);

  useEffect(() => {
    if (userData) {
      const isModified = JSON.stringify(userData) !== JSON.stringify(user);
      setIsButtonDisabled(!isModified);
    }
  }, [userData, user]);

  const deleteToken = () => {
    localStorage.removeItem("token");
    setToken(" ");
  };

  const handleUpdate = async () => {
    setIsLoading(true);

    try {
      const { name, surname, phone, uyeid } = userData;
      const { data } = await axios.put(
        "https://e003-85-105-192-96.ngrok-free.app/sephora/update",
        {
          name,
          surname,
          phone,
          userId: uyeid,
        }
      );

      console.log(data, "data");
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container mx-auto flex justify-center mt-5 max-w-7xl gap-5">
        <div className="basis-1/5 border-2 px-4 py-2 ">
          <p className="font-bold text-xl mt-5">
            HOŞ GELDİN {user ? user.name.toUpperCase() : ""}
          </p>
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
        <div className="basis-4/5 px-5 flex shadow-md gap-5 bg-gray-100 w-full">
          <div className="w-1/2 flex flex-col gap-3 mt-4">
            <h3 className="font-bold text-xl">Üyelik Bilgilerim</h3>
            <div className="flex gap-2">
              <div className="flex flex-col">
                <label>Ad</label>
                <input
                  type="text"
                  value={userData?.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  className="border pl-2 bg-gray-50 rounded-md py-2"
                ></input>
              </div>
              <div className="flex flex-col">
                <label>Soyad</label>
                <input
                  type="text"
                  value={userData ? userData.surname : ""}
                  onChange={(e) =>
                    setUserData({ ...userData, surname: e.target.value })
                  }
                  className="border pl-2 bg-gray-50 rounded-md py-2"
                ></input>
              </div>
            </div>
            <label>Cep Telefonu</label>
            <input
              type="number"
              value={userData ? userData.phone : ""}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  phone: e.target.value,
                })
              }
              className="pl-2 border bg-gray-50 rounded-md py-2"
            ></input>
            <label>E-Mail</label>
            <input
              type="email"
              disabled
              value={userData ? userData.email : ""}
              className="border bg-gray-50 pl-2 rounded-md py-2"
            ></input>
            <div>
              <label>Doğum Tarihiniz</label>
              <div className="flex gap-8 mt-5">
                {day && (
                  <div>
                    <select
                      className="text-xl"
                      value={day}
                      onChange={(e) => setDay(Number(e.target.value))}
                    >
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {month && (
                  <div>
                    <select
                      className="text-xl"
                      value={month}
                      onChange={(e) => setMonth(Number(e.target.value))}
                    >
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {year && (
                  <div>
                    <select
                      className="text-xl"
                      value={year}
                      onChange={(e) => setYear(Number(e.target.value))}
                    >
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handleUpdate}
              disabled={isButtonDisabled || isLoading}
              className="bg-gray-200 rounded-lg py-3 mt-3 font-bold"
            >
              GÜNCELLE
            </button>
          </div>
          <div className="border-l"></div>
          <div className="w-1/2 mt-4 flex flex-col gap-3">
            <h3 className="font-bold text-xl">Şifre Güncelleme</h3>
            <div className="flex flex-col gap-2">
              <label>Şu Anki Şifre</label>
              <input
                type="text"
                className="border bg-gray-50 rounded-md py-2"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label>Yeni Şİfre</label>
              <input
                type="text"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                className="border bg-gray-50 rounded-md py-2"
              ></input>
              <p className="whitespace-nowrap text-xs">
                (Şifreniz en az 10 karakter olmalı. 1 büyük harf, 1 küçük harf
                ve rakam içermelidir.)
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label>Yeni Şifre (Tekrar)</label>
              <input
                type="text"
                className="border bg-gray-50 rounded-md py-2"
              ></input>
            </div>
            <button
              disabled={isLoading}
              className="bg-gray-200 rounded-lg py-3 mt-3 font-bold"
            >
              GÜNCELLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default kullaniciGirisi;
