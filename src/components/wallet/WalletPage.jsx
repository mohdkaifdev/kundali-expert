import react from "react";
import RechargeCard from "./RechargeCard";
import { walletData } from "../../data/walletData";
const WalletPage = () => {
    const {balance, rechargePacks} = walletData

    return(
        <>
        <section>
                <div className="consultation_list_section space_sec b_space_top">
                    <div className="container">
                        <div className="heading_sec">
                            <h3 className="mrn_clr mb-0">Wallet</h3>
                        </div>
                        <div className="available_sec">
                            <h5 className="mrn_clr">Available Balance</h5>
                            <h2 className="gray_clr">₹ {balance.toFixed(2)}</h2>
                            <h3 className="gray_clr">Add Money to Wallet</h3>
                            <p>Choose from the available recharge pack</p>
                        </div>
                        <div className="banner_block available_block d-flex flex-wrap align-items-center pt-0">
                        {rechargePacks.map(pack=>(
                                <RechargeCard key={pack.id} pack={pack}/>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default WalletPage;