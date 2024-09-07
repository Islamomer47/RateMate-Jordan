import React, { useState } from "react";
import {
  FaCheck,
  FaBuilding,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaGlobe,
  FaInfoCircle,
  FaCreditCard,
  FaLock,
  FaStar,
} from "react-icons/fa";

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    contactEmail: "",
    companyAddress: "",
    phoneNumber: "",
    websiteUrl: "",
    businessDescription: "",
    plan: "",
    paymentDetails: "",
  });
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setFormData((prev) => ({ ...prev, plan }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const plans = [
    {
      name: "Basic Plan",
      description: "Ideal for small businesses",
      monthlyPrice: 49,
      yearlyPrice: 470,
      features: [
        "Display up to 10 products",
        "Receive and respond to customer reviews",
        "Basic dashboard access",
        "Partner with 1 online store",
      ],
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      name: "Standard Plan",
      description: "Perfect for growing businesses",
      monthlyPrice: 99,
      yearlyPrice: 950,
      features: [
        "Display up to 50 products",
        "Receive and respond to customer reviews",
        "Advanced dashboard access",
        "Partner with up to 3 online stores",
        "Priority customer support",
      ],
      popular: true,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      name: "Premium Plan",
      description: "Best for large enterprises",
      monthlyPrice: 199,
      yearlyPrice: 1900,
      features: [
        "Unlimited product display",
        "Receive and respond to customer reviews",
        "Full dashboard access",
        "Partner with unlimited online stores",
        "24/7 dedicated support",
        "Custom integrations",
      ],
      image:
        "https://images.unsplash.com/photo-1534469650761-fce6cc26ac0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#FADED9] to-white">
      <header className="w-full py-6 mb-8 bg-[#060640] text-white flex justify-center">
        <h1 className="text-4xl font-bold">Our Pricing Plans</h1>
      </header>
      <main className="flex flex-col items-center px-4 w-full max-w-6xl">
        <div className="flex items-center justify-center mb-8">
          <span
            className={`mr-2 text-sm ${
              billingCycle === "monthly"
                ? "text-[#060640] font-bold"
                : "text-[#515161]"
            }`}
          >
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={billingCycle === "yearly"}
              onChange={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly"
                )
              }
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#060640]"></div>
          </label>
          <span
            className={`ml-2 text-sm ${
              billingCycle === "yearly"
                ? "text-[#060640] font-bold"
                : "text-[#515161]"
            }`}
          >
            Yearly (Save 20%)
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                plan.popular ? "border-2 border-[#060640] scale-105" : ""
              }`}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-[#060640] text-white text-xs font-bold py-1 px-3 rounded-full flex items-center">
                    <FaStar className="mr-1" /> Most Popular
                  </div>
                )}
                <h2 className="text-[#060640] text-2xl font-bold mb-2">
                  {plan.name}
                </h2>
                <p className="text-[#515161] text-sm mb-4">
                  {plan.description}
                </p>
                <p className="text-4xl font-bold mb-4 text-[#060640]">
                  $
                  {billingCycle === "monthly"
                    ? plan.monthlyPrice
                    : plan.yearlyPrice}
                  <span className="text-base font-normal text-[#515161] ml-1">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </p>
                <ul className="text-[#515161] text-sm mb-6 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheck className="text-[#060640] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePlanSelect(plan.name)}
                  className={`w-full bg-[#060640] text-white py-2 px-4 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-opacity-90 ${
                    selectedPlan === plan.name ? "ring-2 ring-[#FADED9]" : ""
                  }`}
                >
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl mb-12">
            <h2 className="text-[#060640] text-2xl font-bold mb-6">
              Sign Up for {selectedPlan}
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  name: "companyName",
                  label: "Company Name",
                  icon: FaBuilding,
                },
                {
                  name: "contactEmail",
                  label: "Contact Email",
                  icon: FaEnvelope,
                  type: "email",
                },
                {
                  name: "companyAddress",
                  label: "Company Address",
                  icon: FaMapMarkerAlt,
                },
                { name: "phoneNumber", label: "Phone Number", icon: FaPhone },
                {
                  name: "websiteUrl",
                  label: "Website URL",
                  icon: FaGlobe,
                  type: "url",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-[#515161] text-sm mb-1 flex items-center"
                  >
                    <field.icon className="mr-2 text-xs" /> {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#515161] rounded-md focus:ring-1 focus:ring-[#060640] text-sm"
                    required
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  htmlFor="businessDescription"
                  className="block text-[#515161] text-sm mb-1 flex items-center"
                >
                  <FaInfoCircle className="mr-2 text-xs" /> Description of
                  Business
                </label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#515161] rounded-md focus:ring-1 focus:ring-[#060640] text-sm"
                  rows="3"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="paymentDetails"
                  className="block text-[#515161] text-sm mb-1 flex items-center"
                >
                  <FaCreditCard className="mr-2 text-xs" /> Payment Details
                </label>
                <div className="flex items-center border border-[#515161] rounded-md p-2">
                  <input
                    type="text"
                    id="paymentDetails"
                    name="paymentDetails"
                    value={formData.paymentDetails}
                    onChange={handleChange}
                    placeholder="Card number"
                    className="flex-grow focus:outline-none text-sm"
                    required
                  />
                  <FaLock className="text-[#515161] ml-2 text-sm" />
                </div>
              </div>
              <div className="sm:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-[#060640] text-white py-2 px-4 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-opacity-90"
                >
                  Submit and Start Free Trial
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
      <footer className="w-full py-4 bg-[#060640] text-white flex justify-center mt-auto">
        <p className="text-sm">welcome to be with us </p>
      </footer>
    </div>
  );
};

export default PricingPage;
