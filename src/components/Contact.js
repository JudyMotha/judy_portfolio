import React from "react";
  
function Contact() {
  return (
    <main>
 
<div className="container">
<div className="container box-2 containerDiv mx-auto">

<div className="jumbotron">

<div className="row">
<div className="col">
   <p>Contact</p>
  </div> </div>
             
<form> 
    <div className="form-group">
      <label for="exampleFormControlInput1">Name</label>
      <input
       type="email"
       className="form-control"
       id="exampleFormControlInput1"
                           />
      </div>
     <div className="form-group">
      <label for="exampleFormControlInput1">Email address</label>
      <input
       type="email"
       className="form-control"
       id="exampleFormControlInput1"
               
              />
            </div>
      <div className="form-group">
      <label for="exampleFormControlTextarea1">Message</label>
      <textarea
       className="form-control"
       id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
           
    <button className="submit-btn">Submit</button>

  </form>
        </div>

  <div className="col-md-12 text-center">Contact:judiesub99@gmail.com</div>
        </div>
        </div>
          </main> 
           
        )
        }            

export default Contact;