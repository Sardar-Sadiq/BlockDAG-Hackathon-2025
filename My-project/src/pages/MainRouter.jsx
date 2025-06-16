import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import RecoveryModal from "../components/RecoveryModal";

const MainRouter = ({
  isConnected,
  walletAddress,
  ethBalance,
  qlkBalance,
  copied,
  handleConnect,
  handleCopy,
}) => {
  const [showRecoveryModal, setShowRecoveryModal] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              onConnect={handleConnect}
              onRecover={() => setShowRecoveryModal(true)}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            isConnected ? (
              <Dashboard
                walletAddress={walletAddress}
                ethBalance={ethBalance}
                qlkBalance={qlkBalance}
                onCopy={handleCopy}
                copied={copied}
              />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>

      {showRecoveryModal && (
        <RecoveryModal onClose={() => setShowRecoveryModal(false)} />
      )}
    </>
  );
};

export default MainRouter;
