import React from "react";
import "./Topbar.css";
import { useTranslation } from "react-i18next";

function TopbarInfo() {
    const { i18n } = useTranslation();

    return (
        <div className="topbar_wrapper">
            <p>+48 506 178 113</p>
            <p>fsz.dronepro@gmail.com</p>
            <div>
                <button
                    onClick={() => {
                        i18n.changeLanguage("pl");
                    }}
                >
                    PL
                </button>
                <button
                    onClick={() => {
                        i18n.changeLanguage("en");
                    }}
                >
                    EN
                </button>
                <button
                    onClick={() => {
                        i18n.changeLanguage("de");
                    }}
                >
                    DE
                </button>
            </div>
        </div>
    );
}

export default TopbarInfo;
