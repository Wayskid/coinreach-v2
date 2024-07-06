import Image from "next/image";
import Link from "next/link";
import { BiDollar, BiRocket } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { TbBrandWechat } from "react-icons/tb";

export default function Page() {
  return (
    <main className="grid h-full gap-16">
      <section className="h-[calc(100vh-70px)] md:h-[45rem] relative bg-[#1e2b31] grid">
        <Image
          src="https://res.cloudinary.com/diiohnshc/image/upload/v1719266978/CoinReach/magnet-me-315vPGsAFUk-unsplash_srxu77.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="hero-bg"
          className="w-full h-full absolute object-cover blur-[1.8px] opacity-95"
        />
        <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-16 pb-0 grid gap-12 z-20 place-self-center">
          <p className="text-3xl md:text-5xl text-center font-semibold text-white">
            <span className="text-[#F9CC0B]">CoinReach:</span> Empowering your
            financial freedom and bridging the gap to crypto technology for a
            more connected world.
          </p>
          <Link
            href="join/your_info"
            className="bg-[#F9CC0B] justify-self-center p-5 mt-10 font-medium"
          >
            Join us today
          </Link>
        </div>
      </section>
      <section className="">
        <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-7 grid justify-items-center text-center shadow-lg gap-2">
            <BiDollar className="text-5xl text-[#F9CC0B]" />
            <p className="font-semibold">Earn working for CoinReach</p>
            <p className="text-sm font-light">
              Ditch that 9 to 5 job, and earn working as an Online Worker for
              CoinReach.
            </p>
          </div>
          <div className="p-7 grid justify-items-center text-center shadow-lg gap-2">
            <BiRocket className="text-5xl text-[#F9CC0B]" />
            <p className="font-semibold">Fast Payment</p>
            <p className="text-sm font-light">
              Get paid on or before completion of the Crypto Task assigned to
              you according to your experience levels.
            </p>
          </div>
          <div className="p-7 grid justify-items-center text-center shadow-lg gap-2">
            <TbBrandWechat className="text-5xl text-[#F9CC0B]" />
            <p className="font-semibold">CoinReach Agent</p>
            <p className="text-sm font-light">
              Get assigned a CoinReach Agent which will make receiving and
              execution of Crypto Tasks easy.
            </p>
          </div>
          <div className="p-7 grid justify-items-center text-center shadow-lg gap-2">
            <BsCurrencyBitcoin className="text-5xl text-[#F9CC0B]" />
            <p className="font-semibold">Help the Crypto World and Get Paid</p>
            <p className="text-sm font-light">
              Get paid to bring the world closer to Crypto Technology.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32">
          <p className="text-3xl text-center mb-5">Testimonies</p>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="p-7 grid justify-items-center text-center shadow-lg gap-3">
              <Image
                src="https://res.cloudinary.com/diiohnshc/image/upload/v1719269005/CoinReach/test1_ap0pmg.jpg"
                width="110"
                height="110"
                alt="testimony"
                className="rounded-md aspect-square object-cover"
              />
              <p className="text-sm font-light">
                &quot;I've been working with CoinReach for months now and I must
                confess, it was confusing at first, but in no time I became an
                expert, and actually no longer needed my assigned Agent.&quot;
              </p>
            </div>
            <div className="p-7 grid justify-items-center text-center shadow-lg gap-3">
              <Image
                src="https://res.cloudinary.com/diiohnshc/image/upload/v1719269004/CoinReach/test2_hyft2g.jpg"
                width="110"
                height="110"
                alt="testimony"
                className="rounded-md aspect-square object-cover"
              />
              <p className="text-sm font-light">
                &quot; I am loving it here so much I had to make a few friends
                apply, because I know how much they struggle financially.
                They've been very grateful.&quot;
              </p>
            </div>
            <div className="p-7 grid justify-items-center text-center shadow-lg gap-3">
              <Image
                src="https://res.cloudinary.com/diiohnshc/image/upload/v1719269005/CoinReach/test3_xcw0w2.jpg"
                width="110"
                height="110"
                alt="testimony"
                className="rounded-md aspect-square object-cover"
              />
              <p className="text-sm font-light">
                &quot;Retired with a lot of free time. I was very unsure about
                filling out the application form because of my age. Like, will I
                be able to execute tasks? Well I'm now really good!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
