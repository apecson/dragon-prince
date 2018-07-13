import React, { Component } from 'react'
import Link from 'next/link'
import Navigation from './Navigation';
import SocialLinks from '../components/ui/SocialLinks'

const linkStyle = {
    marginRight: 15
}


class Header extends Component {
    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let header = window.document.querySelector('header');
        if (window.scrollY >= 200 && header.className !== 'fixed' ) {
            header.className += "fixed";

            console.log(header, window.scrollY)
        } 
        if (window.scrollY < 200 ){
            header.className = "";
        }
        // let scrollTop = event.scrollTop,
            // itemTranslate = Math.min(0, scrollTop/3 - 60);
    
        // this.setState({
        //   transform: itemTranslate
        // });
    }

    render() {
        return (
            <header className="">
                <div className="container">
                    <SocialLinks />
                    <div className="main-logo"><Link href="/"><img className="img-fluid mx-auto d-block" src="/static/logo.png" alt="The Dragon Prince" /></Link></div>
                </div>
                <Navigation />
            </header>
        )
    }
}

export default Header
