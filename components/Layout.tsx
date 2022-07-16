import Navbar from '../components/Navbar'

interface LayoutProps {
    children: React.ReactNode;
 }

function Layout({children} : LayoutProps) {
    return <div>
        <Navbar/>
        <div className='container px-2 mx-auto'>

        {children}
        </div>
    </div>
}

export default Layout