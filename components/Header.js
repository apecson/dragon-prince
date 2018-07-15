import React, { Component } from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import Navigation from './Navigation';
import SocialLinks from '../components/ui/SocialLinks'

const linkStyle = {
    marginRight: 15
}

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            fixed: false,
            mobile: false
        }
    }


    componentDidMount () {
        if ( window.screen.availWidth >= 641 ) {
            window.addEventListener('scroll', this.handleScroll)
        } else {
            this.setState({
                fixed: true,
                mobile: true
            })
        }
    }

    componentWillUnmount () {
        if ( window.screen.availWidth >= 641 ) {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }

    handleScroll = (event) => {
        let header = window.document.querySelector('header');
        if (window.scrollY >= 36 ) {
            this.setState({
                fixed: true
            })
        } 
        if (window.scrollY < 36 ){
            this.setState({
                fixed: false
            })
        }
    }

    render() {
        return (
            <header className={ this.state.fixed ? 'fixed' : null }>
                <Menu>
                    <Link prefetch href="/">
                        <a className="bm-item" >Home</a>
                    </Link>
                    <Link prefetch href="/newsfeed">
                        <a className="bm-item" >News Feed</a>
                    </Link>
                    {/* <Link prefetch href="/fun-stuff"><a className="menu-item" >Fun Stuff</a></Link> */}
                    <Link prefetch href="/behind-the-scenes">
                        <a className="bm-item" >Behind The Scenes</a>
                    </Link>
                    <Link prefetch href="/overview">
                        <a className="bm-item" >Story & Lore</a>
                    </Link>
                    <ul className="mini-menu">
                        <Link prefetch href="/overview">
                            <a className="bm-item--small" >Story Overview</a>
                        </Link>
                        <Link prefetch href="/characters">
                            <a className="bm-item--small" >Characters</a>
                        </Link>
                        <Link prefetch href="/world">
                            <a className="bm-item--small">World</a>
                        </Link>
                    </ul>
                    <div className="bm-social">
                        <h3>Social</h3>
                        <hr />
                        <hr />
                        <SocialLinks />
                    </div>
                </Menu>
                <div className="container">
                    <SocialLinks />
                    <Link href="/">
                        <figure className="logo" alt="The Dragon Prince" />
                    </Link>
                </div>
                <Navigation />
            </header>
        )
    }
}

export default Header
