import { FormEvent } from "react";
import s from "./SearchBar.module.css";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const inputValue = (form.elements.namedItem("search") as HTMLInputElement)
      .value;

    onSearch(inputValue.trim());
    form.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
