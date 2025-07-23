import React from "react";

const ProjectSteps = () => {
  return (
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
              <h3 className="text-xl md:text-2xl lg:text-3xl tracking-tight leading-[150%] font-switzer-variable">
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
  );
};

export default ProjectSteps;
