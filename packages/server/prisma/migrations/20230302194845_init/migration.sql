/*
  Warnings:

  - You are about to drop the column `authorId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Topic` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "authorId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Topic" DROP COLUMN "authorId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "messageId" INTEGER,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
