import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>NVSI</h1>
            </div>
            <a href="/">Home</a>
            <a href="/community">Community</a>
        </nav>
        

    );
}
 
export default Navbar;