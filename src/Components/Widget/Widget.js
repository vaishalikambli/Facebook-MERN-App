import React from "react";
import "./Widget.css";

const Widget = () => {
  return (
    <div className="widget">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FKickstarter%2Fphotos%2Fa.10152384621799885.1073741831.73182029884%2F10154511546454885%2F%3Ftype%3D3&width=500"
        width="340" 
        weight="1500" 
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true" 
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widget;
