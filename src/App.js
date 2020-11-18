import React from 'react';
import Input from './components/Input';
import Modal from './components/Modal';
import Table from './components/Table';

const App = () => {
  const [items, setItems] = React.useState([
    { breed: 'Лайка', color: 'Черный', age: '5', signs: 'Пятно на ухе' },
    { breed: 'Лайка', color: 'Черный', age: '5', signs: 'Пятно на ухе' },
    { breed: 'Лайка', color: 'Черный', age: '5', signs: 'Пятно на ухе' },
  ]);
  const [activeModal, setActiveModal] = React.useState(false);
  const [lastAddedItem, setLastAddedItem] = React.useState(null);

  const addDog = (obj) => {
    setItems([...items, obj]);
    setLastAddedItem(obj);
    setActiveModal(true);
  };

  const changeDog = (obj, id) => {
    let newArr = items;
    newArr[id] = obj;
    setItems([...newArr]);
  };

  const deleteDog = (id) => {
    if (global.confirm('Вы действительно хотите удалить?')) {
      setItems(items.filter((_, idItem) => idItem !== id));
    }
  };

  return (
    <div className="table">
      <div className="title">Животные поступившие в приют</div>
      <Input submit={addDog} textButton="Добавить" styleClass="add" />
      <Table items={items} changeDog={changeDog} deleteDog={deleteDog} />
      {activeModal && <Modal item={lastAddedItem} setActiveModal={setActiveModal}/>}
      
    </div>
  );
};

export default App;
