import React from 'react';  
import { Link, } from "react-router-dom";

function UserListItem(props) {
    const { user } = props;

    return (
        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.company.name}</td>
            <td>
                <Link to={{pathname: `/${user.id}/posts`, state: { fromRecipe: true }}} >
                    <div className="text-muted">{window.location.origin + `/${user.id}/posts`}</div>
                </Link>
            </td>
        </tr>
    ) 
} 

export default UserListItem;