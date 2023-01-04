import { unstable_getServerSession } from "next-auth/next";
import WelcomePage from "../components/WelcomePage";
import { Providers } from "./providers";

export default async function HomePage() {
  const session = await unstable_getServerSession();

  return (
    <main>
      <div>
        <WelcomePage session={session} />
      </div>
    </main>
  );
}
