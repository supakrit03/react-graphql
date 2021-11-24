const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");
const axios = require("axios").default;
const User = require("./user");

// const users = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//   },
// ];

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: User,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        // return users.find((user) => user.id === args.id);
        return axios
          .get(`https://jsonplaceholder.typicode.com/users/${args.id}`)
          .then((resp) => resp.data); // asyc
      },
    },
  },
});

const RootMutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: User,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        console.log({ args });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutations,
});
