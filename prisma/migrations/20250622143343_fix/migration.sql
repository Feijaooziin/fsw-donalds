/*
  Warnings:

  - You are about to drop the column `avatarIamageUrl` on the `Restaurant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `avatarImageUrl` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "avatarIamageUrl",
ADD COLUMN     "avatarImageUrl" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_slug_key" ON "Restaurant"("slug");
