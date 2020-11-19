import React from 'react';
import ReactToPrint from 'react-to-print';

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="modal__text">
        <h3>В приют поступила сабака </h3>
        Порода: {this.props.item.breed}
        <br />
        Цвет:{this.props.item.color}
        <br /> Возраст:{this.props.item.age}
        <br /> Отличительные признаки: {this.props.item.signs}
      </div>
    );
  }
}
class Modal extends React.Component {
  closeModal = () => {
    this.props.setActiveModal(false);
  };
  render() {
    return (
      <div className="modal">
        <div className="modal__container">
          <ComponentToPrint item={this.props.item} ref={(el) => (this.componentRef = el)} />

          <div className="buttons">
            <ReactToPrint
              trigger={() => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a className="but print" href="">
                  Распечатать
                </a>
              )}
              content={() => this.componentRef}
            />
            <button className="but" onClick={this.closeModal}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
