import axios from "axios";
import './mobileRoom.css'
import React from "react";
import MobileRoomItmes from "../moblieRoom/mobileRoomItems"
import CardAddingRoom from '../../addRoom/cardAddingRoom'
import InfiniteScroll from "react-infinite-scroll-component";

class MobileRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { room:[] };
      }
      componentDidMount(){
        this.getData()
      }

 getData = () => {
        axios.get(`http://192.168.1.91:8000/api/room/list/`)
        .then((response) => this.setState({room:response.data}))

    }
    render() {
        return (
        <>
        <InfiniteScroll
          dataLength={this.state.room.length}
          next={this.getData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="swipe">
                {this.state.room.map((item ,index)=>(
                 <MobileRoomItmes item={item} key={index}/>
                ))}
            </div>
            <br></br>
            <br></br>
            <br></br>
        </InfiniteScroll>
           
            

        </>
    );
    
}}
export default MobileRoom;