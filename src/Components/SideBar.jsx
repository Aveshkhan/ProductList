import React from "react";
import logo from "../assets/logo.svg"
import LiveNews from "../assets/7830714_analytics_graph_bar_icon 1.svg";
import document from "../assets/icon.svg";
import CorporateNews from "../assets/9042464_journal_icon 1.svg";
import StockinAction from "../assets/9522069_news_icon 1.svg";
import arrow from '../assets/clarity_collapse-line.svg'
import notification from '../assets/notifications-icon.svg'
import user from '../assets/User.svg'
import downArrow from '../assets/down-arrow.svg'
import Products from "./Products";

export const SideBar = () => {
    return (
        <>
            <div className="menuBar">
                <div className="SideBar py-3 px-2">
                    <div className="sideMenu">
                        <div className="topLogo mb-5">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="menue my-3">
                            <img className="img" alt="Stock in action" src={StockinAction} />
                            <img className="img" alt="document" src={document} />
                            <img className="img" alt="Corporate news" src={CorporateNews} />
                            <img className="img" alt="Live news" src={LiveNews} />
                        </div>
                    </div>
                    <div className="bottomMenu p-3">
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>

                <div className="rightMenu">
                    <div className="topBar">
                        <div className="topLeft">
                            <h3>Products</h3>
                        </div>

                        <div className="topRight">
                            <div className="notification">
                                <img src={notification} alt="notifications" />
                            </div>

                            <div className="UserTab">
                                <div className="userIcon">
                                    <img src={user} alt="" />
                                </div>
                                <p className="mb-0">Matthews Gill</p>
                                <div className="downArrow">
                                    <img src={downArrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Products></Products>
                </div>
            </div>

        </>
    );
};

export default SideBar
