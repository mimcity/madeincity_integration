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
        fullWidth
          ? "w-full mx-auto"
          : "max-w-screen-2xl w-full mx-auto lg:px-15 md:px-8 px-4",
        additional
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
