
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';


// The parameter of this function is an object with a string called url inside it.
// url is a prop for the Post component.
export default function Post({ url, name }) {
  /* Display image and post owner of a single post */

  const [imgUrl, setImgUrl] = useState("");
  const [owner, setOwner] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    setImgUrl(url);
    setOwner(name);
  }, [url, name]);

  const handleClick = () => {
    // Use encodeURIComponent to handle names with spaces or special characters
    navigate(`/page2/${encodeURIComponent(name)}`);
  };

  // Render post image and post owner
  return (
    <div className="post">
      <img src={imgUrl} alt="post_image" />
      <button onClick={handleClick}>{name}</button>
      
      <p>
      <a href={`/page2/${owner}`}>{owner}</a>      
      </p>
    </div>
  );
}

Post.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

