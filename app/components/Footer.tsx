"use client";

import React, { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <section className="sm:px-10 px-5 pt-7 pb-3 border-t border-black-200 flex justify-center sm:justify-between items-center flex-wrap gap-5">
        <div className="text-white-200 flex gap-2 items-center">
          <img src="/favicon.ico" alt="my logo" className="hidden sm:block w-10 h-10" />
          <p>|</p>
          <p>Terms & <span className="text-purple">Conditions</span></p>
          <p>|</p>
          <p>Privacy <span className="text-purple">Policy</span></p>
        </div>
        <div className="flex gap-3">
          <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
            <a href="https://github.com/lonis752" target="_blank">
              <img src="/github-logo.png" alt="Github Logo from Freepik" className="" />
            </a>
          </div>
          <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
            <a href="https://x.com/lonis_k" target="_blank">
              <img src="/twitter.png" alt="X Logo from Freepik" className="" />
            </a>
          </div>
          <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
            <a href="https://www.linkedin.com/in/lonis-kwacke/" target="_blank">
              <img src="/linkedin.png" alt="LinkedIn Logo from Freepik" className="" />
            </a>
          </div>
        </div>
        <p className="text-white-200">{`© ${year}`} WriteMe. All Rights <span className="text-purple">Reserved</span>.</p>
      </section>
    </>
  );
};

export default Footer;