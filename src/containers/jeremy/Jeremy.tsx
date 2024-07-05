import React from "react";
import "./Jeremy.css";
import JImage from "/jeremy.png";

type JER = {
    view: React.Dispatch<React.SetStateAction<string>>,
    timeFrame: string,
};

export const Jeremy = ({ timeFrame, view }: JER) => {

    return (
        <section className="jeremy">
            <header className="jeremy__student">
                <img
                    alt="Jeremy Robson" 
                    className="jeremy__image"  
                    src={JImage} 
                />
                <aside className="jeremy__report">
                    <p className="jeremy__text">
                        Report for
                    </p>
                    <h1 className="jeremy__name">
                        Jeremy Robson
                    </h1>
                </aside>
            </header>

            <ul className="jeremy__info">
                <li 
                    className={timeFrame === "daily" ? 
                    "info__links active" : 
                    "info__links"}
                    onClick={() => view("daily")}
                >
                    Daily
                </li>
                <li className={timeFrame === "weekly" ?
                    "info__links active" :
                    "info__links"}
                    onClick={() => view("weekly")}
                >
                    Weekly
                </li>
                <li className={timeFrame === "monthly" ?
                    "info__links active" :
                    "info__links"}
                    onClick={() => ("monthly")}
                    >
                        Monthly                    
                </li>
            </ul>
        </section>
    );
};


