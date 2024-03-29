import React from "react";
import { RingLoader } from "react-spinners";

const Loader = ({ state }) => {

    return (state &&
        <div className="loader-container">
                <RingLoader
                    color="#f6ff00"
                    loading={state}
                    speedMultiplier={1.8}
                    size={"60px"}  
                    className="load"
                />
            
            <p style={{ padding: "10px" }}>Loading...</p>
        </div>
    )

}
export default Loader