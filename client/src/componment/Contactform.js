
import React, { Component, Fragment } from 'react'
import '../css/style.css'
import axios from 'axios'

 class ContactForm extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
       name:'',
       company:'',
       email:'',
       phone:'',
       message:''  
     }

     this.handleChange= this.handleChange.bind(this)
     this.handleSubmit= this.handleSubmit.bind(this)
   }

   handleChange = e =>{
     this.setState({[e.target.name]: e.target.value})
     
   }

   async handleSubmit(e){
      e.preventDefault()
     const {name,company, email, phone, message} = this.state

     const form = await axios.post('/api/form',{
       name, 
       company,
       email,
       phone, 
       message
     })

     this.props.history.push("/register");

   }


  render() {
    return (
      <Fragment>
      <div className="container">
      <h1 className="brand"><span>React(Nodemailer)</span> Contact Form</h1>
      <div className="wrapper animated bounceInLeft">
        <div className="company-info">
          <h3>Contact Us Now</h3>
          <ul>
            <li><i className="fa fa-road"></i> 44 Something st</li>
            <li><i className="fa fa-phone"></i> (555) 555-5555</li>
            <li><i className="fa fa-envelope"></i> test@acme.test</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Email Us</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name</label>
              <input type="text" name="name"
              onChange={this.handleChange}/>
            </div>
            <div>
              <label>Company</label>
              <input type="text" name="company"
              onChange={this.handleChange} />
            </div>
            <div>
              <label>Email Address</label>
              <input type="email" name="email" 
              onChange={this.handleChange}/>
            </div>
            <div>
              <label>Phone Number</label>
              <input type="text" name="phone"
              onChange={this.handleChange} />
            </div>
            <div className="full">
              <label>Message</label>
              <textarea name="message" rows="5"
              onChange={this.handleChange}></textarea>
            </div>
            <p className="full">
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

export default ContactForm




