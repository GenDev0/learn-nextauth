import { getProviders, getSession } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";
import { getCsrfToken } from "next-auth/react";
import { CtxOrReq } from "next-auth/client/_utils";
import { IncomingMessage } from "http";

async function SignInPage() {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken();

  return (
    <div className='grid justify-center'>
      <div>
        <Image
          className='rounded-full mx-2 object-cover'
          width={700}
          height={700}
          src='https://links.papareact.com/161'
          alt='Profile Picture'
        />
      </div>
      <SignInComponent providers={providers} csrfToken={csrfToken} />
    </div>
  );
}

export default SignInPage;
