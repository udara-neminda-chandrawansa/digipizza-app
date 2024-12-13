import banner from "./../assets/Landing/banner.jpg";
import about_img from "./../assets/Landing/about.jpg";
import cta from "./../assets/Landing/cta_bg.jpg";
import FeedbackGrid from "../components/FeedbackGrid";
import PizzaLoader from "../components/PizzaLoader";

function Landing() {
  const feedbacks = [
    {
      username: "Paul Starr",
      stars: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?fit=crop&w=1180&q=80",
    },
    {
      username: "Emily Rose",
      stars: 4,
      content: "Fantastic service and friendly staff!",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?fit=crop&w=1180&q=80",
    },
    {
      username: "John Doe",
      stars: 3,
      content: "Great! Could be better!!",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?fit=crop&w=1180&q=80",
    },
    // Add more feedback objects here
  ];
  return (
    <div>
      {/**Banner**/}
      <section
        className="relative bg-center bg-no-repeat bg-cover h-fit"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[50dvh] lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-start sm:text-5xl">
              Get Pizza
              <strong className="block font-extrabold text-[#EC0000]">
                {" "}
                For Low Prices!{" "}
              </strong>
            </h1>

            <p className="max-w-lg mt-4 sm:text-xl/relaxed text-start">
              Best quality pizza delivered to you at an affordable price! Order
              Now!
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <a
                href="/login"
                className="block w-full rounded bg-[#EC0000] no-underline px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#EC0000] focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Place an Order
              </a>

              <a
                href="/signup"
                className="block w-full rounded bg-white no-underline px-12 py-3 text-sm font-medium text-[#EC0000] shadow hover:text-[#EC0000] focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*About*/}
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div className="flex w-full">
              <div className="max-md:w-full">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 max-md:text-center sm:text-5xl">
                  About Digi-Pizza
                </h2>

                <p className="mt-4 text-gray-700">
                  Welcome to Digi-Pizza, your one-stop destination for crafting
                  the perfect pizza experience! We offer a wide range of crusts,
                  sauces, toppings, and cheeses, empowering you to create unique
                  combinations that satisfy your cravings. Whether you prefer
                  pickup or delivery, our intuitive ordering system makes it
                  easy to customize, review, and track your orders in real time.
                  Save your favorites, reorder with a click, and enjoy seamless
                  updates from preparation to delivery. At Digi-Pizza, it's all
                  about great taste, convenience, and a personalized pizza
                  journey!
                </p>
              </div>
            </div>

            <div>
              <img src={about_img} className="rounded" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/*Products Grid*/}
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-5xl">
              Our Pizzas
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Select from a range of pre-made choices to get the perfect pizza!
            </p>
          </header>
          {/*pizza loader component*/}
          <PizzaLoader></PizzaLoader>
        </div>
      </section>
      {/*Feedback Grid*/}
      <FeedbackGrid feedbacks={feedbacks} />
      {/*CTA*/}
      <section className="overflow-hidden bg-bottom bg-no-repeat bg-cover" style={{ backgroundImage: `url(${cta})` }}>
        <div className="p-8 bg-black/50 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white text-start sm:text-3xl md:text-5xl">
              Best Pizza just waiting for you!
            </h2>

            <p className="hidden max-w-lg text-start text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8 sm:text-start">
              <button
                className="inline-block px-12 py-3 text-sm font-medium text-white no-underline transition bg-[#EC0000] rounded-full hover:bg-[#FFA100] focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
