import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";


const MyPosts = (props: any) => {
debugger;
    let postsItems = props.profilePage.posts.map((el: any) => {
        return <Post message={el.message} like={el.likeCount} key={el.id}/>
    })

   const changeValue = (event: any) => {
      let text = event.target.value
       props.changeValue(text)
   }

   const sendPost = () => {
       props.addPost()
   }

    return (<div className={s.mainContainer}>
        <div className={s.containerMyPosts}>
            <div className={s.postFormContainer}>
            <textarea
                onChange={changeValue}
                className={s.textForm}
                value={props.valueTextArea}
                name="user_post"
                id=""
                placeholder="Message..."
            />
                <div className={s.boxBtn}>
                    <button onClick={props.valueTextArea === '' ? undefined : sendPost}  className={s.btnAdd} type="submit">
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