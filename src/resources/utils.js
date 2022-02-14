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

export function getMerchTypeItems(source, merchType) {
  return Object.keys(source).reduce((merchTypeMap, currentItemId) => {
    if (source[currentItemId].type === merchType) {
      merchTypeMap[currentItemId] = source[currentItemId];
    }
    return merchTypeMap;
  }, {});
}
