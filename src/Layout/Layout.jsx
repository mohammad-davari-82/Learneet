import React from "react";
import Navbar from "../components/Menu/Navbar/Navbar";
import FooterMenu from "../components/Menu/FooterMenu/FooterMenu"
import { BrowserView , MobileView } from "react-device-detect";
const Layout = ({children}) => {
  const mobileView = (<div style={{display:"flex",alignItems:"center",justifyContent:"center"}} ><FooterMenu/>{children}</div>);
  const webView = (<div ><Navbar/>{children}</div>)

  return (
    <>
      <BrowserView>{webView}</BrowserView>
      <MobileView>{mobileView}</MobileView>
    </>
  );
}

export default Layout;