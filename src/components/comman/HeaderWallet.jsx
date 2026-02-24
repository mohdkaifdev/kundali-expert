import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Redux se selected sub-user lo
import { toast } from "react-toastify";
import api from "../../services/api";

export default function HeaderWallet() {
  const [walletAmount, setWalletAmount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Redux se selected sub-user ID lo
  //const selectedSubUser = useSelector((state) => state.subuser?.selected);
  const mainUser = useSelector((state) => state.user?.user);

  // Final user ID decide karo
  const userId = mainUser?.userId;
  console.log("Selected User ID for Wallet:", userId);
  useEffect(() => {
    const fetchWalletAmount = async () => {
      if (!userId) {
        setWalletAmount(0);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.warn("Please login to see wallet");
          return;
        }

        const response = await api.get("/v1/wallet/balance", {
          params: { userId }, // Yahan selected userId bhej rahe hain
        });
        console.log("Wallet API Response:", response);
        const amount = response.data?.data;
        console.log("Wallet Balance:", amount);
        setWalletAmount(amount);
      } catch (err) {
        console.error("Wallet fetch error:", err);
        toast.error("Failed to fetch wallet balance");
        setWalletAmount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchWalletAmount();

    // Optional: sub-user change hone par refresh
    // (Redux state change pe useEffect chalega agar dependency add karo)
  }, [userId]); // userId change hone par fetch

  return (
    <div className="wallet-badge d-flex align-items-center">
      <span className="d-block me-2">Wallet</span>
      {loading ? (
        <span className="text-muted">Loading...</span>
      ) : (
        <strong>₹{walletAmount.toLocaleString("en-IN")}</strong>
      )}
    </div>
  );
}
