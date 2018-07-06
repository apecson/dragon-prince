import Header from './Header'
import Footer from './Footer';
import Connect from './Connect';
import "../styles.scss"

const layoutStyle = {

}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        <main className="content">
            {props.children}
            <Connect />
        </main>
        <Footer />
    </div>
)

export default Layout
