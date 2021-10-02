import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigateTabs from "./NavigateTabs";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import "./style.css"


{/*My page set up sketch built  ...Still to be modified with additional tabs*/}
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <NavigateTabs/>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
