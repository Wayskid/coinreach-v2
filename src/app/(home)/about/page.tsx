import Image from "next/image";
import Link from "next/link";
import { BiDollar, BiRocket } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { TbBrandWechat } from "react-icons/tb";

export default function Page() {
  return (
    <main className="grid h-full gap-16">
      <section className="h-[calc(100vh-70px)] relative bg-[#1e2b31] grid">
        <Image
          src="https://res.cloudinary.com/diiohnshc/image/upload/v1720303879/CoinReach/chris-lawton-duQ1ulzTJbM-unsplash_sfp3jk.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="hero-bg"
          className="w-full h-full absolute object-cover blur-[1.5px] opacity-95"
        />
        <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 grid gap-12 z-20 place-self-center">
          <p className="text-3xl md:text-5xl text-center font-semibold text-gray-900">
            <span className="text-[#F9CC0B]">About Us:</span> Building the
            Future of Digital Finance
          </p>
        </div>
        <div className="[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)] absolute -bottom-[3.5px] right-0 w-[55%] h-[8%] bg-white"></div>
      </section>
      <section className="">
        <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 grid gap-20">
          <p className="w-[min(39rem,100%)] font-semibold text-xl">
            CoinReach is one of the leading provider of digital currency
            conversion services, dedicated to making digital currency
            transactions fast, secure, and convenient. Our team of experts has
            years of experience in the financial and technology sectors, and we
            are passionate about harnessing the power of blockchain technology
            to improve lives.
          </p>
          <p className="w-[min(39rem,100%)] ml-auto">
            Our mission is to bridge the gap between traditional finance and the
            digital asset space, providing innovative solutions for individuals
            and businesses alike. We strive to deliver exceptional customer
            service, ensure the highest levels of security and compliance, and
            foster a community of trust and transparency.
          </p>
        </div>
      </section>
      <section className="bg-[#1e2b31] text-white">
        <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 py-20 grid">
          <p className="text-3xl font-medium mb-5">Our Values</p>
          <p className="">
            {`We embrace cutting-edge technology and continuously seek new ways to
            improve our services. We prioritize the safety and security of our
            users' assets and information, and adhere to all applicable laws and
            regulations to ensure a secure and trustworthy environment. We put
            our users first, providing personalized support and tailored
            solutions, and believe in open communication, clear policies, and
            fair practices.`}
          </p>
        </div>
      </section>
    </main>
  );
}
