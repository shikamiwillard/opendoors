import { mergeResolvers } from "merge-graphql-schemas";

import Job from "./Jobs";

const resolvers = [Job];

export default mergeResolvers(resolvers);