
import React, { Component, Fragment } from 'react'
import './css/style.css'


 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
       name:'',
       email:'',
       phone:'',
       message:''  
     }

     this,handleChange= this.handleChange.bind(this)
   }

   handleChange=(e)=>{
     this.setState({[e.target.name]: e.target.value})
     
   }

   handleSubmit=(e)=>{
     const {name, email, phone, message} = this.state
     
   }


   
  render() {
    return (
      <Fragment>
      <div class="container">
      <h1 class="brand"><span>React(Nodemailer)</span> Contact Form</h1>
      <div class="wrapper animated bounceInLeft">
        <div class="company-info">
          <h3>Contact Us Now</h3>
          <ul>
            <li><i class="fa fa-road"></i> 44 Something st</li>
            <li><i class="fa fa-phone"></i> (555) 555-5555</li>
            <li><i class="fa fa-envelope"></i> test@acme.test</li>
          </ul>
        </div>
        <div class="contact">
          <h3>Email Us</h3>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>Name</label>
              <input type="text" name="name"
              value={name}
              onChange={this.handleChange}/>
            </p>
            <p>
              <label>Company</label>
              <input type="text" name="company"
              value={company}
              onChange={this.handleChange} />
            </p>
            <p>
              <label>Email Address</label>
              <input type="email" name="email" 
              value={email}
              onChange={this.handleChange}/>
            </p>
            <p>
              <label>Phone Number</label>
              <input type="text" name="phone"
              value={phone}
              onChange={this.handleChange} />
            </p>
            <p class="full">
              <label>Message</label>
              <textarea name="message" rows="5"
              value={message}
              onChange={this.handleChange}></textarea>
            </p>
            <p class="full">
              <button>Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
    
  </Fragment>
    )
  }
}

export default App




