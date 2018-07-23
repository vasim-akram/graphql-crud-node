const GraphQLObjectType = require("graphql").GraphQLObjectType;
const GraphQLList = require("graphql").GraphQLList;
const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLString = require("graphql").GraphQLString;
const UserModel = require("../../models/user");
const UserType = require("../types/user").userType;

// Query type
exports.queryType = new GraphQLObjectType({
  name: "Query",
  fields: function() {
    return {
      users: {
        type: new GraphQLList(UserType),
        resolve: function() {
          const users = UserModel.find().exec();
          if (!users) {
            throw new Error("=> could not fetch users.");
          }
          return users;
        }
      },
      user: {
        type: UserType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(root, params) {
          const user = UserModel.findById(params.id).exec();
          if (!user) {
            throw new Error("=> could not fetch user by id.");
          }
          return user;
        }
      }
    };
  }
});
