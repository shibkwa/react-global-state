import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Headr";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header style={{ height: "50px", backgroundColor: "red" }}></Header>
      {children}
      <Footer />
    </>
  );
};
