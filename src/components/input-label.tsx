import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface InputType {
  id: string;
  name: string;
  label: string;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const InputLabel: FC<InputType> = ({
  name,
  id,
  label,
  inputValue,
  setInputValue,
}) => {
  const handelInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-4">
      <label htmlFor={name}>{label} </label>
      <input
        className="text-black w-96 h-8 rounded-md p-4 ml-4"
        type="text"
        id={id}
        name={name}
        value={inputValue}
        onChange={handelInput}
      />
    </div>
  );
};

export default InputLabel;
