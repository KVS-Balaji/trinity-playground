import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Policy.css";

function PLIDPolicy({ closePLID, updateSelectedPolicies }) {
  const [selectedPLIDPolicies, setSelectedPLIDPolicies] = useState([]);

  function handlePLIDPolicySelection(policyName) {
    if (selectedPLIDPolicies.includes(policyName)) {
      setSelectedPLIDPolicies(
        selectedPLIDPolicies.filter((policy) => policy !== policyName)
      );
    } else {
      setSelectedPLIDPolicies([...selectedPLIDPolicies, policyName]);
    }
  }
  function savePLIDPolicy() {
    updateSelectedPolicies(selectedPLIDPolicies);
    closePLID();
  }

  function handleClose() {
    closePLID();
  }

  return (
    <div className="select-policies">
      <div className="form-navbar">
        <p>Privacy Laws Impacting Data</p>
        <div className="close-btn" onClick={handleClose}>
          <AiOutlineClose />
        </div>
      </div>
      <form action="submit" className="policies-form">
        <div className="policy-row">
          <div className="policy-option">
            <input
              type="checkbox"
              id="HIPPA"
              name="HIPPA"
              onChange={() => handlePLIDPolicySelection("HIPPA")}
              value="HIPPA"
            />
            <label htmlFor="HIPPA">
              Health Insurace Portability and Accountability Act (HIPPA)
            </label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="FCRA"
              name="FCRA"
              onChange={() => handlePLIDPolicySelection("FCRA")}
              value="FCRA"
            />
            <label htmlFor="FCRA">Fair Credit Reporting Act (FCRA)</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="GDPR"
              name="GDPR"
              onChange={() => handlePLIDPolicySelection("GDPR")}
              value="GDPR"
            />
            <label htmlFor="GDPR">
              General Data Protection Regulation (GDPR)
            </label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="PCI-DSS"
              name="PCI-DSS"
              onChange={() => handlePLIDPolicySelection("PCI DSS")}
              value="PCI-DSS"
            />
            <label htmlFor="PCI-DSS">
              Payment Card Industry Data Security Standard (PCI DSS)
            </label>
          </div>
        </div>
        <div className="policy-row">
          <div className="policy-option">
            <input
              type="checkbox"
              id="COPPA"
              name="COPPA"
              onChange={() => handlePLIDPolicySelection("COPPA")}
              value="COPPA"
            />
            <label htmlFor="COPPA">
              Children&rsquo;s Online Privacy Protection Act (COPPA)
            </label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="FERPA"
              name="FERPA"
              onChange={() => handlePLIDPolicySelection("FERPA")}
              value="FERPA"
            />
            <label htmlFor="FERPA">
              Family Education Rights and Privacy Act (FERPA)
            </label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="HITECH"
              name="HITECH"
              onChange={() => handlePLIDPolicySelection("HITECH")}
              value="HITECH"
            />
            <label htmlFor="HITECH">
              Health Information Technology for Economic and Clinical Health
              (HITECH)
            </label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="GLBA"
              name="GLBA"
              onChange={() => handlePLIDPolicySelection("GLBA")}
              value="GLBA"
            />
            <label htmlFor="GLBA">Gramm-Leach-Bliley Act (GLBA)</label>
          </div>
        </div>
      </form>
      <button className="save-policies-btn" onClick={savePLIDPolicy}>
        Save
      </button>
    </div>
  );
}

export default PLIDPolicy;
