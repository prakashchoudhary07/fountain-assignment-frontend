"use client";
import Authenticate from "@/components/authenticate";
import useProfile from "@/hooks/useProfile";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { isError, isLoading, user } = useProfile();

  if (isError) {
    redirect("/login");
  }

  if (isLoading) {
    return <div className="p-2">Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col p-12">
      <h1 className="font-mono text-lg px-4 items-center">
        Fountain frontend assignment&nbsp;
      </h1>
      <div className="p-2">
        <div className="p-2">
          <p>
            <Link
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              href="/search"
            >
              Search
            </Link>
          </p>
          <br />
          <p>
            <Link
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              href="/comments"
            >
              Comments
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
