/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.makeTable(rows);
  }

  makeTable(users) {
    let table = document.createElement('table');
    let button = '<button class="remove-button">X</button>';
    table.insertAdjacentHTML(
      'afterbegin',
      `<table>
        <thead>
          <tr class="pane">
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>`
    );
    for (let user of users) {
      table.insertAdjacentHTML(
        'afterbegin',
        `<tr class="pane">
          <td>${user.name}</td>
          <td>${user.age}</td>
          <td>${user.salary}</td>
          <td>${user.city}</td>
          <td>${button}</td>
        </tr>`
      );
      let buttonRemove = table.querySelector('.remove-button');
      buttonRemove.addEventListener('click', (event) =>
        event.target.closest('tr').remove()
      );
    }
    return table;
  }
}
