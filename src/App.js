import React from 'react';

const App = () => {
    return (
        <div className="table">
            <div className="title">
                Животные поступившие в приют
            </div>
            <div className="add">
                <input className='input' type="text" placeholder='Порода'/>
                <input className='input' type="text" placeholder='Цвет'/>
                <input className='input' type="text" placeholder='Возраст'/>
                <input className='input' type="text" placeholder='Отличительные признаки'/>
                <button className='but'>Добавить</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Порода</th>
                    <th>Цвет</th>
                    <th>Возраст</th>
                    <th width='200px'>Отличительные признаки</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Ячейка 2</td>
                    <td>Ячейка 2</td>
                    <td>Ячейка 3</td>
                    <td>dddeeeeeee</td>
                    <td>
                        <button className='but'>Изменить</button>
                    </td>
                    <td>
                        <button className='but'>Удалить</button>
                    </td>
                </tr>
                <tr>

                    <td>Ячейка 2</td>
                    <td>Ячейка 2</td>
                    <td>Ячейка 3</td>
                    <td>Ячейка 2</td>
                    <td>
                        <button className='but'>Изменить</button>
                    </td>
                    <td>
                        <button className='but'>Удалить</button>
                    </td>
                </tr>
                <tr>
                    <td> <input className='input' type="text" placeholder='Порода'/></td>
                    <td> <input className='input' type="text" placeholder='Порода'/></td>
                    <td> <input className='input' type="text" placeholder='Порода'/></td>
                    <td> <input className='input' type="text" placeholder='Порода'/></td>
                    <td colSpan={2}>
                        <button className='but'>Сохранить изменения</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="modal">
                <div className="modal__container">
                    <p className='modal__text'>впривввввввввввввввввввввввввв <br/> ввввввввввввввввввввввввввввввввввввввв
                    </p>
                    <div className="buttons">
                        <button className='but'>Распечатать</button>
                        <button className='but'>Закрыть</button>
                    </div>

                </div>

            </div>
        </div>);
};

export default App;
