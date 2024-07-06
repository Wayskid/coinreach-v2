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
            <span className="text-[#F9CC0B]">About Us:</span> Empowering your
            financial freedom and bridging the gap to crypto technology for a
            more connected world.
          </p>
        </div>
        <div className="[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)] absolute -bottom-[3.5px] right-0 w-[55%] h-[8%] bg-white"></div>
      </section>
      <section className="">
        <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 grid gap-20">
          <p className="w-[min(39rem,100%)] font-semibold text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            beatae quos odio expedita consectetur est, doloribus eveniet
            voluptatum quas eum. Eligendi, repellat possimus cum optio aliquam
            mollitia! Soluta, labore tempora!
          </p>
          <p className="w-[min(39rem,100%)] ml-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            beatae quos odio expedita consectetur est, doloribus eveniet
            voluptatum quas eum. Eligendi, repellat possimus cum optio aliquam
            mollitia! Soluta, labore tempora!
          </p>
        </div>
      </section>
      {/* <section className="">
        <div className="w-[min(92rem,100%)] mx-auto px-0 md:px-12 lg:px-32 grid gap-20">
          <Image
            src="https://res.cloudinary.com/diiohnshc/image/upload/v1720303879/CoinReach/chris-lawton-duQ1ulzTJbM-unsplash_sfp3jk.jpg"
            width="0"
            height="0"
            sizes="100vw"
            alt="hero-bg"
            className="w-full h-96 object-cover"
          />
        </div>
      </section> */}
      <section className="bg-[#1e2b31] text-white">
        <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 py-24 grid">
          <div className="">
            <p className="text-3xl font-medium mb-5">Our Vision</p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              impedit quae consequuntur assumenda distinctio recusandae modi.
              Hic voluptatum distinctio quia vitae nam. Nam mollitia cupiditate
              qui minus reiciendis accusamus repudiandae. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aspernatur inventore ipsum
              illum! Voluptatibus maxime autem optio tempore excepturi
              laboriosam explicabo ea repellendus molestiae tenetur, eos
              deleniti dolore ullam nisi fugit.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
