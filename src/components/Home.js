import React from "react";
import mypict from './images/mypict.jpg';

function Home() {
 return (
 <main>
 <div className="container">
 <div className="jumbotron">
 <div className="box-2 containerDiv mx-auto">
 <div className="row">
 <div className="col-md-12 about">About Me</div>
 </div>
 <div className="row">
 <div className="col-md-12 para">
 <div className="image-wrapper float-right"><img src={mypict} alt="somefiller" className="avatar" /></div>
 <div className="single-post-content-wrapper">
 <p style={{ fontSize: "20px"}}>
       MEET JUDY !Hello and welcome to my page ! Present HR professional and full stack web development bootcamp student .Portfolio contains a few  exercises from my bootcamp journey. 
       Have had an academic foundation in Computer Science concepts . 
       I live  in Columbus,OH area and am  looking for entry level positions  - may be in support,testing ,business analysis or development.See my resume for a short summary of additional skills and capabilities.
       Linkedin is the best way to connect with me  .                  
                </p>
                
                </div></div>

                    </div>
                
                </div>
           </div>     
            </div>
        </main>
    )
}
export default Home;