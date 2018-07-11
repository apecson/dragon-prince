import Link from 'next/link'
import Menu, { SubMenu, MenuItem, Divider } from 'rc-menu';



const Navigation = () => {
    return (
        <div className="main-menu-outer">
            <Menu
                mode="horizontal"
                openAnimation="slide-up"
                triggerSubMenuAction="click"
                className="main-menu container mx-auto"
            >
                <MenuItem><Link prefetch href="/">Home</Link></MenuItem>
                <MenuItem><Link prefetch href="/newsfeed">Newsfeed</Link></MenuItem>
                <SubMenu title="Story & Lore">
                    <MenuItem><Link prefetch href="/overview">Story Overview</Link></MenuItem>
                    <MenuItem><Link prefetch href="/characters">Characters</Link></MenuItem>
                    <MenuItem><Link prefetch href="/world">World</Link></MenuItem>
                </SubMenu>
                <MenuItem>Fun Stuff</MenuItem>
                <MenuItem>Behind The Scenes</MenuItem>
            </Menu>
        </div >
    )
}

export default Navigation
