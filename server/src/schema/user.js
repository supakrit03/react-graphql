const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const axios = require("axios").default;
const Post = require("./post");

module.exports = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    post: {
      type: new GraphQLList(Post),
      resolve(parentValue, args) {
        return axios
          .get(`https://jsonplaceholder.typicode.com/posts`)
          .then((resp) => resp.data)
          .then((data) =>
            data.filter((item) => item.userId === parentValue.id)
          );
      },
    },
  },
});
