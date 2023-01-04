"use client";
import { getProviders } from "next-auth/react";
import { signIn, getSession } from "next-auth/react";
import { getCsrfToken } from "next-auth/react";
import { CtxOrReq } from "next-auth/client/_utils";
import { IncomingMessage } from "http";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
  csrfToken: Awaited<ReturnType<typeof getCsrfToken>>;
};

function SignInComponent({ providers, csrfToken }: Props) {
  return (
    <div className='flex justify-center flex-col '>
      <form method='post' action='/api/auth/signin/email'>
        <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
        <label>
          Email address
          <input type='email' id='email' name='email' />
        </label>
        <button type='submit'>Sign in with Email</button>
      </form>
      {Object.values(providers!).map((provider) => {
        if (provider.name === "Email") {
          return;
        }
        return (
          <div key={provider.name} className={"mt-4"}>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={(e) =>
                signIn(provider.id, {
                  callbackUrl:
                    process.env.VERCEL_URL || "http://localhost:3000",
                })
              }
            >
              Sign In with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default SignInComponent;
