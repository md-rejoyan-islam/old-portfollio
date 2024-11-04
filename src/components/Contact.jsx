export default function Contact() {
  return (
    <section className="bg-[#21676f1d] backdrop-blur-sm p-4 rounded-md">
      <div className="container grid grid-cols-1 md:grid-cols-2 my-16  gap-10 items-center ">
        <div className="">
          <div className="contact-caption mb-50">
            <h3 className="text-2xl md:text-[40px] leading-[50px]">
              If Not Now, When? Let’s Work Together!
            </h3>
            <p className="my-8">
              Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
              Risus commodo viverra.
            </p>
            <img src="assets/img/gallery/sin.png" alt="" />
          </div>
        </div>
        <div className="">
          <form action="#" className="contact-wrapper">
            <div className="my-4">
              <input
                type="text"
                className="py-4 px-4 rounded-md w-full  border-none text-white bg-[#11403767] focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
                name="name"
                placeholder="Full Name"
              />
            </div>
            <div className="my-4">
              <input
                type="email"
                className="py-4 px-4 rounded-md w-full  border-none text-white bg-[#11403767] focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="my-4">
              <textarea
                name="message"
                id="message"
                className="py-4 px-4 rounded-md w-full  border-none text-white bg-[#11403767] focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="my-4">
              <button
                className="py-4 px-4 rounded-md w-full bg-violet-600 border-none text-white"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
