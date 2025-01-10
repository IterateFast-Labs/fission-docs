'use client';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';

export default function PreviewSection() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className="relative md:bg-gray-800/60 md:py-10 md:rounded-2xl overflow-hidden lg:shadow-xl">
      <img
        src={`${siteConfig.baseUrl === '/' ? '' : siteConfig.baseUrl}/image/logomark3d.png`}
        className="opacity-50 absolute -top-[12%] -left-[12%] rotate-90 z-0 hidden md:block"
      />
      <img
        src={`${siteConfig.baseUrl === '/' ? '' : siteConfig.baseUrl}/image/logomark3d.png`}
        className="opacity-50 absolute -bottom-[10%] -right-[4%] z-0 rotate-45 hidden md:block"
      />
      <div className="mx-auto w-fit min-w-[300px]">
        <div className="bg-[#1f1d22] flex justify-between items-center px-3 py-4 gap-4 rounded-tr-2xl rounded-tl-2xl">
          <span className="text-sm text-[#88878D] font-bold">Close</span>
          <div className="flex flex-col text-center">
            <span className="text-white font-bold">Fission</span>
            <span className="text-[#88878D] font-bold text-xs">mini app</span>
          </div>

          <svg
            width="24"
            height="24"
            viewBox="0 0 66 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62 33C62 49.0164 49.0161 62 33 62C16.9839 62 4 49.0164 4 33C4 16.9836 16.9839 4 33 4C49.0161 4 62 16.9836 62 33ZM66 33C66 51.2253 51.2256 66 33 66C14.7744 66 0 51.2253 0 33C0 14.7747 14.7744 0 33 0C51.2256 0 66 14.7747 66 33ZM18 37C20.7612 37 23 34.7615 23 32C23 29.2385 20.7612 27 18 27C15.2388 27 13 29.2385 13 32C13 34.7615 15.2388 37 18 37ZM38 32C38 34.7615 35.7612 37 33 37C30.2388 37 28 34.7615 28 32C28 29.2385 30.2388 27 33 27C35.7612 27 38 29.2385 38 32ZM48 37C50.7612 37 53 34.7615 53 32C53 29.2385 50.7612 27 48 27C45.2388 27 43 29.2385 43 32C43 34.7615 45.2388 37 48 37Z"
              fill="#88878D"
            />
          </svg>
        </div>
        <div className="w-full aspect-[320/529] bg-[#1f1d22] relative overflow-hidden rounded-bl-xl rounded-br-xl">
          <iframe
            src="https://player.vimeo.com/video/1045595278?embedparameter=value&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0&playsinline=1"
            width="320"
            className="w-full aspect-[320/529] z-10 relative"
          ></iframe>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-1 z-0">
            <div className="w-8 h-8 rounded-md bg-white/20 animate-pulse"></div>
            <div className="w-8 h-8 rounded-md bg-white/20 animate-pulse"></div>
            <div className="w-8 h-8 rounded-md bg-white/20 animate-pulse"></div>
            <div className="w-8 h-8 rounded-md bg-white/20 animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <p className="text-center lg:text-white/90 font-medium">
          The release date of the mini app will be announced soon.
        </p>
      </div>
    </div>
  );
}
