"use client";

import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo-cient";

export function Providers({ children }: React.PropsWithChildren) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
