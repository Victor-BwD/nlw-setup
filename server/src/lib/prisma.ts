import { PrismaClient } from "@prisma/client" // Importante para ter acesso as tabelas do banco de dados

export const prisma = new PrismaClient()