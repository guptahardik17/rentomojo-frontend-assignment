import React from 'react';  
import { Link, } from "react-router-dom";

function PostListItem(props) {
    const { post } = props;

    return (
        <tr>
            <td>{post.title}</td>
            <td>
                <Link to={{pathname: `/${post.userId}/posts/${post.id}`, state: { fromRecipe: true }}} >
                    <div className="text-muted">{window.location.origin + `/${post.userId}/posts/${post.id}`}</div>
                </Link>
            </td>
        </tr>
    ) 
} 

export default PostListItem;