import {Card} from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';




const Profiles = ({ title, imageUrl,id}) => (


  
  <Card className="col-md-4">
        <Card.Img variant="top" src={imageUrl}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
            <Link  to=  {"usersprofile/"+id} className="btn btn-success text-center">Know More </Link>
            
        </Card.Body>


    </Card>
    
  
);

export default Profiles;



   
    

    
 