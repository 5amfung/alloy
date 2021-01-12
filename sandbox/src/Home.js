import React from "react";
import ContentSecurityPolicy from "./ContentSecurityPolicy";
import useSendPageViewEvent from "./useSendPageViewEvent";

const getIdentity = () => {
  window.alloy("getIdentity", { namespaces: ["ECID"] }).then(function(result) {
    console.log(
      "Sandbox: Get Identity command has completed.",
      result.identity.ECID
    );
  });
};

const sendDataToSecondaryDataset = () => {
  window.alloy("sendEvent", {
    datasetId: "5eb9aaa6a3b16e18a818e06f"
  });
};

export default function Home() {
  useSendPageViewEvent();
  return (
    <div>
      <ContentSecurityPolicy />
      <h1>Home</h1>
      <section>
        <h2>Get Identity</h2>
        <div>
          <button onClick={getIdentity}>Get ECID</button>
        </div>
      </section>
      <section>
        <h2>Collect data by overriding the Dataset configured in Config UI</h2>
        <div>
          <button onClick={sendDataToSecondaryDataset}>
            Send Event to Secondary Dataset
          </button>
        </div>
      </section>
    </div>
  );
}
