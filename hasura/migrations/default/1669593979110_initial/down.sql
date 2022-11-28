
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."gift_ideas" add column "removed" boolean
--  not null default 'false';

alter table "public"."gift_ideas" rename column "url" to "link";

DROP TABLE "public"."claims";

DROP TABLE "public"."gift_ideas";

alter table "public"."wishlists" rename column "created_by_id" to "created_by";

DROP TABLE "public"."follows";

ALTER TABLE "public"."wishlists" ALTER COLUMN "title" drop default;

alter table "public"."wishlists" drop constraint "wishlists_created_by_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."wishlists" add column "created_by" uuid
--  not null;

comment on column "public"."wishlists"."created_by" is E'User wish lists';
alter table "public"."wishlists" alter column "created_by" drop not null;
alter table "public"."wishlists" add column "created_by" text;

DROP TABLE "public"."wishlists";
