// src/context/GaslessProvider.jsx
import { BiconomySmartAccount } from "@biconomy/account";
import { ChainId } from "@biconomy/core-types";
import { ethers } from "ethers";
import { useEffect, useState, createContext, useContext } from "react";

const GaslessContext = createContext();

export const GaslessProvider = ({ children }) => {
  const [smartAccount, setSmartAccount] = useState(null);

  useEffect(() => {
    const setupBiconomy = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const smartAccount = new BiconomySmartAccount({
          signer,
          chainId: ChainId.POLYGON_MUMBAI,
        });
        await smartAccount.init();
        setSmartAccount(smartAccount);
      }
    };

    setupBiconomy();
  }, []);

  return (
    <GaslessContext.Provider value={{ smartAccount }}>
      {children}
    </GaslessContext.Provider>
  );
};

export const useGasless = () => useContext(GaslessContext);
