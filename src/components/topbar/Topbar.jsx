import './topbar.css'
import {Chat, Notifications, Person, Search} from '@material-ui/icons'
function Topbar() {
    return (
        <div className="topbarContainer">
          <div className="topbarLeft">
              <span className="logo">Socio</span>
          </div>

          <div className="topbarCenter">
            <div className="searchbar">
              <Search className="search"/>
              <input placeholder="What's on your mind" className="searchInput"/>
            </div>
          </div>

          <div className="topbarRight">

            <div className="topbarLinks">
              <span className="topbarLink">Homepage</span>
              <span className="topbarLink">Timeline</span> 
            </div>

            <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
              </div>

              <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">1</span>
              </div>

              <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">1</span>
              </div>

            </div>
            <img src="https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M=" alt="profilePic" className="topbarImg"/>
          </div>
          
        </div>
    )
}

export default Topbar
