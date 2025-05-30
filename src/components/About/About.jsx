import React from 'react'
import Heading, { SubLine } from '../Reusable/Heading'

const About = () => {
  return (
    <div className="text-white font-sans">
          <Heading head={'About Us'}/>
      <section className="px-6 md:px-16 pt-4 pb-20 text-center md:text-left">
          <p className="md:text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sint unde? Modi, voluptatem! Et nam tempore nihil voluptates assumenda reprehenderit ut sint nulla ullam, facilis quasi dolor cupiditate ea quaerat? <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quaerat labore id quas. Harum, id? Eius, mollitia dolor sapiente quas laudantium dolore libero, dignissimos quam a inventore aperiam similique culpa.
          </p>
      </section>

      <section className="px-6 md:px-16 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="md:w-1/2 space-y-12">
            <div className="border-l-4 border-orange-600 pl-6">
              <h2 className="text-3xl font-bold">Machine Learning Integration</h2>
              <p className="mt-2 text-gray-400">
                Our device seamlessly integrates machine learning technology to efficiently sort and organize your data.
              </p>
            </div>

            <div className="border-l-4 border-orange-600 pl-6">
              <h2 className="text-3xl font-bold">Cloud Technology</h2>
              <p className="mt-2 text-gray-400">
                Access your information anytime, anywhere through secure cloud-based architecture.
              </p>
            </div>

            <div className="border-l-4 border-orange-600 pl-6">
              <h2 className="text-3xl font-bold">User-Friendly Interface</h2>
              <p className="mt-2 text-gray-400">
                Designed with simplicity in mind, our interface ensures ease-of-use for everyone.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/urban-double-exposure-collage-concept_23-2149657932.jpg" // Replace with your actual path
              alt="About Illustration"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Mission or CTA Section */}
      <section className="px-6 md:px-16 py-2">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg mb-6">
             To build smarter digital ecosystems that simplify life and connect people with the future of automation.
          </p>
          <button className="rounded-full border-[1px] py-1 px-8 md:border-[2px] md:py-[5px] md:px-12 border-orange-600 hover:bg-orange-600 duration-300 hover:text-white transition"
          onClick={() => navigate("/contact")}>
              Contact
         </button>
        </div>
      </section>
    </div>
  );
};

export default About;

