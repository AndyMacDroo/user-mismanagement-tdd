import * as React from "react";

const Blog = ({entries}) => {
    return (<div>{entries.map(entry => {
        return (<div>{entry.title} <a href={entry.link}>(view more)</a></div>)
    })}</div>);
}

export default Blog;