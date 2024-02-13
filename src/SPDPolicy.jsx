import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Policy.css";

function SPDPolicy({ closeSPD, updateSelectedPolicies }) {
  const [selectedSPDPolicies, setSelectedSPDPolicies] = useState([]);

  function handleSPDPolicySelection(policyName) {
    if (selectedSPDPolicies.includes(policyName)) {
      setSelectedSPDPolicies(
        selectedSPDPolicies.filter((policy) => policy !== policyName)
      );
    } else {
      setSelectedSPDPolicies([...selectedSPDPolicies, policyName]);
    }
  }
  function saveSPDPolicy() {
    updateSelectedPolicies(selectedSPDPolicies);
    closeSPD();
  }

  function handleClose() {
    closeSPD();
  }

  return (
    <div className="select-policies">
      <div className="form-navbar">
        <p>Sensitive Personal Data</p>
        <div className="close-btn" onClick={handleClose}>
          <AiOutlineClose />
        </div>
      </div>
      <form action="submit" className="policies-form">
        <div className="policy-row">
          <div className="policy-option">
            <input
              type="checkbox"
              id="name"
              name="name"
              onChange={() => handleSPDPolicySelection("Names")}
              value="name"
            />
            <label htmlFor="name">Names</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="address"
              name="address"
              onChange={() => handleSPDPolicySelection("Addresses")}
              value="address"
            />
            <label htmlFor="address">Addresses</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="phone-no"
              name="phone-no"
              onChange={() => handleSPDPolicySelection("Phone Numbers")}
              value="phone-no"
            />
            <label htmlFor="phone-no">Phone Numbers</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="email"
              name="email"
              onChange={() => handleSPDPolicySelection("Email Addresses")}
              value="email"
            />
            <label htmlFor="email">Email Addresses</label>
          </div>
        </div>
        <div className="policy-row">
          <div className="policy-option">
            <input
              type="checkbox"
              id="dob"
              name="dob"
              onChange={() => handleSPDPolicySelection("Date of Birth")}
              value="dob"
            />
            <label htmlFor="dob">Dates of Birth</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="ssn"
              name="ssn"
              onChange={() =>
                handleSPDPolicySelection("Social Security Numbers")
              }
              value="ssn"
            />
            <label htmlFor="ssn">Social Security Numbers</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="id-nos"
              name="id-nos"
              onChange={() => handleSPDPolicySelection("ID Numbers")}
              value="id-nos"
            />
            <label htmlFor="id-nos">
              ID Numbers (Driver&rsquo;s License, Passport, etc.)
            </label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="bank-details"
              name="bank-details"
              onChange={() =>
                handleSPDPolicySelection("Payment Card / Bank Account")
              }
              value="bank-details"
            />
            <label htmlFor="bank-details">Payment Card or Bank Account</label>
          </div>
        </div>
        <div className="policy-row">
          <div className="policy-option">
            <input
              type="checkbox"
              id="numbers"
              name="numbers"
              onChange={() => handleSPDPolicySelection("Numbers")}
              value="numbers"
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="medical-history"
              name="medical-history"
              onChange={() => handleSPDPolicySelection("Medical Histories")}
              value="medical-history"
            />
            <label htmlFor="medical-history">Medical Histories</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="financial-transac-records"
              name="financial-transac-records"
              onChange={() =>
                handleSPDPolicySelection("Financial Transaction Records")
              }
              value="financial-transac-records"
            />
            <label htmlFor="financial-transac-records">
              Financial Transaction Records
            </label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="fingerprint"
              name="fingerprint"
              onChange={() => handleSPDPolicySelection("Fingerprints")}
              value="fingerprint"
            />
            <label htmlFor="fingerprint">Fingerprints</label>
          </div>
        </div>
        <div className="policy-row">
          <div className="policy-option">
            <input
              type="checkbox"
              id="photo"
              name="photo"
              onChange={() => handleSPDPolicySelection("Photos")}
              value="photo"
            />
            <label htmlFor="photo">Photos</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="handwriting"
              name="handwriting"
              onChange={() => handleSPDPolicySelection("Handwriting")}
              value="handwriting"
            />
            <label htmlFor="handwriting">Handwriting</label>
          </div>
          <div className="policy-option">
            <input
              type="checkbox"
              id="biometric"
              name="biometric"
              onChange={() => handleSPDPolicySelection("Biometrics")}
              value="biometric"
            />
            <label htmlFor="biometric">Biometrics</label>
          </div>
        </div>
      </form>
      <button className="save-policies-btn" onClick={saveSPDPolicy}>
        Save
      </button>
    </div>
  );
}

export default SPDPolicy;
