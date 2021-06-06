let table = document.querySelector('table');
function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let redCell = table.rows[i].cells[i].style.backgroundColor = 'red';
  }
}
