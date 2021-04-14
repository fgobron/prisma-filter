/**
 * Static helpers methods for querystring managment
 * and build filter params
 */

/**
 * get querystring param value
 * @param {String} query querystring subpart
 * @returns {Array} Array of keys and entries from the URL search params
 * Sample : ?eyeColor=brown&ageRange=20-35 => [['eyeColor', 'brown'], ['ageRange', '20-35']]
 */
function parseQueryString(qs) {
  return qs.replace(/^\?/, '').split('&').map((s) => s.split('=').map((v) => decodeURIComponent(v)));
}

export default parseQueryString;
