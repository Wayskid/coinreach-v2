import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white lg:z-[3]">
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid grid-cols-2 md:flex md:justify-between gap-12 items-center">
        <div className="col-span-2 md:col-span-1">
          <p className="text-3xl font-semibold">CoinReach</p>
          <p className="text-xs mt-2">Copyright &copy; 2022 CoinReach</p>
        </div>
        <div className="grid self-start space-y-6 text-sm">
          <Link href="join" className="">
            Join Now
          </Link>
          <Link href="login" className="">
            Login
          </Link>
          <Link href="about" className="">
            About us
          </Link>
        </div>
        <div className="grid self-start space-y-6 text-sm">
          <Link href="contact" className="">
            Contact
          </Link>
          <Link href="terms" className="">
            Terms
          </Link>
          <Link href="privacy" className="">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
