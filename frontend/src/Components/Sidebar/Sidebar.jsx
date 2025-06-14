import React, { useContext } from 'react';
import './Sidebar.css';
import { ImageContext } from '../../Context/ImageContext';

const Sidebar = (props) => {
  const { all_image } = useContext(ImageContext);
  const countImageGrade = (id) => {
    if (!all_image || all_image.length === 0) return 0;
    return all_image.filter(image => image.Grade === id).length;
  }

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => props.setGrade('A')}>
          Grade A ({countImageGrade('A')}) {props.grade === 'A' && <hr />}
        </li>
        <li onClick={() => props.setGrade('B')}>
          Grade B ({countImageGrade('B')}) {props.grade === 'B' && <hr />}
        </li>
        <li onClick={() => props.setGrade('C')}>
          Grade C ({countImageGrade('C')}) {props.grade === 'C' && <hr />}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;