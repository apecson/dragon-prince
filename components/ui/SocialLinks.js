import { FaFacebook, FaInstagram, FaTumblr, FaTwitter } from 'react-icons/lib/fa/';

const SocialLinks = () => (
    <div className="social-links">
        <a className="Twitter" href="https://twitter.com/dragonprinceoff">
            <FaTwitter size={24} />
        </a>
        <a className="Facebook" href="https://www.facebook.com/dragonprinceofficial">
            <FaFacebook size={24} />
        </a>
        <a className="Tumblr" href="https://dragonprinceofficial.tumblr.com/">
            <FaTumblr size={24} />
        </a>
        <a className="Instagram" href="https://www.instagram.com/dragonprinceofficial/">
            <FaInstagram  size={24} />
        </a>
    </div>
)

export default SocialLinks
