import base_img from "../../Resources/icons/Subtract.png";
import dashboard from "../../Resources/icons/icons8-dashboard-64.png";
import Analytics from "../../Resources/icons/Chart.png";
import Invoice from "../../Resources/icons/Ticket.png";
import Schedule from "../../Resources/icons/Document.png";
import Calendar from "../../Resources/icons/Calendar.png";
import Messages from "../../Resources/icons/Activity.png";
import Notification from "../../Resources/icons/Notification.png";
import settings from "../../Resources/icons/Setting.png";
import Upgrade from "../../Resources/icons/object.png";
import Avatar from "../../Resources/icons/Rectangle 115.png";
import Logout from "../../Resources/icons/Logoutlogout.png";
import Shadow from "../../Resources/icons/Vector 8.png";

function Navigation() {
  return (
    <nav>
      <div className='title'>
        <img src={base_img} alt='Base' />
        <p>Base</p>
      </div>

      <div id='menu'>
        <li>
          <img src={dashboard} alt='dashboard' />
          <span>Dashboard</span>
        </li>
        <li>
          <img src={Analytics} alt='Analytics' />
          <span>Analytics</span>
        </li>
        <li>
          <img src={Invoice} alt='Invoice' />
          <span>Invoice</span>
        </li>
        <li>
          <img src={Schedule} alt='Schedule' />
          <span>Schedule</span>
        </li>
        <li>
          <img src={Calendar} alt='Calendar' />
          <span>Calendar</span>
        </li>
        <li>
          <img src={Messages} alt='Messages' />
          <span>Messages</span>
        </li>
        <li>
          <img src={Notification} alt='Notification' />
          <span>Notification</span>
        </li>

        <li>
          <img src={settings} alt='settings' />
          <span>settings</span>
        </li>

        <div className='footer'>
          <img src={Upgrade} alt='upgrade' id='lamp' />
          <div id='rectangle20'></div>
          <img src={Shadow} alt='Shadow' id='vector' />
          <button>Upgrade Now</button>
        </div>

        <div className='logout'>
          <img src={Avatar} alt='settings' id='avatar' />
          <div id='profile'>
            <text>Easin Arafat</text>
            <span>Free Account</span>
          </div>
          <img src={Logout} alt='settings' id='logout' />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
