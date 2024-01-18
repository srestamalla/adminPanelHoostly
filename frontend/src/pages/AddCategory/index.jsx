import React from "react";
import Layout from "../../containers/layouts";
import CustomButton from "../../shared/CustomButton";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="pt-4">
        <div>
          <label htmlFor={props.id || props.name} className="">
            {label}
          </label>
        </div>
        <div className="pt-2">
          <input className="text-input w-full h-10" {...field} {...props} />
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
const FileUploadInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="flex-col pt-4">
        <div>
          <label htmlFor={props.id || props.name} className="">
            {label}
          </label>
        </div>
        <div className="pt-2">
          <input className="text-input w-full h-10" {...field} {...props} />
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

const AddCategory = () => {
  return (
    <>
      <Layout pageTitle="Add Category">
        <div className="px-4">
          <div className="md:px-4 space-x-4 pt-8 pb-4 flex items-center text-[13px] justify-end ">
            <CustomButton
              bgColor="primaryYellow"
              textColor="black"
              label="Cancel"
              onClick={() => {
                // Handle Approve button click
              }}
              smallDeviceWidth="32"
            />
            <CustomButton
              bgColor="black"
              textColor="white"
              label="Create Category"
              onClick={() => {
                // Handle Approve button click
              }}
              smallDeviceWidth="32"
            />
          </div>
          <div className="md:px-4 md:py-4 flex justify-end text-[13px] ">
            <CustomButton
              bgColor="black"
              textColor="white"
              label="Back To List"
              onClick={() => {
                // Handle Approve button click
              }}
              smallDeviceWidth="32"
            />
          </div>
          <div className="md:px-4">
            <p className="text-sm md:text-xl font-normal">Categories</p>
          </div>
          <div className="md:px-4 pt-4">
            <p className="text-xs font-normal">Add New Category</p>
          </div>
          <div className="pt-4 md:px-4 text-xs font-norma">
            <Formik
              initialValues={{
                categoryName: "",
                parentCategory: "",
                categoryIcon: "",
              }}
              validationSchema={Yup.object({
                categoryName: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                parentCategory: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                categoryIcon: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <TextInput
                  label="Category Name"
                  name="categoryName"
                  type="text"
                />

                <TextInput
                  label="Parent Category"
                  name="parentCategory"
                  type="text"
                />

                <FileUploadInput
                  label="Category Icon"
                  name="categoryIcon"
                  type="file"
                />
              </Form>
            </Formik>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddCategory;
