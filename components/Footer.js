import Link from 'next/link';

const date = new Date().getFullYear();

const Footer = () => (
    <footer className="pt-4 pb-4">
        <div className="container text-center">
            &copy; {date} Copyright Wonderstorm
        </div>
        <ul className="d-flex justify-content-center nav">
            <li className="nav-item">
                <Link prefetch href="terms"><a className="text-white nav-link active">Terms of Service</a></Link>
            </li>
            <li className="nav-item">
                <Link prefetch href="privacy-policy"><a className="text-white nav-link" >Privacy Policy</a></Link>
            </li>
            <li className="nav-item">
                <Link prefetch href="cookie-policy"><a className="text-white nav-link">Cookie Policy</a></Link>
            </li>
        </ul>
    </footer>
)

export default Footer
