// React propTypes
import PropTypes from 'prop-types';
// Apollo client library
import { createNetworkInterface, ApolloClient } from 'react-apollo';

// ----------------------

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
  opts: {
    credentials: 'include',
  },
});

// Helper function to create a new Apollo client, by merging in
// passed options alongside the defaults
function createClient(opt = {}) {
  return new ApolloClient(
    Object.assign(
      {
        reduxRootSelector: state => state.apollo,
        networkInterface,
      },
      opt,
    ),
  );
}

// Helper function that will merge a passed object with the expected
// React propTypes 'shape', for use with the `react-apollo` `graphql` HOC
export function mergeData(toMerge) {
  return PropTypes.shape(
    Object.assign(
      {
        loading: PropTypes.bool.isRequired,
      },
      toMerge,
    ),
  );
}

// Creates a new browser client
export function browserClient() {
  return createClient();
}

// Creates a new server-side client
export function serverClient() {
  return createClient({
    ssrMode: true,
  });
}
