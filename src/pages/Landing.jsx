import banner from "./../assets/Landing/banner.jpg";
function Landing() {
  return (
    <div>
      {/**Banner**/}
      <section className="relative h-fit bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[50dvh] lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl text-start font-extrabold sm:text-5xl">
              Get Pizza
              <strong className="block font-extrabold text-[#EC0000]">
                {" "}
                For Low Prices!{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-start">
              Best quality pizza delivered to you at an affordable price! Order Now!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
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
    </div>
  );
}

export default Landing;
