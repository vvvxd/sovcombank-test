import React from 'react';
import Input from './components/Input';
import Modal from './components/Modal';
import Table from './components/Table';

const App = () => {
  const [items, setItems] = React.useState(null);
  const [activeModal, setActiveModal] = React.useState(false);
  const [lastAddedItem, setLastAddedItem] = React.useState(null);

  const loadDogs = () => {
    fetch('api/dogs', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => setItems(result));
  };

  React.useEffect(() => {
    loadDogs();
  }, []);

  const addDog = (obj) => {
    fetch('/api/dogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((result) => {
        setItems([...items, result]);
        setLastAddedItem(result);
        setActiveModal(true);
      });
  };

  const changeDog = (obj, id) => {
    fetch('/api/dogs/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((result) => {
        loadDogs();
      });
  };

  const deleteDog = (id) => {
    console.log(id);
    if (global.confirm('Вы действительно хотите удалить?')) {
      fetch('/api/dogs/' + id, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((res) => {
          loadDogs();
        });
    }
  };

  return (
    <div className="table">
      <div className="title">Животные поступившие в приют</div>
      <Input submit={addDog} textButton="Добавить" styleClass="add" />
      <Table items={items} changeDog={changeDog} deleteDog={deleteDog} />
      {activeModal && <Modal item={lastAddedItem} setActiveModal={setActiveModal} />}
    </div>
  );
};

export default App;
