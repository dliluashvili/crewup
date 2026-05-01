-- AlterTable
ALTER TABLE "users" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "countries" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "phone_code" TEXT NOT NULL,
    "emoji_u" TEXT NOT NULL,
    "native" TEXT NOT NULL,
    "original_id" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "country_id" UUID NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "languages" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "language_levels" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "language_levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_languages" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "languageId" UUID NOT NULL,
    "languageTitle" VARCHAR(255) NOT NULL,
    "languageLevelId" UUID NOT NULL,
    "languageLevelTitle" VARCHAR(255) NOT NULL,

    CONSTRAINT "user_languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professional_links" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "position" SMALLINT NOT NULL DEFAULT 0,

    CONSTRAINT "professional_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_professional_links" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "professionalLinkId" UUID NOT NULL,
    "professionalLinkTitle" VARCHAR(255) NOT NULL,
    "value" VARCHAR(500) NOT NULL,

    CONSTRAINT "user_professional_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seniority_levels" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "position" SMALLINT NOT NULL DEFAULT 0,

    CONSTRAINT "seniority_levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_skills" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "skillId" UUID NOT NULL,
    "skillTitle" VARCHAR(255) NOT NULL,
    "years" SMALLINT NOT NULL,

    CONSTRAINT "user_skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_network_links" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "position" SMALLINT NOT NULL DEFAULT 0,

    CONSTRAINT "social_network_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_social_network_links" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "social_network_link_id" UUID NOT NULL,
    "social_network_link_title" VARCHAR(255) NOT NULL,
    "value" VARCHAR(500) NOT NULL,

    CONSTRAINT "user_social_network_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_work_experiences" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "occupation" VARCHAR(255) NOT NULL,
    "from" DATE NOT NULL,
    "to" DATE,
    "current" BOOLEAN NOT NULL DEFAULT false,
    "link" VARCHAR(500),

    CONSTRAINT "user_work_experiences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "cities_country_id_idx" ON "cities"("country_id");

-- CreateIndex
CREATE INDEX "idx_user_language" ON "user_languages"("userId");

-- CreateIndex
CREATE INDEX "idx_language_user" ON "user_languages"("languageId");

-- CreateIndex
CREATE INDEX "idx_user_prof_link" ON "user_professional_links"("userId");

-- CreateIndex
CREATE INDEX "idx_prof_link_user" ON "user_professional_links"("professionalLinkId");

-- CreateIndex
CREATE INDEX "idx_user_skill" ON "user_skills"("userId");

-- CreateIndex
CREATE INDEX "idx_skill_user" ON "user_skills"("skillId");

-- CreateIndex
CREATE INDEX "idx_user_social_link" ON "user_social_network_links"("user_id");

-- CreateIndex
CREATE INDEX "idx_social_link_user" ON "user_social_network_links"("social_network_link_id");

-- CreateIndex
CREATE INDEX "user_work_experiences_user_id_idx" ON "user_work_experiences"("user_id");

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_languages" ADD CONSTRAINT "user_languages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_languages" ADD CONSTRAINT "user_languages_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_languages" ADD CONSTRAINT "user_languages_languageLevelId_fkey" FOREIGN KEY ("languageLevelId") REFERENCES "language_levels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_professional_links" ADD CONSTRAINT "user_professional_links_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_professional_links" ADD CONSTRAINT "user_professional_links_professionalLinkId_fkey" FOREIGN KEY ("professionalLinkId") REFERENCES "professional_links"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_skills" ADD CONSTRAINT "user_skills_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_skills" ADD CONSTRAINT "user_skills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_social_network_links" ADD CONSTRAINT "user_social_network_links_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_social_network_links" ADD CONSTRAINT "user_social_network_links_social_network_link_id_fkey" FOREIGN KEY ("social_network_link_id") REFERENCES "social_network_links"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_work_experiences" ADD CONSTRAINT "user_work_experiences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
