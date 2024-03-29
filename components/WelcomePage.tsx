"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { Session } from "next-auth";

export default function WelcomePage() {
  const { data: session } = useSession();
  console.log("session", session);

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email || session?.user?.name!} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
