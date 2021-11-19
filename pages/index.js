import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import validator from "validator";
import Image from "next/image";
import { BsChevronRight, BsPlusLg } from "react-icons/bs";
import TheHead from "../components/TheHead";

const Home = () => {
  const router = useRouter();
  const [faq, setFaq] = useState("");
  const [emailError, setEmailError] = useState("");
  const [okay, setOkay] = useState(false);

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Okay");
    } else {
      setEmailError("Please enter a valid email address");
    }
  };

  useEffect(() => {
    if (okay) {
      const timer = setTimeout(() => {
        router.push("https://www.netflix.com/");
      }, 2000);

      return () => clearTimeout(timer);
    }

    // eslint-disable-next-line
  }, [okay]);

  return (
    <div className="font-body text-white bg-black divide-custom-gray divide-y-8">
      <TheHead tabtitle="Definitely Not Netflix - Watch TV Shows, Movies, Series" />

      <section className="min-h-screen bg-heroimg bg-center bg-no-repeat bg-cover flex flex-col items-center">
        <header className="flex mt-7 mb-32 w-11/12 justify-between items-center">
          <Image src={"/dnnlogo.png"} width={180} height={80} alt="logo" />
          <button
            className="text-lg cursor-pointer bg-custom-red px-4 py-1 rounded-sm"
            onClick={() => router.push("/signingin")}
          >
            Sign In
          </button>
        </header>
        <h1 className="text-6xl font-bold tracking-wider w-2/4 text-center mb-4">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="text-3xl mb-6">Watch anywhere. Cancel anytime.</h2>
        <h3 className="text-xl mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="flex w-full justify-center relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="w-1/3 h-16 px-3 text-black outline-none rounded-sm"
            onChange={(e) => validateEmail(e)}
          />
          <button
            className="flex items-center justify-center cursor-pointer bg-custom-red text-3xl rounded-sm px-7 border "
            onClick={() =>
              emailError
                ? emailError === "Okay"
                  ? setOkay(true)
                  : ""
                : setEmailError("Email is required!")
            }
          >
            {okay ? (
              <Image
                src={"/loading.gif"}
                alt="loading circle"
                width={40}
                className="mx-16"
              />
            ) : (
              <div className="flex items-center justify-center">
                <p>Get Started</p>
                <BsChevronRight className="w-6 h-6 ml-2" />
              </div>
            )}
          </button>
          <p className="text-base text-yellow-500 absolute -bottom-7 left-1/4 ml-2">
            {emailError}
          </p>
        </div>
      </section>

      <section className="flex justify-center items-center py-20">
        <div className="w-1/3">
          <h1 className="text-5xl font-bold tracking-wider mb-5">
            Enjoy on your TV.
          </h1>
          <h2 className="text-2xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>

        <Image
          src={"/dnnff.jpg"}
          width={550}
          height={350}
          alt="first feature"
        />
      </section>

      <section className="flex justify-center items-center py-20">
        <Image
          src={"/dnnsf.jpg"}
          width={350}
          height={350}
          alt="second feature"
        />

        <div className="w-2/5 ml-20">
          <h1 className="text-5xl font-bold tracking-wider mb-5">
            Download your shows to watch offline.
          </h1>
          <h2 className="text-2xl">
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
      </section>

      <section className="flex justify-center items-center py-15">
        <div className="w-1/3">
          <h1 className="text-5xl font-bold tracking-wider mb-5">
            Watch everywhere.
          </h1>
          <h2 className="text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h2>
        </div>

        <Image
          src={"/dnntf.png"}
          width={550}
          height={500}
          alt="third feature"
        />
      </section>

      <section className="flex justify-center items-center py-16">
        <Image
          src={"/dnnfrf.png"}
          width={500}
          height={370}
          alt="fourth feature"
        />

        <div className="w-2/5 ml-10">
          <h1 className="text-5xl font-bold tracking-wider mb-5">
            Create profiles for kids.
          </h1>
          <h2 className="text-2xl">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h2>
        </div>
      </section>

      <section className="flex flex-col items-center py-16">
        <h1 className="text-5xl font-extrabold tracking-wider mb-16">
          Frequently Asked Questions
        </h1>

        <button
          className="bg-custom-gray flex justify-between items-center w-3/6 px-9 py-4 mb-2"
          onClick={() => {
            faq === "faq1" ? setFaq("") : setFaq("faq1");
          }}
        >
          <p className="text-3xl tracking-wider">What is Netflix?</p>
          <BsPlusLg
            className={
              faq === "faq1" ? "w-7 h-7 transform rotate-45" : "w-6 h-6"
            }
          />
        </button>

        <div
          className={
            faq === "faq1" ? "bg-custom-gray w-3/6 mb-2 p-9 block" : "hidden"
          }
        >
          <p className="text-2xl">
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.
            <br />
            <br />
            You can watch as much as you want, whenever you want without a
            single commercial – all for one low monthly price. Theres always
            something new to discover and new TV shows and movies are added
            every week!
          </p>
        </div>

        <button
          className="bg-custom-gray flex justify-between items-center w-3/6 px-9 py-4 mb-2"
          onClick={() => {
            faq === "faq2" ? setFaq("") : setFaq("faq2");
          }}
        >
          <p className="text-3xl tracking-wider">How much does Netflix cost?</p>
          <BsPlusLg
            className={
              faq === "faq2" ? "w-7 h-7 transform rotate-45" : "w-6 h-6"
            }
          />
        </button>

        <div
          className={
            faq === "faq2" ? "bg-custom-gray w-3/6 mb-2 p-9 block" : "hidden"
          }
        >
          <p className="text-2xl">
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. No extra costs, no
            contracts.
          </p>
        </div>

        <button
          className="bg-custom-gray flex justify-between items-center w-3/6 px-9 py-4 mb-2"
          onClick={() => {
            faq === "faq3" ? setFaq("") : setFaq("faq3");
          }}
        >
          <p className="text-3xl tracking-wider">Where can I watch?</p>
          <BsPlusLg
            className={
              faq === "faq3" ? "w-7 h-7 transform rotate-45" : "w-6 h-6"
            }
          />
        </button>

        <div
          className={
            faq === "faq3" ? "bg-custom-gray w-3/6 mb-2 p-9 block" : "hidden"
          }
        >
          <p className="text-2xl">
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles.
            <br />
            <br />
            You can also download your favorite shows with the iOS, Android, or
            Windows 10 app. Use downloads to watch while youre on the go and
            without an internet connection. Take Netflix with you anywhere.
          </p>
        </div>

        <button
          className="bg-custom-gray flex justify-between items-center w-3/6 px-9 py-4 mb-2"
          onClick={() => {
            faq === "faq4" ? setFaq("") : setFaq("faq4");
          }}
        >
          <p className="text-3xl tracking-wider">How do I cancel?</p>
          <BsPlusLg
            className={
              faq === "faq4" ? "w-7 h-7 transform rotate-45" : "w-6 h-6"
            }
          />
        </button>

        <div
          className={
            faq === "faq4" ? "bg-custom-gray w-3/6 mb-2 p-9 block" : "hidden"
          }
        >
          <p className="text-2xl">
            Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </p>
        </div>

        <button
          className="bg-custom-gray flex justify-between items-center w-3/6 px-9 py-4 mb-2"
          onClick={() => {
            faq === "faq5" ? setFaq("") : setFaq("faq5");
          }}
        >
          <p className="text-3xl tracking-wider">
            What can I watch on Netflix?
          </p>
          <BsPlusLg
            className={
              faq === "faq5" ? "w-7 h-7 transform rotate-45" : "w-6 h-6"
            }
          />
        </button>

        <div
          className={
            faq === "faq5" ? "bg-custom-gray w-3/6 mb-2 p-9 block" : "hidden"
          }
        >
          <p className="text-2xl">
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </p>
        </div>

        <button
          className="bg-custom-gray flex justify-between items-center w-3/6 px-9 py-4 mb-2"
          onClick={() => {
            faq === "faq6" ? setFaq("") : setFaq("faq6");
          }}
        >
          <p className="text-3xl tracking-wider">Is Netflix good for kids?</p>
          <BsPlusLg
            className={
              faq === "faq6" ? "w-7 h-7 transform rotate-45" : "w-6 h-6"
            }
          />
        </button>

        <div
          className={
            faq === "faq6" ? "bg-custom-gray w-3/6 mb-2 p-9 block" : "hidden"
          }
        >
          <p className="text-2xl">
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and movies
            in their own space.
            <br />
            <br />
            Kids profiles come with PIN-protected parental controls that let you
            restrict the maturity rating of content kids can watch and block
            specific titles you don’t want kids to see.
          </p>
        </div>

        <h3 className="text-xl mb-4 mt-16">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="flex w-full justify-center relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="w-1/3 h-16 px-3 text-black outline-none rounded-sm"
            onChange={(e) => validateEmail(e)}
          />
          <button
            className="flex items-center justify-center cursor-pointer bg-custom-red text-3xl rounded-sm px-7 border "
            onClick={() =>
              emailError
                ? emailError === "Okay"
                  ? setOkay(true)
                  : ""
                : setEmailError("Email is required!")
            }
          >
            {okay ? (
              <Image
                src={"/loading.gif"}
                alt="loading circle"
                width={40}
                className="mx-16"
              />
            ) : (
              <div className="flex items-center justify-center">
                <p>Get Started</p>
                <BsChevronRight className="w-6 h-6 ml-2" />
              </div>
            )}
          </button>
          <p className="text-base text-yellow-500 absolute -bottom-7 left-1/4 ml-2">
            {emailError}
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center py-16 text-custom-yellow">
        <footer>
          <p className="mb-10 cursor-not-allowed">Questions? Contact Us.</p>
          <div className="grid grid-cols-4 gap-x-20 gap-y-5 text-xs cursor-not-allowed">
            <p>FAQ</p>
            <p>Help Center</p>
            <p>Account</p>
            <p>Media Center</p>
            <p>Investor Relations</p>
            <p>Jobs</p>
            <p>Redeem Gift Cards</p>
            <p>Buy Gift Cards</p>
            <p>Ways to watch</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Cookie Preferences</p>
            <p>Corporate Information</p>
            <p>Contact Us</p>
            <p>Speed Test</p>
            <p>Legal Notices</p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Home;
