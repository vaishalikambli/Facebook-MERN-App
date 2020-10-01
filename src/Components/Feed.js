import React from "react";
import Storyreel from "./Storyreel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <Storyreel />
      <MessageSender />
      <Post
        profilePic="https://media-exp1.licdn.com/dms/image/C5603AQHksw_YpMcjdA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=jAMyDGMj7_P2GNeq_erdRVDv72m8EazObI3jNgwB7-0"
        message="yoo this is a message"
        timestamp="1601493943737"
        imgName="imgName"
        username="Vaishali"
      />

      {/* {
        postsData.map(entry => (
          <Post 
            profilePic={entry.avatar} 
            message={entry.text} 
            timestamp={entry.timestamp}  
            imgName={entry.imgName} 
            username={entry.user}
          />
        ))
      } */}
    </div>
  );
};

export default Feed;
