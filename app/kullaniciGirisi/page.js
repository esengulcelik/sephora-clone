import Image from "next/image";
import Link from "next/link";
import User from "../../components/user"
import Header from "../../components/Header"
import Test from "../../components/test"

export default function Kullanici() {
    return (
        <>
            <div>
                <Header />
                <User />
                <Test/>
            </div>
        </>
    );
}

