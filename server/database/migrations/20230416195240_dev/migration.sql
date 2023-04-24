/*
  Warnings:

  - You are about to drop the column `authorId` on the `Project` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "githuburl" TEXT NOT NULL DEFAULT 'https://github.com/khanshifaul/',
    "projecturl" TEXT NOT NULL DEFAULT 'https://khanshifaul.github.io/',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME
);
INSERT INTO "new_Project" ("createdAt", "deletedAt", "description", "featured", "githuburl", "id", "projecturl", "thumbnail", "title", "updatedAt") SELECT "createdAt", "deletedAt", "description", "featured", "githuburl", "id", "projecturl", "thumbnail", "title", "updatedAt" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
