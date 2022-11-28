
CREATE TABLE "public"."wishlists" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "created_by" text NOT NULL, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."wishlists" IS E'User wish lists';
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_wishlists_updated_at"
BEFORE UPDATE ON "public"."wishlists"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_wishlists_updated_at" ON "public"."wishlists" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

alter table "public"."wishlists" drop column "created_by" cascade;

alter table "public"."wishlists" add column "created_by" uuid
 not null;

alter table "public"."wishlists"
  add constraint "wishlists_created_by_fkey"
  foreign key ("created_by")
  references "public"."users"
  ("id") on update cascade on delete cascade;

alter table "public"."wishlists" alter column "title" set default 'Wish List';

CREATE TABLE "public"."follows" ("follower_id" uuid NOT NULL, "following_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("follower_id","following_id") , FOREIGN KEY ("follower_id") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("following_id") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE cascade);COMMENT ON TABLE "public"."follows" IS E'Whose lists do you want to see?';

alter table "public"."wishlists" rename column "created_by" to "created_by_id";

CREATE TABLE "public"."gift_ideas" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" text NOT NULL, "description" text, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "created_by_id" uuid NOT NULL, "link" text, "wishlist_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("created_by_id") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("wishlist_id") REFERENCES "public"."wishlists"("id") ON UPDATE cascade ON DELETE cascade);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_gift_ideas_updated_at"
BEFORE UPDATE ON "public"."gift_ideas"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_gift_ideas_updated_at" ON "public"."gift_ideas" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."claims" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "gift_idea_id" uuid NOT NULL, "user_id" uuid NOT NULL, "is_purchased" boolean NOT NULL DEFAULT false, PRIMARY KEY ("id") , FOREIGN KEY ("gift_idea_id") REFERENCES "public"."gift_ideas"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE cascade);COMMENT ON TABLE "public"."claims" IS E'Who is claiming to buy certain gifts?';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

alter table "public"."gift_ideas" rename column "link" to "url";

alter table "public"."gift_ideas" add column "removed" boolean
 not null default 'false';
