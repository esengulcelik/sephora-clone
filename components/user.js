"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emails, setEmails] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  if (token) {
    window.location.href = "/hesabim";
  }

  useEffect(() => {
    const storedEmails = JSON.parse(localStorage.getItem("emails")) || [];
    setEmails(storedEmails);
  }, []);

  useEffect(() => {
    setIsButtonDisabled(!email || !password);
  }, [email, password]);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const kayit = async () => {
    if (!email.endsWith("@gmail.com")) {
      setError("Lütfen geçerli bir @gmail.com adresi girin");
      return;
    }
    try {
      setIsLoading(true);

      const { data } = await axios.post(
        "https://e003-85-105-192-96.ngrok-free.app/sephora/login",
        {
          email,
          password,
        }
      );

      console.log(data, "data");
      if (data.error) {
        alert(data.message);
      } else {
        localStorage.setItem("data", JSON.stringify(data.data));
        localStorage.setItem("token", data.data.jwt);
        setToken(data.data.jwt);
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      kayit();
    }
  };

  return (
    <>
      <div className="container mx-auto flex bg-gray-200 py-10 justify-center mt-5 max-w-7xl">
        <div className="flex flex-col gap-5 bg-white py-10 px-10">
          <h1 className="text-2xl font-bold">Giriş yap/ Üye ol</h1>
          <p>Giriş yapmak ya da üye olmak için email adresini gir</p>
          <div className="flex gap-x-3.5">
            <input
              onChange={handleChangeEmail}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Email*"
              className="px-10 py-4 border border-white bg-gray-100"
            />

            <input
              onChange={handleChangePassword}
              onKeyDown={handleKeyDown}
              type="password"
              placeholder="Password*"
              className="px-10 py-4 border border-white bg-gray-100"
              required
            />
            <button
              onClick={kayit}
              disabled={isLoading || isButtonDisabled}
              className="text-2xl px-2 bg-gray-500 text-white"
            >
              OK
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default User;
