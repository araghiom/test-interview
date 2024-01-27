/*
  Warnings:

  - You are about to drop the column `social` on the `SocialDetail` table. All the data in the column will be lost.
  - Added the required column `type` to the `SocialDetail` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SocialDetail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "link" TEXT NOT NULL
);
INSERT INTO "new_SocialDetail" ("id", "link") SELECT "id", "link" FROM "SocialDetail";
DROP TABLE "SocialDetail";
ALTER TABLE "new_SocialDetail" RENAME TO "SocialDetail";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
