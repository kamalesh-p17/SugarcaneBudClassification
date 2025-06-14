import React, { useContext } from 'react';
import './Imagedisplay.css';
import { ImageContext } from '../../Context/ImageContext.jsx'

const Imagedisplay = (props) => {
  const {all_image} = useContext(ImageContext);

  const imageList = all_image.filter((e) => e.Grade === props.grade);
  console.log(imageList);

  return (
    <div className="imagedisplay">
        {imageList.map((item,ind) => (
          <div className="image" key={item._id}>
            <img src={item.image_URL} alt="" />
          </div>
        ))}
    </div>
  );
};

export default Imagedisplay;



