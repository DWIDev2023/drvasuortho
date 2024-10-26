import React from "react";

const AppointmentInput = ({
  placeholder,
  name,
  inputType,
  selectType,
  onChange,
  required,
  col,
  home,
  value,
}) => {
  if (inputType === "select") {
    return (
      <div className={`${col}`}>
        <select
          name={name}
          className={`p-2 px-5 rounded ${home ? "" : "bg-transparent"} border w-full text-sm max-sm:py-2`}
          onChange={onChange}
          required={required}
        >
          <option value="0" disabled>
            Select an {placeholder}
          </option>
          {selectType === "speciality" ? (
            <>
              <option value="1"> Joint Replacement</option>
              <option value="2"> General Orthopedics </option>
              <option value="3"> Sports Medicine </option>
              <option value="4"> Robotic Knee Replacement </option>
            </>
          ) : name === "doctor" ? (
            selectType?.map((option, index) => (
              <option key={index} value={option._id}>
                Dr. {option.firstName} {option.lastName}
              </option>
            ))
          ) : (
            ""
          )}
        </select>
      </div>
    );
  } else {
    return (
      <div className={`${col}`}>
        <input name={name} placeholder={placeholder} className={`p-2 px-5 rounded w-full text-sm ${home ? "" : "bg-transparent"} border`} required={required} />
      </div>
    );
  }
};

export default AppointmentInput;
