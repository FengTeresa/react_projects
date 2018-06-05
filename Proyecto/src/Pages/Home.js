import React from 'react';
import Modal from 'react-modal';
import Appointment from './Appointment_Form';

const customStyles = {
  content : {
    width: '840px',
    height: '840px',
    border_radius: '5px',
    top                   : '50%',
    left                  : '50%',
    // right                 : 'auto',
    // bottom                : 'auto',
    // marginRight           : '-60%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class Home extends React.Component{
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
        return(
<html>
          <header>
            <div>
              <div className="text-box">
                  <h1>
                    <span className="text-primary">Dentic</span>
                  </h1>
              </div>
            </div>
          </header>

    <body>
    <Modal isOpen={this.state.modalIsOpen}
     style={customStyles}
      onRequestClose={this.closeModal}
      ariaHideApp={false}
    >
      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}><span aria-hidden="true">&times;</span></button><br/>
    <Appointment />
    </Modal>
      <div className='main-container'>
          <div className='grid-container'>

            <div className='card card--2x'>
              <div className='card__content big-script padding-large'>
                <p>Has tu cita!</p>
              </div>
            </div>

            <div className='card'>
              <div className='card__image'>
                <img src='https://image.freepik.com/vector-gratis/conjunto-de-elementos-flat-acerca-de-los-dentistas_1212-47.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
              </div>
            </div>

            <div className='card'>
              <div className='card__image'>
                <img src='https://static.miweb.padigital.es/var/m_8/85/85f/27868/431495-dentista-antonio-jose-lopez-garvi-instrumentos-de-dentista.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
              </div>
            </div>

            <div className='card'>
              <div className='card__content'>
                <p><em>Tu sonrisa es lo mas importante para nosotros.</em></p>
                <p>— Wu Feng Teresa</p>
              </div>
            </div>

            <div className='card card--horizontal'>
              <div className='card__image'>
                <img src='http://dentistaentuciudad.com/blog/wp-content/uploads/2018/04/especialistas-dentistas-infantiles.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
              </div>
            </div>

            <div className='card card--featured'>
            <div className='card__side-by-side--m'>

              <div className='card__image'>
                <img src='https://i.ytimg.com/vi/P3fbIEIydhE/maxresdefault.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
              </div>

              <div className='card__content padding-large--l'>
                <h2>Tecnica China Dental.</h2>
                  <p>Nuestra técnica de Blanqueamiento Dental en Tijuana clarifica los dientes uniformemente para hacerlos lo más blancos posibles. Pregunta por nuestro Kit Casero de Blanqueamiento.</p>
                <div className='card__button'>

                <button  href="#" onClick={this.openModal} className="button-cita" data-toggle="dropdown"><i className="fa fa-question-circle-o fa-lg"></i> CITA</button>

                </div>
              </div>

            </div>
            </div>



            <div className='card'>
              <div className='card__image'>
                <img src='https://www.salafamilydentistry.com/wp-content/uploads/2016/11/cleantooth_icon.png?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
              </div>
            </div>










      </div>
      </div>

    </body>

    <footer className="footer-distributed">

          <div className="footer-right">
          <p className="footer-links"> Teresa Wu Feng</p>
          <p className="footer-links"> Lilia Rosales Ibarias</p>
          </div>

          <div className="footer-left">
            <p>Dentic Company &copy; 2015</p>
          </div>

    </footer>




</html>
        );
    }
}
