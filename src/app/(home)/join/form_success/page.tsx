import Link from "next/link";

export default function Page() {
  return (
    <div className="grid gap-10 content-center mt-10">
      <p className="text-4xl font-semibold text-center">
        Thank you for submitting your application!
      </p>
      <p className="text-center">
        We have received your application and will review it carefully. We
        appreciate your interest in joining our team and will be in touch soon
        to discuss next steps. Please note that our hiring process may take some
        time, but we will keep your application on file and consider you for
        future opportunities that match your skills and experience.
        <br />
        <br />
        Thank you again for your interest in our company. We wish you the best
        of luck in your job search!"
      </p>
      <Link
        href="/"
        className="bg-[#F9CC0B] justify-self-center py-4 px-8 font-medium"
      >
        Home
      </Link>
    </div>
  );
}
