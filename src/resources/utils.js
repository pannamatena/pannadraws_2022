export function getAvailableItems(source, typeProp) {
  if (source.type === 'adult_colouring') {
    return source;
  }
  return Object.keys(source).reduce((availableItemMap, currentItemId) => {
    if (source[currentItemId][typeProp] === 'AVAILABLE') {
      availableItemMap[currentItemId] = source[currentItemId];
    }
    return availableItemMap;
  }, {});
}
