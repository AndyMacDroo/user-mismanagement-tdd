import * as React from "react";

const Stats = (props) => {
    return (<div> {
        Object.values(props.stats).map(stat => {
            return (<div>{stat}</div>)
        })}</div>);
}

export default Stats;