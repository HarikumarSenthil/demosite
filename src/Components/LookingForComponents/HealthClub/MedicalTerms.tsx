"use client";

import { useState } from "react";
import Icon from "@/Icons/Icon";

interface GlossarySectionProps {
  letter: string;
  terms?: { term: string; definition: string }[];
  expanded: string | null;
  onToggle: (letter: string) => void;
  selectedColor: string;
}

const GlossarySection = ({
  letter,
  terms,
  expanded,
  onToggle,
  selectedColor,
}: GlossarySectionProps) => {
  return (
    <div className="border rounded-2xl mb-4 overflow-hidden transition-all">
      <button
        onClick={() => onToggle(letter)}
        className={`w-full flex justify-between items-center p-4 text-lg font-medium border border-skyblue transition-all focus:outline-none ${
          expanded === letter
            ? `${selectedColor} font-inter`
            : "text-darkCustomBlue bg-white hover:bg-gray-100 font-inter"
        }`}
        style={{
          background:
            expanded === letter
              ? "linear-gradient(92.76deg, #D2EAEF 17.16%, #86BBF1 89.78%)"
              : undefined,
        }}
      >
        <span className="font-semibold">{letter}</span>
        <span className="text-xl">
          {expanded === letter ? <Icon type="drop-up-icon" /> : <Icon type="drop-down-icon" />}
        </span>
      </button>
      {expanded === letter && (
        <div className="p-4 bg-white">
          {terms?.length ? (
            <table className="w-full table-auto border-collapse">
              <tbody>
                {terms.map(({ term, definition }, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 font-medium">{term}</td>
                    <td className="border px-4 py-2">{definition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 font-poppins">No terms available for this section.</p>
          )}
        </div>
      )}
    </div>
  );
};

const MedicalTerms = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleSection = (letter: string) => {
    setExpanded(expanded === letter ? null : letter);
  };

  return (
    <div className="max-w-6xl p-6">
      <h1 className="text-3xl font-extrabold mb-4 font-inter text-darkCustomBlue">
        Glossary of Medical Terms
      </h1>

      <div className="w-full">
        {[
          { letter: "A", terms: [] },
          {
            letter: "B",
            terms: [
              { term: "Abdomen", definition: "The tummy area from the lower ribs to the pelvis." },
              { term: "Acute", definition: "Sudden and severe." },
              { term: "Adhesions", definition: "Scars that connect two or more body structures together." },
            ],
          },
          { letter: "C", terms: [] },
        ].map(({ letter, terms }) => (
          <GlossarySection
            key={letter}
            letter={letter}
            terms={terms}
            expanded={expanded}
            onToggle={toggleSection}
            selectedColor="text-darkCustomBlue"
          />
        ))}
      </div>
    </div>
  );
};

export default MedicalTerms;
