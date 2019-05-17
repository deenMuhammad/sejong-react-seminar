import React, { Component } from 'react'
import styled from 'styled-components'
import {Query, Mutation} from 'react-apollo'
import gql from "graphql-tag";

const GET_SINGLE_POST = gql`
query getSinglePost($_id: String!){
  getSinglePost(_id: $_id){
    _id
    title
    image
    text
    likes
    date_added
  }
}
`
const LIKE_POST = gql`
mutation likePost($_id: String){
  likePost(_id: $_id)
}
`

const FullPostWrapper = styled.div`
    width: 100%;
    margin: 20px 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 1000px) {
            margin: 20px 10px;
    }
    .title{
        max-width: 700px;
        font-size: 40px;
        margin: 30px 10px;
    }
    .featuring_image{
        margin: 10px;
        max-width: 700px;
        @media screen and (max-width: 500px) {
            width: 100%;
        }
    }
    .text{
        font-size: 25px;
        max-width: 700px;
    }
    .like{
        transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);
        cursor: pointer;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            margin-right: 5px;
        }
        :hover{
            color: rgb(48, 230, 70);
        }
    }
    .modal{
        display: ${props=>props.modal_open?'flex':'none'};
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255, 0.9);
        top: 0;
        color: rgb(48, 230, 70);
        font-size: 30px;
        margin: 20px;
    }
`

export default class Fullpost extends Component {
    constructor(){
        super();
        this.state={
            liked: false,
            modal_open: false
        }
    }
  render() {
    return (
      <Query query={GET_SINGLE_POST} variables={{_id: this.props._id}}>
      {({error, loading, data})=>{
          if(error) return<p>error</p>
          if(loading) return <p>loading...</p>
          return(
            <FullPostWrapper modal_open={this.state.modal_open}>
            <div className='title'>{data.getSinglePost.title}</div>
            <img alt='featuring_image' className='featuring_image' src={data.getSinglePost.image}/>
            <blockquote className='text'>{data.getSinglePost.text}</blockquote>
            <Mutation mutation={LIKE_POST}
                onCompleted={()=>{
                    this.setState({modal_open: true, liked: true});
                    setTimeout(()=>{
                        this.setState({modal_open: false});
                    },2000)
                }}
            >
                {(likePost)=>{
                    return(
                        <div className='like' onClick={()=>{
                            likePost({variables: {_id: data.getSinglePost._id}})
                        }}>
                            <img alt='like' src={require('./../static/thumbsup.svg')}/>
                            {this.state.liked?'Like it again 😎': 'Like this post'}
                        </div>
                    )
                }}
            </Mutation>
            <div className='modal'>Thank you for liking the post 🎈🎊🎉</div>
          </FullPostWrapper>
          )
      }}
      </Query>
    )
  }
}
