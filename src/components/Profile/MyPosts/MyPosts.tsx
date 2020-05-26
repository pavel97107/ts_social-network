import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {


    return (<div className={s.mainContainer}>
        <div className={s.containerMyPosts}>
            <div className={s.postFormContainer}>
            <textarea
                className={s.textForm}
                name="user_post"
                id=""
                placeholder="Message..."
            />
                <div className={s.boxBtn}>
                    <button  className={s.btnAdd} type="submit">
                        Add post
                    </button>
                </div>
            </div>
        </div>
        <div className={s.boxPosts}>
            <div className={s.itemPost}>
                <Post />
            </div>
        </div>
        </div>)


}

export default MyPosts;