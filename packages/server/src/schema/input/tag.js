import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const TagInput = new GraphQLInputObjectType({
  name: 'TagInput',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the tag',
    },
    description: {
      type: GraphQLString,
      description: 'A description of the tag.',
    },
  }),
});

export default TagInput;