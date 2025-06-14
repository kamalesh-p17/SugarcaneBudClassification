import React,{useContext, useState} from 'react'
import './Photos.css'
import { ImageContext } from '../../Context/ImageContext';

const Photos = (props) => {
  const setPreviewUrl = props.setPreviewUrl;
  const setPredict = props.setPredict;
  const {url} = useContext(ImageContext);
  console.log(url);
  const handleImageChange = async (e) => {
    props.setOpen(true);
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`${url}5000/upload`,{
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log("result : ", result);

      if (result.success) {
        console.log("success");
        setPreviewUrl(URL.createObjectURL(file));
        const temp = {
          grade : result.prediction.class,
          inferance_time : result.prediction.inference_time_seconds
        }
        setPredict(temp);
        props.setCardopen(true);
      }
      else{
        console.log("Server Error : ",result)
      }
    } catch (error) {
      console.log("error : ",error);
    }
    props.setOpen(false);
  };
  return (
    <div className="photos">
      <div className="photos-camera">
        <label>
        <i className="fa-solid fa-camera"></i>
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageChange}
          className="input-hidden"
        />
      </label>
      </div>
      <div className="photos-upload">
        <label>
          <i class="fa-solid fa-upload"></i>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className='input-hidden'
          />
        </label>
      </div>
    </div>
  )
}

export default Photos

