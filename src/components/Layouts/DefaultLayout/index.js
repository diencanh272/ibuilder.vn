import Header from '~/components/Layouts/components/Header';
import Navbar from '~/components/Layouts/components/Navbar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Navbar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
