import { Briefcase, Users, ShieldCheck, Rocket } from "lucide-react";
import React from "react";

const employerItems = [
  {
    icon: <Briefcase className="h-8 w-8 text-white" />,
    title: "See creators' projects directly",
    description:
      "Instead of relying on just a resume, ensure you're hiring based on real work.",
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Evaluate all-round skills",
    description:
      "Collaboration, time management, problem-solving — all in one place.",
  },
];

const creatorItems = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    title: "Stand out from fake creators",
    description: "Let your projects speak for themselves, not social noise.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-white" />,
    title: "Create ideas effortlessly",
    description:
      "Nexr's features boast of reducing time and effort by over 70%.",
  },
];

export default function Why() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/background2.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Why use Nexr?
        </h2>

        {/* Employers */}
        <div className="mb-10">
          <h3 className="text-white text-xl font-semibold mb-6">
            For Employers
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {employerItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-56 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-white border border-white/20"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Creators */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">
            For Creators
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {creatorItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-56 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-white border border-white/20"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
