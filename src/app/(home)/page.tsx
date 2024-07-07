import Image from "next/image";
import Link from "next/link";
import { BiDollar, BiRocket } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { PiPlus } from "react-icons/pi";
import { TbBrandWechat } from "react-icons/tb";

export default function Home() {
  const FaQs = [
    {
      qstn: "What is CoinReach ?",
      ans: "CoinReach is an ecosystem comprising CoinReach operatives, CoinReach Agents and independently-operated CoinReach Online Workers. CoinReach Online Workers with the help of CoinReach Agents, will get paid to complete a Crypto Task, assigned to them according to their trust levels.",
    },
    {
      qstn: "How can I become a CoinReach Online Worker ?",
      ans: `Become a CoinReach Online Worker by filling out the Application Form thoroughly and truthfully. CoinReach will respond to your application in less than 24hrs.`,
    },
    {
      qstn: "How do I complete a Crypto Task ?",
      ans: "Crypto Tasks are easy to execute. Your assigned CoinReach Agent will make it even easier. Speed with which Crypto Tasks are completed is very important as it affects your trust levels which in turn decides your earnings.",
    },
    {
      qstn: "Do I need any special skill/training ?",
      ans: "CoinReach Online Workers don't need to have any special skill or undergo any special training in order to receive and execute Crypto Tasks.",
    },
  ];

  return (
    <main className="grid h-full gap-16">
      <section className="h-[calc(100vh-70px)] relative bg-[#1e2b31] grid">
        <Image
          src="https://res.cloudinary.com/diiohnshc/image/upload/v1719266978/CoinReach/magnet-me-315vPGsAFUk-unsplash_srxu77.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="hero-bg"
          className="w-full h-full absolute object-cover blur-[1.8px] opacity-95"
        />
        <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 grid gap-12 z-20 place-self-center">
          <p className="text-3xl md:text-5xl text-center font-semibold text-white">
            <span className="text-[#F9CC0B]">CoinReach:</span> Empowering your
            financial freedom and bridging the gap to crypto technology for a
            more connected world.
          </p>
          <Link
            href="join"
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
      {/* <section className="bg-[#1e2b31] text-white py-5 grid">
        <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          <Image
            src="https://res.cloudinary.com/diiohnshc/image/upload/v1720372497/CoinReach/Coinbase_Wordmark_White_glphs8.png"
            width="0"
            height="0"
            sizes="100vw"
            alt="hero-bg"
            className="w-[8rem] h-full object-contain"
          />
          <Image
            src="https://res.cloudinary.com/diiohnshc/image/upload/v1720372641/CoinReach/RGB_CashApp_Logo_Primary_White_rltjnr.png"
            width="0"
            height="0"
            sizes="100vw"
            alt="hero-bg"
            className="w-[8rem] h-full object-contain"
          />
          <Image
            src="https://res.cloudinary.com/diiohnshc/image/upload/v1720372497/CoinReach/Coinbase_Wordmark_White_glphs8.png"
            width="0"
            height="0"
            sizes="100vw"
            alt="hero-bg"
            className="w-[8rem] h-full object-contain"
          />
          <Image
            src="https://res.cloudinary.com/diiohnshc/image/upload/v1720372497/CoinReach/Coinbase_Wordmark_White_glphs8.png"
            width="0"
            height="0"
            sizes="100vw"
            alt="hero-bg"
            className="w-[8rem] h-full object-contain"
          />
        </div>
      </section> */}
      <section className="py-10">
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
                {`&quot;I've been working with CoinReach for months now and I must
                confess, it was confusing at first, but in no time I became an
                expert, and actually no longer needed my assigned Agent.&quot;`}
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
                {`"I am loving it here so much I had to make a few friends apply,
                because I know how much they struggle financially. They've been
                very grateful."`}
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
                {`"Retired with a lot of free time. I was very unsure about
                filling out the application form because of my age. Like, will I
                be able to execute tasks? Well I'm now really good!"`}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1e2b31] text-white py-24">
        <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 grid">
          <p className="text-3xl text-center mb-5">
            Frequently Asked Questions
          </p>
          <p className="text-sm text-center mb-5 w-[min(30rem,100%)] justify-self-center">
            {`Here are some of our FAQs. If you have any other questions you'd
            like answered, please feel free to contact us.`}
          </p>
          <div className="border-t">
            {FaQs.map(
              ({ qstn, ans }: { qstn: string; ans: string }, index: number) => (
                <div className="border-b py-4" key={index}>
                  <input
                    type="checkbox"
                    id={qstn}
                    className="hidden peer/accordion"
                  />
                  <label
                    htmlFor={qstn}
                    className="grid grid-cols-[1fr_0.15fr] justify-between items-center cursor-pointer peer-checked/accordion:[&>*:last-child]:rotate-[45deg]"
                  >
                    <p className="font-medium">{qstn}</p>
                    <PiPlus className="text-2xl justify-self-end transition-all" />
                  </label>
                  <div className="grid grid-rows-[0] overflow-hidden peer-checked/accordion:grid-rows-1">
                    <p className="font-light mt-5 mb-3 translate-all whitespace-pre-wrap">
                      {ans}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
