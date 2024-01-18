import React from "react";
import Layout from "../../containers/layouts";
import TinyMceEditor from "../../components/TinyMceEditor";

const AboutUs = () => {
  return (
    <>
      <Layout pageTitle="About Us Page">
        <div className="bg-white m-4 p-4 md:p-8 text-[9px] md:text-sm">
          <div>
            Update Page{" "}
            <span className="text-[7px] md:text-[12px]">
              Modify existing page
            </span>
          </div>
          <div className="pt-4">Page Title</div>
          <div className="text-[7px] md:text-[12px] pt-4">About Us</div>
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
      </Layout>
    </>
  );
};

export default AboutUs;
