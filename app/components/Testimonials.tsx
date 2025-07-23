import React from "react";

const Testimonials = () => {
  return (
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
          <p className="">Krishna Seshadri</p>
          <p>Pidilite Industries</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
