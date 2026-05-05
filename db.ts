import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "node:path";

const connectionUrl = process.env.DATABASE_URL;

if (!connectionUrl) {
  throw new Error("DATABASE_URL não está definida.");
}

const sqliteUrl = connectionUrl.startsWith("file:")
  ? `file:${path.resolve(connectionUrl.replace(/^file:/, ""))}`
  : connectionUrl;

const globalForPrisma = globalThis as typeof globalThis & {
  db?: PrismaClient;
};

export const db =
  globalForPrisma.db ??
  new PrismaClient({
    adapter: new PrismaBetterSqlite3({
      url: sqliteUrl,
    }),
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.db = db;
}
