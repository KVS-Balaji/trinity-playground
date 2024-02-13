import { Drawer, Popover } from "antd";
import { useState } from "react";
import { FaGear, FaQuestion } from "react-icons/fa6";
import "./App.css";
import PLIDPolicy from "./PLIDPolicy";
import SCDPolicy from "./SCDPolicy";
import SPDPolicy from "./SPDPolicy";
import empty from "./assets/empty_box.webp";
import logo from "./assets/trinity_logo.ico";

function App() {
  const maxCharacters = 5000;
  const [activeResultType, setActiveResultType] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [showSCD, setShowSCD] = useState(false);
  const [showPLID, setShowPLID] = useState(false);
  const [showSPD, setShowSPD] = useState(false);
  const [selectedSPDPolicies, setSelectedSPDPolicies] = useState([]);
  const [selectedSCDPolicies, setSelectedSCDPolicies] = useState([]);
  const [selectedPLIDPolicies, setSelectedPLIDPolicies] = useState([]);

  function handleSettings() {
    console.log("settings opened");
  }

  function openWebsite() {
    window.open("https://www.trinityagi.com/");
  }

  function handleRunButton() {
    setActiveResultType("result");
  }

  function handleResultTypeClick(resultType) {
    setActiveResultType(resultType);
  }

  const handleHelp = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  function selectSPDPolicies() {
    setShowSPD(true);
  }

  function selectSCDPolicies() {
    setShowSCD(true);
  }

  function selectPLIDPolicies() {
    setShowPLID(true);
  }

  function closeSPDPolicies() {
    setShowSPD(false);
  }

  function closeSCDPolicies() {
    setShowSCD(false);
  }

  function closePLIDPolicies() {
    setShowPLID(false);
  }

  function updateSPDPolicies(policies) {
    setSelectedSPDPolicies(policies);
  }

  function updateSCDPolicies(policies) {
    setSelectedSCDPolicies(policies);
  }

  function updatePLIDPolicies(policies) {
    setSelectedPLIDPolicies(policies);
  }

  function handleTextareaChange(event) {
    const newText = event.target.value;
    setText(newText);
  }

  const SPDContent = (
    <div>
      {selectedSPDPolicies.length > 0 ? (
        selectedSPDPolicies.map((policy, index) => <p key={index}>{policy}</p>)
      ) : (
        <p>No Policies Selected</p>
      )}
    </div>
  );

  const SCDContent = (
    <div>
      {selectedSCDPolicies.length > 0 ? (
        selectedSCDPolicies.map((policy, index) => <p key={index}>{policy}</p>)
      ) : (
        <p>No Policies Selected</p>
      )}
    </div>
  );

  const PLIDContent = (
    <div>
      {selectedPLIDPolicies.length > 0 ? (
        selectedPLIDPolicies.map((policy, index) => <p key={index}>{policy}</p>)
      ) : (
        <p>No Policies Selected</p>
      )}
    </div>
  );

  return (
    <div className="container">
      <div className="navbar">
        <div className="comp-logo" onClick={openWebsite}>
          <img src={logo} alt="company logo" />
          <p className="comp-name">Trinity AI</p>
        </div>
        <div className="user-options">
          <div className="settings">
            <FaGear className="icons" onClick={handleSettings} />
          </div>
          <div className="help" onClick={handleHelp}>
            <FaQuestion className="icons" />
          </div>
          <div className="user-profile">
            <p>Sign in</p>
          </div>
        </div>
      </div>
      <div className="content">
        <p className="heading">Try out our tool by typing some text below</p>
        <div className="user-input">
          <div className="input-textarea">
            <textarea
              value={text}
              id="prompt-area"
              onChange={handleTextareaChange}
            />
          </div>
          <div
            id="characters"
            style={{ textAlign: "right", color: "gray", fontSize: "12px" }}
          >
            {text.length}/{maxCharacters}
          </div>
        </div>
        <div className="policy-types">
          <div id="spd">
            <Popover content={SPDContent} placement="right">
              <button onClick={selectSPDPolicies}>
                Sensitive Personal Data
              </button>
            </Popover>
          </div>
          <div id="scd">
            <Popover content={SCDContent} placement="right">
              <button onClick={selectSCDPolicies}>
                Sensitive Company Data
              </button>
            </Popover>
          </div>
          <div id="plid">
            <Popover content={PLIDContent} placement="right">
              <button onClick={selectPLIDPolicies}>
                Privacy Laws Impacting Data
              </button>
            </Popover>
          </div>
        </div>
        <div className="run-btn">
          <button onClick={handleRunButton}>Run</button>
        </div>
        <p className="result-heading">Examine the results</p>
        <div className="results">
          <button
            className={`result-btn ${
              activeResultType === "result" ? "active-btn" : ""
            }`}
            onClick={() => handleResultTypeClick("result")}
          >
            Result
          </button>
          <div className="output-area">
            {activeResultType === "result" && (
              <div>
                <div>
                  <p className="prompt-text">{text}</p>
                </div>
              </div>
            )}
            {activeResultType === "" && (
              <div className="empty-result">
                <img src={empty} alt="" />
                <p>Your results will appear here once you press Run.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {showSPD && (
        <SPDPolicy
          closeSPD={closeSPDPolicies}
          updateSelectedPolicies={updateSPDPolicies}
        />
      )}
      {showSCD && (
        <SCDPolicy
          closeSCD={closeSCDPolicies}
          updateSelectedPolicies={updateSCDPolicies}
        />
      )}
      {showPLID && (
        <PLIDPolicy
          closePLID={closePLIDPolicies}
          updateSelectedPolicies={updatePLIDPolicies}
        />
      )}
      <Drawer title="Help" onClose={onClose} open={open}>
        <div className="help-links">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
          <a href="#">Link 6</a>
        </div>
      </Drawer>
      {(showSPD || showSCD || showPLID) && <div className="dim-bg"></div>}
    </div>
  );
}

export default App;
