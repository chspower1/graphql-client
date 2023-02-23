import { useRouter } from "next/router";

const Details = () => {
  const { id } = useRouter().query;
  return <>detials {id}</>;
};
export default Details;
