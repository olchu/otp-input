const firstLetterUpperCase = (word: string): string =>
  `${word.substring(0, 1).toUpperCase()}${word.substring(1).toLowerCase()}`;

const splitRegExp =
  /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
export const toCamelCase = (str: string): string => {
  return str
    .match(splitRegExp)!
    .map((word, index) =>
      index ? firstLetterUpperCase(word) : word.toLowerCase()
    )
    .join('');
};
