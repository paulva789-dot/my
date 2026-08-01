type Props = {
  children: React.ReactNode;
};

function PageTransition({ children }: Props) {
  return <div>{children}</div>;
}

export default PageTransition;