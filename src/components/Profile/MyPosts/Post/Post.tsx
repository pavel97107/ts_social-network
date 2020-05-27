import React from "react";
import s from "./Post.module.css";


type typePropsPost = {
    message: string,
    like: number
    key?: number
}

const Post = (props: typePropsPost) => {
    return <div className={s.itemPost}>
        <div className={s.postHeader}>
            <div className={s.boxImage}><img
                src="https://sun1.beltelecom-by-minsk.userapi.com/Asqv178qBb-VNceUNxkmiV77WfL7CDWsC9x46g/avrBmsn1sAs.jpg?ava=1"
                alt=""/></div>
            <div className={s.postHeader_info}>
                <div className={s.nameUser}>Pavel</div>
                <div className={s.showDate}>{new Date().toLocaleDateString()}</div>
            </div>

        </div>
        <div className={s.postContent}>
            <div className={s.boxMessage}>{props.message}</div>
            <div className={s.boxLike}><span>Likes</span><span>{props.like}</span></div>
        </div>

    </div>
}

export default Post;