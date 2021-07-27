/**********************************************
 * Accordion Component
 * ==================================
 * - It will accept an array of objects
 * - Render out each object accordingly
 ***********************************************/
import "../assets/Accordion.css";
import React from "react";
import ReactDOM from "react-dom";

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const height =
        el.querySelector(".panel__inner").scrollHeight;
      this.setState({
        height,
      });
    }, 333);
  }

  render() {
    const {
      //   label,
      //   content,
      //   array of objects
      id,
      institution,
      title,
      date,
      type,
      description,
      activeTab,
      index,
      activateTab,
    } = this.props;
    const { height } = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: `${isActive ? height : 0}px`,
    };

    return (
      <div
        className="panel"
        role="tabpanel"
        aria-expanded={isActive}
      >
        <button
          className="panel__label"
          role="tab"
          onClick={activateTab}
        >
          {institution} - {title}
        </button>
        <div
          className="panel__inner"
          style={innerStyle}
          aria-hidden={!isActive}
        >
          <p className="panel__content">{title}</p>
          <p className="panel__content">
            <div className="row">
              <div className="col">
                {date} {type} {description}
              </div>
              <div className="col">
                <img
                  style={{ height: "250px" }}
                  src="https://www.cerclemagazine.com/wp-content/uploads/2017/10/316_N-Atlantic-Ocean-Cliffs-of-Moher-1989.jpg"
                />
              </div>
            </div>
          </p>
        </div>
      </div>
    );
  }
}

// Job Accordion
// Certification Accordion
// Education Accordion

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState((prev) => ({
      activeTab: prev.activeTab === index ? -1 : index,
    }));
  }

  render() {
    const { resumes } = this.props;
    const { activeTab } = this.state;
    return (
      <div className="accordion" role="tablist">
        {resumes.map((panel, index) => (
          <Panel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={this.activateTab.bind(null, index)}
          />
        ))}
      </div>
    );
  }
}

export default Accordion;
