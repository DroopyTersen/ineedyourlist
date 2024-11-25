
var Claims_possibleTypes = ['Claims']
module.exports.isClaims = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClaims"')
  return Claims_possibleTypes.includes(obj.__typename)
}



var ClaimsAggregate_possibleTypes = ['ClaimsAggregate']
module.exports.isClaimsAggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClaimsAggregate"')
  return ClaimsAggregate_possibleTypes.includes(obj.__typename)
}



var ClaimsAggregateFields_possibleTypes = ['ClaimsAggregateFields']
module.exports.isClaimsAggregateFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClaimsAggregateFields"')
  return ClaimsAggregateFields_possibleTypes.includes(obj.__typename)
}



var ClaimsMaxFields_possibleTypes = ['ClaimsMaxFields']
module.exports.isClaimsMaxFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClaimsMaxFields"')
  return ClaimsMaxFields_possibleTypes.includes(obj.__typename)
}



var ClaimsMinFields_possibleTypes = ['ClaimsMinFields']
module.exports.isClaimsMinFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClaimsMinFields"')
  return ClaimsMinFields_possibleTypes.includes(obj.__typename)
}



var ClaimsMutationResponse_possibleTypes = ['ClaimsMutationResponse']
module.exports.isClaimsMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClaimsMutationResponse"')
  return ClaimsMutationResponse_possibleTypes.includes(obj.__typename)
}



var Follows_possibleTypes = ['Follows']
module.exports.isFollows = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFollows"')
  return Follows_possibleTypes.includes(obj.__typename)
}



var FollowsAggregate_possibleTypes = ['FollowsAggregate']
module.exports.isFollowsAggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFollowsAggregate"')
  return FollowsAggregate_possibleTypes.includes(obj.__typename)
}



var FollowsAggregateFields_possibleTypes = ['FollowsAggregateFields']
module.exports.isFollowsAggregateFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFollowsAggregateFields"')
  return FollowsAggregateFields_possibleTypes.includes(obj.__typename)
}



var FollowsMaxFields_possibleTypes = ['FollowsMaxFields']
module.exports.isFollowsMaxFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFollowsMaxFields"')
  return FollowsMaxFields_possibleTypes.includes(obj.__typename)
}



var FollowsMinFields_possibleTypes = ['FollowsMinFields']
module.exports.isFollowsMinFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFollowsMinFields"')
  return FollowsMinFields_possibleTypes.includes(obj.__typename)
}



var FollowsMutationResponse_possibleTypes = ['FollowsMutationResponse']
module.exports.isFollowsMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFollowsMutationResponse"')
  return FollowsMutationResponse_possibleTypes.includes(obj.__typename)
}



var GiftIdeas_possibleTypes = ['GiftIdeas']
module.exports.isGiftIdeas = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGiftIdeas"')
  return GiftIdeas_possibleTypes.includes(obj.__typename)
}



var GiftIdeasAggregate_possibleTypes = ['GiftIdeasAggregate']
module.exports.isGiftIdeasAggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGiftIdeasAggregate"')
  return GiftIdeasAggregate_possibleTypes.includes(obj.__typename)
}



var GiftIdeasAggregateFields_possibleTypes = ['GiftIdeasAggregateFields']
module.exports.isGiftIdeasAggregateFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGiftIdeasAggregateFields"')
  return GiftIdeasAggregateFields_possibleTypes.includes(obj.__typename)
}



var GiftIdeasMaxFields_possibleTypes = ['GiftIdeasMaxFields']
module.exports.isGiftIdeasMaxFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGiftIdeasMaxFields"')
  return GiftIdeasMaxFields_possibleTypes.includes(obj.__typename)
}



var GiftIdeasMinFields_possibleTypes = ['GiftIdeasMinFields']
module.exports.isGiftIdeasMinFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGiftIdeasMinFields"')
  return GiftIdeasMinFields_possibleTypes.includes(obj.__typename)
}



var GiftIdeasMutationResponse_possibleTypes = ['GiftIdeasMutationResponse']
module.exports.isGiftIdeasMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGiftIdeasMutationResponse"')
  return GiftIdeasMutationResponse_possibleTypes.includes(obj.__typename)
}



var Users_possibleTypes = ['Users']
module.exports.isUsers = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUsers"')
  return Users_possibleTypes.includes(obj.__typename)
}



var UsersAggregate_possibleTypes = ['UsersAggregate']
module.exports.isUsersAggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUsersAggregate"')
  return UsersAggregate_possibleTypes.includes(obj.__typename)
}



var UsersAggregateFields_possibleTypes = ['UsersAggregateFields']
module.exports.isUsersAggregateFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUsersAggregateFields"')
  return UsersAggregateFields_possibleTypes.includes(obj.__typename)
}



var UsersMaxFields_possibleTypes = ['UsersMaxFields']
module.exports.isUsersMaxFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUsersMaxFields"')
  return UsersMaxFields_possibleTypes.includes(obj.__typename)
}



var UsersMinFields_possibleTypes = ['UsersMinFields']
module.exports.isUsersMinFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUsersMinFields"')
  return UsersMinFields_possibleTypes.includes(obj.__typename)
}



var UsersMutationResponse_possibleTypes = ['UsersMutationResponse']
module.exports.isUsersMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUsersMutationResponse"')
  return UsersMutationResponse_possibleTypes.includes(obj.__typename)
}



var Wishlists_possibleTypes = ['Wishlists']
module.exports.isWishlists = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWishlists"')
  return Wishlists_possibleTypes.includes(obj.__typename)
}



var WishlistsAggregate_possibleTypes = ['WishlistsAggregate']
module.exports.isWishlistsAggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWishlistsAggregate"')
  return WishlistsAggregate_possibleTypes.includes(obj.__typename)
}



var WishlistsAggregateFields_possibleTypes = ['WishlistsAggregateFields']
module.exports.isWishlistsAggregateFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWishlistsAggregateFields"')
  return WishlistsAggregateFields_possibleTypes.includes(obj.__typename)
}



var WishlistsMaxFields_possibleTypes = ['WishlistsMaxFields']
module.exports.isWishlistsMaxFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWishlistsMaxFields"')
  return WishlistsMaxFields_possibleTypes.includes(obj.__typename)
}



var WishlistsMinFields_possibleTypes = ['WishlistsMinFields']
module.exports.isWishlistsMinFields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWishlistsMinFields"')
  return WishlistsMinFields_possibleTypes.includes(obj.__typename)
}



var WishlistsMutationResponse_possibleTypes = ['WishlistsMutationResponse']
module.exports.isWishlistsMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWishlistsMutationResponse"')
  return WishlistsMutationResponse_possibleTypes.includes(obj.__typename)
}



var mutation_root_possibleTypes = ['mutation_root']
module.exports.ismutation_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



var query_root_possibleTypes = ['query_root']
module.exports.isquery_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



var subscription_root_possibleTypes = ['subscription_root']
module.exports.issubscription_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}
