import React, { Component } from 'react'
import Link from 'next/link';
import styled from 'styled-components'

export default class Button extends Component {

    render() {
        const Button = styled.button`
            background: #4A90E2;
            height: auto;
            min-height: ${this.props.size === 'large' ? '50px' : '25px'};
            color: #fff;
            border: 1px solid #979797;
            border-radius: 5px;
            padding: 0 20px;
            margin: 0 7px;
            @media (max-width: 748px) {
                height: auto;
                min-height: 50px;
            } 
        `

        return (
            <Button>{this.props.text}</Button> 
        )
    }
}
