import Link from 'next/link'
import Menu, { SubMenu, MenuItem } from 'rc-menu'
import Router from 'next/router'

const onTitleClick = () => {
    Router.push({
        pathname: '/overview'
    })
}

const Navigation = () => {
    return (
        <div className="main-menu-outer">
            <Menu
                mode="horizontal"
                openAnimation="slide-up"
                triggerSubMenuAction="hover"
                className="main-menu container mx-auto"
            >
                <MenuItem><Link prefetch href="/"><a>Home</a></Link></MenuItem>
                <MenuItem><Link prefetch href="/newsfeed"><a>News Feed</a></Link></MenuItem>
                <SubMenu title="Story & Lore" key="1" onTitleClick={onTitleClick} popupOffset={[0, 0]}>
                    <MenuItem key="1-1"><Link prefetch href="/overview"><a>Story Overview</a></Link></MenuItem>
                    <MenuItem key="1-2"><Link prefetch href="/characters"><a>Characters</a></Link></MenuItem>
                    <MenuItem key="1-3"><Link prefetch href="/world"><a>World</a></Link></MenuItem>
                </SubMenu>
                {/* <MenuItem><Link prefetch href="/fun-stuff"><a>Fun Stuff</a></Link></MenuItem> */}
                <MenuItem><Link prefetch href="/behindthescenes"><a>Behind The Scenes</a></Link></MenuItem>
            </Menu>
        </div >
    )
}

export default Navigation
