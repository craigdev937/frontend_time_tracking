import React from "react";
import "./Time.css";
import { IData } from "../../models/Interfaces";

type INF = {
    data: IData[]
};

export const Time = ({ data }: INF) => {
    return (
        <React.Fragment>
            <section className="time">
                <p key="current" className="time__current">
                    {data.map((item) => (
                        
                    ))}
                </p>
            </section>
        </React.Fragment>
    );
};


