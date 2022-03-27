import React, { useEffect, useState } from 'react';
import { getIO } from '../firebase/CRUD';
const IOList = () => {

  const [ioList,setIoList]=useState([{}]);
  //let ioList = getIO('IO/IN/March');

 useEffect(()=>{
  loadList()
  console.log(ioList);
 },[]);

  const loadList=  ()=>{
    let list= new Array 
    list.push(getIO())
     setIoList(list)
 
  }

  return (
    <div className="ioList">
      <ol className="list-group list-group-numbered">
       
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
    
      </ol>
    </div>
  );
};

export default IOList;
