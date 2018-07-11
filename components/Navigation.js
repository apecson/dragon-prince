import Link from 'next/link'
import Menu, { SubMenu, MenuItem } from 'rc-menu';

const Navigation = () => {
    return (
        <Menu>

            <MenuItem><Link prefetch href="/"><li className="nav-item">Home</li></Link></MenuItem>
            <MenuItem><Link prefetch href="/newsfeed"><li className="nav-item">Newsfeed</li></Link></MenuItem>
            <SubMenu title="Story & Lore">
                <MenuItem><Link prefetch href="/overview"><li className="nav-item-child">Story Overview</li></Link></MenuItem>
                <MenuItem><Link prefetch href="/characters"><li className="nav-item-child">Characters</li></Link></MenuItem>
                <MenuItem><Link prefetch href="/world"><li className="nav-item-child">World</li></Link></MenuItem>
            </SubMenu>
            <MenuItem><li className="nav-item">Fun Stuff</li></MenuItem>
            <MenuItem><li className="nav-item">Behind The Scenes</li></MenuItem>
        </Menu>
    )
}

export default Navigation
