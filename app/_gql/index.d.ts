
    import { FieldsSelection, GraphqlOperation, ClientOptions, ClientRequestConfig, Observable } from '@gqlts/runtime'
    import { Client as WSClient } from "graphql-ws"
    import { AxiosInstance } from 'axios'
    export * from './schema'
    import {query_rootRequest,query_root,mutation_rootRequest,mutation_root,subscription_rootRequest,subscription_root} from './schema'
    export declare const createClient:(options?: ClientOptions) => Client
    export declare const everything: { __scalar: boolean }
    export declare const version: string
  


    export type Head<T extends unknown | unknown[]> = T extends [infer H, ...unknown[]] ? H : never
    export interface GraphQLError {
        message: string
        code?: string
        locations?: {
            line: number
            column: number
        }[]
        path?: string | number[]
        extensions?: {
          [key: string]: unknown
        }
        [key: string]: unknown
    }

    export interface Extensions {
        [key: string]: unknown
    }

    export interface GraphqlResponse<D = any, E = GraphQLError[], X = Extensions> {
      data?: D;
      errors?: E;
      extensions?: X;
    }

    export interface Client<FI =AxiosInstance, RC =ClientRequestConfig> {
        wsClient?: WSClient
        fetcherInstance?: FI | undefined
        fetcherMethod: (operation: GraphqlOperation | GraphqlOperation[], config?: RC) => Promise<any>
        
        query<R extends query_rootRequest>(
            request: R & { __name?: string },
            config?: RC,
        ): Promise<GraphqlResponse<FieldsSelection<query_root, R>>>
        
        mutation<R extends mutation_rootRequest>(
            request: R & { __name?: string },
            config?: RC,
        ): Promise<GraphqlResponse<FieldsSelection<mutation_root, R>>>
        
        subscription<R extends subscription_rootRequest>(
            request: R & { __name?: string },
        ): Observable<GraphqlResponse<FieldsSelection<subscription_root, R>>>
        
    }
    


        export type QueryResult<fields extends query_rootRequest> = GraphqlResponse<FieldsSelection<query_root, fields>>

        export declare const generateQueryOp: (fields: query_rootRequest & { __name?: string }) => GraphqlOperation
        export type MutationResult<fields extends mutation_rootRequest> = GraphqlResponse<FieldsSelection<mutation_root, fields>>

        export declare const generateMutationOp: (fields: mutation_rootRequest & { __name?: string }) => GraphqlOperation
        export type SubscriptionResult<fields extends subscription_rootRequest> = GraphqlResponse<FieldsSelection<subscription_root, fields>>

        export declare const generateSubscriptionOp: (fields: subscription_rootRequest & { __name?: string }) => GraphqlOperation

export declare const enumClaimsConstraint: {
  readonly claims_pkey: 'claims_pkey'
}

export declare const enumClaimsSelectColumn: {
  readonly giftIdeaId: 'giftIdeaId',
  readonly id: 'id',
  readonly isPurchased: 'isPurchased',
  readonly userId: 'userId'
}

export declare const enumClaimsSelectColumnClaimsAggregateBoolExpBoolAndArgumentsColumns: {
  readonly isPurchased: 'isPurchased'
}

export declare const enumClaimsSelectColumnClaimsAggregateBoolExpBoolOrArgumentsColumns: {
  readonly isPurchased: 'isPurchased'
}

export declare const enumClaimsUpdateColumn: {
  readonly giftIdeaId: 'giftIdeaId',
  readonly id: 'id',
  readonly isPurchased: 'isPurchased',
  readonly userId: 'userId'
}

export declare const enumCursorOrdering: {
  readonly ASC: 'ASC',
  readonly DESC: 'DESC'
}

export declare const enumFollowsConstraint: {
  readonly follows_pkey: 'follows_pkey'
}

export declare const enumFollowsSelectColumn: {
  readonly createdAt: 'createdAt',
  readonly followerId: 'followerId',
  readonly followingId: 'followingId'
}

export declare const enumFollowsUpdateColumn: {
  readonly createdAt: 'createdAt',
  readonly followerId: 'followerId',
  readonly followingId: 'followingId'
}

export declare const enumGiftIdeasConstraint: {
  readonly gift_ideas_pkey: 'gift_ideas_pkey'
}

export declare const enumGiftIdeasSelectColumn: {
  readonly createdAt: 'createdAt',
  readonly createdById: 'createdById',
  readonly description: 'description',
  readonly id: 'id',
  readonly removed: 'removed',
  readonly title: 'title',
  readonly updatedAt: 'updatedAt',
  readonly url: 'url',
  readonly userId: 'userId',
  readonly wishlistId: 'wishlistId'
}

export declare const enumGiftIdeasSelectColumnGiftIdeasAggregateBoolExpBoolAndArgumentsColumns: {
  readonly removed: 'removed'
}

export declare const enumGiftIdeasSelectColumnGiftIdeasAggregateBoolExpBoolOrArgumentsColumns: {
  readonly removed: 'removed'
}

export declare const enumGiftIdeasUpdateColumn: {
  readonly createdAt: 'createdAt',
  readonly createdById: 'createdById',
  readonly description: 'description',
  readonly id: 'id',
  readonly removed: 'removed',
  readonly title: 'title',
  readonly updatedAt: 'updatedAt',
  readonly url: 'url',
  readonly userId: 'userId',
  readonly wishlistId: 'wishlistId'
}

export declare const enumOrderBy: {
  readonly ASC: 'ASC',
  readonly ASC_NULLS_FIRST: 'ASC_NULLS_FIRST',
  readonly ASC_NULLS_LAST: 'ASC_NULLS_LAST',
  readonly DESC: 'DESC',
  readonly DESC_NULLS_FIRST: 'DESC_NULLS_FIRST',
  readonly DESC_NULLS_LAST: 'DESC_NULLS_LAST'
}

export declare const enumUsersConstraint: {
  readonly users_email_key: 'users_email_key',
  readonly users_pkey: 'users_pkey'
}

export declare const enumUsersSelectColumn: {
  readonly createdAt: 'createdAt',
  readonly id: 'id',
  readonly name: 'name',
  readonly photo: 'photo',
  readonly updatedAt: 'updatedAt',
  readonly username: 'username'
}

export declare const enumUsersUpdateColumn: {
  readonly createdAt: 'createdAt',
  readonly id: 'id',
  readonly name: 'name',
  readonly photo: 'photo',
  readonly updatedAt: 'updatedAt',
  readonly username: 'username'
}

export declare const enumWishlistsConstraint: {
  readonly wishlists_pkey: 'wishlists_pkey'
}

export declare const enumWishlistsSelectColumn: {
  readonly createdAt: 'createdAt',
  readonly createdById: 'createdById',
  readonly id: 'id',
  readonly title: 'title',
  readonly updatedAt: 'updatedAt'
}

export declare const enumWishlistsUpdateColumn: {
  readonly createdAt: 'createdAt',
  readonly createdById: 'createdById',
  readonly id: 'id',
  readonly title: 'title',
  readonly updatedAt: 'updatedAt'
}
