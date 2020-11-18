import React from 'react';
import Input from './Input';
import ExportReactCSV from './ExportReactCSV';

function Table({ items, changeDog, deleteDog }) {
  const [changeItemId, setChangeItemId] = React.useState(null);

  const acceptTheChanges = (value, id) => {
    changeDog(value, id);
    setChangeItemId(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Порода</th>
          <th>Цвет</th>
          <th>Возраст</th>
          <th width="200px">Отличительные признаки</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, id) => {
          if (changeItemId === id) {
            return (
              <tr key={id}>
                <td colSpan={6}>
                  <Input
                    id={id}
                    item={item}
                    submit={acceptTheChanges}
                    textButton="Сохранить изменения"
                    styleClass="change"
                  />
                </td>
              </tr>
            );
          } else {
            return (
              <tr key={id}>
                <td>{item.breed}</td>
                <td>{item.color}</td>
                <td>{item.age}</td>
                <td>{item.signs}</td>
                <td>
                  <button className="but" onClick={() => setChangeItemId(id)}>
                    Изменить
                  </button>
                </td>
                <td>
                  <button className="but" onClick={() => deleteDog(id)}>
                    Удалить
                  </button>
                </td>
              </tr>
            );
          }
        })}
        <tr>
          <td>
            <ExportReactCSV csvData={items} fileName="Приют" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
