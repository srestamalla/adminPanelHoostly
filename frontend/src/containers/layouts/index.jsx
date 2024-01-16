import React from "react";
import Sidebar from "../../shared/sidebar";
import Header from "../../shared/header";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="flex min-h-full">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header pageTitle={pageTitle} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
