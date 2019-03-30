import { mergeTypes } from "merge-graphql-schemas";

import Job from "./Jobs";

const typeDefs = [Job];

export default mergeTypes(typeDefs, { all: true });