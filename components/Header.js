import Link from 'next/link'
import Navigation from './Navigation';
import SocialLinks from '../components/ui/SocialLinks'


const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <header className="">
        <div className="container">
            {/* TODO: Fix styles on this social links here */}
            {/* <SocialLinks /> */}
            <div className="main-logo"><Link href="/"><img className="img-fluid mx-auto d-block" src="/static/logo.png" alt="The Dragon Prince" /></Link></div>
        </div>
        <Navigation />
    </header>
)



export default Header
