import React,{useEffect,useState} from 'react'
import './Navbar.css'
import { Link,useLocation } from 'react-router-dom'
import { HomeIcon, PresentationChartLineIcon, UserIcon } from '@heroicons/react/solid'

const Navbar = () => {
  useEffect(() => {
    if (location && location.pathname) {
      const key =location.pathname.replace("/", "");
      setCurrent(key === "" ? menus[0].key : key);
    }
  });


  const location = useLocation();
  const iconStyle = {  justifyContent: "center" };


  const menus = [
   
    {
      to: "/",
      key:"home",
      title:"Home",
      isActive:true,
      icon: <HomeIcon  width="20px" height="20px" style={iconStyle}/>,

    },
    {
      to: "/room",
      key:"room",
      title:"Room",
      isActive:false,
      icon:<PresentationChartLineIcon width="20px" height="20px" style={iconStyle} />
    },
    {
      key:"profile",
      to: "/profile",
      title:"Profile",
      isActive:false,
      icon: <UserIcon width="20px" height="20px" style={iconStyle} />,

    },
   

  ];
  



  const [current, setCurrent] = useState(menus[0].key);
  const menuElements = menus.map((menu) => {
    return (
      
        <div className="grid grid-cols-3 gap-3 pl-10	">
          <Link to={menu.to} className={menu.key === current ? "active" : "no-active"}>
            <div>{menu.icon}</div>
            <div>{menu.title}</div>

          </Link>
        </div>
    
    );
  });

  return <div className="Navbar    h-16    drop-shadow-2xl">{menuElements}</div>;
};


export default Navbar