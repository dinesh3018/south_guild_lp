import BackGroundImage from "../app/image.png";
import ClientLogo1 from "../app/Client_logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full mx-auto relative bg-white overflow-hidden flex flex-col items-center justify-start text-left text-black font-happy-times-at-the-ikob-new-game-plus-edition">
      {/* NavBar */}
      <div className="w-full max-w-[95vw] fixed top-4 md:top-6 xl:top-10 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm flex flex-row items-center justify-between px-4 md:px-6 lg:px-8 py-3 box-border z-50 shadow-sm ">
        <div className="flex flex-row items-center justify-start gap-x-3 md:gap-x-4">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="md:w-[50px] md:h-[50px]"
          />
          <div className="text-sm md:text-base tracking-tight leading-tight opacity-90 font-switzer-variable">
            Southern Guild
          </div>
        </div>
        <div className="bg-black text-white px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm lg:text-base font-medium font-switzer-variable hover:bg-gray-800 transition-colors cursor-pointer">
          Get in touch
        </div>
      </div>

      <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start mb-20">
        <div className="w-full relative h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[800px] 2xl:h-[850px]">
          <div className="absolute inset-0 w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={BackGroundImage}
                alt="Background"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="hidden sm:block bg-white h-10 md:h-12 lg:h-14 w-2/5 md:w-1/2 z-5 absolute bottom-56 md:bottom-64 lg:bottom-[14rem] xl:bottom-[16rem]"></div>

          <div className="absolute -bottom-6  sm:-bottom-8 md:-bottom-10 left-0 bg-white right-0 flex flex-col lg:flex-row items-start lg:items-end justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8 lg:py-12 gap-4 sm:gap-6 lg:gap-8">
            <div className="flex-1 max-w-none lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl flex flex-col items-start justify-start gap-3 sm:gap-4 md:gap-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-tight leading-tight font-bold">
                <span className="block">Your own tech team,</span>
                <span className="block">without the Hiring Hassle</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-switzer-variable opacity-70 max-w-xl lg:max-w-2xl">
                We partner with companies as an embedded tech team, delivering
                solutions that solve complex problems and drive scalable growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center justify-start gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm md:text-base font-switzer-variable mt-2 sm:mt-4 lg:mt-0 flex-shrink-0">
              <div className="text-black/70 whitespace-nowrap">Trusted by</div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-16 sm:w-18 md:w-20 lg:w-24 xl:w-28 p-1 sm:p-2 flex-shrink-0">
                  <Image
                    src={ClientLogo1}
                    alt="Client Logo"
                    className="w-full h-auto p-2"
                  />
                </div>
                <div className="flex flex-col items-start justify-center text-xs sm:text-sm md:text-base text-orange-600 font-ibm-plex-sans-condensed font-bold tracking-tight leading-tight uppercase">
                  <span>Path</span>
                  <span>Assist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="w-full  bg-mintcream overflow-hidden flex flex-col items-start justify-start px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 relative gap-2">
        {/* <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tight leading-relaxed max-w-2xl">
          How we enabled AI operations across Pidilite i
        </h2>
        <div className="text-sm md:text-base leading-relaxed font-switzer-variable opacity-80">
          Case study
        </div> */}
      </div>

      {/* Main Value Proposition */}
      <div className="w-full flex flex-row items-center justify-start py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight max-w-5xl">
          We seamlessly embed into your team to design, build, and scale
          intelligent systems using AI, ML, and world-class engineering.
        </h2>
      </div>

      {/* Products Section */}
      <div className="w-full flex flex-col items-start justify-start py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 gap-6">
        <div className="text-sm md:text-base leading-relaxed opacity-60 font-switzer-variable">
          Our products
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Smriti Product Card */}
          <div className="bg-lightgreen h-[320px] md:h-[360px] lg:h-[400px] overflow-hidden flex flex-col items-start justify-between p-6 md:p-8 relative">
            <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-tight leading-relaxed">
              Smriti
            </h3>
            <div className="w-20 absolute right-0 bottom-0 bg-white h-2" />
            <div className="w-full border-black border-solid border-t flex flex-row items-center justify-center pt-4 text-sm md:text-base text-black font-switzer-variable">
              <div className="flex-1 leading-relaxed">
                Conversational AI for Enterprise Sales
              </div>
            </div>
          </div>

          {/* PathAssist Product Card */}
          <div className="bg-aquamarine h-[320px] md:h-[360px] lg:h-[400px] overflow-hidden flex flex-col items-start justify-between p-6 md:p-8 relative">
            <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-tight leading-relaxed">
              PathAssist
            </h3>
            <div className="w-full border-black border-solid border-t flex flex-row items-center justify-center pt-4 text-sm md:text-base text-black font-switzer-variable">
              <div className="flex-1 leading-relaxed">
                AI-driven Medical Decision Support
              </div>
            </div>
            <div className="w-20 absolute right-0 bottom-0 bg-white h-2" />
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full bg-mintcream flex flex-col items-start justify-start px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 gap-8 md:gap-12">
        <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6 lg:gap-12">
          <div className="flex-1 flex flex-col items-start justify-start gap-6 md:gap-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
              <span className="block">We Integrate.</span>
              <span className="block">We Innovate.</span>
              <span className="block">We Improve.</span>
            </h2>
            <div className="text-base md:text-lg lg:text-xl leading-relaxed font-switzer-variable opacity-60 max-w-2xl">
              <p className="mb-4">
                Building the next generation of enterprise intelligence systems.
                Young, fearless, and ready to redefine what&apos;s possible.
              </p>
              <p>
                We work with diverse industries from sales and manufacturing, to
                medical, auditing and more.
              </p>
            </div>
          </div>
          <div className="flex-1 relative bg-white h-64 md:h-80 lg:h-96 overflow-hidden">
            <div className="absolute top-0 right-0 bg-mintcream w-4 h-full transform rotate-90 origin-top-right opacity-50" />
          </div>
        </div>

        {/* Process Steps */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              number: "01",
              title: "Discover",
              description:
                "We partner closely with your team to deeply understand challenges",
            },
            {
              number: "02",
              title: "Design",
              description:
                "We build products that are intuitive and closely aligned with your needs",
            },
            {
              number: "03",
              title: "Develop",
              description:
                "We engineer robust systems for seamless integration and peak performance",
            },
            {
              number: "04",
              title: "Deploy",
              description:
                "We manage deployments for you or work with you to integrate in your pipeline",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden flex flex-col items-start justify-between p-4 md:p-6 relative gap-4 h-48 md:h-56 lg:h-64"
            >
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="text-sm md:text-base leading-relaxed opacity-60 font-switzer-variable">
                  {step.number}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl tracking-tight leading-relaxed">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm md:text-base leading-relaxed opacity-60 font-switzer-variable">
                {step.description}
              </p>
              <div className="w-20 absolute top-0 right-0 bg-mintcream h-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 gap-6 lg:gap-12">
        <div className="w-full lg:w-1/3 relative overflow-hidden bg-gray-100 h-48 md:h-64 lg:h-80">
          <div className="absolute bottom-0 left-0 bg-white w-12 h-4" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-6 md:gap-8">
          <blockquote className="text-xl md:text-2xl lg:text-3xl tracking-tight leading-relaxed">
            &ldquo;Southern Guild has brought an incredible blend of engineering
            depth and product vision to our AI initiative.&rdquo;
          </blockquote>
          <div className="text-sm md:text-base leading-relaxed font-switzer-variable opacity-60">
            <p className="font-medium text-black/80">Krishna Seshadri</p>
            <p>Head of Digital Transformation, Pidilite Industries</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full flex flex-col items-start justify-start font-switzer-variable">
        <div className="w-full bg-lightgreen overflow-hidden flex flex-col sm:flex-row items-start sm:items-end justify-between px-4 md:px-8 lg:px-12 py-8 md:py-12 relative gap-6 sm:gap-4">
          <div className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-md">
            <span className="block">Ready for a holistic tech team</span>
            <span className="block">that works like yours?</span>
          </div>
          <div className="flex flex-row items-center justify-start gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="text-base md:text-lg leading-relaxed">
              Get in touch
            </div>
            <Image
              src="/ArrowUpRight.svg"
              alt="Arrow up right"
              width={24}
              height={24}
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
          <div className="w-48 absolute top-2 right-0 bg-white h-2 transform rotate-180 hidden lg:block" />
        </div>

        {/* Footer */}
        <div className="w-full bg-mintcream overflow-hidden flex flex-col items-start justify-start px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 relative gap-12 md:gap-16">
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
            {/* Logo and Brand */}
            <div className="flex flex-row items-center justify-start gap-4 md:gap-6">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="md:w-[50px] md:h-[50px]"
              />{" "}
              <div className="text-xl md:text-2xl lg:text-3xl tracking-tight leading-relaxed">
                Southern Guild
              </div>
            </div>

            {/* Footer Links */}
            <div className="w-full lg:max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-sm md:text-base font-switzer-variable">
              <div className="flex flex-col items-start justify-start gap-3">
                <div className="leading-relaxed opacity-60">Case studies</div>
                <div className="leading-relaxed hover:opacity-80 cursor-pointer">
                  Pidilite
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-3">
                <div className="leading-relaxed opacity-60">Contact</div>
                <div className="leading-relaxed hover:opacity-80 cursor-pointer">
                  arun@southguild.tech
                </div>
                <div className="leading-relaxed hover:opacity-80 cursor-pointer">
                  LinkedIn
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-3">
                <div className="leading-relaxed opacity-60">Location</div>
                <div className="leading-relaxed max-w-xs">
                  <span className="block">v15 Renga&apos;s Triyambhava</span>
                  <span className="block">Kalapatti Main Road</span>
                  <span className="block">Coimbatore 641014</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm md:text-base leading-relaxed font-switzer-variable opacity-80">
            © 2025 Southern Guild Technologies Pvt. Ltd.
          </div>
        </div>
      </div>
    </div>
  );
}
