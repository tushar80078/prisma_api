/*
  Warnings:

  - A unique constraint covering the columns `[age,name,email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_age_name_key` ON `user`;

-- CreateIndex
CREATE UNIQUE INDEX `User_age_name_email_key` ON `User`(`age`, `name`, `email`);
