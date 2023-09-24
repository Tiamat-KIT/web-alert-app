-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "auth";

-- CreateTable
CREATE TABLE "public"."alarms" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "repeatDaily" BOOLEAN NOT NULL,
    "repeatWeekly" BOOLEAN NOT NULL,
    "repeatMonthly" BOOLEAN NOT NULL,
    "dayOfWeek" INTEGER,
    "dayOfMonth" INTEGER,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "alarms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "auth"."User"("name");

-- AddForeignKey
ALTER TABLE "public"."alarms" ADD CONSTRAINT "alarms_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
