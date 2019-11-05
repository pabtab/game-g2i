
// If we are sure about the API tags, we can use this decode.
// If it could contain html unsafe tags, we would use DOMPutify: https://github.com/cure53/DOMPurify or another solution.
export const decodeHtml = (text) => {
  return {__html: text};
};