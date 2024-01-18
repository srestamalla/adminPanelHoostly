import React, { useCallback } from "react";
import Layout from "../../containers/layouts";
import CustomButton from "../../shared/CustomButton";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomTextInputField from "../../components/CustomFormsFields/CustomTextInputField";
import CustomFileUploadField from "../../components/CustomFormsFields/CustomFileUploadField";
import { useNavigate } from "react-router-dom";

const BannerManagement = () => {
  const navigate = useNavigate();

  const handleBackToListClick = () => {
    navigate("/banner-lists");
  };
  return (
    <>
      <Layout pageTitle="Banner Management">
        <div className="px-4">
          <div className="md:px-4 pt-8">
            <p className="text-sm md:text-xl font-normal">Banner Management</p>
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

          <div className="md:px-4 pt-4">
            <p className="text-xs font-normal">Add New Banner</p>
          </div>

          <div className="pt-4 md:px-4 text-xs font-normal">
            <Formik
              initialValues={{
                bannerName: "",
                bannerType: "",
                bannerFile: "",
              }}
              validationSchema={Yup.object({
                bannerName: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                bannerFile: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ values }) => (
                <Form>
                  <div className="pt-4">
                    <CustomTextInputField
                      label="Banner Name"
                      name="bannerName"
                      type="text"
                    />
                  </div>

                  <div id="my-radio-group" className="pt-4">
                    Banner Type
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      className="flex justify-between pt-4"
                    >
                      <div>
                        <label className="cursor-pointer bg-white text-black py-2 px-4 w-30">
                          <Field
                            type="radio"
                            name="bannerType"
                            value="Header"
                            className="hidden"
                          />
                          Header Banner
                        </label>
                      </div>
                      <div>
                        <label className="cursor-pointer bg-white text-black py-2 px-4">
                          <Field
                            type="radio"
                            name="bannerType"
                            value="Footer"
                            className="hidden"
                          />
                          Footer Banner
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <CustomFileUploadField
                      label="Banner File"
                      name="bannerFile"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>

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
              label="Upload Banner"
              onClick={() => {
                // Handle Approve button click
              }}
              smallDeviceWidth="32"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BannerManagement;
