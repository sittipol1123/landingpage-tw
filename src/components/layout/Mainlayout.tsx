"use client";
import Header from "./Header";

interface Props {
  children?: React.ReactNode;
}

const Mainlayout = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Mainlayout;
