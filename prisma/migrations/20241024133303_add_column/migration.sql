/*
  Warnings:

  - You are about to drop the column `user_id` on the `transactions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `transactions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `merk` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_user_id_fkey";

-- DropIndex
DROP INDEX "transaction_fk_2";

-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "code" VARCHAR(255) NOT NULL,
ADD COLUMN     "merk" VARCHAR(155) NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "user_id",
ADD COLUMN     "code" VARCHAR(110) NOT NULL,
ADD COLUMN     "name" VARCHAR NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "transactions_code_key" ON "transactions"("code");
