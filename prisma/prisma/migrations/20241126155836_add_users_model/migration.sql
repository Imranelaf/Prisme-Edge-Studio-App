/*
  Warnings:

  - You are about to alter the column `genre` on the `Game` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `description` on the `Game` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Made the column `genre` on table `Game` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Game` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Game` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "genre" SET NOT NULL,
ALTER COLUMN "genre" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "price" SET NOT NULL;

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLogin" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
