// ./src/index.ts
import User from "./repository/User";
import Post from "./repository/doctor";
import { PrismaClient } from "@prisma/client";

// Prisma Connection
export const prisma = new PrismaClient();
prisma.$connect() ;
console.info("Postgres: Connected");