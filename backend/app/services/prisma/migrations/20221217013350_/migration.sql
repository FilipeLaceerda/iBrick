-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "detail_deitalId_key" ON "detail"("deitalId");

-- AddForeignKey
ALTER TABLE "detail" ADD CONSTRAINT "detail_deitalId_fkey" FOREIGN KEY ("deitalId") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
