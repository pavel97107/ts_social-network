import React from "react";
import  s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return <div className={s.boxProfileInfo}>
        <div className={s.containerInfo}>
        <div className={s.boxAvatar}>
         <img src={'https://sun1.beltelecom-by-minsk.userapi.com/Asqv178qBb-VNceUNxkmiV77WfL7CDWsC9x46g/avrBmsn1sAs.jpg?ava=1'} />
        </div>
        <div className={s.boxInfo}>
            <div><span className={s.itemData}>Status:</span><span className={s.itemResponseData}>Just do it!</span></div>
            <div><span className={s.itemData}>Name:</span><span className={s.itemResponseData}>Pavel</span></div>
            <div><span className={s.itemData}>Surname:</span><span className={s.itemResponseData}>Silver</span></div>
            <div><span className={s.itemData}>Location:</span><span className={s.itemResponseData}>Belarus</span></div>
            <div><span className={s.itemData}>Birthday:</span><span className={s.itemResponseData}>24.04.1998</span></div>
        </div>
        </div>
    </div>
}

export default ProfileInfo;