import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css' 

//navbar for the mobile version
function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className= {styles.items}>
                <Link href="/home"><a>Home</a></Link>                
                <Link href="/about"><a>About</a></Link>
                <Link href="/events"><a>Events</a></Link>
                <Link href="/community"><a>Community</a></Link>    
                <Link href="/whitepapers"><a>White Papers</a></Link>
                <Link href="/getinvolved"><a>Get Involved</a></Link>
            </div>  
        </div>
    )
}

//navbar including the hamburger icon
function Phone() {

    const [open, setOpen] = useState(false)
    return (
        <div>
            <MobileNav open={open} setOpen={setOpen}/>
                <div className= {styles.hamburger}>
                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>
                </div> 
        </div>
        )
    }

//navbar for desktop
function DesktopNav() {
    return (
        <nav>
                <nav className= {styles.navbar}>
                    {/* <div className= {styles.image}> */}
                        <img src = "https://lh3.googleusercontent.com/PgacuOOq5JLBwdFKtz5Mo4H9O5B6VFjDbrw-yYuXqqndQ55GVousoIjpIlFI9-GG-wycsI0Ojdx7S1dsh5If_y9mYXecyEWagyEuxV7H0ysvt5vzajHNdx_oSiCLaVUlUuVeciPM=w2400" alt = "box" width = "300"/>
                    {/* </div> */}
                    <div className= {styles.navlink}>
                        <Link href="/home"><a className= {styles.link}>Home</a></Link>
                        <Link href="/about"><a className= {styles.link}>About</a></Link>
                        <Link href="/events"><a className= {styles.link}>Events</a></Link>
                        <Link href="/community"><a className= {styles.link}>Community</a></Link>
                        <Link href="/whitepapers"><a className= {styles.link}>White Papers</a></Link>
                        <Link href="/getinvolved"><a className= {styles.link}>Get Involved</a></Link>
                    </div>
                </nav>
        </nav>
    )
}


function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }


//show desktop navbar if the window size is greater than 900. otherwise, show mobile navbar
export default function Navbar() {
    const size = useWindowSize();
    const breakpoint = 900;
    const width = size.width
    return (
        width < breakpoint ? <Phone/> : <DesktopNav/>
        
    )
}