'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export default function TextRefinementUI() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const options = ['More casual', 'More formal', 'Shorter', 'Explained further'];

  return (
    <>
      {isVisible && (
        <div className="relative mx-auto max-w-3xl rounded-lg bg-[#1a1a1a] p-6 text-white">
          <button
            className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
            aria-label="Close"
            onClick={handleClose}
          >
            <X className="h-5 w-5" />
          </button>

          <div className="py-4">
            <p className="mb-6 text-sm">
              How can I assist you further? Would you like the passage to be...
            </p>

            <div className="mb-4 flex flex-wrap gap-3">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`
                rounded-full border border-[#333] px-4 py-2 transition-colors
                ${
                  selectedOptions.includes(option)
                    ? 'bg-[#333] text-white'
                    : 'bg-transparent text-white hover:bg-[#333]'
                }
              `}
                >
                  {option}
                </button>
              ))}

              <button className="rounded-full bg-[#4CAF50] px-4 py-2 text-white transition-colors hover:bg-[#45a049]">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
