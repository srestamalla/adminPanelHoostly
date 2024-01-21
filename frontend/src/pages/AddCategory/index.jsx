import React from "react";
import Layout from "../../containers/layouts";
import CustomButton from "../../shared/CustomButton";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import CustomTextInputField from "../../components/CustomFormsFields/CustomTextInputField";
import CustomFileUploadField from "../../components/CustomFormsFields/CustomFileUploadField";

const AddCategory = () => {
  const navigate = useNavigate();

  const handleBackToListClick = () => {
    navigate("/category-management");
  };
  return (
    <>
      <Layout pageTitle="Add Category">
        <div className="px-4">
          <Formik
            initialValues={{
              categoryName: "",
              parentCategory: "",
              categoryIcon: "",
            }}
            validationSchema={Yup.object({
              categoryName: Yup.string()
                .min(5, "Must be 5 characters or more")
                .required("Required"),
              parentCategory: Yup.string()
                .min(5, "Must be 5 characters or more")
                .required("Required"),
              // categoryIcon: Yup.file().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(values, "values");
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <div className="md:px-4 space-x-4 pt-8 pb-4 flex items-center text-[13px] justify-end ">
                <button
                  className={`bg-primaryYellow text-black p-1 md:py-2 px-3 rounded-full font-normal w-32 md:w-44
                whitespace-pre`}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className={`bg-black text-white p-1 md:py-2 px-3 rounded-full font-normal w-32 md:w-44
                whitespace-pre`}
                  type="submit"
                >
                  Create Category
                </button>
              </div>
              <div className="md:px-4 md:py-4 flex justify-end text-[13px] ">
                <CustomButton
                  bgColor="black"
                  textColor="white"
                  label="Back To List"
                  onClick={handleBackToListClick}
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
                <div className="pt-4">
                  <CustomTextInputField
                    id="categoryName"
                    label="Category Name"
                    name="categoryName"
                    type="text"
                  />
                </div>

                <div className="pt-4">
                  <CustomTextInputField
                    id="parentCategory"
                    label="Parent Category"
                    name="parentCategory"
                    type="text"
                  />
                </div>

                <div className="pt-4">
                  <CustomFileUploadField
                    id="categoryIcon"
                    label="Category Icon"
                    name="categoryIcon"
                  />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </Layout>
    </>
  );
};

export default AddCategory;
