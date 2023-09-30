import { ApolloServer,gql } from "apollo-server";
import {typeDefs} from "./schema"
import {Query} from "./resolvers"
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const server=new ApolloServer({
    typeDefs,
    resolvers:{
        Query
    },
    context:{
        prisma
    }
})

server.listen().then(({url}) => {
    console.log(`Server started on ${url}`);
})