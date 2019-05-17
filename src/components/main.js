import React, { Component } from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    width: 100%;
    margin: 20px 200px;
    @media screen and (max-width: 1000px) {
            margin: 20px 10px;
    }
    .items{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .item{
            text-decoration: none;
            border-bottom: 0.5px solid rgb(230,230,230);
            position:  relative;
            cursor: pointer;
            .featuring{
                margin: 20px;
                font-size: 30px;
                color: rgb(80,80,80);
                display: flex;
                align-items: center;
                justify-content: flex-start;
                img{
                    margin-right: 20px;
                    width: 150px;
                }
                @media screen and (max-width: 500px) {
                    img{
                        margin: 20px 0;
                        width: 100%;
                    }
                    flex-direction: column;
                }
            }
            .short_desc{
                max-width: 1000px;
                margin: 20px;
                font-size: 20px;
            }
            .date{
                position: absolute; 
                top: 10px;
                right: 10px;
                color: rgb(200,200,200);
            }
        }
    }
`

export default class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <div className='items'>
        {this.props.children}
        </div>
      </MainWrapper>
    )
  }
}
