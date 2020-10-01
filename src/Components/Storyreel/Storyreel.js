import React from "react";
import Story from "../Storyreel/Story/Story";
import '../Storyreel/Storyreel.css'

const Storyreel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://images.idgesg.net/images/article/2017/10/user_interface_futuristic_digital_transformation_thinkstock_826567492-100740667-large.jpg"
        profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQE1SH6iggng8Q/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=kB-tZTSa0WajqXTyou1ba8AXPqiI3r5VKnWmzQHF5so"
        title="Bhushan A"
      />
      <Story
        image="https://www.raconteur.net/wp-content/uploads/2019/10/FF_image_2-1280x720.jpg"
        profileSrc=""
        title="Varsha J"
      />
      <Story
        image="https://www.gardendesign.com/pictures/images/650x490Exact/site_3/terra-cotta-planter-wall-proven-winners_14534.jpg"
        profileSrc=""
        title="Vinay K"
      />
    </div>
  );
};

export default Storyreel;
