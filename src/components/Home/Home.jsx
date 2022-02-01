import "./Home.css"
import "swiper/css";
import "swiper/css/navigation"
import SwiperCore, {Navigation} from 'swiper';
import CardAddingRoom from '../addRoom/cardAddingRoom'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);
const home = () =>{
    return(
        <>
        <CardAddingRoom/>
            <Swiper  loop={true} navigation={true} className="mySwiper">                  
                <SwiperSlide >
                <div class="w-80 h-48 rounded-lg my-8 shadow-violet-300 shadow-lg bg-gradient-to-b from-purple-400 to-violet-500  	">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-white">name:one room1</div>
                        <p class="text-white text-base">Max member: 20</p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="w-80 h-48 rounded-lg my-8 shadow-violet-300		 shadow-lg bg-gradient-to-b from-purple-400 to-violet-500 ">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-white">name:one room2</div>
                        <p class="text-white text-base">Max member: 20</p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="w-80 h-48 rounded-lg my-8 shadow-violet-300		 shadow-lg bg-gradient-to-b from-purple-400 to-violet-500 ">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-white">name:one room3</div>
                        <p class="text-white text-base">Max member: 20</p>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </>

    )

}
export default home;