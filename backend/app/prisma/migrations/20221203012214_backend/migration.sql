-- CreateEnum
CREATE TYPE "RoleEnumType" AS ENUM ('user', 'admin');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "photo" TEXT DEFAULT 'default.png',
    "verified" BOOLEAN DEFAULT false,
    "password" TEXT NOT NULL,
    "role" "RoleEnumType" DEFAULT 'user',
    "verificationCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lojas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "avaliation" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "lojas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detail" (
    "id" SERIAL NOT NULL,
    "deitalId" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "detail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "users_email_verificationCode_idx" ON "users"("email", "verificationCode");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_verificationCode_key" ON "users"("email", "verificationCode");

-- CreateIndex
CREATE UNIQUE INDEX "detail_deitalId_key" ON "detail"("deitalId");

-- AddForeignKey
ALTER TABLE "detail" ADD CONSTRAINT "detail_deitalId_fkey" FOREIGN KEY ("deitalId") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
