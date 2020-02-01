import React, { Component, Fragment } from 'react'
import './css/style.css'


 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
    
     }
   }

  

  render() {
    return (
      <Fragment>
      <div className="container">
      <h1 className="brand"><span>React(Nodemailer)</span> Contact Form</h1>
      <div className="wrapper animated bounceInLeft">
        <div className="company-info">
          <h3>You already send a message successfully, we will contact you sooner</h3>
         
        </div>
        </div>
    </div>
    
  </Fragment>
    )
  }
}

export default App




