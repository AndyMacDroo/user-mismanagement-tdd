import * as React from "react";

const Status = ({online, llogin}) => {
    if(online) { return (<><div>Status: Online</div><div>Last Login: {llogin}</div></>)}
    else return (<><div>Status: Offline</div><div>Last Login: {llogin}</div></>)
}

export default Status;