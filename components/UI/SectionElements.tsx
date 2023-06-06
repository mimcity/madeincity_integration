import Link from "next/link";

interface SectionElementProps {
  children: React.ReactNode;
  link?: string;
}

export const Title = ({ children }: SectionElementProps) => {
  return (
    <h1 className="md:text-3xl text-2xl font-semibold text-neutral-700 md:leading-[30px] -tracking-wide">
      {children}
    </h1>
  );
};

export const Description = ({ children }: SectionElementProps) => {
  return <p className="text-neutral-700">{children}</p>;
};

export const DescriptionLink = ({
  children,
  link = "/",
}: SectionElementProps) => {
  return (
    <Link
      href={link}
      className="text-neutral-700 font-semibold underline md:block hidden"
    >
      {children}
    </Link>
  );
};
