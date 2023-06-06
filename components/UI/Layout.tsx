import classNames from "classnames";
import React, { ReactNode } from "react";

const Layout = ({
  children,
  fullWidth = false,
  additional,
}: {
  children: ReactNode;
  fullWidth?: boolean;
  additional?: string;
}) => {
  return (
    <div
      className={classNames(
        "mx-auto",
        fullWidth ? "w-full" : "max-w-screen-2xl mx-auto lg:px-15 md:px-8 px-4",
        additional
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
