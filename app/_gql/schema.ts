export type Scalars = {
    Boolean: boolean,
    Int: number,
    String: string,
    timestamptz: any,
    uuid: any,
}


/** Who is claiming to buy certain gifts? */
export interface Claims {
    /** An object relationship */
    giftIdea: GiftIdeas
    giftIdeaId: Scalars['uuid']
    id: Scalars['uuid']
    isPurchased: Scalars['Boolean']
    /** An object relationship */
    user: Users
    userId: Scalars['uuid']
    __typename: 'Claims'
}


/** aggregated selection of "claims" */
export interface ClaimsAggregate {
    aggregate?: ClaimsAggregateFields
    nodes: Claims[]
    __typename: 'ClaimsAggregate'
}


/** aggregate fields of "claims" */
export interface ClaimsAggregateFields {
    count: Scalars['Int']
    max?: ClaimsMaxFields
    min?: ClaimsMinFields
    __typename: 'ClaimsAggregateFields'
}


/** unique or primary key constraints on table "claims" */
export type ClaimsConstraint = 'claims_pkey'


/** aggregate max on columns */
export interface ClaimsMaxFields {
    giftIdeaId?: Scalars['uuid']
    id?: Scalars['uuid']
    userId?: Scalars['uuid']
    __typename: 'ClaimsMaxFields'
}


/** aggregate min on columns */
export interface ClaimsMinFields {
    giftIdeaId?: Scalars['uuid']
    id?: Scalars['uuid']
    userId?: Scalars['uuid']
    __typename: 'ClaimsMinFields'
}


/** response of any mutation on the table "claims" */
export interface ClaimsMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Claims[]
    __typename: 'ClaimsMutationResponse'
}


/** select columns of table "claims" */
export type ClaimsSelectColumn = 'giftIdeaId' | 'id' | 'isPurchased' | 'userId'


/** select "claimsAggregateBoolExpBool_andArgumentsColumns" columns of table "claims" */
export type ClaimsSelectColumnClaimsAggregateBoolExpBool_andArgumentsColumns = 'isPurchased'


/** select "claimsAggregateBoolExpBool_orArgumentsColumns" columns of table "claims" */
export type ClaimsSelectColumnClaimsAggregateBoolExpBool_orArgumentsColumns = 'isPurchased'


/** update columns of table "claims" */
export type ClaimsUpdateColumn = 'giftIdeaId' | 'id' | 'isPurchased' | 'userId'


/** ordering argument of a cursor */
export type CursorOrdering = 'ASC' | 'DESC'


/** Whose lists do you want to see? */
export interface Follows {
    createdAt: Scalars['timestamptz']
    /** An object relationship */
    follower: Users
    followerId: Scalars['uuid']
    followingId: Scalars['uuid']
    /** An object relationship */
    user: Users
    __typename: 'Follows'
}


/** aggregated selection of "follows" */
export interface FollowsAggregate {
    aggregate?: FollowsAggregateFields
    nodes: Follows[]
    __typename: 'FollowsAggregate'
}


/** aggregate fields of "follows" */
export interface FollowsAggregateFields {
    count: Scalars['Int']
    max?: FollowsMaxFields
    min?: FollowsMinFields
    __typename: 'FollowsAggregateFields'
}


/** unique or primary key constraints on table "follows" */
export type FollowsConstraint = 'follows_pkey'


/** aggregate max on columns */
export interface FollowsMaxFields {
    createdAt?: Scalars['timestamptz']
    followerId?: Scalars['uuid']
    followingId?: Scalars['uuid']
    __typename: 'FollowsMaxFields'
}


/** aggregate min on columns */
export interface FollowsMinFields {
    createdAt?: Scalars['timestamptz']
    followerId?: Scalars['uuid']
    followingId?: Scalars['uuid']
    __typename: 'FollowsMinFields'
}


/** response of any mutation on the table "follows" */
export interface FollowsMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Follows[]
    __typename: 'FollowsMutationResponse'
}


/** select columns of table "follows" */
export type FollowsSelectColumn = 'createdAt' | 'followerId' | 'followingId'


/** update columns of table "follows" */
export type FollowsUpdateColumn = 'createdAt' | 'followerId' | 'followingId'


/** columns and relationships of "gift_ideas" */
export interface GiftIdeas {
    /** An array relationship */
    claims: Claims[]
    /** An aggregate relationship */
    claimsAggregate: ClaimsAggregate
    createdAt: Scalars['timestamptz']
    /** An object relationship */
    createdBy: Users
    createdById: Scalars['uuid']
    description?: Scalars['String']
    id: Scalars['uuid']
    removed: Scalars['Boolean']
    title: Scalars['String']
    updatedAt: Scalars['timestamptz']
    url?: Scalars['String']
    /** An object relationship */
    user: Users
    userId: Scalars['uuid']
    /** An object relationship */
    wishlist?: Wishlists
    wishlistId?: Scalars['uuid']
    __typename: 'GiftIdeas'
}


/** aggregated selection of "gift_ideas" */
export interface GiftIdeasAggregate {
    aggregate?: GiftIdeasAggregateFields
    nodes: GiftIdeas[]
    __typename: 'GiftIdeasAggregate'
}


/** aggregate fields of "gift_ideas" */
export interface GiftIdeasAggregateFields {
    count: Scalars['Int']
    max?: GiftIdeasMaxFields
    min?: GiftIdeasMinFields
    __typename: 'GiftIdeasAggregateFields'
}


/** unique or primary key constraints on table "gift_ideas" */
export type GiftIdeasConstraint = 'gift_ideas_pkey'


/** aggregate max on columns */
export interface GiftIdeasMaxFields {
    createdAt?: Scalars['timestamptz']
    createdById?: Scalars['uuid']
    description?: Scalars['String']
    id?: Scalars['uuid']
    title?: Scalars['String']
    updatedAt?: Scalars['timestamptz']
    url?: Scalars['String']
    userId?: Scalars['uuid']
    wishlistId?: Scalars['uuid']
    __typename: 'GiftIdeasMaxFields'
}


/** aggregate min on columns */
export interface GiftIdeasMinFields {
    createdAt?: Scalars['timestamptz']
    createdById?: Scalars['uuid']
    description?: Scalars['String']
    id?: Scalars['uuid']
    title?: Scalars['String']
    updatedAt?: Scalars['timestamptz']
    url?: Scalars['String']
    userId?: Scalars['uuid']
    wishlistId?: Scalars['uuid']
    __typename: 'GiftIdeasMinFields'
}


/** response of any mutation on the table "gift_ideas" */
export interface GiftIdeasMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: GiftIdeas[]
    __typename: 'GiftIdeasMutationResponse'
}


/** select columns of table "gift_ideas" */
export type GiftIdeasSelectColumn = 'createdAt' | 'createdById' | 'description' | 'id' | 'removed' | 'title' | 'updatedAt' | 'url' | 'userId' | 'wishlistId'


/** select "giftIdeasAggregateBoolExpBool_andArgumentsColumns" columns of table "gift_ideas" */
export type GiftIdeasSelectColumnGiftIdeasAggregateBoolExpBool_andArgumentsColumns = 'removed'


/** select "giftIdeasAggregateBoolExpBool_orArgumentsColumns" columns of table "gift_ideas" */
export type GiftIdeasSelectColumnGiftIdeasAggregateBoolExpBool_orArgumentsColumns = 'removed'


/** update columns of table "gift_ideas" */
export type GiftIdeasUpdateColumn = 'createdAt' | 'createdById' | 'description' | 'id' | 'removed' | 'title' | 'updatedAt' | 'url' | 'userId' | 'wishlistId'


/** column ordering options */
export type OrderBy = 'ASC' | 'ASC_NULLS_FIRST' | 'ASC_NULLS_LAST' | 'DESC' | 'DESC_NULLS_FIRST' | 'DESC_NULLS_LAST'


/** columns and relationships of "users" */
export interface Users {
    /** An array relationship */
    claims: Claims[]
    /** An aggregate relationship */
    claimsAggregate: ClaimsAggregate
    createdAt: Scalars['timestamptz']
    /** An array relationship */
    followers: Follows[]
    /** An aggregate relationship */
    followersAggregate: FollowsAggregate
    /** An array relationship */
    follows: Follows[]
    /** An aggregate relationship */
    followsAggregate: FollowsAggregate
    /** An array relationship */
    giftIdeas: GiftIdeas[]
    /** An aggregate relationship */
    giftIdeasAggregate: GiftIdeasAggregate
    id: Scalars['uuid']
    name?: Scalars['String']
    photo?: Scalars['String']
    updatedAt: Scalars['timestamptz']
    username: Scalars['String']
    /** An array relationship */
    wishlists: Wishlists[]
    /** An aggregate relationship */
    wishlistsAggregate: WishlistsAggregate
    __typename: 'Users'
}


/** aggregated selection of "users" */
export interface UsersAggregate {
    aggregate?: UsersAggregateFields
    nodes: Users[]
    __typename: 'UsersAggregate'
}


/** aggregate fields of "users" */
export interface UsersAggregateFields {
    count: Scalars['Int']
    max?: UsersMaxFields
    min?: UsersMinFields
    __typename: 'UsersAggregateFields'
}


/** unique or primary key constraints on table "users" */
export type UsersConstraint = 'users_email_key' | 'users_pkey'


/** aggregate max on columns */
export interface UsersMaxFields {
    createdAt?: Scalars['timestamptz']
    id?: Scalars['uuid']
    name?: Scalars['String']
    photo?: Scalars['String']
    updatedAt?: Scalars['timestamptz']
    username?: Scalars['String']
    __typename: 'UsersMaxFields'
}


/** aggregate min on columns */
export interface UsersMinFields {
    createdAt?: Scalars['timestamptz']
    id?: Scalars['uuid']
    name?: Scalars['String']
    photo?: Scalars['String']
    updatedAt?: Scalars['timestamptz']
    username?: Scalars['String']
    __typename: 'UsersMinFields'
}


/** response of any mutation on the table "users" */
export interface UsersMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Users[]
    __typename: 'UsersMutationResponse'
}


/** select columns of table "users" */
export type UsersSelectColumn = 'createdAt' | 'id' | 'name' | 'photo' | 'updatedAt' | 'username'


/** update columns of table "users" */
export type UsersUpdateColumn = 'createdAt' | 'id' | 'name' | 'photo' | 'updatedAt' | 'username'


/** User wish lists */
export interface Wishlists {
    createdAt: Scalars['timestamptz']
    /** An object relationship */
    createdBy: Users
    createdById: Scalars['uuid']
    /** An array relationship */
    giftIdeas: GiftIdeas[]
    /** An aggregate relationship */
    giftIdeasAggregate: GiftIdeasAggregate
    id: Scalars['uuid']
    title: Scalars['String']
    updatedAt: Scalars['timestamptz']
    __typename: 'Wishlists'
}


/** aggregated selection of "wishlists" */
export interface WishlistsAggregate {
    aggregate?: WishlistsAggregateFields
    nodes: Wishlists[]
    __typename: 'WishlistsAggregate'
}


/** aggregate fields of "wishlists" */
export interface WishlistsAggregateFields {
    count: Scalars['Int']
    max?: WishlistsMaxFields
    min?: WishlistsMinFields
    __typename: 'WishlistsAggregateFields'
}


/** unique or primary key constraints on table "wishlists" */
export type WishlistsConstraint = 'wishlists_pkey'


/** aggregate max on columns */
export interface WishlistsMaxFields {
    createdAt?: Scalars['timestamptz']
    createdById?: Scalars['uuid']
    id?: Scalars['uuid']
    title?: Scalars['String']
    updatedAt?: Scalars['timestamptz']
    __typename: 'WishlistsMaxFields'
}


/** aggregate min on columns */
export interface WishlistsMinFields {
    createdAt?: Scalars['timestamptz']
    createdById?: Scalars['uuid']
    id?: Scalars['uuid']
    title?: Scalars['String']
    updatedAt?: Scalars['timestamptz']
    __typename: 'WishlistsMinFields'
}


/** response of any mutation on the table "wishlists" */
export interface WishlistsMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Wishlists[]
    __typename: 'WishlistsMutationResponse'
}


/** select columns of table "wishlists" */
export type WishlistsSelectColumn = 'createdAt' | 'createdById' | 'id' | 'title' | 'updatedAt'


/** update columns of table "wishlists" */
export type WishlistsUpdateColumn = 'createdAt' | 'createdById' | 'id' | 'title' | 'updatedAt'


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "claims" */
    deleteClaims?: ClaimsMutationResponse
    /** delete single row from the table: "claims" */
    deleteClaimsByPk?: Claims
    /** delete data from the table: "follows" */
    deleteFollows?: FollowsMutationResponse
    /** delete single row from the table: "follows" */
    deleteFollowsByPk?: Follows
    /** delete data from the table: "gift_ideas" */
    deleteGiftIdeas?: GiftIdeasMutationResponse
    /** delete single row from the table: "gift_ideas" */
    deleteGiftIdeasByPk?: GiftIdeas
    /** delete data from the table: "users" */
    deleteUsers?: UsersMutationResponse
    /** delete single row from the table: "users" */
    deleteUsersByPk?: Users
    /** delete data from the table: "wishlists" */
    deleteWishlists?: WishlistsMutationResponse
    /** delete single row from the table: "wishlists" */
    deleteWishlistsByPk?: Wishlists
    /** insert data into the table: "claims" */
    insertClaims?: ClaimsMutationResponse
    /** insert a single row into the table: "claims" */
    insertClaimsOne?: Claims
    /** insert data into the table: "follows" */
    insertFollows?: FollowsMutationResponse
    /** insert a single row into the table: "follows" */
    insertFollowsOne?: Follows
    /** insert data into the table: "gift_ideas" */
    insertGiftIdeas?: GiftIdeasMutationResponse
    /** insert a single row into the table: "gift_ideas" */
    insertGiftIdeasOne?: GiftIdeas
    /** insert data into the table: "users" */
    insertUsers?: UsersMutationResponse
    /** insert a single row into the table: "users" */
    insertUsersOne?: Users
    /** insert data into the table: "wishlists" */
    insertWishlists?: WishlistsMutationResponse
    /** insert a single row into the table: "wishlists" */
    insertWishlistsOne?: Wishlists
    /** update data of the table: "claims" */
    updateClaims?: ClaimsMutationResponse
    /** update single row of the table: "claims" */
    updateClaimsByPk?: Claims
    /** update multiples rows of table: "claims" */
    updateClaimsMany?: (ClaimsMutationResponse | undefined)[]
    /** update data of the table: "follows" */
    updateFollows?: FollowsMutationResponse
    /** update single row of the table: "follows" */
    updateFollowsByPk?: Follows
    /** update multiples rows of table: "follows" */
    updateFollowsMany?: (FollowsMutationResponse | undefined)[]
    /** update data of the table: "gift_ideas" */
    updateGiftIdeas?: GiftIdeasMutationResponse
    /** update single row of the table: "gift_ideas" */
    updateGiftIdeasByPk?: GiftIdeas
    /** update multiples rows of table: "gift_ideas" */
    updateGiftIdeasMany?: (GiftIdeasMutationResponse | undefined)[]
    /** update data of the table: "users" */
    updateUsers?: UsersMutationResponse
    /** update single row of the table: "users" */
    updateUsersByPk?: Users
    /** update multiples rows of table: "users" */
    updateUsersMany?: (UsersMutationResponse | undefined)[]
    /** update data of the table: "wishlists" */
    updateWishlists?: WishlistsMutationResponse
    /** update single row of the table: "wishlists" */
    updateWishlistsByPk?: Wishlists
    /** update multiples rows of table: "wishlists" */
    updateWishlistsMany?: (WishlistsMutationResponse | undefined)[]
    __typename: 'mutation_root'
}

export interface query_root {
    /** An array relationship */
    claims: Claims[]
    /** An aggregate relationship */
    claimsAggregate: ClaimsAggregate
    /** fetch data from the table: "claims" using primary key columns */
    claimsByPk?: Claims
    /** An array relationship */
    follows: Follows[]
    /** An aggregate relationship */
    followsAggregate: FollowsAggregate
    /** fetch data from the table: "follows" using primary key columns */
    followsByPk?: Follows
    /** An array relationship */
    giftIdeas: GiftIdeas[]
    /** An aggregate relationship */
    giftIdeasAggregate: GiftIdeasAggregate
    /** fetch data from the table: "gift_ideas" using primary key columns */
    giftIdeasByPk?: GiftIdeas
    /** fetch data from the table: "users" */
    users: Users[]
    /** fetch aggregated fields from the table: "users" */
    usersAggregate: UsersAggregate
    /** fetch data from the table: "users" using primary key columns */
    usersByPk?: Users
    /** An array relationship */
    wishlists: Wishlists[]
    /** An aggregate relationship */
    wishlistsAggregate: WishlistsAggregate
    /** fetch data from the table: "wishlists" using primary key columns */
    wishlistsByPk?: Wishlists
    __typename: 'query_root'
}

export interface subscription_root {
    /** An array relationship */
    claims: Claims[]
    /** An aggregate relationship */
    claimsAggregate: ClaimsAggregate
    /** fetch data from the table: "claims" using primary key columns */
    claimsByPk?: Claims
    /** fetch data from the table in a streaming manner: "claims" */
    claimsStream: Claims[]
    /** An array relationship */
    follows: Follows[]
    /** An aggregate relationship */
    followsAggregate: FollowsAggregate
    /** fetch data from the table: "follows" using primary key columns */
    followsByPk?: Follows
    /** fetch data from the table in a streaming manner: "follows" */
    followsStream: Follows[]
    /** An array relationship */
    giftIdeas: GiftIdeas[]
    /** An aggregate relationship */
    giftIdeasAggregate: GiftIdeasAggregate
    /** fetch data from the table: "gift_ideas" using primary key columns */
    giftIdeasByPk?: GiftIdeas
    /** fetch data from the table in a streaming manner: "gift_ideas" */
    giftIdeasStream: GiftIdeas[]
    /** fetch data from the table: "users" */
    users: Users[]
    /** fetch aggregated fields from the table: "users" */
    usersAggregate: UsersAggregate
    /** fetch data from the table: "users" using primary key columns */
    usersByPk?: Users
    /** fetch data from the table in a streaming manner: "users" */
    usersStream: Users[]
    /** An array relationship */
    wishlists: Wishlists[]
    /** An aggregate relationship */
    wishlistsAggregate: WishlistsAggregate
    /** fetch data from the table: "wishlists" using primary key columns */
    wishlistsByPk?: Wishlists
    /** fetch data from the table in a streaming manner: "wishlists" */
    wishlistsStream: Wishlists[]
    __typename: 'subscription_root'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface BooleanComparisonExp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** Who is claiming to buy certain gifts? */
export interface ClaimsRequest{
    /** An object relationship */
    giftIdea?: GiftIdeasRequest
    giftIdeaId?: boolean | number
    id?: boolean | number
    isPurchased?: boolean | number
    /** An object relationship */
    user?: UsersRequest
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "claims" */
export interface ClaimsAggregateRequest{
    aggregate?: ClaimsAggregateFieldsRequest
    nodes?: ClaimsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ClaimsAggregateBoolExp {bool_and?: (claimsAggregateBoolExpBool_and | null),bool_or?: (claimsAggregateBoolExpBool_or | null),count?: (claimsAggregateBoolExpCount | null)}


/** aggregate fields of "claims" */
export interface ClaimsAggregateFieldsRequest{
    count?: [{columns?: (ClaimsSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: ClaimsMaxFieldsRequest
    min?: ClaimsMinFieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "claims" */
export interface ClaimsAggregateOrderBy {count?: (OrderBy | null),max?: (ClaimsMaxOrderBy | null),min?: (ClaimsMinOrderBy | null)}


/** input type for inserting array relation for remote table "claims" */
export interface ClaimsArrRelInsertInput {data: ClaimsInsertInput[],
/** upsert condition */
onConflict?: (ClaimsOnConflict | null)}


/** Boolean expression to filter rows from the table "claims". All fields are combined with a logical 'AND'. */
export interface ClaimsBoolExp {_and?: (ClaimsBoolExp[] | null),_not?: (ClaimsBoolExp | null),_or?: (ClaimsBoolExp[] | null),giftIdea?: (GiftIdeasBoolExp | null),giftIdeaId?: (UuidComparisonExp | null),id?: (UuidComparisonExp | null),isPurchased?: (BooleanComparisonExp | null),user?: (UsersBoolExp | null),userId?: (UuidComparisonExp | null)}


/** input type for inserting data into table "claims" */
export interface ClaimsInsertInput {giftIdea?: (GiftIdeasObjRelInsertInput | null),giftIdeaId?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),isPurchased?: (Scalars['Boolean'] | null),user?: (UsersObjRelInsertInput | null),userId?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface ClaimsMaxFieldsRequest{
    giftIdeaId?: boolean | number
    id?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "claims" */
export interface ClaimsMaxOrderBy {giftIdeaId?: (OrderBy | null),id?: (OrderBy | null),userId?: (OrderBy | null)}


/** aggregate min on columns */
export interface ClaimsMinFieldsRequest{
    giftIdeaId?: boolean | number
    id?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "claims" */
export interface ClaimsMinOrderBy {giftIdeaId?: (OrderBy | null),id?: (OrderBy | null),userId?: (OrderBy | null)}


/** response of any mutation on the table "claims" */
export interface ClaimsMutationResponseRequest{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ClaimsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "claims" */
export interface ClaimsOnConflict {constraint: ClaimsConstraint,updateColumns: ClaimsUpdateColumn[],where?: (ClaimsBoolExp | null)}


/** Ordering options when selecting data from "claims". */
export interface ClaimsOrderBy {giftIdea?: (GiftIdeasOrderBy | null),giftIdeaId?: (OrderBy | null),id?: (OrderBy | null),isPurchased?: (OrderBy | null),user?: (UsersOrderBy | null),userId?: (OrderBy | null)}


/** primary key columns input for table: claims */
export interface ClaimsPkColumnsInput {id: Scalars['uuid']}


/** input type for updating data in table "claims" */
export interface ClaimsSetInput {giftIdeaId?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),isPurchased?: (Scalars['Boolean'] | null),userId?: (Scalars['uuid'] | null)}


/** Streaming cursor of the table "claims" */
export interface ClaimsStreamCursorInput {
/** Stream column input with initial value */
initialValue: ClaimsStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface ClaimsStreamCursorValueInput {giftIdeaId?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),isPurchased?: (Scalars['Boolean'] | null),userId?: (Scalars['uuid'] | null)}

export interface ClaimsUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (ClaimsSetInput | null),
/** filter the rows which have to be updated */
where: ClaimsBoolExp}


/** Whose lists do you want to see? */
export interface FollowsRequest{
    createdAt?: boolean | number
    /** An object relationship */
    follower?: UsersRequest
    followerId?: boolean | number
    followingId?: boolean | number
    /** An object relationship */
    user?: UsersRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "follows" */
export interface FollowsAggregateRequest{
    aggregate?: FollowsAggregateFieldsRequest
    nodes?: FollowsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FollowsAggregateBoolExp {count?: (followsAggregateBoolExpCount | null)}


/** aggregate fields of "follows" */
export interface FollowsAggregateFieldsRequest{
    count?: [{columns?: (FollowsSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: FollowsMaxFieldsRequest
    min?: FollowsMinFieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "follows" */
export interface FollowsAggregateOrderBy {count?: (OrderBy | null),max?: (FollowsMaxOrderBy | null),min?: (FollowsMinOrderBy | null)}


/** input type for inserting array relation for remote table "follows" */
export interface FollowsArrRelInsertInput {data: FollowsInsertInput[],
/** upsert condition */
onConflict?: (FollowsOnConflict | null)}


/** Boolean expression to filter rows from the table "follows". All fields are combined with a logical 'AND'. */
export interface FollowsBoolExp {_and?: (FollowsBoolExp[] | null),_not?: (FollowsBoolExp | null),_or?: (FollowsBoolExp[] | null),createdAt?: (TimestamptzComparisonExp | null),follower?: (UsersBoolExp | null),followerId?: (UuidComparisonExp | null),followingId?: (UuidComparisonExp | null),user?: (UsersBoolExp | null)}


/** input type for inserting data into table "follows" */
export interface FollowsInsertInput {createdAt?: (Scalars['timestamptz'] | null),follower?: (UsersObjRelInsertInput | null),followerId?: (Scalars['uuid'] | null),followingId?: (Scalars['uuid'] | null),user?: (UsersObjRelInsertInput | null)}


/** aggregate max on columns */
export interface FollowsMaxFieldsRequest{
    createdAt?: boolean | number
    followerId?: boolean | number
    followingId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "follows" */
export interface FollowsMaxOrderBy {createdAt?: (OrderBy | null),followerId?: (OrderBy | null),followingId?: (OrderBy | null)}


/** aggregate min on columns */
export interface FollowsMinFieldsRequest{
    createdAt?: boolean | number
    followerId?: boolean | number
    followingId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "follows" */
export interface FollowsMinOrderBy {createdAt?: (OrderBy | null),followerId?: (OrderBy | null),followingId?: (OrderBy | null)}


/** response of any mutation on the table "follows" */
export interface FollowsMutationResponseRequest{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: FollowsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "follows" */
export interface FollowsOnConflict {constraint: FollowsConstraint,updateColumns: FollowsUpdateColumn[],where?: (FollowsBoolExp | null)}


/** Ordering options when selecting data from "follows". */
export interface FollowsOrderBy {createdAt?: (OrderBy | null),follower?: (UsersOrderBy | null),followerId?: (OrderBy | null),followingId?: (OrderBy | null),user?: (UsersOrderBy | null)}


/** primary key columns input for table: follows */
export interface FollowsPkColumnsInput {followerId: Scalars['uuid'],followingId: Scalars['uuid']}


/** input type for updating data in table "follows" */
export interface FollowsSetInput {createdAt?: (Scalars['timestamptz'] | null),followerId?: (Scalars['uuid'] | null),followingId?: (Scalars['uuid'] | null)}


/** Streaming cursor of the table "follows" */
export interface FollowsStreamCursorInput {
/** Stream column input with initial value */
initialValue: FollowsStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface FollowsStreamCursorValueInput {createdAt?: (Scalars['timestamptz'] | null),followerId?: (Scalars['uuid'] | null),followingId?: (Scalars['uuid'] | null)}

export interface FollowsUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (FollowsSetInput | null),
/** filter the rows which have to be updated */
where: FollowsBoolExp}


/** columns and relationships of "gift_ideas" */
export interface GiftIdeasRequest{
    /** An array relationship */
    claims?: [{
    /** distinct select on columns */
    distinctOn?: (ClaimsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (ClaimsOrderBy[] | null),
    /** filter the rows returned */
    where?: (ClaimsBoolExp | null)},ClaimsRequest] | ClaimsRequest
    /** An aggregate relationship */
    claimsAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (ClaimsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (ClaimsOrderBy[] | null),
    /** filter the rows returned */
    where?: (ClaimsBoolExp | null)},ClaimsAggregateRequest] | ClaimsAggregateRequest
    createdAt?: boolean | number
    /** An object relationship */
    createdBy?: UsersRequest
    createdById?: boolean | number
    description?: boolean | number
    id?: boolean | number
    removed?: boolean | number
    title?: boolean | number
    updatedAt?: boolean | number
    url?: boolean | number
    /** An object relationship */
    user?: UsersRequest
    userId?: boolean | number
    /** An object relationship */
    wishlist?: WishlistsRequest
    wishlistId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "gift_ideas" */
export interface GiftIdeasAggregateRequest{
    aggregate?: GiftIdeasAggregateFieldsRequest
    nodes?: GiftIdeasRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GiftIdeasAggregateBoolExp {bool_and?: (giftIdeasAggregateBoolExpBool_and | null),bool_or?: (giftIdeasAggregateBoolExpBool_or | null),count?: (giftIdeasAggregateBoolExpCount | null)}


/** aggregate fields of "gift_ideas" */
export interface GiftIdeasAggregateFieldsRequest{
    count?: [{columns?: (GiftIdeasSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: GiftIdeasMaxFieldsRequest
    min?: GiftIdeasMinFieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "gift_ideas" */
export interface GiftIdeasAggregateOrderBy {count?: (OrderBy | null),max?: (GiftIdeasMaxOrderBy | null),min?: (GiftIdeasMinOrderBy | null)}


/** input type for inserting array relation for remote table "gift_ideas" */
export interface GiftIdeasArrRelInsertInput {data: GiftIdeasInsertInput[],
/** upsert condition */
onConflict?: (GiftIdeasOnConflict | null)}


/** Boolean expression to filter rows from the table "gift_ideas". All fields are combined with a logical 'AND'. */
export interface GiftIdeasBoolExp {_and?: (GiftIdeasBoolExp[] | null),_not?: (GiftIdeasBoolExp | null),_or?: (GiftIdeasBoolExp[] | null),claims?: (ClaimsBoolExp | null),claimsAggregate?: (ClaimsAggregateBoolExp | null),createdAt?: (TimestamptzComparisonExp | null),createdBy?: (UsersBoolExp | null),createdById?: (UuidComparisonExp | null),description?: (StringComparisonExp | null),id?: (UuidComparisonExp | null),removed?: (BooleanComparisonExp | null),title?: (StringComparisonExp | null),updatedAt?: (TimestamptzComparisonExp | null),url?: (StringComparisonExp | null),user?: (UsersBoolExp | null),userId?: (UuidComparisonExp | null),wishlist?: (WishlistsBoolExp | null),wishlistId?: (UuidComparisonExp | null)}


/** input type for inserting data into table "gift_ideas" */
export interface GiftIdeasInsertInput {claims?: (ClaimsArrRelInsertInput | null),createdAt?: (Scalars['timestamptz'] | null),createdBy?: (UsersObjRelInsertInput | null),createdById?: (Scalars['uuid'] | null),description?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),removed?: (Scalars['Boolean'] | null),title?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),url?: (Scalars['String'] | null),user?: (UsersObjRelInsertInput | null),userId?: (Scalars['uuid'] | null),wishlist?: (WishlistsObjRelInsertInput | null),wishlistId?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface GiftIdeasMaxFieldsRequest{
    createdAt?: boolean | number
    createdById?: boolean | number
    description?: boolean | number
    id?: boolean | number
    title?: boolean | number
    updatedAt?: boolean | number
    url?: boolean | number
    userId?: boolean | number
    wishlistId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "gift_ideas" */
export interface GiftIdeasMaxOrderBy {createdAt?: (OrderBy | null),createdById?: (OrderBy | null),description?: (OrderBy | null),id?: (OrderBy | null),title?: (OrderBy | null),updatedAt?: (OrderBy | null),url?: (OrderBy | null),userId?: (OrderBy | null),wishlistId?: (OrderBy | null)}


/** aggregate min on columns */
export interface GiftIdeasMinFieldsRequest{
    createdAt?: boolean | number
    createdById?: boolean | number
    description?: boolean | number
    id?: boolean | number
    title?: boolean | number
    updatedAt?: boolean | number
    url?: boolean | number
    userId?: boolean | number
    wishlistId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "gift_ideas" */
export interface GiftIdeasMinOrderBy {createdAt?: (OrderBy | null),createdById?: (OrderBy | null),description?: (OrderBy | null),id?: (OrderBy | null),title?: (OrderBy | null),updatedAt?: (OrderBy | null),url?: (OrderBy | null),userId?: (OrderBy | null),wishlistId?: (OrderBy | null)}


/** response of any mutation on the table "gift_ideas" */
export interface GiftIdeasMutationResponseRequest{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: GiftIdeasRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "gift_ideas" */
export interface GiftIdeasObjRelInsertInput {data: GiftIdeasInsertInput,
/** upsert condition */
onConflict?: (GiftIdeasOnConflict | null)}


/** on_conflict condition type for table "gift_ideas" */
export interface GiftIdeasOnConflict {constraint: GiftIdeasConstraint,updateColumns: GiftIdeasUpdateColumn[],where?: (GiftIdeasBoolExp | null)}


/** Ordering options when selecting data from "gift_ideas". */
export interface GiftIdeasOrderBy {claimsAggregate?: (ClaimsAggregateOrderBy | null),createdAt?: (OrderBy | null),createdBy?: (UsersOrderBy | null),createdById?: (OrderBy | null),description?: (OrderBy | null),id?: (OrderBy | null),removed?: (OrderBy | null),title?: (OrderBy | null),updatedAt?: (OrderBy | null),url?: (OrderBy | null),user?: (UsersOrderBy | null),userId?: (OrderBy | null),wishlist?: (WishlistsOrderBy | null),wishlistId?: (OrderBy | null)}


/** primary key columns input for table: gift_ideas */
export interface GiftIdeasPkColumnsInput {id: Scalars['uuid']}


/** input type for updating data in table "gift_ideas" */
export interface GiftIdeasSetInput {createdAt?: (Scalars['timestamptz'] | null),createdById?: (Scalars['uuid'] | null),description?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),removed?: (Scalars['Boolean'] | null),title?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),url?: (Scalars['String'] | null),userId?: (Scalars['uuid'] | null),wishlistId?: (Scalars['uuid'] | null)}


/** Streaming cursor of the table "gift_ideas" */
export interface GiftIdeasStreamCursorInput {
/** Stream column input with initial value */
initialValue: GiftIdeasStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface GiftIdeasStreamCursorValueInput {createdAt?: (Scalars['timestamptz'] | null),createdById?: (Scalars['uuid'] | null),description?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),removed?: (Scalars['Boolean'] | null),title?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),url?: (Scalars['String'] | null),userId?: (Scalars['uuid'] | null),wishlistId?: (Scalars['uuid'] | null)}

export interface GiftIdeasUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (GiftIdeasSetInput | null),
/** filter the rows which have to be updated */
where: GiftIdeasBoolExp}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface IntComparisonExp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface StringComparisonExp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_isNull?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** columns and relationships of "users" */
export interface UsersRequest{
    /** An array relationship */
    claims?: [{
    /** distinct select on columns */
    distinctOn?: (ClaimsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (ClaimsOrderBy[] | null),
    /** filter the rows returned */
    where?: (ClaimsBoolExp | null)},ClaimsRequest] | ClaimsRequest
    /** An aggregate relationship */
    claimsAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (ClaimsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (ClaimsOrderBy[] | null),
    /** filter the rows returned */
    where?: (ClaimsBoolExp | null)},ClaimsAggregateRequest] | ClaimsAggregateRequest
    createdAt?: boolean | number
    /** An array relationship */
    followers?: [{
    /** distinct select on columns */
    distinctOn?: (FollowsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (FollowsOrderBy[] | null),
    /** filter the rows returned */
    where?: (FollowsBoolExp | null)},FollowsRequest] | FollowsRequest
    /** An aggregate relationship */
    followersAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (FollowsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (FollowsOrderBy[] | null),
    /** filter the rows returned */
    where?: (FollowsBoolExp | null)},FollowsAggregateRequest] | FollowsAggregateRequest
    /** An array relationship */
    follows?: [{
    /** distinct select on columns */
    distinctOn?: (FollowsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (FollowsOrderBy[] | null),
    /** filter the rows returned */
    where?: (FollowsBoolExp | null)},FollowsRequest] | FollowsRequest
    /** An aggregate relationship */
    followsAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (FollowsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (FollowsOrderBy[] | null),
    /** filter the rows returned */
    where?: (FollowsBoolExp | null)},FollowsAggregateRequest] | FollowsAggregateRequest
    /** An array relationship */
    giftIdeas?: [{
    /** distinct select on columns */
    distinctOn?: (GiftIdeasSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (GiftIdeasOrderBy[] | null),
    /** filter the rows returned */
    where?: (GiftIdeasBoolExp | null)},GiftIdeasRequest] | GiftIdeasRequest
    /** An aggregate relationship */
    giftIdeasAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (GiftIdeasSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (GiftIdeasOrderBy[] | null),
    /** filter the rows returned */
    where?: (GiftIdeasBoolExp | null)},GiftIdeasAggregateRequest] | GiftIdeasAggregateRequest
    id?: boolean | number
    name?: boolean | number
    photo?: boolean | number
    updatedAt?: boolean | number
    username?: boolean | number
    /** An array relationship */
    wishlists?: [{
    /** distinct select on columns */
    distinctOn?: (WishlistsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (WishlistsOrderBy[] | null),
    /** filter the rows returned */
    where?: (WishlistsBoolExp | null)},WishlistsRequest] | WishlistsRequest
    /** An aggregate relationship */
    wishlistsAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (WishlistsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (WishlistsOrderBy[] | null),
    /** filter the rows returned */
    where?: (WishlistsBoolExp | null)},WishlistsAggregateRequest] | WishlistsAggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "users" */
export interface UsersAggregateRequest{
    aggregate?: UsersAggregateFieldsRequest
    nodes?: UsersRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "users" */
export interface UsersAggregateFieldsRequest{
    count?: [{columns?: (UsersSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: UsersMaxFieldsRequest
    min?: UsersMinFieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface UsersBoolExp {_and?: (UsersBoolExp[] | null),_not?: (UsersBoolExp | null),_or?: (UsersBoolExp[] | null),claims?: (ClaimsBoolExp | null),claimsAggregate?: (ClaimsAggregateBoolExp | null),createdAt?: (TimestamptzComparisonExp | null),followers?: (FollowsBoolExp | null),followersAggregate?: (FollowsAggregateBoolExp | null),follows?: (FollowsBoolExp | null),followsAggregate?: (FollowsAggregateBoolExp | null),giftIdeas?: (GiftIdeasBoolExp | null),giftIdeasAggregate?: (GiftIdeasAggregateBoolExp | null),id?: (UuidComparisonExp | null),name?: (StringComparisonExp | null),photo?: (StringComparisonExp | null),updatedAt?: (TimestamptzComparisonExp | null),username?: (StringComparisonExp | null),wishlists?: (WishlistsBoolExp | null),wishlistsAggregate?: (WishlistsAggregateBoolExp | null)}


/** input type for inserting data into table "users" */
export interface UsersInsertInput {claims?: (ClaimsArrRelInsertInput | null),createdAt?: (Scalars['timestamptz'] | null),followers?: (FollowsArrRelInsertInput | null),follows?: (FollowsArrRelInsertInput | null),giftIdeas?: (GiftIdeasArrRelInsertInput | null),id?: (Scalars['uuid'] | null),name?: (Scalars['String'] | null),photo?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null),wishlists?: (WishlistsArrRelInsertInput | null)}


/** aggregate max on columns */
export interface UsersMaxFieldsRequest{
    createdAt?: boolean | number
    id?: boolean | number
    name?: boolean | number
    photo?: boolean | number
    updatedAt?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface UsersMinFieldsRequest{
    createdAt?: boolean | number
    id?: boolean | number
    name?: boolean | number
    photo?: boolean | number
    updatedAt?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "users" */
export interface UsersMutationResponseRequest{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: UsersRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "users" */
export interface UsersObjRelInsertInput {data: UsersInsertInput,
/** upsert condition */
onConflict?: (UsersOnConflict | null)}


/** on_conflict condition type for table "users" */
export interface UsersOnConflict {constraint: UsersConstraint,updateColumns: UsersUpdateColumn[],where?: (UsersBoolExp | null)}


/** Ordering options when selecting data from "users". */
export interface UsersOrderBy {claimsAggregate?: (ClaimsAggregateOrderBy | null),createdAt?: (OrderBy | null),followersAggregate?: (FollowsAggregateOrderBy | null),followsAggregate?: (FollowsAggregateOrderBy | null),giftIdeasAggregate?: (GiftIdeasAggregateOrderBy | null),id?: (OrderBy | null),name?: (OrderBy | null),photo?: (OrderBy | null),updatedAt?: (OrderBy | null),username?: (OrderBy | null),wishlistsAggregate?: (WishlistsAggregateOrderBy | null)}


/** primary key columns input for table: users */
export interface UsersPkColumnsInput {id: Scalars['uuid']}


/** input type for updating data in table "users" */
export interface UsersSetInput {createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),name?: (Scalars['String'] | null),photo?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** Streaming cursor of the table "users" */
export interface UsersStreamCursorInput {
/** Stream column input with initial value */
initialValue: UsersStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface UsersStreamCursorValueInput {createdAt?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),name?: (Scalars['String'] | null),photo?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}

export interface UsersUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (UsersSetInput | null),
/** filter the rows which have to be updated */
where: UsersBoolExp}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface UuidComparisonExp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}


/** User wish lists */
export interface WishlistsRequest{
    createdAt?: boolean | number
    /** An object relationship */
    createdBy?: UsersRequest
    createdById?: boolean | number
    /** An array relationship */
    giftIdeas?: [{
    /** distinct select on columns */
    distinctOn?: (GiftIdeasSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (GiftIdeasOrderBy[] | null),
    /** filter the rows returned */
    where?: (GiftIdeasBoolExp | null)},GiftIdeasRequest] | GiftIdeasRequest
    /** An aggregate relationship */
    giftIdeasAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (GiftIdeasSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (GiftIdeasOrderBy[] | null),
    /** filter the rows returned */
    where?: (GiftIdeasBoolExp | null)},GiftIdeasAggregateRequest] | GiftIdeasAggregateRequest
    id?: boolean | number
    title?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "wishlists" */
export interface WishlistsAggregateRequest{
    aggregate?: WishlistsAggregateFieldsRequest
    nodes?: WishlistsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WishlistsAggregateBoolExp {count?: (wishlistsAggregateBoolExpCount | null)}


/** aggregate fields of "wishlists" */
export interface WishlistsAggregateFieldsRequest{
    count?: [{columns?: (WishlistsSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: WishlistsMaxFieldsRequest
    min?: WishlistsMinFieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "wishlists" */
export interface WishlistsAggregateOrderBy {count?: (OrderBy | null),max?: (WishlistsMaxOrderBy | null),min?: (WishlistsMinOrderBy | null)}


/** input type for inserting array relation for remote table "wishlists" */
export interface WishlistsArrRelInsertInput {data: WishlistsInsertInput[],
/** upsert condition */
onConflict?: (WishlistsOnConflict | null)}


/** Boolean expression to filter rows from the table "wishlists". All fields are combined with a logical 'AND'. */
export interface WishlistsBoolExp {_and?: (WishlistsBoolExp[] | null),_not?: (WishlistsBoolExp | null),_or?: (WishlistsBoolExp[] | null),createdAt?: (TimestamptzComparisonExp | null),createdBy?: (UsersBoolExp | null),createdById?: (UuidComparisonExp | null),giftIdeas?: (GiftIdeasBoolExp | null),giftIdeasAggregate?: (GiftIdeasAggregateBoolExp | null),id?: (UuidComparisonExp | null),title?: (StringComparisonExp | null),updatedAt?: (TimestamptzComparisonExp | null)}


/** input type for inserting data into table "wishlists" */
export interface WishlistsInsertInput {createdAt?: (Scalars['timestamptz'] | null),createdBy?: (UsersObjRelInsertInput | null),createdById?: (Scalars['uuid'] | null),giftIdeas?: (GiftIdeasArrRelInsertInput | null),id?: (Scalars['uuid'] | null),title?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface WishlistsMaxFieldsRequest{
    createdAt?: boolean | number
    createdById?: boolean | number
    id?: boolean | number
    title?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "wishlists" */
export interface WishlistsMaxOrderBy {createdAt?: (OrderBy | null),createdById?: (OrderBy | null),id?: (OrderBy | null),title?: (OrderBy | null),updatedAt?: (OrderBy | null)}


/** aggregate min on columns */
export interface WishlistsMinFieldsRequest{
    createdAt?: boolean | number
    createdById?: boolean | number
    id?: boolean | number
    title?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "wishlists" */
export interface WishlistsMinOrderBy {createdAt?: (OrderBy | null),createdById?: (OrderBy | null),id?: (OrderBy | null),title?: (OrderBy | null),updatedAt?: (OrderBy | null)}


/** response of any mutation on the table "wishlists" */
export interface WishlistsMutationResponseRequest{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: WishlistsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "wishlists" */
export interface WishlistsObjRelInsertInput {data: WishlistsInsertInput,
/** upsert condition */
onConflict?: (WishlistsOnConflict | null)}


/** on_conflict condition type for table "wishlists" */
export interface WishlistsOnConflict {constraint: WishlistsConstraint,updateColumns: WishlistsUpdateColumn[],where?: (WishlistsBoolExp | null)}


/** Ordering options when selecting data from "wishlists". */
export interface WishlistsOrderBy {createdAt?: (OrderBy | null),createdBy?: (UsersOrderBy | null),createdById?: (OrderBy | null),giftIdeasAggregate?: (GiftIdeasAggregateOrderBy | null),id?: (OrderBy | null),title?: (OrderBy | null),updatedAt?: (OrderBy | null)}


/** primary key columns input for table: wishlists */
export interface WishlistsPkColumnsInput {id: Scalars['uuid']}


/** input type for updating data in table "wishlists" */
export interface WishlistsSetInput {createdAt?: (Scalars['timestamptz'] | null),createdById?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),title?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null)}


/** Streaming cursor of the table "wishlists" */
export interface WishlistsStreamCursorInput {
/** Stream column input with initial value */
initialValue: WishlistsStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface WishlistsStreamCursorValueInput {createdAt?: (Scalars['timestamptz'] | null),createdById?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),title?: (Scalars['String'] | null),updatedAt?: (Scalars['timestamptz'] | null)}

export interface WishlistsUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (WishlistsSetInput | null),
/** filter the rows which have to be updated */
where: WishlistsBoolExp}

export interface claimsAggregateBoolExpBool_and {arguments: ClaimsSelectColumnClaimsAggregateBoolExpBool_andArgumentsColumns,distinct?: (Scalars['Boolean'] | null),filter?: (ClaimsBoolExp | null),predicate: BooleanComparisonExp}

export interface claimsAggregateBoolExpBool_or {arguments: ClaimsSelectColumnClaimsAggregateBoolExpBool_orArgumentsColumns,distinct?: (Scalars['Boolean'] | null),filter?: (ClaimsBoolExp | null),predicate: BooleanComparisonExp}

export interface claimsAggregateBoolExpCount {arguments?: (ClaimsSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (ClaimsBoolExp | null),predicate: IntComparisonExp}

export interface followsAggregateBoolExpCount {arguments?: (FollowsSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (FollowsBoolExp | null),predicate: IntComparisonExp}

export interface giftIdeasAggregateBoolExpBool_and {arguments: GiftIdeasSelectColumnGiftIdeasAggregateBoolExpBool_andArgumentsColumns,distinct?: (Scalars['Boolean'] | null),filter?: (GiftIdeasBoolExp | null),predicate: BooleanComparisonExp}

export interface giftIdeasAggregateBoolExpBool_or {arguments: GiftIdeasSelectColumnGiftIdeasAggregateBoolExpBool_orArgumentsColumns,distinct?: (Scalars['Boolean'] | null),filter?: (GiftIdeasBoolExp | null),predicate: BooleanComparisonExp}

export interface giftIdeasAggregateBoolExpCount {arguments?: (GiftIdeasSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (GiftIdeasBoolExp | null),predicate: IntComparisonExp}


/** mutation root */
export interface mutation_rootRequest{
    /** delete data from the table: "claims" */
    deleteClaims?: [{
    /** filter the rows which have to be deleted */
    where: ClaimsBoolExp},ClaimsMutationResponseRequest]
    /** delete single row from the table: "claims" */
    deleteClaimsByPk?: [{id: Scalars['uuid']},ClaimsRequest]
    /** delete data from the table: "follows" */
    deleteFollows?: [{
    /** filter the rows which have to be deleted */
    where: FollowsBoolExp},FollowsMutationResponseRequest]
    /** delete single row from the table: "follows" */
    deleteFollowsByPk?: [{followerId: Scalars['uuid'],followingId: Scalars['uuid']},FollowsRequest]
    /** delete data from the table: "gift_ideas" */
    deleteGiftIdeas?: [{
    /** filter the rows which have to be deleted */
    where: GiftIdeasBoolExp},GiftIdeasMutationResponseRequest]
    /** delete single row from the table: "gift_ideas" */
    deleteGiftIdeasByPk?: [{id: Scalars['uuid']},GiftIdeasRequest]
    /** delete data from the table: "users" */
    deleteUsers?: [{
    /** filter the rows which have to be deleted */
    where: UsersBoolExp},UsersMutationResponseRequest]
    /** delete single row from the table: "users" */
    deleteUsersByPk?: [{id: Scalars['uuid']},UsersRequest]
    /** delete data from the table: "wishlists" */
    deleteWishlists?: [{
    /** filter the rows which have to be deleted */
    where: WishlistsBoolExp},WishlistsMutationResponseRequest]
    /** delete single row from the table: "wishlists" */
    deleteWishlistsByPk?: [{id: Scalars['uuid']},WishlistsRequest]
    /** insert data into the table: "claims" */
    insertClaims?: [{
    /** the rows to be inserted */
    objects: ClaimsInsertInput[],
    /** upsert condition */
    onConflict?: (ClaimsOnConflict | null)},ClaimsMutationResponseRequest]
    /** insert a single row into the table: "claims" */
    insertClaimsOne?: [{
    /** the row to be inserted */
    object: ClaimsInsertInput,
    /** upsert condition */
    onConflict?: (ClaimsOnConflict | null)},ClaimsRequest]
    /** insert data into the table: "follows" */
    insertFollows?: [{
    /** the rows to be inserted */
    objects: FollowsInsertInput[],
    /** upsert condition */
    onConflict?: (FollowsOnConflict | null)},FollowsMutationResponseRequest]
    /** insert a single row into the table: "follows" */
    insertFollowsOne?: [{
    /** the row to be inserted */
    object: FollowsInsertInput,
    /** upsert condition */
    onConflict?: (FollowsOnConflict | null)},FollowsRequest]
    /** insert data into the table: "gift_ideas" */
    insertGiftIdeas?: [{
    /** the rows to be inserted */
    objects: GiftIdeasInsertInput[],
    /** upsert condition */
    onConflict?: (GiftIdeasOnConflict | null)},GiftIdeasMutationResponseRequest]
    /** insert a single row into the table: "gift_ideas" */
    insertGiftIdeasOne?: [{
    /** the row to be inserted */
    object: GiftIdeasInsertInput,
    /** upsert condition */
    onConflict?: (GiftIdeasOnConflict | null)},GiftIdeasRequest]
    /** insert data into the table: "users" */
    insertUsers?: [{
    /** the rows to be inserted */
    objects: UsersInsertInput[],
    /** upsert condition */
    onConflict?: (UsersOnConflict | null)},UsersMutationResponseRequest]
    /** insert a single row into the table: "users" */
    insertUsersOne?: [{
    /** the row to be inserted */
    object: UsersInsertInput,
    /** upsert condition */
    onConflict?: (UsersOnConflict | null)},UsersRequest]
    /** insert data into the table: "wishlists" */
    insertWishlists?: [{
    /** the rows to be inserted */
    objects: WishlistsInsertInput[],
    /** upsert condition */
    onConflict?: (WishlistsOnConflict | null)},WishlistsMutationResponseRequest]
    /** insert a single row into the table: "wishlists" */
    insertWishlistsOne?: [{
    /** the row to be inserted */
    object: WishlistsInsertInput,
    /** upsert condition */
    onConflict?: (WishlistsOnConflict | null)},WishlistsRequest]
    /** update data of the table: "claims" */
    updateClaims?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (ClaimsSetInput | null),
    /** filter the rows which have to be updated */
    where: ClaimsBoolExp},ClaimsMutationResponseRequest]
    /** update single row of the table: "claims" */
    updateClaimsByPk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (ClaimsSetInput | null),pkColumns: ClaimsPkColumnsInput},ClaimsRequest]
    /** update multiples rows of table: "claims" */
    updateClaimsMany?: [{
    /** updates to execute, in order */
    updates: ClaimsUpdates[]},ClaimsMutationResponseRequest]
    /** update data of the table: "follows" */
    updateFollows?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (FollowsSetInput | null),
    /** filter the rows which have to be updated */
    where: FollowsBoolExp},FollowsMutationResponseRequest]
    /** update single row of the table: "follows" */
    updateFollowsByPk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (FollowsSetInput | null),pkColumns: FollowsPkColumnsInput},FollowsRequest]
    /** update multiples rows of table: "follows" */
    updateFollowsMany?: [{
    /** updates to execute, in order */
    updates: FollowsUpdates[]},FollowsMutationResponseRequest]
    /** update data of the table: "gift_ideas" */
    updateGiftIdeas?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (GiftIdeasSetInput | null),
    /** filter the rows which have to be updated */
    where: GiftIdeasBoolExp},GiftIdeasMutationResponseRequest]
    /** update single row of the table: "gift_ideas" */
    updateGiftIdeasByPk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (GiftIdeasSetInput | null),pkColumns: GiftIdeasPkColumnsInput},GiftIdeasRequest]
    /** update multiples rows of table: "gift_ideas" */
    updateGiftIdeasMany?: [{
    /** updates to execute, in order */
    updates: GiftIdeasUpdates[]},GiftIdeasMutationResponseRequest]
    /** update data of the table: "users" */
    updateUsers?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (UsersSetInput | null),
    /** filter the rows which have to be updated */
    where: UsersBoolExp},UsersMutationResponseRequest]
    /** update single row of the table: "users" */
    updateUsersByPk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (UsersSetInput | null),pkColumns: UsersPkColumnsInput},UsersRequest]
    /** update multiples rows of table: "users" */
    updateUsersMany?: [{
    /** updates to execute, in order */
    updates: UsersUpdates[]},UsersMutationResponseRequest]
    /** update data of the table: "wishlists" */
    updateWishlists?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (WishlistsSetInput | null),
    /** filter the rows which have to be updated */
    where: WishlistsBoolExp},WishlistsMutationResponseRequest]
    /** update single row of the table: "wishlists" */
    updateWishlistsByPk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (WishlistsSetInput | null),pkColumns: WishlistsPkColumnsInput},WishlistsRequest]
    /** update multiples rows of table: "wishlists" */
    updateWishlistsMany?: [{
    /** updates to execute, in order */
    updates: WishlistsUpdates[]},WishlistsMutationResponseRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface query_rootRequest{
    /** An array relationship */
    claims?: [{
    /** distinct select on columns */
    distinctOn?: (ClaimsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (ClaimsOrderBy[] | null),
    /** filter the rows returned */
    where?: (ClaimsBoolExp | null)},ClaimsRequest] | ClaimsRequest
    /** An aggregate relationship */
    claimsAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (ClaimsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (ClaimsOrderBy[] | null),
    /** filter the rows returned */
    where?: (ClaimsBoolExp | null)},ClaimsAggregateRequest] | ClaimsAggregateRequest
    /** fetch data from the table: "claims" using primary key columns */
    claimsByPk?: [{id: Scalars['uuid']},ClaimsRequest]
    /** An array relationship */
    follows?: [{
    /** distinct select on columns */
    distinctOn?: (FollowsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (FollowsOrderBy[] | null),
    /** filter the rows returned */
    where?: (FollowsBoolExp | null)},FollowsRequest] | FollowsRequest
    /** An aggregate relationship */
    followsAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (FollowsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (FollowsOrderBy[] | null),
    /** filter the rows returned */
    where?: (FollowsBoolExp | null)},FollowsAggregateRequest] | FollowsAggregateRequest
    /** fetch data from the table: "follows" using primary key columns */
    followsByPk?: [{followerId: Scalars['uuid'],followingId: Scalars['uuid']},FollowsRequest]
    /** An array relationship */
    giftIdeas?: [{
    /** distinct select on columns */
    distinctOn?: (GiftIdeasSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (GiftIdeasOrderBy[] | null),
    /** filter the rows returned */
    where?: (GiftIdeasBoolExp | null)},GiftIdeasRequest] | GiftIdeasRequest
    /** An aggregate relationship */
    giftIdeasAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (GiftIdeasSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (GiftIdeasOrderBy[] | null),
    /** filter the rows returned */
    where?: (GiftIdeasBoolExp | null)},GiftIdeasAggregateRequest] | GiftIdeasAggregateRequest
    /** fetch data from the table: "gift_ideas" using primary key columns */
    giftIdeasByPk?: [{id: Scalars['uuid']},GiftIdeasRequest]
    /** fetch data from the table: "users" */
    users?: [{
    /** distinct select on columns */
    distinctOn?: (UsersSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (UsersOrderBy[] | null),
    /** filter the rows returned */
    where?: (UsersBoolExp | null)},UsersRequest] | UsersRequest
    /** fetch aggregated fields from the table: "users" */
    usersAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (UsersSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (UsersOrderBy[] | null),
    /** filter the rows returned */
    where?: (UsersBoolExp | null)},UsersAggregateRequest] | UsersAggregateRequest
    /** fetch data from the table: "users" using primary key columns */
    usersByPk?: [{id: Scalars['uuid']},UsersRequest]
    /** An array relationship */
    wishlists?: [{
    /** distinct select on columns */
    distinctOn?: (WishlistsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (WishlistsOrderBy[] | null),
    /** filter the rows returned */
    where?: (WishlistsBoolExp | null)},WishlistsRequest] | WishlistsRequest
    /** An aggregate relationship */
    wishlistsAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (WishlistsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (WishlistsOrderBy[] | null),
    /** filter the rows returned */
    where?: (WishlistsBoolExp | null)},WishlistsAggregateRequest] | WishlistsAggregateRequest
    /** fetch data from the table: "wishlists" using primary key columns */
    wishlistsByPk?: [{id: Scalars['uuid']},WishlistsRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootRequest{
    /** An array relationship */
    claims?: [{
    /** distinct select on columns */
    distinctOn?: (ClaimsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (ClaimsOrderBy[] | null),
    /** filter the rows returned */
    where?: (ClaimsBoolExp | null)},ClaimsRequest] | ClaimsRequest
    /** An aggregate relationship */
    claimsAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (ClaimsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (ClaimsOrderBy[] | null),
    /** filter the rows returned */
    where?: (ClaimsBoolExp | null)},ClaimsAggregateRequest] | ClaimsAggregateRequest
    /** fetch data from the table: "claims" using primary key columns */
    claimsByPk?: [{id: Scalars['uuid']},ClaimsRequest]
    /** fetch data from the table in a streaming manner: "claims" */
    claimsStream?: [{
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (ClaimsStreamCursorInput | null)[],
    /** filter the rows returned */
    where?: (ClaimsBoolExp | null)},ClaimsRequest]
    /** An array relationship */
    follows?: [{
    /** distinct select on columns */
    distinctOn?: (FollowsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (FollowsOrderBy[] | null),
    /** filter the rows returned */
    where?: (FollowsBoolExp | null)},FollowsRequest] | FollowsRequest
    /** An aggregate relationship */
    followsAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (FollowsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (FollowsOrderBy[] | null),
    /** filter the rows returned */
    where?: (FollowsBoolExp | null)},FollowsAggregateRequest] | FollowsAggregateRequest
    /** fetch data from the table: "follows" using primary key columns */
    followsByPk?: [{followerId: Scalars['uuid'],followingId: Scalars['uuid']},FollowsRequest]
    /** fetch data from the table in a streaming manner: "follows" */
    followsStream?: [{
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (FollowsStreamCursorInput | null)[],
    /** filter the rows returned */
    where?: (FollowsBoolExp | null)},FollowsRequest]
    /** An array relationship */
    giftIdeas?: [{
    /** distinct select on columns */
    distinctOn?: (GiftIdeasSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (GiftIdeasOrderBy[] | null),
    /** filter the rows returned */
    where?: (GiftIdeasBoolExp | null)},GiftIdeasRequest] | GiftIdeasRequest
    /** An aggregate relationship */
    giftIdeasAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (GiftIdeasSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (GiftIdeasOrderBy[] | null),
    /** filter the rows returned */
    where?: (GiftIdeasBoolExp | null)},GiftIdeasAggregateRequest] | GiftIdeasAggregateRequest
    /** fetch data from the table: "gift_ideas" using primary key columns */
    giftIdeasByPk?: [{id: Scalars['uuid']},GiftIdeasRequest]
    /** fetch data from the table in a streaming manner: "gift_ideas" */
    giftIdeasStream?: [{
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (GiftIdeasStreamCursorInput | null)[],
    /** filter the rows returned */
    where?: (GiftIdeasBoolExp | null)},GiftIdeasRequest]
    /** fetch data from the table: "users" */
    users?: [{
    /** distinct select on columns */
    distinctOn?: (UsersSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (UsersOrderBy[] | null),
    /** filter the rows returned */
    where?: (UsersBoolExp | null)},UsersRequest] | UsersRequest
    /** fetch aggregated fields from the table: "users" */
    usersAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (UsersSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (UsersOrderBy[] | null),
    /** filter the rows returned */
    where?: (UsersBoolExp | null)},UsersAggregateRequest] | UsersAggregateRequest
    /** fetch data from the table: "users" using primary key columns */
    usersByPk?: [{id: Scalars['uuid']},UsersRequest]
    /** fetch data from the table in a streaming manner: "users" */
    usersStream?: [{
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (UsersStreamCursorInput | null)[],
    /** filter the rows returned */
    where?: (UsersBoolExp | null)},UsersRequest]
    /** An array relationship */
    wishlists?: [{
    /** distinct select on columns */
    distinctOn?: (WishlistsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (WishlistsOrderBy[] | null),
    /** filter the rows returned */
    where?: (WishlistsBoolExp | null)},WishlistsRequest] | WishlistsRequest
    /** An aggregate relationship */
    wishlistsAggregate?: [{
    /** distinct select on columns */
    distinctOn?: (WishlistsSelectColumn[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    orderBy?: (WishlistsOrderBy[] | null),
    /** filter the rows returned */
    where?: (WishlistsBoolExp | null)},WishlistsAggregateRequest] | WishlistsAggregateRequest
    /** fetch data from the table: "wishlists" using primary key columns */
    wishlistsByPk?: [{id: Scalars['uuid']},WishlistsRequest]
    /** fetch data from the table in a streaming manner: "wishlists" */
    wishlistsStream?: [{
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (WishlistsStreamCursorInput | null)[],
    /** filter the rows returned */
    where?: (WishlistsBoolExp | null)},WishlistsRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface wishlistsAggregateBoolExpCount {arguments?: (WishlistsSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (WishlistsBoolExp | null),predicate: IntComparisonExp}

export type QueryRequest = query_rootRequest
export type MutationRequest = mutation_rootRequest
export type SubscriptionRequest = subscription_rootRequest


const Claims_possibleTypes: string[] = ['Claims']
export const isClaims = (obj?: { __typename?: any } | null): obj is Claims => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isClaims"')
  return Claims_possibleTypes.includes(obj.__typename)
}



const ClaimsAggregate_possibleTypes: string[] = ['ClaimsAggregate']
export const isClaimsAggregate = (obj?: { __typename?: any } | null): obj is ClaimsAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isClaimsAggregate"')
  return ClaimsAggregate_possibleTypes.includes(obj.__typename)
}



const ClaimsAggregateFields_possibleTypes: string[] = ['ClaimsAggregateFields']
export const isClaimsAggregateFields = (obj?: { __typename?: any } | null): obj is ClaimsAggregateFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isClaimsAggregateFields"')
  return ClaimsAggregateFields_possibleTypes.includes(obj.__typename)
}



const ClaimsMaxFields_possibleTypes: string[] = ['ClaimsMaxFields']
export const isClaimsMaxFields = (obj?: { __typename?: any } | null): obj is ClaimsMaxFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isClaimsMaxFields"')
  return ClaimsMaxFields_possibleTypes.includes(obj.__typename)
}



const ClaimsMinFields_possibleTypes: string[] = ['ClaimsMinFields']
export const isClaimsMinFields = (obj?: { __typename?: any } | null): obj is ClaimsMinFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isClaimsMinFields"')
  return ClaimsMinFields_possibleTypes.includes(obj.__typename)
}



const ClaimsMutationResponse_possibleTypes: string[] = ['ClaimsMutationResponse']
export const isClaimsMutationResponse = (obj?: { __typename?: any } | null): obj is ClaimsMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isClaimsMutationResponse"')
  return ClaimsMutationResponse_possibleTypes.includes(obj.__typename)
}



const Follows_possibleTypes: string[] = ['Follows']
export const isFollows = (obj?: { __typename?: any } | null): obj is Follows => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFollows"')
  return Follows_possibleTypes.includes(obj.__typename)
}



const FollowsAggregate_possibleTypes: string[] = ['FollowsAggregate']
export const isFollowsAggregate = (obj?: { __typename?: any } | null): obj is FollowsAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFollowsAggregate"')
  return FollowsAggregate_possibleTypes.includes(obj.__typename)
}



const FollowsAggregateFields_possibleTypes: string[] = ['FollowsAggregateFields']
export const isFollowsAggregateFields = (obj?: { __typename?: any } | null): obj is FollowsAggregateFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFollowsAggregateFields"')
  return FollowsAggregateFields_possibleTypes.includes(obj.__typename)
}



const FollowsMaxFields_possibleTypes: string[] = ['FollowsMaxFields']
export const isFollowsMaxFields = (obj?: { __typename?: any } | null): obj is FollowsMaxFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFollowsMaxFields"')
  return FollowsMaxFields_possibleTypes.includes(obj.__typename)
}



const FollowsMinFields_possibleTypes: string[] = ['FollowsMinFields']
export const isFollowsMinFields = (obj?: { __typename?: any } | null): obj is FollowsMinFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFollowsMinFields"')
  return FollowsMinFields_possibleTypes.includes(obj.__typename)
}



const FollowsMutationResponse_possibleTypes: string[] = ['FollowsMutationResponse']
export const isFollowsMutationResponse = (obj?: { __typename?: any } | null): obj is FollowsMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFollowsMutationResponse"')
  return FollowsMutationResponse_possibleTypes.includes(obj.__typename)
}



const GiftIdeas_possibleTypes: string[] = ['GiftIdeas']
export const isGiftIdeas = (obj?: { __typename?: any } | null): obj is GiftIdeas => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGiftIdeas"')
  return GiftIdeas_possibleTypes.includes(obj.__typename)
}



const GiftIdeasAggregate_possibleTypes: string[] = ['GiftIdeasAggregate']
export const isGiftIdeasAggregate = (obj?: { __typename?: any } | null): obj is GiftIdeasAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGiftIdeasAggregate"')
  return GiftIdeasAggregate_possibleTypes.includes(obj.__typename)
}



const GiftIdeasAggregateFields_possibleTypes: string[] = ['GiftIdeasAggregateFields']
export const isGiftIdeasAggregateFields = (obj?: { __typename?: any } | null): obj is GiftIdeasAggregateFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGiftIdeasAggregateFields"')
  return GiftIdeasAggregateFields_possibleTypes.includes(obj.__typename)
}



const GiftIdeasMaxFields_possibleTypes: string[] = ['GiftIdeasMaxFields']
export const isGiftIdeasMaxFields = (obj?: { __typename?: any } | null): obj is GiftIdeasMaxFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGiftIdeasMaxFields"')
  return GiftIdeasMaxFields_possibleTypes.includes(obj.__typename)
}



const GiftIdeasMinFields_possibleTypes: string[] = ['GiftIdeasMinFields']
export const isGiftIdeasMinFields = (obj?: { __typename?: any } | null): obj is GiftIdeasMinFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGiftIdeasMinFields"')
  return GiftIdeasMinFields_possibleTypes.includes(obj.__typename)
}



const GiftIdeasMutationResponse_possibleTypes: string[] = ['GiftIdeasMutationResponse']
export const isGiftIdeasMutationResponse = (obj?: { __typename?: any } | null): obj is GiftIdeasMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGiftIdeasMutationResponse"')
  return GiftIdeasMutationResponse_possibleTypes.includes(obj.__typename)
}



const Users_possibleTypes: string[] = ['Users']
export const isUsers = (obj?: { __typename?: any } | null): obj is Users => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUsers"')
  return Users_possibleTypes.includes(obj.__typename)
}



const UsersAggregate_possibleTypes: string[] = ['UsersAggregate']
export const isUsersAggregate = (obj?: { __typename?: any } | null): obj is UsersAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUsersAggregate"')
  return UsersAggregate_possibleTypes.includes(obj.__typename)
}



const UsersAggregateFields_possibleTypes: string[] = ['UsersAggregateFields']
export const isUsersAggregateFields = (obj?: { __typename?: any } | null): obj is UsersAggregateFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUsersAggregateFields"')
  return UsersAggregateFields_possibleTypes.includes(obj.__typename)
}



const UsersMaxFields_possibleTypes: string[] = ['UsersMaxFields']
export const isUsersMaxFields = (obj?: { __typename?: any } | null): obj is UsersMaxFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUsersMaxFields"')
  return UsersMaxFields_possibleTypes.includes(obj.__typename)
}



const UsersMinFields_possibleTypes: string[] = ['UsersMinFields']
export const isUsersMinFields = (obj?: { __typename?: any } | null): obj is UsersMinFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUsersMinFields"')
  return UsersMinFields_possibleTypes.includes(obj.__typename)
}



const UsersMutationResponse_possibleTypes: string[] = ['UsersMutationResponse']
export const isUsersMutationResponse = (obj?: { __typename?: any } | null): obj is UsersMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUsersMutationResponse"')
  return UsersMutationResponse_possibleTypes.includes(obj.__typename)
}



const Wishlists_possibleTypes: string[] = ['Wishlists']
export const isWishlists = (obj?: { __typename?: any } | null): obj is Wishlists => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWishlists"')
  return Wishlists_possibleTypes.includes(obj.__typename)
}



const WishlistsAggregate_possibleTypes: string[] = ['WishlistsAggregate']
export const isWishlistsAggregate = (obj?: { __typename?: any } | null): obj is WishlistsAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWishlistsAggregate"')
  return WishlistsAggregate_possibleTypes.includes(obj.__typename)
}



const WishlistsAggregateFields_possibleTypes: string[] = ['WishlistsAggregateFields']
export const isWishlistsAggregateFields = (obj?: { __typename?: any } | null): obj is WishlistsAggregateFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWishlistsAggregateFields"')
  return WishlistsAggregateFields_possibleTypes.includes(obj.__typename)
}



const WishlistsMaxFields_possibleTypes: string[] = ['WishlistsMaxFields']
export const isWishlistsMaxFields = (obj?: { __typename?: any } | null): obj is WishlistsMaxFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWishlistsMaxFields"')
  return WishlistsMaxFields_possibleTypes.includes(obj.__typename)
}



const WishlistsMinFields_possibleTypes: string[] = ['WishlistsMinFields']
export const isWishlistsMinFields = (obj?: { __typename?: any } | null): obj is WishlistsMinFields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWishlistsMinFields"')
  return WishlistsMinFields_possibleTypes.includes(obj.__typename)
}



const WishlistsMutationResponse_possibleTypes: string[] = ['WishlistsMutationResponse']
export const isWishlistsMutationResponse = (obj?: { __typename?: any } | null): obj is WishlistsMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWishlistsMutationResponse"')
  return WishlistsMutationResponse_possibleTypes.includes(obj.__typename)
}



const mutation_root_possibleTypes: string[] = ['mutation_root']
export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



const query_root_possibleTypes: string[] = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes: string[] = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}
