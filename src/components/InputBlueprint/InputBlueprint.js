import React from "react";

const InputBlueprint = ({
  label,
  name,
  inputType,
  formState,
  register,
  options,
}) => {
  let blueprint;

  const error = formState?.errors?.[name];

  switch (inputType) {
    // firstname lastname street city
    case "input":
      blueprint = (
        <>
          <label htmlFor={name}>{label}</label>
          <input
            type="text"
            id={name}
            className={!!error ? "invalid" : "valid"}
            {...register}
          />
        </>
      );
      break;

    // startdate birthday
    case "date":
      blueprint = (
        <>
          <label htmlFor={name}>{label}</label>
          <input
            type="date"
            id={name}
            className={!!error ? "invalid" : "valid"}
            {...register}
          />
        </>
      );
      break;

    // startdate birthday
    case "number":
      blueprint = (
        <>
          <label htmlFor={name}>{label}</label>
          <input
            type="number"
            id={name}
            className={!!error ? "invalid" : "valid"}
            {...register}
          />
        </>
      );
      break;

    //   state department
    case "select":
      blueprint = (
        <>
          <label htmlFor={name}>{label}</label>
          <select
            id={name}
            className={!!error ? "invalid" : "valid"}
            {...register}
          >
            {options.map((option, i) => (
              <option value={option.value} key={i}>
                {option.name}
                {/* {console.log(option.name)} */}
              </option>
            ))}
          </select>
        </>
      );
      break;

    default:
      break;
  }

  return <>{blueprint}</>;
};

export default InputBlueprint;
