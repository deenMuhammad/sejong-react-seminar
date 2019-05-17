import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Query } from "react-apollo";
import gql from "graphql-tag";

//importing components
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import Menu from '../components/menu'

const GET_POSTS = gql`
query getPosts{
  getPosts{
    _id
    title
    image
    text
    likes
    date_added
  }
}
`

const LandingWrapper = styled.div`
  font-family: 'Dosis', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color: rgb(100,100,100);
  position: relative;
`


function App() {
  return (
    <Query query = {GET_POSTS}>
      {({error, loading, data})=>{
        if(error) return<p>error</p>
        if(loading) return <p>loading...</p>
        return (
          <LandingWrapper>
            <Header />
            <Menu />
            <Main>
              {data.getPosts.map(post=>{
                let d = new Date(post.date_added)
                return (
                  <Link to={'/singlepost/'+post._id} className='item'>
                    <div className='like'>❤️ {post.likes}</div>
                    <div className='featuring'>
                      <img src={post.image} alt='featuring_img'/>
                      {post.title}
                    </div>
                    <div className='short_desc'>{post.text}</div>
                    <div className='date'>{d.toDateString()}</div>
                  </Link>
                )
              })}
            </Main>
            <Footer />
          </LandingWrapper>
        )
      }}
    </Query>
  );
}

export default App;
