import apolloClient from "@/apolloClient";
import { useApolloClient } from "@apollo/client";
export default function Home() {
  const client = useApolloClient();
  return <>home</>;
}
