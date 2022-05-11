import { useState, useEffect } from "react";
import { web3 } from "../lib/web3";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

const EnsName = function ({ address }) {
  // TODO!
  // get the address from outside
  // format it
  // check for ENS domain
  // get image if it has one
  // make jazzicon if not

  let formattedAddress = address.substr(0, 6) + "..." + address.substr(-4);

  let icon = <Jazzicon diameter={32} seed={jsNumberForAddress(address)} />;

  return (
    <div className="eth-name">
      <div className="icon">{icon}</div>

      <div className="name">
        <span className="primary">{/* ENS name if one here */}</span>

        <span className="secondary">
          {formattedAddress}
          {/* formatted address here */}
        </span>
      </div>
    </div>
  );
};

export default EnsName;
