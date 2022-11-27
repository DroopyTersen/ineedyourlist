FROM hasura/graphql-engine:latest

ENV HASURA_GRAPHQL_ENABLE_CONSOLE=true
ENV HASURA_GRAPHQL_DEV_MODE=true
ENV HASURA_GRAPHQL_UNAUTHORIZED_ROLE=anonymous

# $DATABASE_URL points at a Postgres database
CMD graphql-engine \
    --database-url $DATABASE_URL \
    serve \
    --server-port $PORT

#   You'll also need to set the following variables
#   They need to match the values you set in the deployed Remix app
#
# HASURA_GRAPHQL_ADMIN_SECRET="hasura-admin-secret"
# HASURA_JWT_SECRET=REPLACE_HASURA_JWT_SECRET
#