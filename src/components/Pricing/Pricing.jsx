import React from "react";
import Heading, { SubLine } from "../Reusable/Heading";

const plans = [
  {
    name: "Basic plan",
    price: "$99",
    originalPrice: "$999",
    features: [
      "Machine Learning Technology",
      "Easy Setup",
      "Cloud Integration",
    ],
    style: "bg-[#181818] border-[1px]",
    button: "border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white",
  },
  {
    name: "Business plan",
    price: "$149",
    originalPrice: "$1499",
    features: [
      "Advanced AI Algorithms",
      "Customizable Settings",
      "Secure Encryption",
      "Feature text goes here",
    ],
    style: "bg-[#1f1f1f] border-[1px]",
    button: "bg-orange-600 hover:border-2 text-white hover:border-orange-600 hover:bg-[#1f1f1f]",
  },
  {
    name: "Enterprise plan",
    price: "$199",
    originalPrice: "$1999",
    features: [
      "Cutting-edge Data Analysis",
      "24/7 Customer Support",
      "Automatic Updates",
      "Feature text goes here",
      "Feature text goes here",
    ],
    style: "bg-[#2c2c2c] border-[1px]",
    button: "bg-orange-600 hover:border-2 text-white hover:border-orange-600 hover:bg-[#2c2c2c]",
  },
];

const Pricing = () => {
  return (
    <section className="w-full text-white pb-14 pt-4 px-4">
      <Heading head={'Pricing Plans'}/>
      <SubLine line={'Choose the best plan for you'}/>

      <div className=" mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 flex flex-col justify-between ${plan.style}`}
          >
            <div>
              <h3 className="text-xl font-semibold text-center mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-center mb-2">{plan.price}</p>
              <p className="text-center text-gray-400 mb-6">{plan.originalPrice}</p>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <i className='w-5 h-5 text-orange-600 fa-solid fa-check'></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`mt-8 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${plan.button}`}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;