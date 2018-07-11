import Header from './Header'
import Footer from './Footer';

import "../styles.scss"

const Layout = (props) => (
    <div>
        <Header />
        <main className="content">
            {props.children}

        </main>
        <Footer />
    </div>
)

export default Layout
