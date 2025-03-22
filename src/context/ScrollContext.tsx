import { createContext, useRef } from "react";

const ScrollContext = createContext<{ scrollToSection: () => void } | null>(
  null
);

export const ScrollContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      <div ref={sectionRef}>{children}</div>
    </ScrollContext.Provider>
  );
};
