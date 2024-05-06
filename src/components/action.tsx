import { FC } from "react";

const Action: FC<any> = ({ handelClick, name, className }) => {
  return (
    <button className={className} type="button" onClick={handelClick}>
      {name}
    </button>
  );
};

export default Action;
