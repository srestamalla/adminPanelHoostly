import React from "react";
import Layout from "../../containers/layouts";
import TinyMceEditor from "../../components/TinyMceEditor";

const PrivacyPolicy = () => {
  return (
    <>
      <Layout pageTitle="Privacy Policy">
        <div>
          <div className="bg-white m-4 p-4 md:p-8 text-[9px] md:text-sm">
            <div>
              Update Page{" "}
              <span className="text-[7px] md:text-[12px]">
                Modify existing page
              </span>
            </div>
            <div className="pt-4">Page Title</div>
            <div className="text-[7px] md:text-[12px] pt-4">Privacy Policy</div>
            <hr className=" text-green" />
            <div className="pt-4">
              Page Content{" "}
              <span className="text-[7px] md:text-[12px]">
                Full HTML Supported
              </span>
            </div>
            <div className="pt-4">
              <TinyMceEditor />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
