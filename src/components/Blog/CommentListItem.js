import React from 'react';  
import { Link, } from "react-router-dom";

function CommentListItem(props) {
    const { comment } = props;

    return (
        <div>
            <div className="col d-flex flex-column position-static">
              <p className="d-inline-block mb-2 text-success">{comment.email}</p>
              <h4 className="mb-0">{comment.name}</h4>
              {/* <div className="mb-1 text-muted">{comment.email}</div> */}
              <p className="mb-auto">{comment.body}</p>
              <hr width={200} align={'left'}/>
            </div>
        </div>
    );
} 

export default CommentListItem;