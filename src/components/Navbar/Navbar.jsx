import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";
import profile from '../../assets/profile_img.png';
import './Navbar.css'



const Navbar = () => {
  return (
    <nav>
      <div className="search">
        <IoIosSearch />
        <input type="text" placeholder='Search companies or roles....' />
      </div>

      <div className="nav-actions">
        <button className='notification'><FaRegBell /></button>
        <button className='info'><MdHelpOutline /></button>
        <div className="profile">
          <img src={profile} alt="me" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
