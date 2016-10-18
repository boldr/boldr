export default function parseFilter(filter) {
  if (filter === 'all') {
    return filter;
  }
  if ({}.toString.call(filter) !== '[object Object]') {
    throw new Error('You are attempting to create a parseFilter from something ' +
      'other than a simple object. Filters must be expressed in a {key: value} pair.');
  }
  // sort keys for consistency in cases of multiple key:value pairs
  // this assumes all values in filter are string literals
  const keys = Object.keys(filter).sort();
  const parseFilters = keys.map(key => `${key}:${filter[key]}`);
  if (parseFilters.length === 1) {
    return parseFilters[0];
  }
  return parseFilters.reduce((id1, id2) => `${id1}&${id2}`);
}
