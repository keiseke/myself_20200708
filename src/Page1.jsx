import { Link, Route, Switch } from "react-router-dom";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  // console.log(arr);

  return (
    <>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>detailA</Link>
      <br />
      <Link to="/page1/detailB">detailB</Link>
    </>
  );
};
