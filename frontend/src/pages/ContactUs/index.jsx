import React from "react";
import Layout from "../../containers/layouts";
import contactTableRowData from "../../data/contactTableRowData";
import fileIcon from "../../assets/icons/fileIcon.png";

const ContactUs = () => {
  return (
    <>
      <Layout pageTitle="Contact Us">
        <div className="md:px-4">
          <div className="px-4 pt-8">
            <p className="text-sm md:text-xl font-normal">
              Data from Contact Form
            </p>
          </div>
          <div className="p-4 w-screen md:w-auto">
            <table className="w-full border-collapse p-2">
              <thead className="bg-white text-darkBlue text-[8px] md:text-[13px]">
                <tr>
                  <th className="px-2 py-2 border-b border-lightGray"></th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Name
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Email
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Phone No
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Message
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    File
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {contactTableRowData.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white text-[8px] md:text-[13px]"
                  >
                    <td className="pl-2 py-4  text-center border-b border-lightGray">
                      <div>
                        <input
                          id={`checkbox${item.id}`}
                          type="checkbox"
                          value=""
                          className="w-3 h-3 text-blue-600 bg-gray-100 border-gray rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray focus:ring-2 dark:bg-gray dark:border-gray"
                        />
                      </div>
                    </td>
                    <td className="pl-2 py-4 font-medium border-b border-lightGray">
                      <div className="flex justify-left items-center gap-1 md:gap-3 md:space-x-3">
                        <img
                          className="inline-block h-3 w-3 md:h-6 md:w-6 rounded-full ring-white"
                          src={item.image}
                          alt="User Profile thumbnail"
                        ></img>
                        <div className="whitespace-pre">{item.name}</div>
                      </div>
                    </td>
                    <td className=" py-4 text-center text-tableGray border-b border-lightGray">
                      {item.email}
                    </td>
                    <td className=" py-4 text-center  text-tableGray border-b border-lightGray">
                      {item.phoneNo}
                    </td>
                    <td className=" py-4 text-center text-tableGray border-b border-lightGray">
                      {item.message}
                    </td>
                    <td className=" py-4 text-center text-tableGray border-b border-lightGray">
                      <img
                        src={fileIcon}
                        alt="File icon"
                        className="w-3 h-3 md:w-auto md:h-auto"
                      />
                    </td>
                    <td className=" py-4 text-center border-b border-lightGray">
                      {item.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactUs;
