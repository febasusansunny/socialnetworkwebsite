import React from 'react';
import USERS_DATA from './usersProfile.Data'

import UserDetails from '../../components/user-details/user-details.component'; 
 class UsersProfilePage extends React.Component {


  
    constructor(props) {
     
        super(props);
      
        this.state = {
            collections: USERS_DATA[this.props.match.params.id].details_section
        }
    
    }
    render()
    {
        const {collections} = this.state;
       
        return(  
        <div className="users" >    
       
            {
        collections.map(({id,name,gender,state,country,email,phone,age,city,occupation,father,mother,imageUrl})=>(
            <UserDetails 
            key={id} 
            name={name} 
            gender= {gender}
            city={city}
            country={country}
            state={state} 
            email={email}
            phone={phone}
            age={age}
            occupation={occupation}
            father={father}
            mother={mother}
            imageUrl={imageUrl}>
           
                </UserDetails>
                
               
        ))

           
            }   
        </div>
        )
    }
}
 
export default UsersProfilePage;
