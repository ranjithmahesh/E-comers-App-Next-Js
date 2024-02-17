function Banner() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Style Meets Innovation
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              At Our Online Store
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Discover the newest styles in fashion and the latest innovations in
            technology, all in one place.
            {/* Stay ahead of the curve with our
              curated selection of trendy clothing and high-tech gadgets. */}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white  hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-700 sm:w-auto shadow-lg"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-700 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
