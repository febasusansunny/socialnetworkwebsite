
import React from 'react';

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'

const UserDetails = ({id,name,gender,state,country,city,email,phone,age,occupation,father,mother,imageUrl }) => {
  

  return (
    <div className='user-details'>
     
     <h1 className='name'>{name}</h1>
     <br/>
      <div 
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})` ,width:'600px', height:'400px',backgroundRepeat:'no-repeat',backgroundSize:'cover',display:'flex',alignItems: 'center',justifyContent: 'center'
        }}
      />
      <br/>
      <div className='collection-footer'>
        
        <h3 className='name'>Gender: {gender}</h3>
        <h3 className='name'>Age: {age}</h3>
        <h3 className='name'>City:{city}</h3>
        <h3 className='name'>State:{state}</h3>
        <h3 className='name'>Country:{country}</h3>
        <h3 className='name'>Occupation: {occupation}</h3>
        <h3 className='name'>Father's Name: {father}</h3>
        <h3 className='name'> Mother's Name:{mother}</h3>
        <h3 className='name'>Email: {email}</h3>
        <h3 className='name'>Phone: {phone}</h3>
        
       
            
  
      </div>
    </div>
  );
};
export default UserDetails;
