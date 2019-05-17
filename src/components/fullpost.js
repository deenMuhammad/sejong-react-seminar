import React, { Component } from 'react'
import styled from 'styled-components'


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
        font-size: 40px;
        margin: 30px 0;
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
`

export default class Fullpost extends Component {
  render() {
    return (
      <FullPostWrapper>
        <div className='title'>Name of the blog</div>
        <img alt='featuring_image' className='featuring_image' src={"http://kosmonita.com/wp-content/uploads/2018/05/placeholder4.png"}/>
        <blockquote className='text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </blockquote>
        <div className='like'>
            <img alt='like' src={require('./../static/thumbsup.svg')}/>
            Like this post
        </div>
      </FullPostWrapper>
    )
  }
}
