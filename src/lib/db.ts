// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaNeon } = require("@prisma/adapter-neon");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { neon } = require("@neondatabase/serverless");

type PrismaClientType = InstanceType<typeof PrismaClient>;
const globalForPrisma = globalThis as unknown as { prisma: PrismaClientType };

function createPrismaClient(): PrismaClientType {
  const connectionString = process.env.DATABASE_URL!;
  const sql = neon(connectionString);
  const adapter = new PrismaNeon(sql);
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
}

export const db: PrismaClientType = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
