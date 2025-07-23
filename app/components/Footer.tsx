import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-mintcream overflow-hidden flex flex-col items-start justify-start px-4 md:px-8 lg:px-12 py-6 md:py-12 lg:py-16 relative gap-12 md:gap-16">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-24 md:gap-8 lg:gap-12">
        {/* Logo and Brand */}
        <div className="flex flex-row items-center justify-start gap-4 md:gap-6">
          <Image
            src="/logo.svg"
            alt="Southern Guild"
            width={32}
            height={28}
            className="w-6 h-5 md:w-8 md:h-7"
          />
          <div className="text-xl md:text-2xl lg:text-3xl tracking-tight leading-relaxed font-happy-times-at-the-ikob-new-game-plus-edition">
            Southern Guild
          </div>
        </div>

        {/* Footer Links */}
        <div className="w-full lg:max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-sm md:text-base font-switzer-variable">
          <div className="flex flex-col items-start justify-start gap-2 md:gap-3">
            <div className="leading-relaxed opacity-60">Case studies</div>
            <div className="leading-relaxed hover:opacity-80 cursor-pointer">
              Pidilite
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 md:gap-3">
            <div className="leading-relaxed opacity-60">Contact</div>
            <div className="leading-relaxed hover:opacity-80 cursor-pointer">
              arun@southguild.tech
            </div>
            <div className="leading-relaxed hover:opacity-80 cursor-pointer">
              LinkedIn
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 md:gap-3">
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
  );
};

export default Footer;
