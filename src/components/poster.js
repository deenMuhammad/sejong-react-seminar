import React, { Component } from 'react'
import styled from 'styled-components'

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
`

export default class Poster extends Component {
  render() {
    return (
      <PosterWrapper>
        <h1>New Post</h1>
        <form>
          <input type='text' placeholder='Name of Blog'/>
          <input type='text' placeholder='Featuring Image uri'/>
          <textarea />
          <button type='submit'>Submit</button>
        </form>
      </PosterWrapper>
    )
  }
}
