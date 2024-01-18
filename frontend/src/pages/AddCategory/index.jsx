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
                <div className="pt-4">
                  <CustomTextInputField
                    label="Category Name"
                    name="categoryName"
                    type="text"
                  />
                </div>

                <div className="pt-4">
                  <CustomTextInputField
                    label="Parent Category"
                    name="parentCategory"
                    type="text"
                  />
                </div>

                <div className="pt-4">
                  <CustomFileUploadField
                    label="Category Icon"
                    name="categoryIcon"
                  />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddCategory;
