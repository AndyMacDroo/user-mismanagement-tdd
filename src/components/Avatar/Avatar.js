import * as React from "react";
import { injectedProps } from "react-admin";

const Avatar = (props) => {
    return (<div><img alt="myspazz" height={props.height} width={props.width} src={props.img} /></div>);
}

export default Avatar;