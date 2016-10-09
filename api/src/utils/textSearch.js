export default function(propertyRef, value, modelClass) {
  const formatter = modelClass.formatter();
  const columnName = formatter.wrap(propertyRef.fullColumnName());

  return {
    method: 'whereRaw',
    args: [`similarity(${columnName}, ?) > 0.2`, value.toLowerCase()],
  };
}
