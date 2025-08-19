import React, { useState } from "react";

const experiences = [
  {
    company: "Metacube Software Pvt Ltd",
    title: "Salesforce Admin",
    date: "2022 – Present",
    details: [
      "Built and customized Salesforce orgs for 25+ clients including Google and Amazon using Subscriber Management Console, Flow, TaskRay, Jira, and CLX Automation to automate onboarding workflows, reducing manual setup time by 40%.",
      "Developed reusable onboarding templates tailored to client needs for PwC and Deloitte, ensuring compliance and scalability using CLX Automation for Certinia package installations.",
      "Created client-specific reports and dashboards to monitor onboarding progress, improving client satisfaction by 20% for HP and Dell.",
      "Managed installation of Certinia packages with CLX Automation, automating onboarding tasks such as account setup and compliance checks, enhancing process efficiency by 10%."
    ],
    skills: ["Salesforce", "CLX Automation", "TaskRay", "Flow", "Jira"]
  },
  {
    title: "Frontend Developer",
    date: "2020 – Present",
    details: [
      "Developed and maintained responsive web applications using React and JavaScript, improving performance and user engagement.",
      "Implemented reusable UI components with Tailwind CSS and Styled Components, reducing development time by 25%.",
      "Integrated RESTful APIs and optimized data-fetching strategies for better app performance.",
      "Worked closely with designers to translate wireframes and mockups into functional interfaces.",
      "Improved website accessibility and SEO, achieving faster load times and higher search rankings.",
      "Collaborated with backend teams to ensure smooth integration of APIs and business logic."
    ],
    skills: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Styled Components",
      "REST APIs",
      "Git",
      "MongoDB",
      "Prisma",
      "Python"
    ]
  },
  {
    title: "UI/UX Designer (Food Zone App)",
    date: "2022",
    details: [
      "Designed a user-friendly food delivery app interface using Figma.",
      "Focused on intuitive navigation and visually appealing design.",
      "Improved user engagement by 15% during prototype testing."
    ],
    skills: ["Figma", "UI Design", "UX Research", "Prototyping", "User Testing"]
  }
];

function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-black w-[800px] mx-auto border border-gray-200 p-5">
      <h1 className="text-3xl font-bold mb-5">Experience</h1>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-3 cursor-pointer"
        >
          {/* Heading */}
          <div
            className="flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            <div>
              <h2 className="text-xl font-semibold">
                {exp.company ? `${exp.company} – ${exp.title}` : exp.title}
              </h2>
              <p className="text-sm text-gray-500">{exp.date}</p>
            </div>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </div>

          {/* Expandable Content */}
          {openIndex === index && (
            <div className="mt-3 text-gray-700 space-y-2">
              <ul className="list-disc pl-6">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Experience;
