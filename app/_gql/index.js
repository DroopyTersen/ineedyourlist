
  const {
      linkTypeMap,
      createClient: createClientOriginal,
      generateGraphqlOperation,
      assertSameVersion,
  } = require('@gqlts/runtime')
  var typeMap = linkTypeMap(require('./types.cjs'))

  var version = '3.2.19-beta.97'
  assertSameVersion(version)

  module.exports.version = version

  module.exports.createClient = 
function(options) {
    options = options || {}
    var optionsCopy = {
      url: "http://localhost:1801/v1/graphql",
      queryRoot: typeMap.Query,
      mutationRoot: typeMap.Mutation,
      subscriptionRoot: typeMap.Subscription,
    }
    for (var name in options) {
      optionsCopy[name] = options[name];
    }
    return createClientOriginal(optionsCopy)
}

  module.exports.enumClaimsConstraint = {
  claims_pkey: 'claims_pkey'
}

module.exports.enumClaimsSelectColumn = {
  giftIdeaId: 'giftIdeaId',
  id: 'id',
  isPurchased: 'isPurchased',
  userId: 'userId'
}

module.exports.enumClaimsSelectColumnClaimsAggregateBoolExpBoolAndArgumentsColumns = {
  isPurchased: 'isPurchased'
}

module.exports.enumClaimsSelectColumnClaimsAggregateBoolExpBoolOrArgumentsColumns = {
  isPurchased: 'isPurchased'
}

module.exports.enumClaimsUpdateColumn = {
  giftIdeaId: 'giftIdeaId',
  id: 'id',
  isPurchased: 'isPurchased',
  userId: 'userId'
}

module.exports.enumCursorOrdering = {
  ASC: 'ASC',
  DESC: 'DESC'
}

module.exports.enumFollowsConstraint = {
  follows_pkey: 'follows_pkey'
}

module.exports.enumFollowsSelectColumn = {
  createdAt: 'createdAt',
  followerId: 'followerId',
  followingId: 'followingId'
}

module.exports.enumFollowsUpdateColumn = {
  createdAt: 'createdAt',
  followerId: 'followerId',
  followingId: 'followingId'
}

module.exports.enumGiftIdeasConstraint = {
  gift_ideas_pkey: 'gift_ideas_pkey'
}

module.exports.enumGiftIdeasSelectColumn = {
  createdAt: 'createdAt',
  createdById: 'createdById',
  description: 'description',
  id: 'id',
  removed: 'removed',
  title: 'title',
  updatedAt: 'updatedAt',
  url: 'url',
  userId: 'userId',
  wishlistId: 'wishlistId'
}

module.exports.enumGiftIdeasSelectColumnGiftIdeasAggregateBoolExpBoolAndArgumentsColumns = {
  removed: 'removed'
}

module.exports.enumGiftIdeasSelectColumnGiftIdeasAggregateBoolExpBoolOrArgumentsColumns = {
  removed: 'removed'
}

module.exports.enumGiftIdeasUpdateColumn = {
  createdAt: 'createdAt',
  createdById: 'createdById',
  description: 'description',
  id: 'id',
  removed: 'removed',
  title: 'title',
  updatedAt: 'updatedAt',
  url: 'url',
  userId: 'userId',
  wishlistId: 'wishlistId'
}

module.exports.enumOrderBy = {
  ASC: 'ASC',
  ASC_NULLS_FIRST: 'ASC_NULLS_FIRST',
  ASC_NULLS_LAST: 'ASC_NULLS_LAST',
  DESC: 'DESC',
  DESC_NULLS_FIRST: 'DESC_NULLS_FIRST',
  DESC_NULLS_LAST: 'DESC_NULLS_LAST'
}

module.exports.enumUsersConstraint = {
  users_email_key: 'users_email_key',
  users_pkey: 'users_pkey'
}

module.exports.enumUsersSelectColumn = {
  createdAt: 'createdAt',
  id: 'id',
  name: 'name',
  photo: 'photo',
  updatedAt: 'updatedAt',
  username: 'username'
}

module.exports.enumUsersUpdateColumn = {
  createdAt: 'createdAt',
  id: 'id',
  name: 'name',
  photo: 'photo',
  updatedAt: 'updatedAt',
  username: 'username'
}

module.exports.enumWishlistsConstraint = {
  wishlists_pkey: 'wishlists_pkey'
}

module.exports.enumWishlistsSelectColumn = {
  createdAt: 'createdAt',
  createdById: 'createdById',
  id: 'id',
  title: 'title',
  updatedAt: 'updatedAt'
}

module.exports.enumWishlistsUpdateColumn = {
  createdAt: 'createdAt',
  createdById: 'createdById',
  id: 'id',
  title: 'title',
  updatedAt: 'updatedAt'
}


  module.exports.generateQueryOp = function(fields) {
    return generateGraphqlOperation('query', typeMap.Query, fields)
  }
  module.exports.generateMutationOp = function(fields) {
    return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
  }
  module.exports.generateSubscriptionOp = function(fields) {
    return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
  }
  module.exports.everything = {
    __scalar: true
  }

  var schemaExports = require('./guards.cjs')
  for (var k in schemaExports) {
    module.exports[k] = schemaExports[k];
  }
  