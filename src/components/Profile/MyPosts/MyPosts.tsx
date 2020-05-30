import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {MapDispatchPropsType, MapStatePropsType} from "./MyPostsContainer";


type PropsType = MapStatePropsType & MapDispatchPropsType


const MyPosts = (props: PropsType) => {

    let postsItems = props.posts.map((el) => {
        return <Post message={el.message} like={el.likeCount} key={el.id}/>
    })

    const changeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.target.value
        props.changeValueAC(text)
    }

    const sendPost = () => {
        props.addPostAC()
    }

    return (<div className={s.mainContainer}>
        <div className={s.containerMyPosts}>
            <div className={s.postFormContainer}>
            <textarea
                onChange={changeValue}
                className={s.textForm}
                value={props.valueTextArea}
                placeholder="Message..."
            />
                <div className={s.boxBtn}>
                    <button onClick={props.valueTextArea === '' ? undefined : sendPost} className={s.btnAdd}
                            type="submit">
                        Add post
                    </button>
                </div>
            </div>
        </div>
        <div className={s.boxPosts}>
            <div className={s.itemPost}>
                {postsItems}
            </div>
        </div>
    </div>)


}

export default MyPosts;