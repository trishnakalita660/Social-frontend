import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

export default function Share (){
    return (
        <div className="share">
          <div className="shareWrapper">
            <div className="shareTop">
              <img className="shareProfileImg" src="https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M=" alt="" />
              <input placeholder="What's in your mind" className="shareInput"/>
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
              <div className="shareOptions">
                <div className="shareOption">
                  <PermMedia htmlColor="red" className="shareIcon"/>
                  <span className="shareOptionText" >Photo/Video</span>
                </div>
                <div className="shareOption">
                  <Label htmlColor="blue" className="shareIcon"/>
                  <span className="shareOptionText" >Tag</span>
                </div>
                <div className="shareOption">
                  <Room htmlColor="green" className="shareIcon"/>
                  <span className="shareOptionText" >Location</span>
                </div>
                <div className="shareOption">
                  <EmojiEmotions htmlColor="yellow" className="shareIcon"/>
                  <span className="shareOptionText" >Feelings</span>
                </div>
              </div>
              <button className="shareButton">Share</button>
            </div>
          </div>
          
        </div>
    )
}