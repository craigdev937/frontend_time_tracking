import React from "react";
import "./JData.css";
import { IData } from "../../models/Interfaces";
// import Card 

export const JData = () => {
    const [data, setData] = React.useState<IData[]>();

    const dBase = () => {
        fetch("data.json")
        .then((res) => console.log(res))
        .then((jsonData) => {
            console.log(jsonData);
            setData(jsonData!);
        })
        .catch((error) => console.log(error));
    };

    React.useEffect(() => {
        dBase()
    }, []);

    return (
        <section className="data">
            {/* {data && data.map((item) => (

            ))} */}
        </section>
    );
};


