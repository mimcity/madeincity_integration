import Link from "next/link";

interface SectionElementProps {
  children: React.ReactNode;
  link?: string;
}

export const Title = ({ children }: SectionElementProps) => {
  return (
    <h1 className="text-3xl font-semibold text-neutral-700 leading-[30px] tracking-[-2%]">
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
    <Link href={link} className="text-neutral-700 font-semibold underline">
      {children}
    </Link>
  );
};
