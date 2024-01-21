import React, { useCallback, useState } from "react";
import Layout from "../../containers/layouts";
import CustomButton from "../../shared/CustomButton";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomTextInputField from "../../components/CustomFormsFields/CustomTextInputField";
import CustomFileUploadField from "../../components/CustomFormsFields/CustomFileUploadField";
import { useNavigate } from "react-router-dom";

const BannerManagement = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(null);

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
                  .max(20, "Must be 20 characters or less")
                  .min(3, "Must be 3 characters or more")
                  .required("Required"),
                bannerType: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values, "values");
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <div className="pt-4">
                  <CustomTextInputField
                    id="bannerName"
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
                      <label
                        className={`cursor-pointer text-black py-2 px-4 w-30 ${
                          isActive === 1 ? "bg-primaryYellow" : "bg-white"
                        }`}
                        onClick={() => {
                          setIsActive(1);
                        }}
                      >
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
                      <label
                        className={`cursor-pointer  text-black py-2 px-4 ${
                          isActive === 2 ? "bg-primaryYellow" : "bg-white"
                        }`}
                        onClick={() => {
                          setIsActive(2);
                        }}
                      >
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
                    id="bannerFile"
                    label="Banner File"
                    name="bannerFile"
                  />
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
                  <button
                    className={`bg-black text-white p-1 md:py-2 px-3 rounded-full font-normal w-32 md:w-44
                whitespace-pre`}
                    type="submit"
                  >
                    Upload Banner
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BannerManagement;
