import Link from 'next/link'
import Menu, { SubMenu, MenuItem } from 'rc-menu'

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
                <MenuItem><Link prefetch href="/newsfeed"><a>Newsfeed</a></Link></MenuItem>
                <SubMenu title="Story & Lore" key="1" popupOffset="[0,0]">
                    <MenuItem key="1-1"><Link prefetch href="/overview"><a>Story Overview</a></Link></MenuItem>
                    <MenuItem key="1-2"><Link prefetch href="/characters"><a>Characters</a></Link></MenuItem>
                    <MenuItem key="1-3"><Link prefetch href="/world"><a>World</a></Link></MenuItem>
                </SubMenu>
                <MenuItem><Link prefetch href="/fun-stuff"><a>Fun Stuff</a></Link></MenuItem>
                <MenuItem>Behind The Scenes</MenuItem>
            </Menu>
        </div >
    )
}

export default Navigation
