import React from "react";

import icon1 from "./images/icons8-html-5-48.png"
import icon2 from "./images/icons8-css3-48.png"
import icon3 from "./images/icons8-bootstrap-48.png"
import icon4 from  "./images/icons8-javascript-48.png"
import icon5 from "./images/icons8-api-48.png"
import icon6 from "./images/icons8-nodejs-48.png"
import icon7 from "./images/icons8-npm-48.png"
import icon8 from "./images/icons8-mysql-logo-48.png"
import icon9 from "./images/icons8-mongodb-48.png"
import icon10 from  "./images/icons8-react-native-48.png"

function Resume() {
  return (
    <main>
<div className="container">
<div className="container box-2 containerDiv mx-auto">
<div className="jumbotron">
<div style={{textAlign: "center"}} className="row">
<div className="col">
     <p >Resume</p>
<div>       
</div>   
<p>   
<a className="submit-btn" href="https://drive.google.com/drive/folders/1F2vGNGVDtzTpNZJTq2GCFkiaLPdZ9XYM?usp=sharing">DownloadResume</a> </p>       
     
        </div>
      </div>

<div style={{textAlign: "center"}} className="row">
<div className="col">
       <p >Proficiencies</p> </div>
       <div className="single-post-content-wrapper">
 
 <img src={icon1} width="48px" alt="works" />
 <img src={icon2} width="48px" alt="works" />
 <img src={icon3} width="48px" alt="works" />
 <img src={icon4} width="48px" alt="works" />
 <img src={icon5} width="48px" alt="works" />
 <img src={icon6} width="48px" alt="works" />
 <img src={icon7} width="48px" alt="works" />
 <img src={icon8} width="48px" alt="works" />
 <img src={icon9} width="48px" alt="works" />
 <img src={icon10} width="48px" alt="works" />         
           
                </div>                      
        </div>
      </div>           
 </div>
 </div>        
      </main>
  )
}
export default Resume;