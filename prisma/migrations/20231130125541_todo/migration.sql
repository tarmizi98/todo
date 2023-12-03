/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Todos` table. All the data in the column will be lost.
  - Added the required column `categoriesId` to the `Todos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Todos" DROP CONSTRAINT "Todos_categoryId_fkey";

-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "categoryId",
ADD COLUMN     "categoriesId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Todos" ADD CONSTRAINT "Todos_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
