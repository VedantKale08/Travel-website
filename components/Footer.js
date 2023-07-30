import React from 'react'

function Footer() {
  return (
    <div className="bg-[rgb(46,46,46,0.7)] md:p-32 w-screen p-6 pt-10">
      <div
        className="flex md:flex-row flex-col"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <div className="">
          <p className="text-[20px]">Travel</p>
          <p className="pt-2 md:text-base text-xs text-gray-400 leading-relaxed w-[250px] md:w-[150px] md:mr-[50px]">
            Travel with us and explore the world without limits
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 w-full">
          <div className="">
            <p className="text-[20px] md:pt-0 pt-10">About</p>
            <p className="md:text-base text-xs text-gray-400 md:pt-4 pt-2 cursor-pointer hover:text-white">
              About Us
            </p>
            <p className="md:text-base text-xs text-gray-400 md:pt-4 pt-2 cursor-pointer hover:text-white">
              Feature
            </p>
            <p className="md:text-base text-xs text-gray-400 md:pt-4 pt-2 cursor-pointer hover:text-white">
              News & blogs
            </p>
          </div>
          <div className="">
            <p className="text-[20px] md:pt-0 pt-10">Company</p>
            <p className="md:text-base text-xs text-gray-400 md:pt-4 pt-2 cursor-pointer hover:text-white">
              FAQ
            </p>
            <p className="md:text-base text-xs text-gray-400 md:pt-4 pt-2 cursor-pointer hover:text-white">
              History
            </p>
            <p className="md:text-base text-xs text-gray-400 md:pt-4 pt-2 cursor-pointer hover:text-white">
              testimonials
            </p>
          </div>
          <div className="">
            <p className="text-[20px] md:pt-0 pt-10">Contact</p>
            <p className="md:text-base text-xs text-gray-400 md:pt-4 pt-2 cursor-pointer hover:text-white">
              Call Center
            </p>
            <p className="md:text-base text-xs text-gray-400 md:pt-4 pt-2 cursor-pointer hover:text-white">
              Support Center
            </p>
            <p className="md:text-base text-xs text-gray-400 md:pt-4 pt-2 cursor-pointer hover:text-white">
              Contact Us
            </p>
          </div>
          <div className="">
            <p className="text-[20px] md:pt-0 pt-10">Support</p>
            <p className="md:text-base text-xs text-gray-400 md:pt-4 pt-2 cursor-pointer hover:text-white">
              Privacy Policy
            </p>
            <p className="md:text-base text-xs text-gray-400 md:pt-4 pt-2 cursor-pointer hover:text-white">
              Terms & Services
            </p>
            <p className="md:text-base text-xs text-gray-400 md:pt-4 pt-2 cursor-pointer hover:text-white">
              Payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer