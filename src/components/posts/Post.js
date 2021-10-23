import './post.css'
import { MoreVert } from "@material-ui/icons"

function Post() {
    return (
        <div className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img className="postProfileImg" src="https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M=" alt=""/>
                <span className="postUsername"> Some Girl </span>
                <span className="postDate"> 5 mins ago </span>  
              </div>
              <div className="postTopRight" >
                <MoreVert htmlColor="white" />
              </div>
              
            </div>
            <div className="postCenter">
              <span className="postText"> This is first post. </span>
              <img className="postImg" src="https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M=" alt=""/>
                
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIconLike" src="https://i.pinimg.com/originals/17/6c/38/176c383df4cb5b740f3386bae53d08d5.gif" alt=""/>
                <img className="likeIcon" src="https://cdn.pixabay.com/photo/2021/03/22/09/34/heart-6114039_960_720.png" alt=""/>                
                <span className="postLikeCounter">45 people reacted</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">10 comments</span>
              </div>
            </div>
          </div>
             
        </div>
    )
}

export default Post
