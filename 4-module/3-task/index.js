function highlight(table) {
  let rowList = table.rows;
  for (let row of rowList) {
    console.log(row.cells[3]);
    row.cells[3].dataset.available === 'true' ? row.classList.add('available') :
      row.cells[3].dataset.available === 'false' ? row.classList.add('unavailable') :
        row.hidden = true;

    row.cells[2].textContent === 'm' ? row.classList.add('male') :
      row.classList.add('female');

    if (row.cells[1].textContent < 18) {
      row.style = 'text-decoration: line-through'
    }
  }
}