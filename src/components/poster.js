import React, { Component } from 'react'
import styled from 'styled-components'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'


const POST = gql`
mutation post($title: String!, $image: String!, $text: String!){
  post(
    title: $title,
    image: $image,
    text: $text
  )
}
`

const PosterWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px 200px;
    @media screen and (max-width: 1000px) {
            margin: 20px 10px;
    }
    form{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      input{
        width: 650px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid rgb(230,230,230);
        font-size: 20px;
        padding: 10px;
        margin: 10px 0;
        transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);
        @media screen and (max-width: 1000px) {
          width: 350px;
        }
        :focus{
          border: 1px solid rgb(48, 230, 70);
          outline: none;
        }
        ::placeholder{
          color: rgb(200,200,200);
        }
      }
      textarea{
        width: 650px;
        height: 100px;
        border-radius: 10px;
        border: 1px solid rgb(230,230,230);
        font-size: 20px;
        padding: 10px;
        margin: 10px 0;
        transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);
        @media screen and (max-width: 1000px) {
          width: 350px;
        }
        :focus{
          border: 1px solid rgb(48, 230, 70);
          outline: none;
        }
        ::placeholder{
          color: rgb(200,200,200);
        }
      }
      button{
        width: 650px;
        height: 50px;
        border-radius: 10px;
        border: none;
        font-size: 20px;
        padding: 10px;
        margin: 10px 0;
        transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);
        color: white;
        background-color: rgb(48, 230, 70);
        @media screen and (max-width: 1000px) {
          width: 350px;
        }
        :focus{
          outline: none;
        }
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
        text-align: center;
    }
`

export default class Poster extends Component {
  constructor(){
    super();
    this.state={
      posting: false,
      modal_open: false,
      title: '',
      image: '',
      text: ''
    }
  }
  render() {
    return (
      <Mutation mutation={POST}
        onCompleted={(data)=>{
          if(data.post){
            this.setState({modal_open: true});
            setTimeout(()=>{
                this.setState({modal_open: false});
                window.location.reload();
            },2000)
          }
        }}
        onError={(error)=>{
          this.setState({posting: false})
          console.log(error)
        }}
      >
        {(post)=>{
          return(
            <PosterWrapper modal_open={this.state.modal_open}>
              <h1>New Post</h1>
              <form>
                <input type='text' placeholder='Name of Blog' onChange={(e)=>{this.setState({title: e.target.value})}}/>
                <input type='text' placeholder='Featuring Image uri' onChange={(e)=>{this.setState({image: e.target.value})}}/>
                <textarea placeholder='Story' onChange={(e)=>{this.setState({text: e.target.value})}}/>
                <button onClick={(e)=>{
                  e.preventDefault();
                  if(this.state.title===''||this.state.image===''||this.state.text===''){
                    alert('Plase fill all the fields!');
                    return;
                  }
                  if(this.state.text.length<=100){
                    alert("Plase insert text more than 100 character-long in story filed!")
                  }
                  this.setState({posting: true})
                  post({variables: {title: this.state.title, image: this.state.image, text: this.state.text}});
                }} type='submit'>{this.state.posting?'Posting...':'Post'}</button>
              </form>
              <div className='modal'>Thank you for posting a new post  here 🎈🎊🎉</div>
            </PosterWrapper>
          )
        }}
      </Mutation>
    )
  }
}
