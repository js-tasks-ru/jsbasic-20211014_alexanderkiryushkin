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
    this._rows = rows;
    this._elem = document.createElement('table');
    this.render();

  }
  render() {
    this._tbody = this._rows.map((item) =>
      `<tr>
            <td>${ item.name }</td>
            <td>${ item.age }</td>
            <td>${ item.salary }</td>
            <td>${ item.city }</td>
            <td><button>X</button></td>
        </tr>`);
    this.elem.innerHTML = `
        <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${this._tbody.join('')}
      </tbody>`;

    const buttons = this._elem.querySelectorAll('button');
    for (let button of buttons) {
      button.addEventListener('click', this.onButtonClick);
    }
  }

  onButtonClick(event) {
    const buttonDeleted = event.target.closest('tr');
    buttonDeleted.remove();
  }

  get elem() {
    return this._elem;
  }
}
