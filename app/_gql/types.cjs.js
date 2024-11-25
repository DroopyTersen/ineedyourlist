module.exports = {
    "scalars": [
        0,
        9,
        19,
        20,
        21,
        25,
        27,
        35,
        45,
        49,
        58,
        69,
        70,
        71,
        75,
        77,
        79,
        80,
        87,
        96,
        100,
        110,
        121,
        125,
        134,
        135
    ],
    "types": {
        "Boolean": {},
        "BooleanComparisonExp": {
            "_eq": [
                0
            ],
            "_gt": [
                0
            ],
            "_gte": [
                0
            ],
            "_in": [
                0
            ],
            "_isNull": [
                0
            ],
            "_lt": [
                0
            ],
            "_lte": [
                0
            ],
            "_neq": [
                0
            ],
            "_nin": [
                0
            ],
            "__typename": [
                80
            ]
        },
        "Claims": {
            "giftIdea": [
                51
            ],
            "giftIdeaId": [
                135
            ],
            "id": [
                135
            ],
            "isPurchased": [
                0
            ],
            "user": [
                83
            ],
            "userId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsAggregate": {
            "aggregate": [
                5
            ],
            "nodes": [
                2
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsAggregateBoolExp": {
            "bool_and": [
                127
            ],
            "bool_or": [
                128
            ],
            "count": [
                129
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsAggregateFields": {
            "count": [
                77,
                {
                    "columns": [
                        19,
                        "[ClaimsSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                11
            ],
            "min": [
                13
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsAggregateOrderBy": {
            "count": [
                79
            ],
            "max": [
                12
            ],
            "min": [
                14
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsArrRelInsertInput": {
            "data": [
                10
            ],
            "onConflict": [
                16
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsBoolExp": {
            "_and": [
                8
            ],
            "_not": [
                8
            ],
            "_or": [
                8
            ],
            "giftIdea": [
                57
            ],
            "giftIdeaId": [
                102
            ],
            "id": [
                102
            ],
            "isPurchased": [
                1
            ],
            "user": [
                86
            ],
            "userId": [
                102
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsConstraint": {},
        "ClaimsInsertInput": {
            "giftIdea": [
                65
            ],
            "giftIdeaId": [
                135
            ],
            "id": [
                135
            ],
            "isPurchased": [
                0
            ],
            "user": [
                92
            ],
            "userId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsMaxFields": {
            "giftIdeaId": [
                135
            ],
            "id": [
                135
            ],
            "userId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsMaxOrderBy": {
            "giftIdeaId": [
                79
            ],
            "id": [
                79
            ],
            "userId": [
                79
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsMinFields": {
            "giftIdeaId": [
                135
            ],
            "id": [
                135
            ],
            "userId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsMinOrderBy": {
            "giftIdeaId": [
                79
            ],
            "id": [
                79
            ],
            "userId": [
                79
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsMutationResponse": {
            "affectedRows": [
                77
            ],
            "returning": [
                2
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsOnConflict": {
            "constraint": [
                9
            ],
            "updateColumns": [
                25
            ],
            "where": [
                8
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsOrderBy": {
            "giftIdea": [
                67
            ],
            "giftIdeaId": [
                79
            ],
            "id": [
                79
            ],
            "isPurchased": [
                79
            ],
            "user": [
                94
            ],
            "userId": [
                79
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsPkColumnsInput": {
            "id": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsSelectColumn": {},
        "ClaimsSelectColumnClaimsAggregateBoolExpBool_andArgumentsColumns": {},
        "ClaimsSelectColumnClaimsAggregateBoolExpBool_orArgumentsColumns": {},
        "ClaimsSetInput": {
            "giftIdeaId": [
                135
            ],
            "id": [
                135
            ],
            "isPurchased": [
                0
            ],
            "userId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsStreamCursorInput": {
            "initialValue": [
                24
            ],
            "ordering": [
                27
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsStreamCursorValueInput": {
            "giftIdeaId": [
                135
            ],
            "id": [
                135
            ],
            "isPurchased": [
                0
            ],
            "userId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "ClaimsUpdateColumn": {},
        "ClaimsUpdates": {
            "_set": [
                22
            ],
            "where": [
                8
            ],
            "__typename": [
                80
            ]
        },
        "CursorOrdering": {},
        "Follows": {
            "createdAt": [
                134
            ],
            "follower": [
                83
            ],
            "followerId": [
                135
            ],
            "followingId": [
                135
            ],
            "user": [
                83
            ],
            "__typename": [
                80
            ]
        },
        "FollowsAggregate": {
            "aggregate": [
                31
            ],
            "nodes": [
                28
            ],
            "__typename": [
                80
            ]
        },
        "FollowsAggregateBoolExp": {
            "count": [
                130
            ],
            "__typename": [
                80
            ]
        },
        "FollowsAggregateFields": {
            "count": [
                77,
                {
                    "columns": [
                        45,
                        "[FollowsSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                37
            ],
            "min": [
                39
            ],
            "__typename": [
                80
            ]
        },
        "FollowsAggregateOrderBy": {
            "count": [
                79
            ],
            "max": [
                38
            ],
            "min": [
                40
            ],
            "__typename": [
                80
            ]
        },
        "FollowsArrRelInsertInput": {
            "data": [
                36
            ],
            "onConflict": [
                42
            ],
            "__typename": [
                80
            ]
        },
        "FollowsBoolExp": {
            "_and": [
                34
            ],
            "_not": [
                34
            ],
            "_or": [
                34
            ],
            "createdAt": [
                82
            ],
            "follower": [
                86
            ],
            "followerId": [
                102
            ],
            "followingId": [
                102
            ],
            "user": [
                86
            ],
            "__typename": [
                80
            ]
        },
        "FollowsConstraint": {},
        "FollowsInsertInput": {
            "createdAt": [
                134
            ],
            "follower": [
                92
            ],
            "followerId": [
                135
            ],
            "followingId": [
                135
            ],
            "user": [
                92
            ],
            "__typename": [
                80
            ]
        },
        "FollowsMaxFields": {
            "createdAt": [
                134
            ],
            "followerId": [
                135
            ],
            "followingId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "FollowsMaxOrderBy": {
            "createdAt": [
                79
            ],
            "followerId": [
                79
            ],
            "followingId": [
                79
            ],
            "__typename": [
                80
            ]
        },
        "FollowsMinFields": {
            "createdAt": [
                134
            ],
            "followerId": [
                135
            ],
            "followingId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "FollowsMinOrderBy": {
            "createdAt": [
                79
            ],
            "followerId": [
                79
            ],
            "followingId": [
                79
            ],
            "__typename": [
                80
            ]
        },
        "FollowsMutationResponse": {
            "affectedRows": [
                77
            ],
            "returning": [
                28
            ],
            "__typename": [
                80
            ]
        },
        "FollowsOnConflict": {
            "constraint": [
                35
            ],
            "updateColumns": [
                49
            ],
            "where": [
                34
            ],
            "__typename": [
                80
            ]
        },
        "FollowsOrderBy": {
            "createdAt": [
                79
            ],
            "follower": [
                94
            ],
            "followerId": [
                79
            ],
            "followingId": [
                79
            ],
            "user": [
                94
            ],
            "__typename": [
                80
            ]
        },
        "FollowsPkColumnsInput": {
            "followerId": [
                135
            ],
            "followingId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "FollowsSelectColumn": {},
        "FollowsSetInput": {
            "createdAt": [
                134
            ],
            "followerId": [
                135
            ],
            "followingId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "FollowsStreamCursorInput": {
            "initialValue": [
                48
            ],
            "ordering": [
                27
            ],
            "__typename": [
                80
            ]
        },
        "FollowsStreamCursorValueInput": {
            "createdAt": [
                134
            ],
            "followerId": [
                135
            ],
            "followingId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "FollowsUpdateColumn": {},
        "FollowsUpdates": {
            "_set": [
                46
            ],
            "where": [
                34
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeas": {
            "claims": [
                2,
                {
                    "distinctOn": [
                        19,
                        "[ClaimsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        17,
                        "[ClaimsOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "claimsAggregate": [
                3,
                {
                    "distinctOn": [
                        19,
                        "[ClaimsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        17,
                        "[ClaimsOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "createdAt": [
                134
            ],
            "createdBy": [
                83
            ],
            "createdById": [
                135
            ],
            "description": [
                80
            ],
            "id": [
                135
            ],
            "removed": [
                0
            ],
            "title": [
                80
            ],
            "updatedAt": [
                134
            ],
            "url": [
                80
            ],
            "user": [
                83
            ],
            "userId": [
                135
            ],
            "wishlist": [
                103
            ],
            "wishlistId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasAggregate": {
            "aggregate": [
                54
            ],
            "nodes": [
                51
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasAggregateBoolExp": {
            "bool_and": [
                131
            ],
            "bool_or": [
                132
            ],
            "count": [
                133
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasAggregateFields": {
            "count": [
                77,
                {
                    "columns": [
                        69,
                        "[GiftIdeasSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                60
            ],
            "min": [
                62
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasAggregateOrderBy": {
            "count": [
                79
            ],
            "max": [
                61
            ],
            "min": [
                63
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasArrRelInsertInput": {
            "data": [
                59
            ],
            "onConflict": [
                66
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasBoolExp": {
            "_and": [
                57
            ],
            "_not": [
                57
            ],
            "_or": [
                57
            ],
            "claims": [
                8
            ],
            "claimsAggregate": [
                4
            ],
            "createdAt": [
                82
            ],
            "createdBy": [
                86
            ],
            "createdById": [
                102
            ],
            "description": [
                81
            ],
            "id": [
                102
            ],
            "removed": [
                1
            ],
            "title": [
                81
            ],
            "updatedAt": [
                82
            ],
            "url": [
                81
            ],
            "user": [
                86
            ],
            "userId": [
                102
            ],
            "wishlist": [
                109
            ],
            "wishlistId": [
                102
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasConstraint": {},
        "GiftIdeasInsertInput": {
            "claims": [
                7
            ],
            "createdAt": [
                134
            ],
            "createdBy": [
                92
            ],
            "createdById": [
                135
            ],
            "description": [
                80
            ],
            "id": [
                135
            ],
            "removed": [
                0
            ],
            "title": [
                80
            ],
            "updatedAt": [
                134
            ],
            "url": [
                80
            ],
            "user": [
                92
            ],
            "userId": [
                135
            ],
            "wishlist": [
                117
            ],
            "wishlistId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasMaxFields": {
            "createdAt": [
                134
            ],
            "createdById": [
                135
            ],
            "description": [
                80
            ],
            "id": [
                135
            ],
            "title": [
                80
            ],
            "updatedAt": [
                134
            ],
            "url": [
                80
            ],
            "userId": [
                135
            ],
            "wishlistId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasMaxOrderBy": {
            "createdAt": [
                79
            ],
            "createdById": [
                79
            ],
            "description": [
                79
            ],
            "id": [
                79
            ],
            "title": [
                79
            ],
            "updatedAt": [
                79
            ],
            "url": [
                79
            ],
            "userId": [
                79
            ],
            "wishlistId": [
                79
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasMinFields": {
            "createdAt": [
                134
            ],
            "createdById": [
                135
            ],
            "description": [
                80
            ],
            "id": [
                135
            ],
            "title": [
                80
            ],
            "updatedAt": [
                134
            ],
            "url": [
                80
            ],
            "userId": [
                135
            ],
            "wishlistId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasMinOrderBy": {
            "createdAt": [
                79
            ],
            "createdById": [
                79
            ],
            "description": [
                79
            ],
            "id": [
                79
            ],
            "title": [
                79
            ],
            "updatedAt": [
                79
            ],
            "url": [
                79
            ],
            "userId": [
                79
            ],
            "wishlistId": [
                79
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasMutationResponse": {
            "affectedRows": [
                77
            ],
            "returning": [
                51
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasObjRelInsertInput": {
            "data": [
                59
            ],
            "onConflict": [
                66
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasOnConflict": {
            "constraint": [
                58
            ],
            "updateColumns": [
                75
            ],
            "where": [
                57
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasOrderBy": {
            "claimsAggregate": [
                6
            ],
            "createdAt": [
                79
            ],
            "createdBy": [
                94
            ],
            "createdById": [
                79
            ],
            "description": [
                79
            ],
            "id": [
                79
            ],
            "removed": [
                79
            ],
            "title": [
                79
            ],
            "updatedAt": [
                79
            ],
            "url": [
                79
            ],
            "user": [
                94
            ],
            "userId": [
                79
            ],
            "wishlist": [
                119
            ],
            "wishlistId": [
                79
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasPkColumnsInput": {
            "id": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasSelectColumn": {},
        "GiftIdeasSelectColumnGiftIdeasAggregateBoolExpBool_andArgumentsColumns": {},
        "GiftIdeasSelectColumnGiftIdeasAggregateBoolExpBool_orArgumentsColumns": {},
        "GiftIdeasSetInput": {
            "createdAt": [
                134
            ],
            "createdById": [
                135
            ],
            "description": [
                80
            ],
            "id": [
                135
            ],
            "removed": [
                0
            ],
            "title": [
                80
            ],
            "updatedAt": [
                134
            ],
            "url": [
                80
            ],
            "userId": [
                135
            ],
            "wishlistId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasStreamCursorInput": {
            "initialValue": [
                74
            ],
            "ordering": [
                27
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasStreamCursorValueInput": {
            "createdAt": [
                134
            ],
            "createdById": [
                135
            ],
            "description": [
                80
            ],
            "id": [
                135
            ],
            "removed": [
                0
            ],
            "title": [
                80
            ],
            "updatedAt": [
                134
            ],
            "url": [
                80
            ],
            "userId": [
                135
            ],
            "wishlistId": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "GiftIdeasUpdateColumn": {},
        "GiftIdeasUpdates": {
            "_set": [
                72
            ],
            "where": [
                57
            ],
            "__typename": [
                80
            ]
        },
        "Int": {},
        "IntComparisonExp": {
            "_eq": [
                77
            ],
            "_gt": [
                77
            ],
            "_gte": [
                77
            ],
            "_in": [
                77
            ],
            "_isNull": [
                0
            ],
            "_lt": [
                77
            ],
            "_lte": [
                77
            ],
            "_neq": [
                77
            ],
            "_nin": [
                77
            ],
            "__typename": [
                80
            ]
        },
        "OrderBy": {},
        "String": {},
        "StringComparisonExp": {
            "_eq": [
                80
            ],
            "_gt": [
                80
            ],
            "_gte": [
                80
            ],
            "_ilike": [
                80
            ],
            "_in": [
                80
            ],
            "_iregex": [
                80
            ],
            "_isNull": [
                0
            ],
            "_like": [
                80
            ],
            "_lt": [
                80
            ],
            "_lte": [
                80
            ],
            "_neq": [
                80
            ],
            "_nilike": [
                80
            ],
            "_nin": [
                80
            ],
            "_niregex": [
                80
            ],
            "_nlike": [
                80
            ],
            "_nregex": [
                80
            ],
            "_nsimilar": [
                80
            ],
            "_regex": [
                80
            ],
            "_similar": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "TimestamptzComparisonExp": {
            "_eq": [
                134
            ],
            "_gt": [
                134
            ],
            "_gte": [
                134
            ],
            "_in": [
                134
            ],
            "_isNull": [
                0
            ],
            "_lt": [
                134
            ],
            "_lte": [
                134
            ],
            "_neq": [
                134
            ],
            "_nin": [
                134
            ],
            "__typename": [
                80
            ]
        },
        "Users": {
            "claims": [
                2,
                {
                    "distinctOn": [
                        19,
                        "[ClaimsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        17,
                        "[ClaimsOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "claimsAggregate": [
                3,
                {
                    "distinctOn": [
                        19,
                        "[ClaimsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        17,
                        "[ClaimsOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "createdAt": [
                134
            ],
            "followers": [
                28,
                {
                    "distinctOn": [
                        45,
                        "[FollowsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        43,
                        "[FollowsOrderBy!]"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "followersAggregate": [
                29,
                {
                    "distinctOn": [
                        45,
                        "[FollowsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        43,
                        "[FollowsOrderBy!]"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "follows": [
                28,
                {
                    "distinctOn": [
                        45,
                        "[FollowsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        43,
                        "[FollowsOrderBy!]"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "followsAggregate": [
                29,
                {
                    "distinctOn": [
                        45,
                        "[FollowsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        43,
                        "[FollowsOrderBy!]"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "giftIdeas": [
                51,
                {
                    "distinctOn": [
                        69,
                        "[GiftIdeasSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        67,
                        "[GiftIdeasOrderBy!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "giftIdeasAggregate": [
                52,
                {
                    "distinctOn": [
                        69,
                        "[GiftIdeasSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        67,
                        "[GiftIdeasOrderBy!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "id": [
                135
            ],
            "name": [
                80
            ],
            "photo": [
                80
            ],
            "updatedAt": [
                134
            ],
            "username": [
                80
            ],
            "wishlists": [
                103,
                {
                    "distinctOn": [
                        121,
                        "[WishlistsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        119,
                        "[WishlistsOrderBy!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "wishlistsAggregate": [
                104,
                {
                    "distinctOn": [
                        121,
                        "[WishlistsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        119,
                        "[WishlistsOrderBy!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "__typename": [
                80
            ]
        },
        "UsersAggregate": {
            "aggregate": [
                85
            ],
            "nodes": [
                83
            ],
            "__typename": [
                80
            ]
        },
        "UsersAggregateFields": {
            "count": [
                77,
                {
                    "columns": [
                        96,
                        "[UsersSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                89
            ],
            "min": [
                90
            ],
            "__typename": [
                80
            ]
        },
        "UsersBoolExp": {
            "_and": [
                86
            ],
            "_not": [
                86
            ],
            "_or": [
                86
            ],
            "claims": [
                8
            ],
            "claimsAggregate": [
                4
            ],
            "createdAt": [
                82
            ],
            "followers": [
                34
            ],
            "followersAggregate": [
                30
            ],
            "follows": [
                34
            ],
            "followsAggregate": [
                30
            ],
            "giftIdeas": [
                57
            ],
            "giftIdeasAggregate": [
                53
            ],
            "id": [
                102
            ],
            "name": [
                81
            ],
            "photo": [
                81
            ],
            "updatedAt": [
                82
            ],
            "username": [
                81
            ],
            "wishlists": [
                109
            ],
            "wishlistsAggregate": [
                105
            ],
            "__typename": [
                80
            ]
        },
        "UsersConstraint": {},
        "UsersInsertInput": {
            "claims": [
                7
            ],
            "createdAt": [
                134
            ],
            "followers": [
                33
            ],
            "follows": [
                33
            ],
            "giftIdeas": [
                56
            ],
            "id": [
                135
            ],
            "name": [
                80
            ],
            "photo": [
                80
            ],
            "updatedAt": [
                134
            ],
            "username": [
                80
            ],
            "wishlists": [
                108
            ],
            "__typename": [
                80
            ]
        },
        "UsersMaxFields": {
            "createdAt": [
                134
            ],
            "id": [
                135
            ],
            "name": [
                80
            ],
            "photo": [
                80
            ],
            "updatedAt": [
                134
            ],
            "username": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "UsersMinFields": {
            "createdAt": [
                134
            ],
            "id": [
                135
            ],
            "name": [
                80
            ],
            "photo": [
                80
            ],
            "updatedAt": [
                134
            ],
            "username": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "UsersMutationResponse": {
            "affectedRows": [
                77
            ],
            "returning": [
                83
            ],
            "__typename": [
                80
            ]
        },
        "UsersObjRelInsertInput": {
            "data": [
                88
            ],
            "onConflict": [
                93
            ],
            "__typename": [
                80
            ]
        },
        "UsersOnConflict": {
            "constraint": [
                87
            ],
            "updateColumns": [
                100
            ],
            "where": [
                86
            ],
            "__typename": [
                80
            ]
        },
        "UsersOrderBy": {
            "claimsAggregate": [
                6
            ],
            "createdAt": [
                79
            ],
            "followersAggregate": [
                32
            ],
            "followsAggregate": [
                32
            ],
            "giftIdeasAggregate": [
                55
            ],
            "id": [
                79
            ],
            "name": [
                79
            ],
            "photo": [
                79
            ],
            "updatedAt": [
                79
            ],
            "username": [
                79
            ],
            "wishlistsAggregate": [
                107
            ],
            "__typename": [
                80
            ]
        },
        "UsersPkColumnsInput": {
            "id": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "UsersSelectColumn": {},
        "UsersSetInput": {
            "createdAt": [
                134
            ],
            "id": [
                135
            ],
            "name": [
                80
            ],
            "photo": [
                80
            ],
            "updatedAt": [
                134
            ],
            "username": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "UsersStreamCursorInput": {
            "initialValue": [
                99
            ],
            "ordering": [
                27
            ],
            "__typename": [
                80
            ]
        },
        "UsersStreamCursorValueInput": {
            "createdAt": [
                134
            ],
            "id": [
                135
            ],
            "name": [
                80
            ],
            "photo": [
                80
            ],
            "updatedAt": [
                134
            ],
            "username": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "UsersUpdateColumn": {},
        "UsersUpdates": {
            "_set": [
                97
            ],
            "where": [
                86
            ],
            "__typename": [
                80
            ]
        },
        "UuidComparisonExp": {
            "_eq": [
                135
            ],
            "_gt": [
                135
            ],
            "_gte": [
                135
            ],
            "_in": [
                135
            ],
            "_isNull": [
                0
            ],
            "_lt": [
                135
            ],
            "_lte": [
                135
            ],
            "_neq": [
                135
            ],
            "_nin": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "Wishlists": {
            "createdAt": [
                134
            ],
            "createdBy": [
                83
            ],
            "createdById": [
                135
            ],
            "giftIdeas": [
                51,
                {
                    "distinctOn": [
                        69,
                        "[GiftIdeasSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        67,
                        "[GiftIdeasOrderBy!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "giftIdeasAggregate": [
                52,
                {
                    "distinctOn": [
                        69,
                        "[GiftIdeasSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        67,
                        "[GiftIdeasOrderBy!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "id": [
                135
            ],
            "title": [
                80
            ],
            "updatedAt": [
                134
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsAggregate": {
            "aggregate": [
                106
            ],
            "nodes": [
                103
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsAggregateBoolExp": {
            "count": [
                136
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsAggregateFields": {
            "count": [
                77,
                {
                    "columns": [
                        121,
                        "[WishlistsSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                112
            ],
            "min": [
                114
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsAggregateOrderBy": {
            "count": [
                79
            ],
            "max": [
                113
            ],
            "min": [
                115
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsArrRelInsertInput": {
            "data": [
                111
            ],
            "onConflict": [
                118
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsBoolExp": {
            "_and": [
                109
            ],
            "_not": [
                109
            ],
            "_or": [
                109
            ],
            "createdAt": [
                82
            ],
            "createdBy": [
                86
            ],
            "createdById": [
                102
            ],
            "giftIdeas": [
                57
            ],
            "giftIdeasAggregate": [
                53
            ],
            "id": [
                102
            ],
            "title": [
                81
            ],
            "updatedAt": [
                82
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsConstraint": {},
        "WishlistsInsertInput": {
            "createdAt": [
                134
            ],
            "createdBy": [
                92
            ],
            "createdById": [
                135
            ],
            "giftIdeas": [
                56
            ],
            "id": [
                135
            ],
            "title": [
                80
            ],
            "updatedAt": [
                134
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsMaxFields": {
            "createdAt": [
                134
            ],
            "createdById": [
                135
            ],
            "id": [
                135
            ],
            "title": [
                80
            ],
            "updatedAt": [
                134
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsMaxOrderBy": {
            "createdAt": [
                79
            ],
            "createdById": [
                79
            ],
            "id": [
                79
            ],
            "title": [
                79
            ],
            "updatedAt": [
                79
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsMinFields": {
            "createdAt": [
                134
            ],
            "createdById": [
                135
            ],
            "id": [
                135
            ],
            "title": [
                80
            ],
            "updatedAt": [
                134
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsMinOrderBy": {
            "createdAt": [
                79
            ],
            "createdById": [
                79
            ],
            "id": [
                79
            ],
            "title": [
                79
            ],
            "updatedAt": [
                79
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsMutationResponse": {
            "affectedRows": [
                77
            ],
            "returning": [
                103
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsObjRelInsertInput": {
            "data": [
                111
            ],
            "onConflict": [
                118
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsOnConflict": {
            "constraint": [
                110
            ],
            "updateColumns": [
                125
            ],
            "where": [
                109
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsOrderBy": {
            "createdAt": [
                79
            ],
            "createdBy": [
                94
            ],
            "createdById": [
                79
            ],
            "giftIdeasAggregate": [
                55
            ],
            "id": [
                79
            ],
            "title": [
                79
            ],
            "updatedAt": [
                79
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsPkColumnsInput": {
            "id": [
                135
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsSelectColumn": {},
        "WishlistsSetInput": {
            "createdAt": [
                134
            ],
            "createdById": [
                135
            ],
            "id": [
                135
            ],
            "title": [
                80
            ],
            "updatedAt": [
                134
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsStreamCursorInput": {
            "initialValue": [
                124
            ],
            "ordering": [
                27
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsStreamCursorValueInput": {
            "createdAt": [
                134
            ],
            "createdById": [
                135
            ],
            "id": [
                135
            ],
            "title": [
                80
            ],
            "updatedAt": [
                134
            ],
            "__typename": [
                80
            ]
        },
        "WishlistsUpdateColumn": {},
        "WishlistsUpdates": {
            "_set": [
                122
            ],
            "where": [
                109
            ],
            "__typename": [
                80
            ]
        },
        "claimsAggregateBoolExpBool_and": {
            "arguments": [
                20
            ],
            "distinct": [
                0
            ],
            "filter": [
                8
            ],
            "predicate": [
                1
            ],
            "__typename": [
                80
            ]
        },
        "claimsAggregateBoolExpBool_or": {
            "arguments": [
                21
            ],
            "distinct": [
                0
            ],
            "filter": [
                8
            ],
            "predicate": [
                1
            ],
            "__typename": [
                80
            ]
        },
        "claimsAggregateBoolExpCount": {
            "arguments": [
                19
            ],
            "distinct": [
                0
            ],
            "filter": [
                8
            ],
            "predicate": [
                78
            ],
            "__typename": [
                80
            ]
        },
        "followsAggregateBoolExpCount": {
            "arguments": [
                45
            ],
            "distinct": [
                0
            ],
            "filter": [
                34
            ],
            "predicate": [
                78
            ],
            "__typename": [
                80
            ]
        },
        "giftIdeasAggregateBoolExpBool_and": {
            "arguments": [
                70
            ],
            "distinct": [
                0
            ],
            "filter": [
                57
            ],
            "predicate": [
                1
            ],
            "__typename": [
                80
            ]
        },
        "giftIdeasAggregateBoolExpBool_or": {
            "arguments": [
                71
            ],
            "distinct": [
                0
            ],
            "filter": [
                57
            ],
            "predicate": [
                1
            ],
            "__typename": [
                80
            ]
        },
        "giftIdeasAggregateBoolExpCount": {
            "arguments": [
                69
            ],
            "distinct": [
                0
            ],
            "filter": [
                57
            ],
            "predicate": [
                78
            ],
            "__typename": [
                80
            ]
        },
        "timestamptz": {},
        "uuid": {},
        "wishlistsAggregateBoolExpCount": {
            "arguments": [
                121
            ],
            "distinct": [
                0
            ],
            "filter": [
                109
            ],
            "predicate": [
                78
            ],
            "__typename": [
                80
            ]
        },
        "Query": {
            "claims": [
                2,
                {
                    "distinctOn": [
                        19,
                        "[ClaimsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        17,
                        "[ClaimsOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "claimsAggregate": [
                3,
                {
                    "distinctOn": [
                        19,
                        "[ClaimsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        17,
                        "[ClaimsOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "claimsByPk": [
                2,
                {
                    "id": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "follows": [
                28,
                {
                    "distinctOn": [
                        45,
                        "[FollowsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        43,
                        "[FollowsOrderBy!]"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "followsAggregate": [
                29,
                {
                    "distinctOn": [
                        45,
                        "[FollowsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        43,
                        "[FollowsOrderBy!]"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "followsByPk": [
                28,
                {
                    "followerId": [
                        135,
                        "uuid!"
                    ],
                    "followingId": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "giftIdeas": [
                51,
                {
                    "distinctOn": [
                        69,
                        "[GiftIdeasSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        67,
                        "[GiftIdeasOrderBy!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "giftIdeasAggregate": [
                52,
                {
                    "distinctOn": [
                        69,
                        "[GiftIdeasSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        67,
                        "[GiftIdeasOrderBy!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "giftIdeasByPk": [
                51,
                {
                    "id": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "users": [
                83,
                {
                    "distinctOn": [
                        96,
                        "[UsersSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        94,
                        "[UsersOrderBy!]"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "usersAggregate": [
                84,
                {
                    "distinctOn": [
                        96,
                        "[UsersSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        94,
                        "[UsersOrderBy!]"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "usersByPk": [
                83,
                {
                    "id": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "wishlists": [
                103,
                {
                    "distinctOn": [
                        121,
                        "[WishlistsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        119,
                        "[WishlistsOrderBy!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "wishlistsAggregate": [
                104,
                {
                    "distinctOn": [
                        121,
                        "[WishlistsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        119,
                        "[WishlistsOrderBy!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "wishlistsByPk": [
                103,
                {
                    "id": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                80
            ]
        },
        "Mutation": {
            "deleteClaims": [
                15,
                {
                    "where": [
                        8,
                        "ClaimsBoolExp!"
                    ]
                }
            ],
            "deleteClaimsByPk": [
                2,
                {
                    "id": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "deleteFollows": [
                41,
                {
                    "where": [
                        34,
                        "FollowsBoolExp!"
                    ]
                }
            ],
            "deleteFollowsByPk": [
                28,
                {
                    "followerId": [
                        135,
                        "uuid!"
                    ],
                    "followingId": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "deleteGiftIdeas": [
                64,
                {
                    "where": [
                        57,
                        "GiftIdeasBoolExp!"
                    ]
                }
            ],
            "deleteGiftIdeasByPk": [
                51,
                {
                    "id": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "deleteUsers": [
                91,
                {
                    "where": [
                        86,
                        "UsersBoolExp!"
                    ]
                }
            ],
            "deleteUsersByPk": [
                83,
                {
                    "id": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "deleteWishlists": [
                116,
                {
                    "where": [
                        109,
                        "WishlistsBoolExp!"
                    ]
                }
            ],
            "deleteWishlistsByPk": [
                103,
                {
                    "id": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "insertClaims": [
                15,
                {
                    "objects": [
                        10,
                        "[ClaimsInsertInput!]!"
                    ],
                    "onConflict": [
                        16
                    ]
                }
            ],
            "insertClaimsOne": [
                2,
                {
                    "object": [
                        10,
                        "ClaimsInsertInput!"
                    ],
                    "onConflict": [
                        16
                    ]
                }
            ],
            "insertFollows": [
                41,
                {
                    "objects": [
                        36,
                        "[FollowsInsertInput!]!"
                    ],
                    "onConflict": [
                        42
                    ]
                }
            ],
            "insertFollowsOne": [
                28,
                {
                    "object": [
                        36,
                        "FollowsInsertInput!"
                    ],
                    "onConflict": [
                        42
                    ]
                }
            ],
            "insertGiftIdeas": [
                64,
                {
                    "objects": [
                        59,
                        "[GiftIdeasInsertInput!]!"
                    ],
                    "onConflict": [
                        66
                    ]
                }
            ],
            "insertGiftIdeasOne": [
                51,
                {
                    "object": [
                        59,
                        "GiftIdeasInsertInput!"
                    ],
                    "onConflict": [
                        66
                    ]
                }
            ],
            "insertUsers": [
                91,
                {
                    "objects": [
                        88,
                        "[UsersInsertInput!]!"
                    ],
                    "onConflict": [
                        93
                    ]
                }
            ],
            "insertUsersOne": [
                83,
                {
                    "object": [
                        88,
                        "UsersInsertInput!"
                    ],
                    "onConflict": [
                        93
                    ]
                }
            ],
            "insertWishlists": [
                116,
                {
                    "objects": [
                        111,
                        "[WishlistsInsertInput!]!"
                    ],
                    "onConflict": [
                        118
                    ]
                }
            ],
            "insertWishlistsOne": [
                103,
                {
                    "object": [
                        111,
                        "WishlistsInsertInput!"
                    ],
                    "onConflict": [
                        118
                    ]
                }
            ],
            "updateClaims": [
                15,
                {
                    "_set": [
                        22
                    ],
                    "where": [
                        8,
                        "ClaimsBoolExp!"
                    ]
                }
            ],
            "updateClaimsByPk": [
                2,
                {
                    "_set": [
                        22
                    ],
                    "pkColumns": [
                        18,
                        "ClaimsPkColumnsInput!"
                    ]
                }
            ],
            "updateClaimsMany": [
                15,
                {
                    "updates": [
                        26,
                        "[ClaimsUpdates!]!"
                    ]
                }
            ],
            "updateFollows": [
                41,
                {
                    "_set": [
                        46
                    ],
                    "where": [
                        34,
                        "FollowsBoolExp!"
                    ]
                }
            ],
            "updateFollowsByPk": [
                28,
                {
                    "_set": [
                        46
                    ],
                    "pkColumns": [
                        44,
                        "FollowsPkColumnsInput!"
                    ]
                }
            ],
            "updateFollowsMany": [
                41,
                {
                    "updates": [
                        50,
                        "[FollowsUpdates!]!"
                    ]
                }
            ],
            "updateGiftIdeas": [
                64,
                {
                    "_set": [
                        72
                    ],
                    "where": [
                        57,
                        "GiftIdeasBoolExp!"
                    ]
                }
            ],
            "updateGiftIdeasByPk": [
                51,
                {
                    "_set": [
                        72
                    ],
                    "pkColumns": [
                        68,
                        "GiftIdeasPkColumnsInput!"
                    ]
                }
            ],
            "updateGiftIdeasMany": [
                64,
                {
                    "updates": [
                        76,
                        "[GiftIdeasUpdates!]!"
                    ]
                }
            ],
            "updateUsers": [
                91,
                {
                    "_set": [
                        97
                    ],
                    "where": [
                        86,
                        "UsersBoolExp!"
                    ]
                }
            ],
            "updateUsersByPk": [
                83,
                {
                    "_set": [
                        97
                    ],
                    "pkColumns": [
                        95,
                        "UsersPkColumnsInput!"
                    ]
                }
            ],
            "updateUsersMany": [
                91,
                {
                    "updates": [
                        101,
                        "[UsersUpdates!]!"
                    ]
                }
            ],
            "updateWishlists": [
                116,
                {
                    "_set": [
                        122
                    ],
                    "where": [
                        109,
                        "WishlistsBoolExp!"
                    ]
                }
            ],
            "updateWishlistsByPk": [
                103,
                {
                    "_set": [
                        122
                    ],
                    "pkColumns": [
                        120,
                        "WishlistsPkColumnsInput!"
                    ]
                }
            ],
            "updateWishlistsMany": [
                116,
                {
                    "updates": [
                        126,
                        "[WishlistsUpdates!]!"
                    ]
                }
            ],
            "__typename": [
                80
            ]
        },
        "Subscription": {
            "claims": [
                2,
                {
                    "distinctOn": [
                        19,
                        "[ClaimsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        17,
                        "[ClaimsOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "claimsAggregate": [
                3,
                {
                    "distinctOn": [
                        19,
                        "[ClaimsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        17,
                        "[ClaimsOrderBy!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "claimsByPk": [
                2,
                {
                    "id": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "claimsStream": [
                2,
                {
                    "batchSize": [
                        77,
                        "Int!"
                    ],
                    "cursor": [
                        23,
                        "[ClaimsStreamCursorInput]!"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "follows": [
                28,
                {
                    "distinctOn": [
                        45,
                        "[FollowsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        43,
                        "[FollowsOrderBy!]"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "followsAggregate": [
                29,
                {
                    "distinctOn": [
                        45,
                        "[FollowsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        43,
                        "[FollowsOrderBy!]"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "followsByPk": [
                28,
                {
                    "followerId": [
                        135,
                        "uuid!"
                    ],
                    "followingId": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "followsStream": [
                28,
                {
                    "batchSize": [
                        77,
                        "Int!"
                    ],
                    "cursor": [
                        47,
                        "[FollowsStreamCursorInput]!"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "giftIdeas": [
                51,
                {
                    "distinctOn": [
                        69,
                        "[GiftIdeasSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        67,
                        "[GiftIdeasOrderBy!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "giftIdeasAggregate": [
                52,
                {
                    "distinctOn": [
                        69,
                        "[GiftIdeasSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        67,
                        "[GiftIdeasOrderBy!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "giftIdeasByPk": [
                51,
                {
                    "id": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "giftIdeasStream": [
                51,
                {
                    "batchSize": [
                        77,
                        "Int!"
                    ],
                    "cursor": [
                        73,
                        "[GiftIdeasStreamCursorInput]!"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "users": [
                83,
                {
                    "distinctOn": [
                        96,
                        "[UsersSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        94,
                        "[UsersOrderBy!]"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "usersAggregate": [
                84,
                {
                    "distinctOn": [
                        96,
                        "[UsersSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        94,
                        "[UsersOrderBy!]"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "usersByPk": [
                83,
                {
                    "id": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "usersStream": [
                83,
                {
                    "batchSize": [
                        77,
                        "Int!"
                    ],
                    "cursor": [
                        98,
                        "[UsersStreamCursorInput]!"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "wishlists": [
                103,
                {
                    "distinctOn": [
                        121,
                        "[WishlistsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        119,
                        "[WishlistsOrderBy!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "wishlistsAggregate": [
                104,
                {
                    "distinctOn": [
                        121,
                        "[WishlistsSelectColumn!]"
                    ],
                    "limit": [
                        77
                    ],
                    "offset": [
                        77
                    ],
                    "orderBy": [
                        119,
                        "[WishlistsOrderBy!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "wishlistsByPk": [
                103,
                {
                    "id": [
                        135,
                        "uuid!"
                    ]
                }
            ],
            "wishlistsStream": [
                103,
                {
                    "batchSize": [
                        77,
                        "Int!"
                    ],
                    "cursor": [
                        123,
                        "[WishlistsStreamCursorInput]!"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "__typename": [
                80
            ]
        }
    }
}