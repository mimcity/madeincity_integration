import classNames from "classnames";
import React, { ReactNode } from "react";

const Layout = ({
  children,
  fullWidth = false,
}: {
  children: ReactNode;
  fullWidth?: boolean;
}) => {
  return (
    <div
      className={classNames(
        "mx-auto",
        fullWidth ? "w-full" : "max-w-7xl lg:px-8 sm:px-6 px-4"
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
