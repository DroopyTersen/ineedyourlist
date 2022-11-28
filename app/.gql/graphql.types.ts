import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Who is claiming to buy certain gifts? */
export type Claims = {
  __typename?: 'Claims';
  /** An object relationship */
  giftIdea: GiftIdeas;
  giftIdeaId: Scalars['uuid'];
  id: Scalars['uuid'];
  isPurchased: Scalars['Boolean'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "claims" */
export type ClaimsAggregate = {
  __typename?: 'ClaimsAggregate';
  aggregate?: Maybe<ClaimsAggregateFields>;
  nodes: Array<Claims>;
};

/** aggregate fields of "claims" */
export type ClaimsAggregateFields = {
  __typename?: 'ClaimsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ClaimsMaxFields>;
  min?: Maybe<ClaimsMinFields>;
};


/** aggregate fields of "claims" */
export type ClaimsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ClaimsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "claims" */
export type ClaimsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Claims_Max_Order_By>;
  min?: InputMaybe<Claims_Min_Order_By>;
};

/** input type for inserting array relation for remote table "claims" */
export type ClaimsArrRelInsertInput = {
  data: Array<ClaimsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ClaimsOnConflict>;
};

/** Boolean expression to filter rows from the table "claims". All fields are combined with a logical 'AND'. */
export type ClaimsBoolExp = {
  _and?: InputMaybe<Array<ClaimsBoolExp>>;
  _not?: InputMaybe<ClaimsBoolExp>;
  _or?: InputMaybe<Array<ClaimsBoolExp>>;
  giftIdea?: InputMaybe<GiftIdeasBoolExp>;
  giftIdeaId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isPurchased?: InputMaybe<BooleanComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "claims" */
export enum ClaimsConstraint {
  /** unique or primary key constraint on columns "id" */
  ClaimsPkey = 'claims_pkey'
}

/** input type for inserting data into table "claims" */
export type ClaimsInsertInput = {
  giftIdea?: InputMaybe<GiftIdeasObjRelInsertInput>;
  giftIdeaId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isPurchased?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type ClaimsMaxFields = {
  __typename?: 'ClaimsMaxFields';
  giftIdeaId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type ClaimsMinFields = {
  __typename?: 'ClaimsMinFields';
  giftIdeaId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "claims" */
export type ClaimsMutationResponse = {
  __typename?: 'ClaimsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Claims>;
};

/** on_conflict condition type for table "claims" */
export type ClaimsOnConflict = {
  constraint: ClaimsConstraint;
  update_columns?: Array<ClaimsUpdateColumn>;
  where?: InputMaybe<ClaimsBoolExp>;
};

/** Ordering options when selecting data from "claims". */
export type ClaimsOrderBy = {
  giftIdea?: InputMaybe<GiftIdeasOrderBy>;
  giftIdeaId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isPurchased?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: claims */
export type ClaimsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "claims" */
export enum ClaimsSelectColumn {
  /** column name */
  GiftIdeaId = 'giftIdeaId',
  /** column name */
  Id = 'id',
  /** column name */
  IsPurchased = 'isPurchased',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "claims" */
export type ClaimsSetInput = {
  giftIdeaId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isPurchased?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "claims" */
export enum ClaimsUpdateColumn {
  /** column name */
  GiftIdeaId = 'giftIdeaId',
  /** column name */
  Id = 'id',
  /** column name */
  IsPurchased = 'isPurchased',
  /** column name */
  UserId = 'userId'
}

export type ClaimsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClaimsSetInput>;
  where: ClaimsBoolExp;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Whose lists do you want to see? */
export type Follows = {
  __typename?: 'Follows';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  follower: Users;
  followerId: Scalars['uuid'];
  followingId: Scalars['uuid'];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "follows" */
export type FollowsAggregate = {
  __typename?: 'FollowsAggregate';
  aggregate?: Maybe<FollowsAggregateFields>;
  nodes: Array<Follows>;
};

/** aggregate fields of "follows" */
export type FollowsAggregateFields = {
  __typename?: 'FollowsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<FollowsMaxFields>;
  min?: Maybe<FollowsMinFields>;
};


/** aggregate fields of "follows" */
export type FollowsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FollowsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "follows" */
export type FollowsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Follows_Max_Order_By>;
  min?: InputMaybe<Follows_Min_Order_By>;
};

/** input type for inserting array relation for remote table "follows" */
export type FollowsArrRelInsertInput = {
  data: Array<FollowsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<FollowsOnConflict>;
};

/** Boolean expression to filter rows from the table "follows". All fields are combined with a logical 'AND'. */
export type FollowsBoolExp = {
  _and?: InputMaybe<Array<FollowsBoolExp>>;
  _not?: InputMaybe<FollowsBoolExp>;
  _or?: InputMaybe<Array<FollowsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  follower?: InputMaybe<UsersBoolExp>;
  followerId?: InputMaybe<UuidComparisonExp>;
  followingId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "follows" */
export enum FollowsConstraint {
  /** unique or primary key constraint on columns "following_id", "follower_id" */
  FollowsPkey = 'follows_pkey'
}

/** input type for inserting data into table "follows" */
export type FollowsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  follower?: InputMaybe<UsersObjRelInsertInput>;
  followerId?: InputMaybe<Scalars['uuid']>;
  followingId?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
};

/** aggregate max on columns */
export type FollowsMaxFields = {
  __typename?: 'FollowsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  followerId?: Maybe<Scalars['uuid']>;
  followingId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type FollowsMinFields = {
  __typename?: 'FollowsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  followerId?: Maybe<Scalars['uuid']>;
  followingId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "follows" */
export type FollowsMutationResponse = {
  __typename?: 'FollowsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Follows>;
};

/** on_conflict condition type for table "follows" */
export type FollowsOnConflict = {
  constraint: FollowsConstraint;
  update_columns?: Array<FollowsUpdateColumn>;
  where?: InputMaybe<FollowsBoolExp>;
};

/** Ordering options when selecting data from "follows". */
export type FollowsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  follower?: InputMaybe<UsersOrderBy>;
  followerId?: InputMaybe<OrderBy>;
  followingId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
};

/** primary key columns input for table: follows */
export type FollowsPkColumnsInput = {
  followerId: Scalars['uuid'];
  followingId: Scalars['uuid'];
};

/** select columns of table "follows" */
export enum FollowsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FollowerId = 'followerId',
  /** column name */
  FollowingId = 'followingId'
}

/** input type for updating data in table "follows" */
export type FollowsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  followerId?: InputMaybe<Scalars['uuid']>;
  followingId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "follows" */
export enum FollowsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FollowerId = 'followerId',
  /** column name */
  FollowingId = 'followingId'
}

export type FollowsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FollowsSetInput>;
  where: FollowsBoolExp;
};

/** columns and relationships of "gift_ideas" */
export type GiftIdeas = {
  __typename?: 'GiftIdeas';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  createdBy: Users;
  createdById: Scalars['uuid'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  removed: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  url?: Maybe<Scalars['String']>;
  /** An object relationship */
  wishlist: Wishlists;
  wishlistId: Scalars['uuid'];
};

/** aggregated selection of "gift_ideas" */
export type GiftIdeasAggregate = {
  __typename?: 'GiftIdeasAggregate';
  aggregate?: Maybe<GiftIdeasAggregateFields>;
  nodes: Array<GiftIdeas>;
};

/** aggregate fields of "gift_ideas" */
export type GiftIdeasAggregateFields = {
  __typename?: 'GiftIdeasAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<GiftIdeasMaxFields>;
  min?: Maybe<GiftIdeasMinFields>;
};


/** aggregate fields of "gift_ideas" */
export type GiftIdeasAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GiftIdeasSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gift_ideas" */
export type GiftIdeasAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Gift_Ideas_Max_Order_By>;
  min?: InputMaybe<Gift_Ideas_Min_Order_By>;
};

/** input type for inserting array relation for remote table "gift_ideas" */
export type GiftIdeasArrRelInsertInput = {
  data: Array<GiftIdeasInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<GiftIdeasOnConflict>;
};

/** Boolean expression to filter rows from the table "gift_ideas". All fields are combined with a logical 'AND'. */
export type GiftIdeasBoolExp = {
  _and?: InputMaybe<Array<GiftIdeasBoolExp>>;
  _not?: InputMaybe<GiftIdeasBoolExp>;
  _or?: InputMaybe<Array<GiftIdeasBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UsersBoolExp>;
  createdById?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  removed?: InputMaybe<BooleanComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
  wishlist?: InputMaybe<WishlistsBoolExp>;
  wishlistId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "gift_ideas" */
export enum GiftIdeasConstraint {
  /** unique or primary key constraint on columns "id" */
  GiftIdeasPkey = 'gift_ideas_pkey'
}

/** input type for inserting data into table "gift_ideas" */
export type GiftIdeasInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdBy?: InputMaybe<UsersObjRelInsertInput>;
  createdById?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  removed?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  wishlist?: InputMaybe<WishlistsObjRelInsertInput>;
  wishlistId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type GiftIdeasMaxFields = {
  __typename?: 'GiftIdeasMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdById?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  wishlistId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type GiftIdeasMinFields = {
  __typename?: 'GiftIdeasMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdById?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  wishlistId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "gift_ideas" */
export type GiftIdeasMutationResponse = {
  __typename?: 'GiftIdeasMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GiftIdeas>;
};

/** input type for inserting object relation for remote table "gift_ideas" */
export type GiftIdeasObjRelInsertInput = {
  data: GiftIdeasInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<GiftIdeasOnConflict>;
};

/** on_conflict condition type for table "gift_ideas" */
export type GiftIdeasOnConflict = {
  constraint: GiftIdeasConstraint;
  update_columns?: Array<GiftIdeasUpdateColumn>;
  where?: InputMaybe<GiftIdeasBoolExp>;
};

/** Ordering options when selecting data from "gift_ideas". */
export type GiftIdeasOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<UsersOrderBy>;
  createdById?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  removed?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  wishlist?: InputMaybe<WishlistsOrderBy>;
  wishlistId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: gift_ideas */
export type GiftIdeasPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "gift_ideas" */
export enum GiftIdeasSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedById = 'createdById',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Removed = 'removed',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url',
  /** column name */
  WishlistId = 'wishlistId'
}

/** input type for updating data in table "gift_ideas" */
export type GiftIdeasSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdById?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  removed?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  wishlistId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "gift_ideas" */
export enum GiftIdeasUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedById = 'createdById',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Removed = 'removed',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url',
  /** column name */
  WishlistId = 'wishlistId'
}

export type GiftIdeasUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GiftIdeasSetInput>;
  where: GiftIdeasBoolExp;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'Users';
  /** An array relationship */
  claims: Array<Claims>;
  /** An aggregate relationship */
  claimsAggregate: ClaimsAggregate;
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  followers: Array<Follows>;
  /** An aggregate relationship */
  followersAggregate: FollowsAggregate;
  /** An array relationship */
  follows: Array<Follows>;
  /** An aggregate relationship */
  followsAggregate: FollowsAggregate;
  /** An array relationship */
  giftIdeas: Array<GiftIdeas>;
  /** An aggregate relationship */
  giftIdeasAggregate: GiftIdeasAggregate;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  username: Scalars['String'];
  /** An array relationship */
  wishlists: Array<Wishlists>;
  /** An aggregate relationship */
  wishlistsAggregate: WishlistsAggregate;
};


/** columns and relationships of "users" */
export type UsersClaimsArgs = {
  distinctOn?: InputMaybe<Array<ClaimsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ClaimsOrderBy>>;
  where?: InputMaybe<ClaimsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersClaimsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ClaimsOrderBy>>;
  where?: InputMaybe<ClaimsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersFollowersArgs = {
  distinctOn?: InputMaybe<Array<FollowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FollowsOrderBy>>;
  where?: InputMaybe<FollowsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersFollowersAggregateArgs = {
  distinctOn?: InputMaybe<Array<FollowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FollowsOrderBy>>;
  where?: InputMaybe<FollowsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersFollowsArgs = {
  distinctOn?: InputMaybe<Array<FollowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FollowsOrderBy>>;
  where?: InputMaybe<FollowsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersFollowsAggregateArgs = {
  distinctOn?: InputMaybe<Array<FollowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FollowsOrderBy>>;
  where?: InputMaybe<FollowsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersGiftIdeasArgs = {
  distinctOn?: InputMaybe<Array<GiftIdeasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GiftIdeasOrderBy>>;
  where?: InputMaybe<GiftIdeasBoolExp>;
};


/** columns and relationships of "users" */
export type UsersGiftIdeasAggregateArgs = {
  distinctOn?: InputMaybe<Array<GiftIdeasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GiftIdeasOrderBy>>;
  where?: InputMaybe<GiftIdeasBoolExp>;
};


/** columns and relationships of "users" */
export type UsersWishlistsArgs = {
  distinctOn?: InputMaybe<Array<WishlistsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WishlistsOrderBy>>;
  where?: InputMaybe<WishlistsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersWishlistsAggregateArgs = {
  distinctOn?: InputMaybe<Array<WishlistsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WishlistsOrderBy>>;
  where?: InputMaybe<WishlistsBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'UsersAggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'UsersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  claims?: InputMaybe<ClaimsBoolExp>;
  claims_aggregate?: InputMaybe<Claims_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  followers?: InputMaybe<FollowsBoolExp>;
  followers_aggregate?: InputMaybe<Follows_Aggregate_Bool_Exp>;
  follows?: InputMaybe<FollowsBoolExp>;
  follows_aggregate?: InputMaybe<Follows_Aggregate_Bool_Exp>;
  giftIdeas?: InputMaybe<GiftIdeasBoolExp>;
  giftIdeas_aggregate?: InputMaybe<Gift_Ideas_Aggregate_Bool_Exp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  photo?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
  wishlists?: InputMaybe<WishlistsBoolExp>;
  wishlists_aggregate?: InputMaybe<Wishlists_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "username" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  claims?: InputMaybe<ClaimsArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  followers?: InputMaybe<FollowsArrRelInsertInput>;
  follows?: InputMaybe<FollowsArrRelInsertInput>;
  giftIdeas?: InputMaybe<GiftIdeasArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
  wishlists?: InputMaybe<WishlistsArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'UsersMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'UsersMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'UsersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  claimsAggregate?: InputMaybe<ClaimsAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  followersAggregate?: InputMaybe<FollowsAggregateOrderBy>;
  followsAggregate?: InputMaybe<FollowsAggregateOrderBy>;
  giftIdeasAggregate?: InputMaybe<GiftIdeasAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  photo?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
  wishlistsAggregate?: InputMaybe<WishlistsAggregateOrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Photo = 'photo',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Photo = 'photo',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

export type UsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** User wish lists */
export type Wishlists = {
  __typename?: 'Wishlists';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  createdBy: Users;
  createdById: Scalars['uuid'];
  /** An array relationship */
  giftIdeas: Array<GiftIdeas>;
  /** An aggregate relationship */
  giftIdeasAggregate: GiftIdeasAggregate;
  id: Scalars['uuid'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** User wish lists */
export type WishlistsGiftIdeasArgs = {
  distinctOn?: InputMaybe<Array<GiftIdeasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GiftIdeasOrderBy>>;
  where?: InputMaybe<GiftIdeasBoolExp>;
};


/** User wish lists */
export type WishlistsGiftIdeasAggregateArgs = {
  distinctOn?: InputMaybe<Array<GiftIdeasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GiftIdeasOrderBy>>;
  where?: InputMaybe<GiftIdeasBoolExp>;
};

/** aggregated selection of "wishlists" */
export type WishlistsAggregate = {
  __typename?: 'WishlistsAggregate';
  aggregate?: Maybe<WishlistsAggregateFields>;
  nodes: Array<Wishlists>;
};

/** aggregate fields of "wishlists" */
export type WishlistsAggregateFields = {
  __typename?: 'WishlistsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<WishlistsMaxFields>;
  min?: Maybe<WishlistsMinFields>;
};


/** aggregate fields of "wishlists" */
export type WishlistsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<WishlistsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "wishlists" */
export type WishlistsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Wishlists_Max_Order_By>;
  min?: InputMaybe<Wishlists_Min_Order_By>;
};

/** input type for inserting array relation for remote table "wishlists" */
export type WishlistsArrRelInsertInput = {
  data: Array<WishlistsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<WishlistsOnConflict>;
};

/** Boolean expression to filter rows from the table "wishlists". All fields are combined with a logical 'AND'. */
export type WishlistsBoolExp = {
  _and?: InputMaybe<Array<WishlistsBoolExp>>;
  _not?: InputMaybe<WishlistsBoolExp>;
  _or?: InputMaybe<Array<WishlistsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UsersBoolExp>;
  createdById?: InputMaybe<UuidComparisonExp>;
  giftIdeas?: InputMaybe<GiftIdeasBoolExp>;
  giftIdeas_aggregate?: InputMaybe<Gift_Ideas_Aggregate_Bool_Exp>;
  id?: InputMaybe<UuidComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "wishlists" */
export enum WishlistsConstraint {
  /** unique or primary key constraint on columns "id" */
  WishlistsPkey = 'wishlists_pkey'
}

/** input type for inserting data into table "wishlists" */
export type WishlistsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdBy?: InputMaybe<UsersObjRelInsertInput>;
  createdById?: InputMaybe<Scalars['uuid']>;
  giftIdeas?: InputMaybe<GiftIdeasArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type WishlistsMaxFields = {
  __typename?: 'WishlistsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdById?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type WishlistsMinFields = {
  __typename?: 'WishlistsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdById?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "wishlists" */
export type WishlistsMutationResponse = {
  __typename?: 'WishlistsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Wishlists>;
};

/** input type for inserting object relation for remote table "wishlists" */
export type WishlistsObjRelInsertInput = {
  data: WishlistsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<WishlistsOnConflict>;
};

/** on_conflict condition type for table "wishlists" */
export type WishlistsOnConflict = {
  constraint: WishlistsConstraint;
  update_columns?: Array<WishlistsUpdateColumn>;
  where?: InputMaybe<WishlistsBoolExp>;
};

/** Ordering options when selecting data from "wishlists". */
export type WishlistsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<UsersOrderBy>;
  createdById?: InputMaybe<OrderBy>;
  giftIdeasAggregate?: InputMaybe<GiftIdeasAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: wishlists */
export type WishlistsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "wishlists" */
export enum WishlistsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedById = 'createdById',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "wishlists" */
export type WishlistsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdById?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "wishlists" */
export enum WishlistsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedById = 'createdById',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type WishlistsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WishlistsSetInput>;
  where: WishlistsBoolExp;
};

export type Claims_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Claims_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Claims_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Claims_Aggregate_Bool_Exp_Count>;
};

export type Claims_Aggregate_Bool_Exp_Bool_And = {
  arguments: Claims_Select_Column_Claims_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<ClaimsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type Claims_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Claims_Select_Column_Claims_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<ClaimsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type Claims_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ClaimsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<ClaimsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "claims" */
export type Claims_Max_Order_By = {
  giftIdeaId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "claims" */
export type Claims_Min_Order_By = {
  giftIdeaId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** select "claims_aggregate_bool_exp_bool_and_arguments_columns" columns of table "claims" */
export enum Claims_Select_Column_Claims_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsPurchased = 'isPurchased'
}

/** select "claims_aggregate_bool_exp_bool_or_arguments_columns" columns of table "claims" */
export enum Claims_Select_Column_Claims_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsPurchased = 'isPurchased'
}

/** Streaming cursor of the table "claims" */
export type Claims_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Claims_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Claims_StreamCursorValueInput = {
  giftIdeaId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isPurchased?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

export type Follows_Aggregate_Bool_Exp = {
  count?: InputMaybe<Follows_Aggregate_Bool_Exp_Count>;
};

export type Follows_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<FollowsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FollowsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "follows" */
export type Follows_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  followerId?: InputMaybe<OrderBy>;
  followingId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "follows" */
export type Follows_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  followerId?: InputMaybe<OrderBy>;
  followingId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "follows" */
export type Follows_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Follows_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Follows_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  followerId?: InputMaybe<Scalars['uuid']>;
  followingId?: InputMaybe<Scalars['uuid']>;
};

export type Gift_Ideas_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Gift_Ideas_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Gift_Ideas_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Gift_Ideas_Aggregate_Bool_Exp_Count>;
};

export type Gift_Ideas_Aggregate_Bool_Exp_Bool_And = {
  arguments: Gift_Ideas_Select_Column_Gift_Ideas_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GiftIdeasBoolExp>;
  predicate: BooleanComparisonExp;
};

export type Gift_Ideas_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Gift_Ideas_Select_Column_Gift_Ideas_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GiftIdeasBoolExp>;
  predicate: BooleanComparisonExp;
};

export type Gift_Ideas_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GiftIdeasSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GiftIdeasBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "gift_ideas" */
export type Gift_Ideas_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  createdById?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  wishlistId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "gift_ideas" */
export type Gift_Ideas_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  createdById?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  wishlistId?: InputMaybe<OrderBy>;
};

/** select "gift_ideas_aggregate_bool_exp_bool_and_arguments_columns" columns of table "gift_ideas" */
export enum Gift_Ideas_Select_Column_Gift_Ideas_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Removed = 'removed'
}

/** select "gift_ideas_aggregate_bool_exp_bool_or_arguments_columns" columns of table "gift_ideas" */
export enum Gift_Ideas_Select_Column_Gift_Ideas_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Removed = 'removed'
}

/** Streaming cursor of the table "gift_ideas" */
export type Gift_Ideas_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Gift_Ideas_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Gift_Ideas_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdById?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  removed?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  wishlistId?: InputMaybe<Scalars['uuid']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "claims" */
  deleteClaims?: Maybe<ClaimsMutationResponse>;
  /** delete single row from the table: "claims" */
  deleteClaimsByPk?: Maybe<Claims>;
  /** delete data from the table: "follows" */
  deleteFollows?: Maybe<FollowsMutationResponse>;
  /** delete single row from the table: "follows" */
  deleteFollowsByPk?: Maybe<Follows>;
  /** delete data from the table: "gift_ideas" */
  deleteGiftIdeas?: Maybe<GiftIdeasMutationResponse>;
  /** delete single row from the table: "gift_ideas" */
  deleteGiftIdeasByPk?: Maybe<GiftIdeas>;
  /** delete data from the table: "users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  deleteUsersByPk?: Maybe<Users>;
  /** delete data from the table: "wishlists" */
  deleteWishlists?: Maybe<WishlistsMutationResponse>;
  /** delete single row from the table: "wishlists" */
  deleteWishlistsByPk?: Maybe<Wishlists>;
  /** insert data into the table: "claims" */
  insertClaims?: Maybe<ClaimsMutationResponse>;
  /** insert a single row into the table: "claims" */
  insertClaimsOne?: Maybe<Claims>;
  /** insert data into the table: "follows" */
  insertFollows?: Maybe<FollowsMutationResponse>;
  /** insert a single row into the table: "follows" */
  insertFollowsOne?: Maybe<Follows>;
  /** insert data into the table: "gift_ideas" */
  insertGiftIdeas?: Maybe<GiftIdeasMutationResponse>;
  /** insert a single row into the table: "gift_ideas" */
  insertGiftIdeasOne?: Maybe<GiftIdeas>;
  /** insert data into the table: "users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insertUsersOne?: Maybe<Users>;
  /** insert data into the table: "wishlists" */
  insertWishlists?: Maybe<WishlistsMutationResponse>;
  /** insert a single row into the table: "wishlists" */
  insertWishlistsOne?: Maybe<Wishlists>;
  /** update data of the table: "claims" */
  updateClaims?: Maybe<ClaimsMutationResponse>;
  /** update single row of the table: "claims" */
  updateClaimsByPk?: Maybe<Claims>;
  /** update multiples rows of table: "claims" */
  updateClaimsMany?: Maybe<Array<Maybe<ClaimsMutationResponse>>>;
  /** update data of the table: "follows" */
  updateFollows?: Maybe<FollowsMutationResponse>;
  /** update single row of the table: "follows" */
  updateFollowsByPk?: Maybe<Follows>;
  /** update multiples rows of table: "follows" */
  updateFollowsMany?: Maybe<Array<Maybe<FollowsMutationResponse>>>;
  /** update data of the table: "gift_ideas" */
  updateGiftIdeas?: Maybe<GiftIdeasMutationResponse>;
  /** update single row of the table: "gift_ideas" */
  updateGiftIdeasByPk?: Maybe<GiftIdeas>;
  /** update multiples rows of table: "gift_ideas" */
  updateGiftIdeasMany?: Maybe<Array<Maybe<GiftIdeasMutationResponse>>>;
  /** update data of the table: "users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  updateUsersByPk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
  /** update data of the table: "wishlists" */
  updateWishlists?: Maybe<WishlistsMutationResponse>;
  /** update single row of the table: "wishlists" */
  updateWishlistsByPk?: Maybe<Wishlists>;
  /** update multiples rows of table: "wishlists" */
  updateWishlistsMany?: Maybe<Array<Maybe<WishlistsMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteClaimsArgs = {
  where: ClaimsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteClaimsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFollowsArgs = {
  where: FollowsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteFollowsByPkArgs = {
  followerId: Scalars['uuid'];
  followingId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteGiftIdeasArgs = {
  where: GiftIdeasBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteGiftIdeasByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUsersByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteWishlistsArgs = {
  where: WishlistsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteWishlistsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertClaimsArgs = {
  objects: Array<ClaimsInsertInput>;
  onConflict?: InputMaybe<ClaimsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimsOneArgs = {
  object: ClaimsInsertInput;
  onConflict?: InputMaybe<ClaimsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFollowsArgs = {
  objects: Array<FollowsInsertInput>;
  onConflict?: InputMaybe<FollowsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFollowsOneArgs = {
  object: FollowsInsertInput;
  onConflict?: InputMaybe<FollowsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertGiftIdeasArgs = {
  objects: Array<GiftIdeasInsertInput>;
  onConflict?: InputMaybe<GiftIdeasOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertGiftIdeasOneArgs = {
  object: GiftIdeasInsertInput;
  onConflict?: InputMaybe<GiftIdeasOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersOneArgs = {
  object: UsersInsertInput;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertWishlistsArgs = {
  objects: Array<WishlistsInsertInput>;
  onConflict?: InputMaybe<WishlistsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertWishlistsOneArgs = {
  object: WishlistsInsertInput;
  onConflict?: InputMaybe<WishlistsOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateClaimsArgs = {
  _set?: InputMaybe<ClaimsSetInput>;
  where: ClaimsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateClaimsByPkArgs = {
  _set?: InputMaybe<ClaimsSetInput>;
  pk_columns: ClaimsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateClaimsManyArgs = {
  updates: Array<ClaimsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateFollowsArgs = {
  _set?: InputMaybe<FollowsSetInput>;
  where: FollowsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateFollowsByPkArgs = {
  _set?: InputMaybe<FollowsSetInput>;
  pk_columns: FollowsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateFollowsManyArgs = {
  updates: Array<FollowsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateGiftIdeasArgs = {
  _set?: InputMaybe<GiftIdeasSetInput>;
  where: GiftIdeasBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateGiftIdeasByPkArgs = {
  _set?: InputMaybe<GiftIdeasSetInput>;
  pk_columns: GiftIdeasPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateGiftIdeasManyArgs = {
  updates: Array<GiftIdeasUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateWishlistsArgs = {
  _set?: InputMaybe<WishlistsSetInput>;
  where: WishlistsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateWishlistsByPkArgs = {
  _set?: InputMaybe<WishlistsSetInput>;
  pk_columns: WishlistsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateWishlistsManyArgs = {
  updates: Array<WishlistsUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  claims: Array<Claims>;
  /** An aggregate relationship */
  claimsAggregate: ClaimsAggregate;
  /** fetch data from the table: "claims" using primary key columns */
  claimsByPk?: Maybe<Claims>;
  /** An array relationship */
  follows: Array<Follows>;
  /** An aggregate relationship */
  followsAggregate: FollowsAggregate;
  /** fetch data from the table: "follows" using primary key columns */
  followsByPk?: Maybe<Follows>;
  /** An array relationship */
  giftIdeas: Array<GiftIdeas>;
  /** An aggregate relationship */
  giftIdeasAggregate: GiftIdeasAggregate;
  /** fetch data from the table: "gift_ideas" using primary key columns */
  giftIdeasByPk?: Maybe<GiftIdeas>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** An array relationship */
  wishlists: Array<Wishlists>;
  /** An aggregate relationship */
  wishlistsAggregate: WishlistsAggregate;
  /** fetch data from the table: "wishlists" using primary key columns */
  wishlistsByPk?: Maybe<Wishlists>;
};


export type Query_RootClaimsArgs = {
  distinctOn?: InputMaybe<Array<ClaimsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ClaimsOrderBy>>;
  where?: InputMaybe<ClaimsBoolExp>;
};


export type Query_RootClaimsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ClaimsOrderBy>>;
  where?: InputMaybe<ClaimsBoolExp>;
};


export type Query_RootClaimsByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFollowsArgs = {
  distinctOn?: InputMaybe<Array<FollowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FollowsOrderBy>>;
  where?: InputMaybe<FollowsBoolExp>;
};


export type Query_RootFollowsAggregateArgs = {
  distinctOn?: InputMaybe<Array<FollowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FollowsOrderBy>>;
  where?: InputMaybe<FollowsBoolExp>;
};


export type Query_RootFollowsByPkArgs = {
  followerId: Scalars['uuid'];
  followingId: Scalars['uuid'];
};


export type Query_RootGiftIdeasArgs = {
  distinctOn?: InputMaybe<Array<GiftIdeasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GiftIdeasOrderBy>>;
  where?: InputMaybe<GiftIdeasBoolExp>;
};


export type Query_RootGiftIdeasAggregateArgs = {
  distinctOn?: InputMaybe<Array<GiftIdeasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GiftIdeasOrderBy>>;
  where?: InputMaybe<GiftIdeasBoolExp>;
};


export type Query_RootGiftIdeasByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWishlistsArgs = {
  distinctOn?: InputMaybe<Array<WishlistsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WishlistsOrderBy>>;
  where?: InputMaybe<WishlistsBoolExp>;
};


export type Query_RootWishlistsAggregateArgs = {
  distinctOn?: InputMaybe<Array<WishlistsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WishlistsOrderBy>>;
  where?: InputMaybe<WishlistsBoolExp>;
};


export type Query_RootWishlistsByPkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  claims: Array<Claims>;
  /** An aggregate relationship */
  claimsAggregate: ClaimsAggregate;
  /** fetch data from the table: "claims" using primary key columns */
  claimsByPk?: Maybe<Claims>;
  /** fetch data from the table in a streaming manner: "claims" */
  claimsStream: Array<Claims>;
  /** An array relationship */
  follows: Array<Follows>;
  /** An aggregate relationship */
  followsAggregate: FollowsAggregate;
  /** fetch data from the table: "follows" using primary key columns */
  followsByPk?: Maybe<Follows>;
  /** fetch data from the table in a streaming manner: "follows" */
  followsStream: Array<Follows>;
  /** An array relationship */
  giftIdeas: Array<GiftIdeas>;
  /** An aggregate relationship */
  giftIdeasAggregate: GiftIdeasAggregate;
  /** fetch data from the table: "gift_ideas" using primary key columns */
  giftIdeasByPk?: Maybe<GiftIdeas>;
  /** fetch data from the table in a streaming manner: "gift_ideas" */
  giftIdeasStream: Array<GiftIdeas>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  usersStream: Array<Users>;
  /** An array relationship */
  wishlists: Array<Wishlists>;
  /** An aggregate relationship */
  wishlistsAggregate: WishlistsAggregate;
  /** fetch data from the table: "wishlists" using primary key columns */
  wishlistsByPk?: Maybe<Wishlists>;
  /** fetch data from the table in a streaming manner: "wishlists" */
  wishlistsStream: Array<Wishlists>;
};


export type Subscription_RootClaimsArgs = {
  distinctOn?: InputMaybe<Array<ClaimsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ClaimsOrderBy>>;
  where?: InputMaybe<ClaimsBoolExp>;
};


export type Subscription_RootClaimsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ClaimsOrderBy>>;
  where?: InputMaybe<ClaimsBoolExp>;
};


export type Subscription_RootClaimsByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootClaimsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Claims_StreamCursorInput>>;
  where?: InputMaybe<ClaimsBoolExp>;
};


export type Subscription_RootFollowsArgs = {
  distinctOn?: InputMaybe<Array<FollowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FollowsOrderBy>>;
  where?: InputMaybe<FollowsBoolExp>;
};


export type Subscription_RootFollowsAggregateArgs = {
  distinctOn?: InputMaybe<Array<FollowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FollowsOrderBy>>;
  where?: InputMaybe<FollowsBoolExp>;
};


export type Subscription_RootFollowsByPkArgs = {
  followerId: Scalars['uuid'];
  followingId: Scalars['uuid'];
};


export type Subscription_RootFollowsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Follows_StreamCursorInput>>;
  where?: InputMaybe<FollowsBoolExp>;
};


export type Subscription_RootGiftIdeasArgs = {
  distinctOn?: InputMaybe<Array<GiftIdeasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GiftIdeasOrderBy>>;
  where?: InputMaybe<GiftIdeasBoolExp>;
};


export type Subscription_RootGiftIdeasAggregateArgs = {
  distinctOn?: InputMaybe<Array<GiftIdeasSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GiftIdeasOrderBy>>;
  where?: InputMaybe<GiftIdeasBoolExp>;
};


export type Subscription_RootGiftIdeasByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGiftIdeasStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Gift_Ideas_StreamCursorInput>>;
  where?: InputMaybe<GiftIdeasBoolExp>;
};


export type Subscription_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Users_StreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootWishlistsArgs = {
  distinctOn?: InputMaybe<Array<WishlistsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WishlistsOrderBy>>;
  where?: InputMaybe<WishlistsBoolExp>;
};


export type Subscription_RootWishlistsAggregateArgs = {
  distinctOn?: InputMaybe<Array<WishlistsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WishlistsOrderBy>>;
  where?: InputMaybe<WishlistsBoolExp>;
};


export type Subscription_RootWishlistsByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWishlistsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Wishlists_StreamCursorInput>>;
  where?: InputMaybe<WishlistsBoolExp>;
};

/** Streaming cursor of the table "users" */
export type Users_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Users_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Wishlists_Aggregate_Bool_Exp = {
  count?: InputMaybe<Wishlists_Aggregate_Bool_Exp_Count>;
};

export type Wishlists_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<WishlistsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<WishlistsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "wishlists" */
export type Wishlists_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  createdById?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "wishlists" */
export type Wishlists_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  createdById?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "wishlists" */
export type Wishlists_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Wishlists_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Wishlists_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdById?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

export type CreateGenericWishListMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateGenericWishListMutation = { __typename?: 'mutation_root', insertWishlistsOne?: { __typename?: 'Wishlists', id: any, title: string } | null };

export type GetWishlistByUserIdQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetWishlistByUserIdQuery = { __typename?: 'query_root', wishlists: Array<{ __typename?: 'Wishlists', id: any, title: string }> };

export type GetMyListQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetMyListQuery = { __typename?: 'query_root', wishlists: Array<{ __typename?: 'Wishlists', id: any, giftIdeas: Array<{ __typename?: 'GiftIdeas', id: any, title: string }> }> };

export type InsertGiftIdeaMutationVariables = Exact<{
  input: GiftIdeasInsertInput;
}>;


export type InsertGiftIdeaMutation = { __typename?: 'mutation_root', giftIdea?: { __typename?: 'GiftIdeas', id: any, title: string } | null };

export type GiftIdeaFieldsFragment = { __typename?: 'GiftIdeas', id: any, title: string, description?: string | null, url?: string | null, removed: boolean, wishlistId: any };

export type UpdateGiftIdeaMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: GiftIdeasSetInput;
}>;


export type UpdateGiftIdeaMutation = { __typename?: 'mutation_root', giftIdea?: { __typename?: 'GiftIdeas', id: any, title: string, description?: string | null, url?: string | null, removed: boolean, wishlistId: any } | null };

export type GetGiftIdeaByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetGiftIdeaByIdQuery = { __typename?: 'query_root', giftIdea?: { __typename?: 'GiftIdeas', id: any, title: string, description?: string | null, url?: string | null, removed: boolean, wishlistId: any } | null };

export type UserFieldsFragment = { __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null };

export type GetUsersByUsernameQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;


export type GetUsersByUsernameQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserByIdQuery = { __typename?: 'query_root', user?: { __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null } | null };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null }> };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  updates?: InputMaybe<UsersSetInput>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', user?: { __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null } | null };

export type InsertUserMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', user?: { __typename?: 'Users', id: any, name?: string | null, username: string, photo?: string | null } | null };

export const GiftIdeaFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GiftIdeaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GiftIdeas"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"removed"}},{"kind":"Field","name":{"kind":"Name","value":"wishlistId"}}]}}]} as unknown as DocumentNode<GiftIdeaFieldsFragment, unknown>;
export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const CreateGenericWishListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGenericWishList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertWishlistsOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"StringValue","value":"Wish list","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateGenericWishListMutation, CreateGenericWishListMutationVariables>;
export const GetWishlistByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWishlistByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wishlists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdById"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetWishlistByUserIdQuery, GetWishlistByUserIdQueryVariables>;
export const GetMyListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wishlists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdById"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"giftIdeas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"removed"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyListQuery, GetMyListQueryVariables>;
export const InsertGiftIdeaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertGiftIdea"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GiftIdeasInsertInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"giftIdea"},"name":{"kind":"Name","value":"insertGiftIdeasOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<InsertGiftIdeaMutation, InsertGiftIdeaMutationVariables>;
export const UpdateGiftIdeaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGiftIdea"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GiftIdeasSetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"giftIdea"},"name":{"kind":"Name","value":"updateGiftIdeasByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GiftIdeaFields"}}]}}]}},...GiftIdeaFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdateGiftIdeaMutation, UpdateGiftIdeaMutationVariables>;
export const GetGiftIdeaByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGiftIdeaById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"giftIdea"},"name":{"kind":"Name","value":"giftIdeasByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GiftIdeaFields"}}]}}]}},...GiftIdeaFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetGiftIdeaByIdQuery, GetGiftIdeaByIdQueryVariables>;
export const GetUsersByUsernameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersByUsername"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetUsersByUsernameQuery, GetUsersByUsernameQueryVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"usersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetAllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updates"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UsersSetInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"updateUsersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const InsertUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"photo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"insertUsersOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"photo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"photo"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<InsertUserMutation, InsertUserMutationVariables>;