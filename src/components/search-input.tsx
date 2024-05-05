import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

type SearchInputType = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

const SearchInput: FC<SearchInputType> = ({ searchValue, setSearchValue }) => {
  const handelInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="p-4">
      <label htmlFor="search">Spotify search tracks: </label>
      <input
        className="text-black w-96 h-8 rounded-md p-4 ml-4"
        type="text"
        id="search"
        name="search"
        value={searchValue}
        onChange={handelInput}
      />
    </div>
  );
};

export default SearchInput;
