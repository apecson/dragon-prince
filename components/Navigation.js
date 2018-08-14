import React, { Component } from 'react'
import Link from 'next/link'
import Menu, { SubMenu, MenuItem } from 'rc-menu'
import Router from 'next/router'
import { FaCaretDown } from 'react-icons/lib/fa';

const onTitleClick = () => {
    Router.push({
        pathname: '/overview'
    })
}

class Navigation extends Component {
    constructor (props) {
        super(props)
        this.state = {
            path: null
        }
    }
    
    componentDidMount () {
        const path = window.location.pathname;
        this.setState({
            path
        })   
    }
    

    render() {
        const { path } = this.state;
        return (
            <div className="main-menu-outer">
                <Menu
                    mode="horizontal"
                    openAnimation="slide-up"
                    triggerSubMenuAction="hover"
                    className="main-menu container mx-auto"
                >
                    <MenuItem className={path && path === '/' ? 'active' : null } ><Link href="/"><a style={{backgroundImage: 'url(/static/navImageHome.png)'}}>Home</a></Link></MenuItem>
                    <MenuItem className={path && path === '/newsfeed' ? 'active' : null }><Link href="/newsfeed"><a style={{backgroundImage: 'url(/static/navImageNewsFeed.png)'}}>News Feed</a></Link></MenuItem>
                    <SubMenu className={path && path === '/overview' || path === '/characters' || path === '/world' ? 'active' : null } title={<a style={{backgroundImage: 'url(/static/navImageStoryLore.png)'}}>Story & Lore</a>} key="1" onTitleClick={onTitleClick} popupOffset={[0, 0]}>
                        <MenuItem key="1-1"><Link  href="/overview"><a style={{backgroundImage: 'url(/static/navImageStoryOverview.png)'}}>Story Overview</a></Link></MenuItem>
                        <MenuItem key="1-2"><Link  href="/characters"><a style={{backgroundImage: 'url(/static/navImageCharacters.png)'}}>Characters</a></Link></MenuItem>
                        <MenuItem key="1-3"><Link  href="/world"><a style={{backgroundImage: 'url(/static/navImageWorld.png)'}}>World</a></Link></MenuItem>
                    </SubMenu>
                    {/* <MenuItem><Link  href="/fun-stuff"><a>Fun Stuff</a></Link></MenuItem> */}
                    <MenuItem className={path && path === '/behind-the-scenes' ? 'active' : null } ><Link  href="/behind-the-scenes"><a style={{backgroundImage: 'url(/static/navImageBehindScenes.png)'}}>Behind The Scenes</a></Link></MenuItem>
                </Menu>
            </div >
        )
    }
}

export default Navigation
