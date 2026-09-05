import { MdDashboard } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>JobTrack</h2>
        <p>Career Manager</p>
      </div>

      <ul>
        <li>
          <a href="#">
            <MdDashboard />
            Dashboard
          </a>
        </li>

        <li>
          <a href="#">
            <FaToolbox />
            Applications
          </a>
        </li>

        <li>
          <a href="#">
            <IoIosAddCircle />
            Add Application
          </a>
        </li>
        <li>
          <a href="#">
            <IoMdSettings />
            Settings
          </a>
        </li>
      </ul>

      <button className="logout"><IoLogOutOutline /> Logout</button>

    </div>
  );
};

export default Sidebar;
