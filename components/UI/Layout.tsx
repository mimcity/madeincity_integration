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
        fullWidth ? "w-full" : "max-w-7xl lg:px-8 sm:px-6 px-4",
        additional
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
