import imgDataFantasyArt_2023 from './pictures/2023/imgData_fantasyArt_2023';
import imgDataAnimalArt_2023 from './pictures/2023/imgData_animalArt_2023';
import imgDataFantasyArt_2022 from './pictures/2022/imgData_fantasyArt_2022';
import imgDataAnimalArt_2022 from './pictures/2022/imgData_animalArt_2022';
import imgDataAnimalArt_2021 from './pictures/2021/imgData_animalArt_2021';
import imgData_adultColoring_2021 from './pictures/adult_coloring/imgData_adultColoring_2021';
import imgDataAnimalArt_2020 from './pictures/2020/imgData_animalArt_2020';
import imgDataFantasyArt_2020 from './pictures/2020/imgData_fantasyArt_2020';

export function getAvailableItems(sourceMap, typeProp) {
  return Object.keys(sourceMap).reduce((availableItemMap, currentItemId) => {
    if (
      sourceMap[currentItemId][typeProp] === 'AVAILABLE' ||
      sourceMap[currentItemId][typeProp] === 'MSG'
    ) {
      availableItemMap[currentItemId] = sourceMap[currentItemId];
    }
    return availableItemMap;
  }, {});
}

export function getMerchTypeItems(source, merchType) {
  return Object.keys(source).reduce((merchTypeMap, currentItemId) => {
    if (
      source[currentItemId].type === 'merchandise' &&
      source[currentItemId].subType === merchType
    ) {
      merchTypeMap[currentItemId] = source[currentItemId];
    }
    if (source[currentItemId].type === merchType) {
      merchTypeMap[currentItemId] = source[currentItemId];
    }
    return merchTypeMap;
  }, {});
}

export function getDataSource(params) {
  switch (params.imgYear) {
    case '2023': {
      if (params.imgType === 'animal_watercolour_painting') {
        return imgDataAnimalArt_2023;
      }
      if (params.imgType === 'fantasy_watercolour_painting') {
        return imgDataFantasyArt_2023;
      }
      //params.imgType === 'adult_colouring'
      return imgData_adultColoring_2021;
    }
    case '2022': {
      if (params.imgType === 'animal_watercolour_painting') {
        return imgDataAnimalArt_2022;
      }
      if (params.imgType === 'fantasy_watercolour_painting') {
        return imgDataFantasyArt_2022;
      }
      //params.imgType === 'adult_colouring'
      return imgData_adultColoring_2021;
    }
    case '2021': {
      if (params.imgType === 'animal_watercolour_painting') {
        return imgDataAnimalArt_2021;
      }
      //params.imgType === 'adult_colouring'
      return imgData_adultColoring_2021;
    }
    case '2020': {
      if (
        params.imgType === 'animal_watercolour_painting' ||
        params.imgType === 'animal_coloured_pencil_drawing'
      ) {
        return imgDataAnimalArt_2020;
      }
      if (params.imgType === 'adult_colouring') {
        return imgData_adultColoring_2021;
      }
      //params.imgType === 'fantasy_watercolour_painting')
      return imgDataFantasyArt_2020;
    }
    default: {
      return {};
    }
  }
}

export function validateEmail(email) {
  const regex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return !!email.match(regex);
}

export function formatPrice(price) {
  return price.toFixed(2);
}
