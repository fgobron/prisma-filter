/**
 * Static helpers for fectching and manipulating data
 */

/**
 * fecth local datas
 * @returns {Object} promise
 */
export function getList() {
  return fetch('datas.json').then((response) => response.json());
}
/**
 * Extract useful subset of properties from raw datas
 * @param {Array} list json keys list
 * @returns {Array} Reduced list of properties as client entity
 */
export function extractClients(list) {
  return list.map(({
    index, name: { first: firstName, last: lastName }, age, eyeColor, email, balance,
  }) => ({
    index, firstName, lastName, age, eyeColor, email, balance,
  }));
}

/**
 * generic filter by string criteria on clients list
 * @param {Object[]} list list of clients
 * @param {String} param querystring param name
 * @param {String} value querystring param value
 * @returns {Array} filtered list of clients on simple based value of criteria ex: eyeColor=blue
 */
export function filterClientsBySimpleCriteria(list, param, value) {
  return list.filter((client) => client[param] === value);
}

/**
 * generic filter by numeric range criteria on clients list
 * @param {Object[]} list list of clients
 * @param {String} param querystring param name
 * @param {String} value querystring param value as range
 * @example ageRange=20-25
 * @returns {Array} filtered list of clients on range based value of criteria
 */
export function filterClientsByRangeCriteria(list, param, value) {
  const rangeValues = value.split('-');
  if (rangeValues.length === 2) {
    const min = parseInt(rangeValues[0], 10);
    const max = parseInt(rangeValues[1], 10);
    return list.filter((client) => client[param] >= min && client[param] <= max);
  }
  return list;
}
