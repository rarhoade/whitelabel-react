import React from 'react';
import logo from './Logo.png';
import hero from './Drone.png';
import shadow from './Shadow.png'
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      homePage: true,
      tutorialPage: false,
      blogPage: false,
      contactPage: false,
      name: null,
      email: null,
      message: null
    };

    this.enableContactPage = this.enableContactPage.bind(this);
    this.enableHomePage = this.enableHomePage.bind(this);
    this.handleContactFormChange = this.handleContactFormChange.bind(this);
    this.handleContactFormSubmit = this.handleContactFormSubmit.bind(this);
  }

  enableContactPage() {
    this.setState({
      homePage: false,
      tutorialPage: false,
      blogPage: false,
      contactPage: true
    });
  }

  enableHomePage(){
    this.setState({
      homePage: true,
      tutorialPage: false,
      blogPage: false,
      contactPage: false
    })
  }

  handleContactFormChange(event){
    switch(event.target.getAttribute("formattr")){
      case "name":
        this.setState({name: event.target.value});
        break;
      case "email":
        this.setState({email: event.target.value});
        break;
      case "message":
        this.setState({message: event.target.value});
        break;
      default:
        break;
    }

  }

  handleContactFormSubmit(event){
    var submission = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    alert(submission.name + 
      " with email: " + submission.email 
      + " with message: " + submission.message);
  }

  contactPage(){
    return(
      <div className="App-header">
        <img src={logo} className="Contact-logo" alt="logo"/>
        <form onSubmit={this.handleContactFormSubmit}>
          <h2 className="Input-form">FULL NAME</h2>
          <input formattr="name" onChange={this.handleContactFormChange} type="text" placeholder = "Enter your full name"/>
          <h2 className="Input-form">EMAIL</h2>
          <input formattr="email" onChange={this.handleContactFormChange} type="text" placeholder = "Enter your email"/>
          <h2 className="Input-form">MESSAGE</h2>
          <textarea formattr="message" onChange={this.handleContactFormChange} placeholder = "What are your plans?"/>
          <br/>
          <input type="submit" value="Submit Message ->"/>
        </form>
      </div>
    );
  }

  homePage(){
    return(
      <div className="App">
        <div className="App-header">
          <button className="storeButton">Store</button>
          <button className="tutorialButton">Tutorial</button>
          <img src={logo} className="App-logo" alt="logo" />  
          <button className="blogButton">Blog</button>
          <button className="contactButton" onClick={this.enableContactPage}>Contact</button>
          <img src={hero} className="App-hero" alt="hero"/>
          <img src={shadow} className="App-shadow" alt="shadow"/>
          <div className="droneName">F-210</div>
          <div className="quoteText">"THE FASTEST DRONE ON THE PLANET"</div>
          <div className="quoteText">"The Wirecutter</div>
      </div>
    </div>
   );
  }
  
  render(){ 
      return (
        <div>
          {this.state.homePage ? this.homePage() : null}
          {this.state.contactPage ? this.contactPage() : null}
        </div>
      )
  }
}

export default App;
