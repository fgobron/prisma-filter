/**
 * Static helpers methods for HTLM Elements generation
 */

/**
 * table data content generator
 * @param {Object} table HTMLTableElement container
 * @param {Object} data list of keys as header for the table
 */
function generateTableHead(table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  data.forEach((item) => {
    const th = document.createElement('th');
    const text = document.createTextNode(item);
    th.appendChild(text);
    row.appendChild(th);
  });
}


/**
 * table data content generator
 * @param {Object} table HTMLTableElement container
 * @param {Object[]} list list of clients
 */
function generateTableContent(table, list) {
  list.forEach((item) => {
    const row = table.insertRow();
    Object.keys(item).forEach((key) => {
      const cell = row.insertCell();
      const text = document.createTextNode(item[key]);
      cell.appendChild(text);
    });
  });
}


/**
 *  Main table generator
 * @param {Object[]} clients list of clients
 */
function generateTable(clients) {
  const table = document.createElement('table');
  const headers = Object.keys(clients[0]);
  generateTableContent(table, clients);
  generateTableHead(table, headers);
  document.body.appendChild(table);
}

export { generateTable };
