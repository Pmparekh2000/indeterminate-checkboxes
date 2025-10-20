import React, { useEffect, useRef } from "react";
import { STATUS } from "../utils/constant";

const Checkbox = ({
  name,
  status,
  handleChange = () => {},
  checkBoxId = "",
}) => {
  const checkBoxRef = useRef();
  useEffect(() => {
    if (status === STATUS.INDETERMINATE) {
      checkBoxRef.current.indeterminate = true;
    } else {
      checkBoxRef.current.indeterminate = false;
    }
  }, [status]);
  return (
    <div>
      <input
        ref={checkBoxRef}
        type="checkbox"
        checked={status === STATUS.CHECKED}
        onChange={() => handleChange(checkBoxId)}
      />
      <label>{name}</label>
    </div>
  );
};

export default Checkbox;
