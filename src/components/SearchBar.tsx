"use client";

import { useState } from "react";

type SearchBarProps = {
    onSearch: (term: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value); // envia o termo para o componente pai
    };

    return (
        <input
        type="text"
        placeholder="Pesquisar curso"
        value={searchTerm}
        onChange={handleChange}
        className="border rounded px-2 py-1 w-full max-w-md text-black"
        />
    );
};
