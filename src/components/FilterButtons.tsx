"use client";

import {useState} from "react";

interface FilterButtonsProps {
    options: string[];
    onSelect: (option: string) => void;
}

export const FilterButtons = ({options, onSelect}: FilterButtonsProps) => {
    const [selected, setSelected] = useState(options[0]);

    const handleClick = (option: string) => {
        setSelected(option);
        onSelect(option);
    };

    return (
        <div className="flex flex-wrap gap-2 justify-center my-6">
        {options.map((option) => (
            <button
            key={option}
            onClick={() => handleClick(option)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
                selected === option
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            >
            {option}
            </button>
        ))}
        </div>
    );
};