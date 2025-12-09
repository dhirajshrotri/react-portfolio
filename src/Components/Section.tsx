import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-start px-8 md:px-16 snap-start "
    >
      <h2 className="text-3xl font-semibold mb-6 text-red-400">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
