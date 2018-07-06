import Link from 'next/link'
import Navigation from './Navigation';

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <header>
        <div className="container">
            <ul className="social-links">
                <li><Link href="/"><a style={linkStyle}>Twitter</a></Link></li>
                <li><Link href="/"><a style={linkStyle}>Facebook</a></Link></li>
                <li><Link href="/"><a style={linkStyle}>Tumblr</a></Link></li>
                <li><Link href="/"><a style={linkStyle}>Instagram</a></Link></li>
            </ul>
            <div className="main-logo"><img className="mx-auto d-block" src="/static/logo.png" alt="The Dragon Prince" /></div>
        </div>
        <Navigation />
    </header>
)



export default Header
