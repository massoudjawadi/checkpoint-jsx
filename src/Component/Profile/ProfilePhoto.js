import React from 'react';
import colosseo from "./colosseo.jpg"

function ProfilePhoto() {
    return (
      <div>
         <img src={colosseo} style={{borderRadius: 20, width:500, heigth:500}}/>

      </div>
    );
  }
export default ProfilePhoto