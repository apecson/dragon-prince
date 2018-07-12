import { FaFacebook, FaInstagram, FaTumblr, FaTwitter } from 'react-icons/lib/fa/';

const SocialLinks = () => (
    <div className="social-links">
        <a className="Twitter" href="">
            <FaTwitter size={24} />
        </a>
        <a className="Facebook" href="">
            <FaFacebook size={24} />
        </a>
        <a className="Tumblr" href="">
            <FaTumblr size={24} />
        </a>
        <a className="Instagram" href="">
            <FaInstagram  size={24} />
        </a>
    </div>
)

export default SocialLinks
