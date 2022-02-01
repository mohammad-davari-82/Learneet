import React from 'react'
import MobileRoom from './moblieRoom/mobileRoom';

import { BrowserView, MobileView} from 'react-device-detect';

const Blog = () => {
  return(
    <>
    
        <BrowserView>
            <MobileRoom />
        </BrowserView>
        <MobileView>
            <MobileRoom />
        </MobileView>
    </>
  );
};


export default Blog;