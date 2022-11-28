
alter table "public"."gift_ideas" alter column "user_id" drop not null;

alter table "public"."gift_ideas" drop constraint "gift_ideas_user_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."gift_ideas" add column "user_id" uuid
--  null;

alter table "public"."gift_ideas" alter column "wishlist_id" set not null;
