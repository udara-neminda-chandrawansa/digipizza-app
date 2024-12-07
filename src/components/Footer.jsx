import logo from "/logo.png";
function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          {/*Top Btn*/}
          <a
            className="inline-block rounded-full bg-[#EC0000] p-2 text-white shadow transition hover:bg-[#FFA100] sm:p-3 lg:p-4"
            href="#top"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-[#EC0000] lg:justify-start">
              <img src={logo} alt="logo" className="w-[100px] aspect-square"/>
            </div>

            <p className="mx-auto mt-6 max-w-md leading-relaxed text-gray-500 lg:text-left">
              Affordable pizza, always!
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/about"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/services"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/signup"
              >
                Signup
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/login"
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright <a href="https://github.com/udara-neminda-chandrawansa">Udara Neminda Chandrawansa</a> &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
