import React from "react";
import password from "./images/kelly-sikkema-377gw1wN0Ic-unsplash.jpg";
import planner from "./images/ryan-geller-9mGSc18MV3s-unsplash.jpg";
import horiseon from "./images/marek-piwnicki-2jjzyoLfpT4-unsplash.jpg";
import notemaker from "./images/ux-indonesia-w00FkE6e8zE-unsplash.jpg";
import workout from "./images/mykola-makhlai-hVfhVn15Lbg-unsplash.jpg";
import budget from "./images/sincerely-media-XihOO7UOvy4-unsplash.jpg";
function Portfolio() {
    return (
<main>
<div className="container box-2 containerDiv mx-auto">
    <div className="jumbotron">


<div className="row">
<div className="col">
                        <p>Portfolio</p>
 </div>
 </div>

 <div style={{textAlign: "center"}} className="row">

    <div className="col-md-4">
    <div  className="card"> 
     <img src={password} style={{ borderRadius: "15px 15px 0 0" }} width="200" height="200" className="card-img-top" alt="works" />
     <div className="card-body"> 
     <h5  className="card-title">Password Generator</h5> </div>                           
     <div  className="card-body">
         <a href={"https://github.com/JudyMotha/password_generation"} target="_blank" rel="noopener noreferrer" className="card-link" style={{ color: "black", fontWeight: "bold",textAlign: "center" }}>Repo </a>
         <a href={"https://judymotha.github.io/password_generation/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{ color: "black", fontWeight: "bold" ,textAlign: "center"}}>Site</a>
     </div>        </div>            </div>

    <div className="col-md-4">
    <div  className="card" >
    <img src={planner} style={{ borderRadius: "15px 15px 0 0" }} width="200" height="200" className="card-img-top" alt="works" />
    <div className="card-body">
    <h5  className="card-title">Workday Plan</h5>        </div>
    <div className="card-body">
        <a href={"https://github.com/JudyMotha/work-day-planner"} target="_blank" rel="noopener noreferrer" className="card-link" style={{ color: "black", fontWeight: "bold" }}>Repo</a>
        <a href={"https://judymotha.github.io/work-day-planner/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{ color: "black", fontWeight: "bold" }}> Site</a>
    </div>            </div>                     </div>

    <div className="col-md-4">
    <div className="card" >
    <img src={horiseon} style={{ borderRadius: "15px 15px 0 0" }} width="200" height="200" className="card-img-top" alt="work" />
    <div className="card-body">
    <h5  className="card-title">Code Refactor</h5>      </div>
    <div className="card-body">
        <a href={"https://github.com/JudyMotha/horiseon"} target="_blank" rel="noopener noreferrer" className="card-link" style={{ color: "black", fontWeight: "bold" }}>Repo</a>
         <a href={"https://judymotha.github.io/horiseon/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{ color: "black", fontWeight: "bold" }}>Site</a>
              </div>   </div>    </div>
   </div>
    <br />
     <hr />

    <div style={{textAlign: "center"}} className="row">

        <div className="col-md-4">
        <div className="card"> 
        <img src={notemaker} style={{ borderRadius: "15px 15px 0 0" }} width="200" height="200" className="card-img-top" alt="somework" />
        <div className="card-body">
        <h5  className="card-title">Note_Taker </h5>   </div>           
        <div className="card-body"              >
              <a href={"https://github.com/JudyMotha/notemaker"} target="_blank" rel="noopener noreferrer" className="card-link" style={{ color: "black", fontWeight: "bold" }}>Repo</a>
              <a href={"https://intense-plateau-60002.herokuapp.com/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{ color: "black", fontWeight: "bold" }}>Site</a>
                            </div>       </div>                   </div>




     <div className="col-md-4">
     <div className="card"> 
     <img src={workout} style={{ borderRadius: "15px 15px 0 0" }} width="200" height="200" className="card-img-top" alt="application" />
     <div className="card-body">
     <h5 className="card-title">Fitness Tracker</h5>  </div>                           
     <div className="card-body">
     <a href={"https://github.com/JudyMotha/workout_tracker"} target="_blank" rel="noopener noreferrer" className="card-link" style={{ color: "black", fontWeight: "bold" }}>Repo</a>
     <a href={"https://warm-oasis-81803.herokuapp.com/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{ color: "black", fontWeight: "bold" }}>Site</a>
     </div>                        </div>                    </div>

    <div className="col-md-4">
    <div className="card">
    <img src={budget} style={{ borderRadius: "15px 15px 0 0" }} width="200" height="200" className="card-img-top" alt="application" />
    <div className="card-body">
    <h5 className="card-title">Budget Tracker</h5>         </div>
    <div className="card-body">
    <a href={"https://github.com/JudyMotha/offline-online-budget-track"} target="_blank" rel="noopener noreferrer" className="card-link" style={{ color:"black", fontWeight: "bold" }}>Repo</a>
    <a href={"https://secure-garden-58881.herokuapp.com/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{ color: "black", fontWeight: "bold" }}>Site</a>
                            </div>
                        </div>
</div>
        </div>
        
               
    
    </div>
    </div>
        </main>
    )

}
export default Portfolio;