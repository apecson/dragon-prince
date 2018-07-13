import React, { Component } from 'react'
import Link from 'next/link'
import Navigation from './Navigation';
import SocialLinks from '../components/ui/SocialLinks'

const linkStyle = {
    marginRight: 15
}


class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            fixed: false
        }
    }
    

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let header = window.document.querySelector('header');
        if (window.scrollY >= 46 ) {
            // header.className += "fixed";
            this.setState({
                fixed: true
            })
        } 
        if (window.scrollY <= 47 ){
            // header.className = "";
            this.setState({
                fixed: false
            })
        }
    }

    render() {
        return (
            <header className={this.state.fixed ? 'fixed' : ''}>
                <div className="container">
                    <SocialLinks />
                    <div className="main-logo"><Link href="/"><img className="img-fluid mx-auto d-block" src={this.state.fixed ? '/static/logoMini.png' : '/static/logo.png'} alt="The Dragon Prince" /></Link></div>
                </div>
                <Navigation />
            </header>
        )
    }
}

export default Header
