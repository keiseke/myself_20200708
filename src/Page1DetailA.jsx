import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  return <h1>DetailAページです</h1>;
};
