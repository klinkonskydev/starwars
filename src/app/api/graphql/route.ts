import { createSchema, createYoga } from "graphql-yoga";
import { typeDefs } from "../../../lib/graphql/schema";
import { resolvers } from "../../../lib/graphql/resolvers";

interface NextContext {
  params: Promise<Record<string, string>>;
}

const { handleRequest } = createYoga<NextContext>({
  schema: createSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  }),
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
