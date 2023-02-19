import React from 'react'
import { useState, useEffect } from 'react';
import '../styles/App.css';
import { PostDetail } from './PostDetail';
import LoginForm from './Signup';
import logo from '../logo.jpg'

const App = ({ detail }) => {

  const [post, setPost] = useState(false);
  const [logindata, setLogindata] = useState(false)
  const [mydata, setMydata] = useState();

  useEffect(() => {
    const getData = localStorage.getItem("postdetail");
    if (getData) {
      setMydata(JSON.parse(getData));
    }
  }, [detail])

  function upvote(key) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user == null) {
      return alert("Login to Upvote");
    }
    const data = localStorage.getItem("postdetail");
    const data1 = JSON.parse(data);
    if (data1) {
      data1[key].upvote = data1[key].upvote + 1;
      localStorage.setItem("postdetail", JSON.stringify(data1));
    }
  }
  function downvote(key) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user == null) {
      return alert("Login to Downvote");
    }
    const data = localStorage.getItem("postdetail");
    const data1 = JSON.parse(data);
    if (data1) {
      data1[key].downvote = data1[key].downvote - 1;
      //   console.log(data1);
      localStorage.setItem("postdetail", JSON.stringify(data1));
    }
  }
  return (
    <div id="main" className='main'>
      <nav className='nav-bar'>
        <div className="img">
          <img src={logo} alt="logo" height={60} />
        </div>
        <div className="btnpost">
          <button type='button' className='btn' onClick={() => {
            const data = JSON.parse(sessionStorage.getItem("user"));
            if (data == null) {
              return alert("Login to add post");
            }
            setPost(true)
          }}> Add new post</button>
        </div>
        <div className="sidenav__search">
          <input type="text" name="search" placeholder="search" />
        </div>
        <div className="btnlogin">
          <button type='button' className='btn'
            onClick={() => {
              setLogindata(true)
            }}>Login</button>
        </div>
      </nav>
      <main>
        <div className='parent'>
          {post && <PostDetail onClick={() => setPost(false)} />}
          {logindata && <LoginForm onClick={() => setLogindata(false)} />}
          {
            mydata && mydata.map((ele, index) => {
              return <>
                <div className='child' key={index}>
                  <div className='btn-child'>
                    <div className='shadow'>
                      <button type='button' onClick={() => upvote(index)} className='upBtn'>Upvote</button>
                      <div className='inr-der'>{ele.upvote}</div>
                    </div>
                    <div className='shadow'>
                      <button type='button' className='downbtn' onClick={() => downvote(index)} >Downvote</button>
                      <div className='inr-der'>{ele.downvote}</div>
                    </div>
                  </div>
                  <div className='description'>
                    <h3 className='title'>{ele.title}</h3> <hr />
                    <p className='my-post'>{ele.description}</p>
                  </div>
                  <div className="menu">
                    <button>del</button>
                  </div>
                </div>
              </>
            })
          }
        </div>
      </main>
    </div>
  )
}


export default App;
