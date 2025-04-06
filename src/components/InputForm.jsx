import React from "react";

const InputForm = ({
  inputClass,
  inputName,
  inputType,
  inputPlaceholder,
  inputValue,
  inputOnChange,
  inputRequired,
  inputAutoComplete,
}) => {
  return (
    <>
      <input
        className={inputClass}
        name={inputName}
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={inputOnChange}
        required={inputRequired}
        autoComplete={inputAutoComplete}
      />
    </>
  );
};

export default InputForm;
