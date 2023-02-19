import React from "react";
import { useState } from "react";

export function PostDetail({ onClick }) {

    const [detail, setDetail] = useState({
        "title": "",
        "description": "",
        "upvote": 0,
        "downvote": 0,
    })

    const postData = (e) => {

        if (detail.title === "") {
            return alert("Empty detail!");
        }
        else if (detail.description === "") {
            return alert("Empty detail!");
        }
        let myData = localStorage.getItem("postdetail");
        if (myData == null) {
            myData = [];
            myData.push(detail);
            localStorage.setItem("postdetail", JSON.stringify(myData));
        } else {
            let data = JSON.parse(myData);
            data.push(detail);
            localStorage.setItem("postdetail", JSON.stringify(data));
        }

    };


    return (
        <div className='form-div'>
            <div className='myForm form1'>
                <h1 className="post-text">Add new post</h1>
                <form>
                    <label htmlFor="title" className="input-label">Title</label>  <br></br>
                    <textarea className='input' id='title' name="title" value={detail.title} onChange={(e) => {
                        setDetail({ ...detail, [e.target.name]: e.target.value });
                    }}></textarea><br></br>

                    <label htmlFor="descrip" className="input-label">Description</label> <br></br>
                    <textarea className='input des' id='descrip' name="description" value={detail.description} onChange={(e) => {
                        setDetail({ ...detail, [e.target.name]: e.target.value });
                    }}></textarea><br></br>

                    <button type='submit' className='sbtn' onClick={postData}>Save</button>

                    <button type='button' className='sbtn' onClick={onClick}>Close</button>
                </form>
            </div>
        </div>
    )
}