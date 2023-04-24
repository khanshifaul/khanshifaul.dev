/*
  Warnings:

  - You are about to drop the column `authorName` on the `Project` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "github" TEXT NOT NULL DEFAULT 'https://github.com/khanshifaul/',
    "url" TEXT NOT NULL DEFAULT 'https://khanshifaul.github.io/',
    "authorId" INTEGER NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "Project_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("createdAt", "deletedAt", "description", "featured", "github", "id", "thumbnail", "title", "updatedAt", "url") SELECT "createdAt", "deletedAt", "description", "featured", "github", "id", "thumbnail", "title", "updatedAt", "url" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
