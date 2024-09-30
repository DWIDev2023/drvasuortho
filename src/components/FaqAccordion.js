"use client"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const FaqAccordion = ({ title, answer, accordionOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(accordionOpen);
  }, [accordionOpen]);
  return (
    <>
      <div className="accordion p-3">
        <div className="accordion-header" onClick={toggleAccordion}>
          <button className=" w-full flex justify-between py-4 font-semibold">
            <span> {title}</span>
            <span>{isOpen ? <IconChevronDown /> : <IconChevronUp />}</span>
          </button>
        </div>
        {isOpen && <div className={`accordion-content pb-2`}>{answer}</div>}
      </div>
    </>
  );
};

export default FaqAccordion;
