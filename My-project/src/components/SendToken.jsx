// components/SendToken.jsx
import React, { useState } from "react";
import { useGasless } from "../context/GaslessProvider";
import { ethers } from "ethers";

const SendToken = () => {
  const { smartAccount } = useGasless();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSend = async () => {
    if (!smartAccount) return alert("Smart account not ready");

    const tx = {
      to: recipient,
      data: "0x",
      value: ethers.utils.parseEther(amount).toHexString(),
    };

    const txResponse = await smartAccount.sendTransaction({ transaction: tx });
    const txHash = await txResponse.wait();
    console.log("Tx Hash:", txHash);
  };

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white/80">
      <h2 className="text-xl font-bold mb-3">Send Token (Gasless)</h2>
      <input
        type="text"
        placeholder="Recipient Address"
        className="input"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount in ETH"
        className="input mt-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Send Gasless
      </button>
    </div>
  );
};

export default SendToken;
