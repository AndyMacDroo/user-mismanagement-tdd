import * as React from "react";
import { injectedProps } from "react-admin";
import "./Avatar.css";

const Avatar = (props) => {
    return (<div className="Avatar"><img alt="myspazz" height={props.height} width={props.width} src={props.img} /></div>);
}

export default Avatar;