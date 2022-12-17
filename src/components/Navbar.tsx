import Link from 'next/link'
import { useAuth } from '../firebase/firebaseContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlane, faPlaneCircleCheck, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Sidebar = () => {
    return (
        <div className='w-60 h-screen shadow-md bg-white px-1 absolute'>
            <p>I am a sidebar</p>
        </div>
    )
}


const Navbar = () => {
    const {currentUser, signIn, logout} = useAuth()
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
    const openSideMenu = () => {
        if(sidebarOpen) {
            setSidebarOpen(false)
            console.log(sidebarOpen)
        } else {
            setSidebarOpen(true)
            console.log(sidebarOpen)
        }
    }
    if(currentUser) {
        return (
          <div className='relative'>
              <div className="navbar bg-base-100 border-b">
                  <div className="flex-none">
                      <button className="btn btn-square btn-ghost" onClick={openSideMenu}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                      </button>
                  </div>
                  <div className="flex-1">
                    <Link href="/">
                      <a className="btn btn-ghost normal-case text-xl">Surf</a>
                    </Link>
                  </div>
                  <div className="dropdown flex-none">
                    <button tabIndex={0} className="btn m-1 btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </button>
                    <ul tabIndex={0} className="dropdown-content menu -ml-44 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faPenToSquare} />
                                <Link href="/post/add-post">
                                    <a>New post</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faUser} />
                                <Link href="/user/profile">
                                    <a>profile</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faPlane} />
                                <Link href="/trips/my-trips">
                                    <a>My trips</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faRightFromBracket}/>
                                <button onClick={logout}>logout</button>
                            </div>
                        </li>
                    </ul>
                </div>
              </div>
              {sidebarOpen &&
                <Sidebar/>
              }
          </div>
        )
    } else {
        return (
            <div>
                <div className="navbar bg-base-100">
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">Surf</a>
                    </div>
                    <div className="flex-none">
                        <button className="btn bg-primary-content hover:bg-primary-content hover:border-primary-content border-primary-content text-secondary" onClick={signIn}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
          )
    }
}
export default Navbar