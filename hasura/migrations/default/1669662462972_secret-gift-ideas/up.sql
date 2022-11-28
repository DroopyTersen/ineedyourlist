
alter table "public"."gift_ideas" alter column "wishlist_id" drop not null;

alter table "public"."gift_ideas" add column "user_id" uuid null;

alter table "public"."gift_ideas"
  add constraint "gift_ideas_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update cascade on delete cascade;

alter table "public"."gift_ideas" alter column "user_id" set not null;
