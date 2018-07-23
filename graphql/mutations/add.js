const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLString = require("graphql").GraphQLString;
const UserType = require("../types/user").userType;
const UserModel = require("../../models/user");

exports.add = {
  type: UserType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const uModel = new UserModel(params);
    const newUser = uModel.save();
    if (!newUser) {
      throw new Error("=> could not create new user.");
    }
    return newUser;
  }
};
