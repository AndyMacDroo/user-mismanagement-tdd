import * as React from "react";
import "./Panel.css";

const Panel = ({ hUnits, vHeight, bgColor, children}) => {
    return(<div className="Panel">{children}</div>);
}

export default Panel;