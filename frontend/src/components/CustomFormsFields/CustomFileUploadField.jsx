import React, { useCallback } from "react";
import { useField } from "formik";
import { useDropzone } from "react-dropzone";

const CustomFileUploadField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const onDrop = useCallback(
    (acceptedFiles) => {
      helpers.setValue(acceptedFiles[0]);
    },
    [helpers]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div>
        <label htmlFor={props.id || props.name} className="">
          {label}
        </label>
      </div>
      <div
        {...getRootProps()}
        className={`pt-4 text-input text-center w-full h-20 bg-white ${
          isDragActive ? "border-dashed border-blue-500" : "border-gray-300"
        } flex items-center justify-center`}
      >
        <input {...getInputProps()} />
        <p>
          {isDragActive
            ? "Drop the file here ..."
            : "Drop image here to upload or click to select a file."}
        </p>
      </div>
      {meta.touched && meta.error && (
        <div className="error text-red text-xs">{meta.error}</div>
      )}
    </div>
  );
};

export default CustomFileUploadField;
