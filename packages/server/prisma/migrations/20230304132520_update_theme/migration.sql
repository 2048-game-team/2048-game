/*
  Warnings:

  - You are about to drop the `UserTheme` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserTheme";

-- CreateTable
CREATE TABLE "Theme" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "theme" TEXT NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);
