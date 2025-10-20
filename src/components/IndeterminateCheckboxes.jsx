import React from "react";
import Checkbox from "./Checkbox";

const IndeterminateCheckboxes = ({ data, handleChange = () => {} }) => {
  return (
    <div>
      {data?.map((checkBoxEntry) => {
        return (
          <div
            key={checkBoxEntry?.id}
            style={{
              marginLeft: "10px",
              padding: "5px",
              marginTop: "7px",
              borderLeft: "1px solid black",
            }}
          >
            <Checkbox
              name={checkBoxEntry?.name}
              status={checkBoxEntry?.status}
              handleChange={handleChange}
              checkBoxId={checkBoxEntry?.id}
            />
            {checkBoxEntry?.children && checkBoxEntry?.children?.length > 0 ? (
              <IndeterminateCheckboxes
                data={checkBoxEntry?.children}
                handleChange={handleChange}
              />
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default IndeterminateCheckboxes;
