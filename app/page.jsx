import Link from "next/link";

const HomePage = () => {
  return (
    <div >
      <h1 className="text-3xl font-bold underline">
        Hello, Next.js with Tailwind CSS!
      </h1>
      <p className="mt-4">
        This is the home page of your Next.js application.
      </p>
      <Link href="/properties/1" className="text-blue-500 underline">
        Go to Property Page
      </Link>
      <br />
      Tailwind is working 🚀
    </div>
  );
}

export default HomePage;
