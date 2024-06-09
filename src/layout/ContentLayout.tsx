type layoutProps = {
  children: React.ReactNode;
};

const ContentLayout = ({ children }: layoutProps) => {
  return <div className="mx-auto my-0 w-[1440px]">{children}</div>;
};

export default ContentLayout;
