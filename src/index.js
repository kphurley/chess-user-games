import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import AntApp from './ant/AntApp';
import EuiApp from './eui/EuiApp';

import "./app.css";

const rootContainer = document.querySelector('#root');

const FrameworkedApp = ({ framework }) => {
  switch(framework) {
    case "eUi":
      return <EuiApp />
    case "Ant":
      return <AntApp />
    default:
      return <div>Not a supported framework :(</div>
  }
}

const App = () => {
  const [framework, setFramework] = useState("eUi");

  return (
    <div>
      <div className="framework-links">
        <span
          className={framework === "eUi" ? "link-active" : ""}
          onClick={() => setFramework("eUi")}
        >
          eUi
        </span>
        <span
          className={framework === "Ant" ? "link-active" : ""}
          onClick={() => setFramework("Ant")}
        >
          Ant
        </span>
      </div>
      <FrameworkedApp framework={framework} />
    </div>
  );
}

ReactDOM.render(<App />, rootContainer);
