import { Header } from "../atoms/layout/Headr";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header style={{ height: "50px", backgroundColor: "red" }}></Header>
      {children}
    </>
  );
};
