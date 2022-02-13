export function getAvailableItems(source, typeProp) {
  return Object.keys(source).reduce((availableItemMap, currentItemId) => {
    if (source[currentItemId][typeProp] === 'AVAILABLE') {
      availableItemMap[currentItemId] = source[currentItemId];
    }
    return availableItemMap;
  }, {});
}
