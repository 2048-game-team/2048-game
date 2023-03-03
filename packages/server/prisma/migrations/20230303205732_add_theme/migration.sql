-- CreateTable
CREATE TABLE "UserTheme" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "theme" TEXT NOT NULL,

    CONSTRAINT "UserTheme_pkey" PRIMARY KEY ("id")
);
