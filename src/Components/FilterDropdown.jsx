import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const FilterDropdown = ({ title, options = [], selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[411px] ">
      {/* Conteneur du dropdown */}
      <div
        className={`h-[40px] flex flex-row justify-between items-center py-[14px] px-[6px] rounded-full cursor-pointer transition-all 
        ${isOpen ? "border-2 border-Primary" : "border border-Textcolor"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-[14px] font-medium">{title}</p>
        <div className="flex flex-row gap-[20px] text-[12px] font-light items-center">
          <span className="text-[12px] font-light leading-[26px]">{selected}</span>
          <IoIosArrowDown size={16} className={`${isOpen ? "rotate-180" : "rotate-0"} transition-transform`} />
        </div>
      </div>

      {/* Liste des options */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-Primary mt-1 rounded-lg shadow-md z-10">
          <div className={`max-h-[160px] overflow-y-auto ${options.length > 4 ? "scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" : ""}`}>
            {options.map((option, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;