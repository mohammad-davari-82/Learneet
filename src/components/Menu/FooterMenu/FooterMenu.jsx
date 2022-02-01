import "./FooterMenu.css";
import React, { useState , useEffect} from 'react'
import { HomeIcon, PresentationChartLineIcon, UserIcon, SearchIcon } from '@heroicons/react/solid'
import { Link ,  useLocation} from 'react-router-dom'




const FooterMenu = () => {
  useEffect(() => {
    if (location && location.pathname) {
      const key =location.pathname.replace("/", "");
      setCurrent(key === "" ? menus[0].key : key);
    }
  });


  const location = useLocation();
  const iconStyle = { marginBottom:"2px",display:"flex", alignItems:"center", justifyContent: "center" };


  const menus = [
   
    {
      to: "/",
      key:"home",
      title:"Home",
      isActive:true,
      icon: <HomeIcon  width="30px" height="30px" style={iconStyle}/>,

    },
    {
      to: "/room",
      key:"room",
      title:"Room",
      isActive:false,
      icon:<PresentationChartLineIcon width="30px" height="30px" style={iconStyle} />
    },
    {
      key:"search",
      to: "/search",
      title:"hich",
      isActive:false,
      icon: <SearchIcon width="30px" height="30px" style={iconStyle} />,

    },
    {
      key:"profile",
      to: "/profile",
      title:"Profile",
      isActive:false,
      icon: <UserIcon width="30px" height="30px" style={iconStyle} />,

    },
    
  
   
    
  ];
  const [current, setCurrent] = useState(menus[0].key);

  const menuElements = menus.map((menu) => {
    return (
      
        <div className="main">
          <Link to={menu.to} className={menu.key === current ? "isActive" : "noActive"}>
            <div>
              {menu.icon ?? <div >{menu.textIcon}</div>}
            </div>
          
          </Link>
        </div>
    
    );
  });

  return <div className="footer h-16 bg-gray-900	z-40  w-72 fixed bottom-5  drop-shadow-2xl">{menuElements}</div>;
};



export default FooterMenu;