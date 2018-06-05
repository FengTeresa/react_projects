import React, { Component } from 'react';
import fire from './fire';
import ReactNotifications from 'react-browser-notifications';

class Modal_Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      lastnames: [],
      emails: [],
      phones: [],
      dates: [],
      times: [],
      limpiezas: [],
      extracciones: [],
      rellenos: [],
      cambiosligas: [],

    }; // <- set up react state
    this.showNotifications = this.showNotifications.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  showNotifications() {
    // If the Notifications API is supported by the browser
    // then show the notification
    if(this.n.supported()) this.n.show();
  }

  handleClick(event) {
    // Do something here such as
    // console.log("Notification Clicked") OR
    // window.focus() OR
    // window.open("http://www.google.com")

    // Lastly, Close the notification
    this.n.close(event.target.tag);
  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('names').orderByKey().limitToLast(100);
    let messagesRef2 = fire.database().ref('lastnames').orderByKey().limitToLast(100);
    let messagesRef3 = fire.database().ref('emails').orderByKey().limitToLast(100);
    let messagesRef4 = fire.database().ref('phones').orderByKey().limitToLast(100);
    let messagesRef5 = fire.database().ref('dates').orderByKey().limitToLast(100);
    let messagesRef6 = fire.database().ref('times').orderByKey().limitToLast(100);
    let messagesRef7 = fire.database().ref('limpiezas').orderByKey().limitToLast(100);
    let messagesRef8 = fire.database().ref('extracciones').orderByKey().limitToLast(100);
    let messagesRef9 = fire.database().ref('rellenos').orderByKey().limitToLast(100);
    let messagesRef10 = fire.database().ref('cambiosligas').orderByKey().limitToLast(100);

    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let name = { text: snapshot.val(), id: snapshot.key };
      let lastname = { text: snapshot.val() , id: snapshot.key };
      let email = { text: snapshot.val() , id: snapshot.key };
      let phone = { text: snapshot.val() , id: snapshot.key };
      let date = { text: snapshot.val() , id: snapshot.key };
      let time = { text: snapshot.val() , id: snapshot.key };
      let limpieza = { text: snapshot.val() , id: snapshot.key };
      let extraccion = { text: snapshot.val() , id: snapshot.key };
      let relleno = { text: snapshot.val() , id: snapshot.key };
      let cambioliga = { text: snapshot.val() , id: snapshot.key };

      this.setState({
        names: [name].concat(this.state.names),
        lastnames:   [lastname].concat(this.state.lastnames),
        emails:   [email].concat(this.state.emails),
        phones:   [phone].concat(this.state.phones),
        dates:   [date].concat(this.state.dates),
        times:   [time].concat(this.state.times),
        limpiezas:   [limpieza].concat(this.state.limpiezas),
        extracciones:   [extraccion].concat(this.state.extracciones),
        rellenos:   [relleno].concat(this.state.rellenos),
        cambiosligas:   [cambioliga].concat(this.state.cambiosligas),
      });
    })
  }

  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('names').push( this.inputName.value);
    fire.database().ref('lastnames').push( this.inputLastName.value);
    fire.database().ref('emails').push( this.inputEmail.value);
    fire.database().ref('phones').push( this.inputPhone.value);
    fire.database().ref('dates').push( this.inputDate.value);
    fire.database().ref('times').push( this.inputTime.value);
    fire.database().ref('limpiezas').push( this.inputS1.value);
    fire.database().ref('extracciones').push( this.inputS2.value);
    fire.database().ref('rellenos').push( this.inputS3.value);
    fire.database().ref('cambiosligas').push( this.inputS4.value);
    this.inputName.value = ''; // <- clear the input
    this.inputLastName.value = ''; // <- clear the input
    this.inputEmail.value = ''; // <- clear the input
    this.inputPhone.value = ''; // <- clear the input
    this.inputDate.value = ''; // <- clear the input
    this.inputTime.value = ''; // <- clear the input
    this.inputS1.checked = false; // <- clear the input
    this.inputS2.checked = false; // <- clear the input
    this.inputS3.checked = false;// <- clear the input
    this.inputS4.checked = false; // <- clear the input
  }

  render() {
    return (
      <div>
      <ReactNotifications
        onRef={ref => (this.n = ref)} // Required
        title="Cita!" // Required
        body="Su cita esta realizada"
        icon="http://img.fenixzone.net/i/oQX5r1d.png"
        tag="abcdef"
        timeout="2000"
        onClick={event => this.handleClick(event)}
      />
        <div className="">
           <div className="">
              <div className="">
                  <div className="container">


                      <form onSubmit={this.addMessage.bind(this)}>

                        <div className="container2">

                        <div className="">
                            <h1>Book an Appointment</h1>
                        </div>

                              <div className="">
                                  <label className="" htmlFor="name">Name</label>
                                  <input id="name" name="name" type="text" placeholder="Name" ref={ el => this.inputName = el } className=""></input>
                              </div>



                              <div className="">
                                  <label className="" htmlFor="lastname">Last Name</label>
                                  <input id="lastname" name="lastname" type="text" placeholder="Last Name" ref={ el => this.inputLastName = el } className=""></input>
                              </div>

                              <div className="">
                                      <label className="" htmlFor="email">Email</label>
                                      <input id="email" name="email" type="text" placeholder="a****@gmail.com" ref={ el => this.inputEmail = el } className=""></input>
                              </div>


                              <div className="">
                                    <label className="" htmlFor="phone">Phone</label>
                                    <input id="phone" name="phone" type="text" placeholder="Phone" ref={ el => this.inputPhone = el } className=""></input>
                              </div>



                              <div className="">
                                    <label className="" htmlFor="date">Preferred Date</label>
                                    <input id="datepicker" name="date" type="date" placeholder="Preferred Date" ref={ el => this.inputDate = el } className=""></input>
                              </div>



                              <div>
                                    <label className="" htmlFor="time">Preferred Time</label>
                                    <div className="styled-select gray semi-square">
                                      <select id="time" name="time" ref={ el => this.inputTime = el } className="">
                                          <option value="8:00 to 9:00">8:00 to 9:00</option>
                                          <option value="9:00 to 10:00">9:00 to 10:00</option>
                                          <option value="10:00 to 13:00">10:00 to 13:00</option>
                                      </select>
                                    </div>
                              </div>


                            <div >

                              <div>

                                <label className="container4" >One
                                  <input type="checkbox" ref={ el => this.inputS1 = el }></input>
                                  <span className="checkmark"></span>
                                </label>

                                <label name="cb1" className="container4">Two
                                  <input  type="checkbox" ref={ el => this.inputS2 = el }></input>
                                  <span className="checkmark"></span>
                                </label>

                                <label name="cb2" className="container4">Three
                                  <input type="checkbox" ref={ el => this.inputS3 = el }></input>
                                  <span className="checkmark"></span>
                                </label>

                                <label name="cb3" className="container4">Four
                                  <input  type="checkbox" ref={ el => this.inputS4 = el }></input>
                                  <span className="checkmark"></span>
                                </label>


                                </div>

                            </div>



                            <div className="container3">
                                  <button type="submit" id="" name="" onClick={this.showNotifications} className="">Make An Appointment</button>
                            </div>


                        </div>
                      </form>

                  </div>
              </div>
            </div>
          </div>
      </div>



    );
  }
}

export default Modal_Contact;
