import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Policy.css";

function SCDPolicy({ closeSCD, updateSelectedPolicies }) {
  const [selectedSCDPolicies, setSelectedSCDPolicies] = useState([]);

  function handleSCDPolicySelection(policyName) {
    if (selectedSCDPolicies.includes(policyName)) {
      setSelectedSCDPolicies(
        selectedSCDPolicies.filter((policy) => policy !== policyName)
      );
    } else {
      setSelectedSCDPolicies([...selectedSCDPolicies, policyName]);
    }
  }
  function saveSCDPolicy() {
    updateSelectedPolicies(selectedSCDPolicies);
    closeSCD();
  }

  function handleClose() {
    closeSCD();
  }

  return (
    <div className="select-policies">
      <div className="form-navbar">
        <p>Sensitive Company Data</p>
        <div className="close-btn" onClick={handleClose}>
          <AiOutlineClose />
        </div>
      </div>
      <form action="submit" className="policies-form">
        <div className="policy-row">
          <div className="policy-option">
            <input
              type="checkbox"
              id="src-code"
              name="src-code"
              onChange={() => handleSCDPolicySelection("Source Code")}
              value="src-code"
            />
            <label htmlFor="src-code">Source Code</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="prop-product-service"
              name="prop-product-service"
              onChange={() =>
                handleSCDPolicySelection("Proprietary Product or Service")
              }
              value="prop-product-service"
            />
            <label htmlFor="prop-product-service">
              Proprietary Product or Service
            </label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="information"
              name="information"
              onChange={() => handleSCDPolicySelection("Information")}
              value="information"
            />
            <label htmlFor="information">Information</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="trade-secrets"
              name="trade-secrets"
              onChange={() => handleSCDPolicySelection("Trade Secrets")}
              value="trade-secrets"
            />
            <label htmlFor="trade-secrets">Trade Secrets</label>
          </div>
        </div>
        <div className="policy-row">
          <div className="policy-option">
            <input
              type="checkbox"
              id="intellectual-prop"
              name="intellectual-prop"
              onChange={() => handleSCDPolicySelection("Intellectual Property")}
              value="intellectual-prop"
            />
            <label htmlFor="intellectual-prop">Intellectual Property</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="financial-data"
              name="financial-data"
              onChange={() => handleSCDPolicySelection("Financial Data")}
              value="financial-data"
            />
            <label htmlFor="financial-data">Financial Data</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="supplier-info"
              name="supplier-info"
              onChange={() => handleSCDPolicySelection("Supplier Information")}
              value="supplier-info"
            />
            <label htmlFor="supplier-info">Supplier Information</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="cust-data"
              name="cust-data"
              onChange={() => handleSCDPolicySelection("Customer Data")}
              value="cust-data"
            />
            <label htmlFor="cust-data">Customer Data</label>
          </div>
        </div>
        <div className="policy-row">
          <div className="policy-option">
            <input
              type="checkbox"
              id="personnel-records"
              name="personnel-records"
              onChange={() => handleSCDPolicySelection("Personnel Records")}
              value="personnel-records"
            />
            <label htmlFor="personnel-records">Personnel Records</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="merger-acquisition-plans"
              name="merger-acquisition-plans"
              onChange={() =>
                handleSCDPolicySelection("Merger or Acquisition Plans")
              }
              value="merger-acquisition-plans"
            />
            <label htmlFor="merger-acquisition-plans">
              Merger or Acquisition Plans
            </label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="new-prod-service-development"
              name="new-prod-service-development"
              onChange={() =>
                handleSCDPolicySelection("New Product or Service Development")
              }
              value="new-prod-service-development"
            />
            <label htmlFor="new-prod-service-development">
              New Product or Service Development
            </label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="plans"
              name="plans"
              onChange={() => handleSCDPolicySelection("Plans")}
              value="plans"
            />
            <label htmlFor="plans">Plans</label>
          </div>
        </div>
        <div className="policy-row">
          <div className="policy-option">
            <input
              type="checkbox"
              id="security-res-protocols"
              name="security-res-protocols"
              onChange={() =>
                handleSCDPolicySelection("Security Response Protocols")
              }
              value="security-res-protocols"
            />
            <label htmlFor="security-res-protocols">
              Security Response Protocols
            </label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="internal-comm"
              name="internal-comm"
              onChange={() =>
                handleSCDPolicySelection("Internal Communications")
              }
              value="internal-comm"
            />
            <label htmlFor="internal-comm">Internal Communications</label>
          </div>
        </div>
      </form>
      <button className="save-policies-btn" onClick={saveSCDPolicy}>
        Save
      </button>
    </div>
  );
}

export default SCDPolicy;
