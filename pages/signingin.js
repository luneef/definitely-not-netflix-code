import Image from "next/image";
import Link from "next/link";
import TheHead from "../components/TheHead";
import { useSession, signIn, signOut } from "next-auth/client";

const Signingin = () => {
  const [session] = useSession();

  return (
    <div className="font-body text-white bg-black min-h-screen bg-heroimg bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center">
      <TheHead
        tabtitle={
          session
            ? `${session.user.name} - Definitely Not Netflix`
            : "Sign In - Definitely Not Netflix"
        }
      />

      <header className="absolute left-16 top-7">
        <Image src={"/dnnlogo.png"} width={180} height={80} alt="logo" />
      </header>

      {session ? (
        <div className="flex items-center absolute right-16 top-7">
          <p className="mr-3">{session.user.email}</p>
          <img
            className="rounded-full w-14"
            src={session.user.image}
            alt="Profile"
          />
        </div>
      ) : (
        ""
      )}

      {session ? (
        <section className="bg-black p-16 bg-opacity-80 flex flex-col items-center">
          <h1 className="text-center text-2xl font-bold tracking-wider">
            Oops, looks like the internet cat
            <br />
            scratched the movies again.
          </h1>

          <Image src={"/cat.png"} alt="Cat" width={250} height={250} />

          <button
            className="bg-custom-red w-80 rounded py-3 font-bold tracking-wider mt-5"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </section>
      ) : (
        <section className="bg-black p-16 bg-opacity-80">
          <h1 className="text-3xl font-bold mb-5 tracking-wider">Sign In</h1>

          <button
            className="bg-custom-red w-80 rounded py-3 font-bold tracking-wider mb-5"
            onClick={() => signIn()}
          >
            Sign In
          </button>

          <p>
            <span className="text-custom-yellow mr-1">New to Netflix?</span>

            <span className="hover:underline">
              <Link href="/">Sign up now.</Link>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default Signingin;
