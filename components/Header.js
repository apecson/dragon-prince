import Link from 'next/link'
import Navigation from './Navigation';

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <header className="">
        <div className="container">
            <ul className="social-links">
                <li className="social-link-item"><Link href="/"><a style={linkStyle}>Twitter</a></Link></li>
                <li className="social-link-item"><Link href="/"><a style={linkStyle}>Facebook</a></Link></li>
                <li className="social-link-item"><Link href="/"><a style={linkStyle}>Tumblr</a></Link></li>
                <li className="social-link-item"><Link href="/"><a style={linkStyle}>Instagram</a></Link></li>
            </ul>
            <div className="main-logo"><Link href="/"><img className="img-fluid mx-auto d-block" src="/static/logo.png" alt="The Dragon Prince" /></Link></div>
        </div>
        <Navigation />
    </header>
)



export default Header
