import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar.jsx';
import './Home.css';
import Imagedisplay from '../../Components/Imagedisplay/Imagedisplay.jsx';
import Loading from '../../Components/Loading/Loading.jsx';
import Photos from '../../Components/Photos/Photos.jsx';
import Card from '../../Components/Card/Card.jsx';

const Home = () => {
  const [grade, setGrade] = useState('A');
  const [open, setOpen] = useState(false);
  const [cardopen, setCardopen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [predict, setPredict] = useState({
    grade : null,
    inferance_time : null
  });
  
  return (
    <div className="home">
      <Sidebar grade={grade} setGrade={setGrade} />
      <Imagedisplay grade={grade} />
      <Photos setPredict={setPredict} setPreviewUrl={setPreviewUrl} setOpen = {setOpen} setCardopen={setCardopen}/>
      {open? <Loading /> : '' }
      {(cardopen)? <Card predict={predict} setPredict={setPredict} previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} setCardopen={setCardopen}/> : ''}
    </div>
  );
};

export default Home;
