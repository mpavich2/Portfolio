import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar";
import {Switch, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import {useState} from 'react';

function App() {
    const [navBarToggle, setNavBarToggle] = useState(false);

    const navBarClick = () => {
        setNavBarToggle(!navBarToggle);
    }

    return (
        <div className="App">
            <div className={`sidebar ${navBarToggle ? 'navBarToggle' : ''}`}>
                <Navbar/>
            </div>

            <div className="navBtn" onClick={navBarClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <div className="mainContent">
                <div className="content">
                    <Switch>
                        <Route path="/Portfolio/" exact>
                            <HomePage/>
                        </Route>
                        <Route path="/Portfolio/about" exact>
                            <AboutPage/>
                        </Route>
                        <Route path="/Portfolio/projects" exact>
                            <ProjectsPage/>
                        </Route>
                        <Route path="/Portfolio/contact" exact>
                            <ContactPage/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
