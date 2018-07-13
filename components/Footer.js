import Link from 'next/link';

const Footer = () => (
    <footer className="pt-4 pb-4">
        <div className="container text-center">
            &copy; Copyright Wonderstorm
        </div>
        <ul class="d-flex justify-content-center nav">
            <li class="nav-item">
                <Link href=""><a class="text-white nav-link active">Terms of Service</a></Link>
            </li>
            <li class="nav-item">
                <Link href=""><a class="text-white nav-link" >Privacy Policy</a></Link>
            </li>
            <li class="nav-item">
                <Link href=""><a class="text-white nav-link">Cookie Policy</a></Link>
            </li>
        </ul>
    </footer>
)

export default Footer
