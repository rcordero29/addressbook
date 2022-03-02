import React, { useState } from 'react';

function PeopleCard(props) {
  const { city, dob, cell } = props;
  const [isHidden, setHide] = useState(true);
  return (
    <li>
      <img
        style={{ height: '300px' }}
        src={props.picture}
        onClick={() => { isHidden ? setHide(false) : setHide(true);}}
      ></img>
      {isHidden ? 
      <div></div> :
        <div>
          <p>city:{city}</p>
          <p>dob:{dob}</p>
          <p>cell:{cell} </p>
        </div>
      }
      <h3>{props.name}</h3>
    </li>
  );
}

export default PeopleCard;
