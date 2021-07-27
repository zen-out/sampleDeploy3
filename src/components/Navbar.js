import React from "react";
import BlogsPage from "../pages/BlogsPage";
import ContactUsPage from "../pages/ContactUsPage";
import EachBlogPage from "../pages/EachBlogPage";
import EachProjectPage from "../pages/EachProjectPage";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ResumePage from "../pages/ResumePage";
import ErrorPage from "../pages/ErrorPage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import "../assets/Navbar.css";

function Navbar() {
  return (
    <Router>
      <div>
        <nav className="side">
          <div className="side__inner">
            <div className="top">
              <Link className="projectLink" to="/">
                Home
              </Link>
            </div>
            <div className="medium-top">
              <Link className="projectLink" to="/projects">
                Projects
              </Link>
            </div>
            <div className="medium">
              <Link className="projectLink" to="/resume">
                Resume
              </Link>
            </div>
            <div className="medium-bottom">
              <Link className="projectLink" to="/blogs">
                Thoughts
              </Link>
            </div>
            <div className="bottom">
              <Link className="projectLink" to="/contact">
                contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/projects"
          component={ProjectsPage}
        />
        {/* If they go to links/:id, then render the link detail component */}
        {/* This component just renders out additional information about that link */}
        <Route
          path="/projects/:id"
          component={EachProjectPage}
        />
        <Route path="/contact" component={ContactUsPage} />
        <Route path="/blogs" exact component={BlogsPage} />
        <Route path="/blogs/:id" component={EachBlogPage} />
        <Route path="/resume" component={ResumePage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default Navbar;
