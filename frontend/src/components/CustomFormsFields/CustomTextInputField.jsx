import React from "react";
import { useField } from "formik";

const CustomTextInputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div>
        <div>
          <label htmlFor={props.id || props.name} className="">
            {label}
          </label>
        </div>
        <div className="pt-2">
          <input
            className="text-input pl-2 w-full h-10"
            {...field}
            {...props}
          />
        </div>
      </div>
      <div>
        {meta.touched && meta.error ? (
          <div className="error text-red text-xs">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

export default CustomTextInputField;
