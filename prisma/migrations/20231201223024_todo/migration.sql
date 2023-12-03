/*
  Warnings:

  - You are about to drop the column `priority` on the `Todos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Todos" DROP CONSTRAINT "Todos_categoriesId_fkey";

-- DropForeignKey
ALTER TABLE "Todos" DROP CONSTRAINT "Todos_userId_fkey";

-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "priority",
ADD COLUMN     "isImportant" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "priority";

-- AddForeignKey
ALTER TABLE "Todos" ADD CONSTRAINT "Todos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Todos" ADD CONSTRAINT "Todos_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
