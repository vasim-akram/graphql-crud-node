const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLString = require("graphql").GraphQLString;
const UserType = require("../types/user").userType;
const UserModel = require("../../models/user");

exports.remove = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removeUser = UserModel.findByIdAndRemove(params.id).exec();
    if (!removeUser) {
      throw new Error("=> could not remove user.");
    }
    return removeUser;
  }
};
