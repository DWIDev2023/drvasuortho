// AppointmentFormDetailInput.js
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AppointmentFormDetailInput = ({
  Icon,
  type,
  placeholder,
  value,
  handleChange,
  name,
  id,
  required
}) => {
  return (
    <div className="p-1 flex">
      <div className="w-full relative">
        
        <input
          className={classNames("size-full focus-visible:outline-0 p-2 border-black text-sm border-b"
          )}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          id={id}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => handleChange(e)}
          required={required}
        />
      </div>
    </div>
  );
};

export default AppointmentFormDetailInput;
