"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <section className="flex flex-col items-center justify-between gap-y-7 bg-white h-[20rem] w-[20rem] px-5 py-10 rounded-xl">
      <h1 className="text-gray-950 font-bold text-3xl">
        Hello{" "}
        <span className="text-blue-600">{session && session.user?.name}</span>
        <br />
        Welcom to your Dashboard
      </h1>
      <Button
        variant="destructive"
        className="text-xl w-full"
        onClick={() => signOut()}
      >
        Logout
      </Button>
    </section>
  );
}
