import React from "react";
import pustoy from "./../../../accets/images/pustoyprofile.jpg"
const Ava=({profile,avaSize})=>{
    
    return <>
    {profile
        ?<img  src={avaSize?avaSize:pustoy} alt="ava" />
        :<img src={pustoy} alt="ava" />}
        </>
}
export default Ava