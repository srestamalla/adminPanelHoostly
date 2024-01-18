import React from "react";
import Layout from "../../containers/layouts";
import TinyMceEditor from "../../components/TinyMceEditor";

const TermsAndConditions = () => {
  return (
    <>
      <Layout pageTitle="Terms And Conditions">
        <div className="bg-white m-4 p-4 md:p-8 text-[9px] md:text-sm">
          <div>
            Update Page{" "}
            <span className="text-[7px] md:text-[12px]">
              Modify existing page
            </span>
          </div>
          <div className="pt-4">Page Title</div>
          <div className="text-[7px] md:text-[12px] pt-4">
            Terms And Conditions
          </div>
          <hr className=" text-green" />
          <div className="pt-4">
            Page Content{" "}
            <span className="text-[7px] md:text-[12px]">
              Full HTML Supported
            </span>
          </div>
          <div className="pt-4">
            <TinyMceEditor />r
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TermsAndConditions;
