import React from "react";

const mobileRoomItems = ({item}) => (
      <div class="w-80 h-48 rounded-lg my-8 shadow-violet-300		 shadow-lg bg-gradient-to-b from-purple-400 to-violet-600 ">
         <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white">name: {item.Name}</div>
              <p class="text-white text-base">Max member: {item.MaxMembers}</p>
         </div>
      </div>
  
    
);
export default mobileRoomItems;
