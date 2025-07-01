import { useContext } from "react";
import userContext from "../Context/Context";

function Profile(){
    const {user}=useContext(userContext)
      if(!user){
       return <div>please Login </div>
      }
     return <div> Welcome on My site {user.email}</div>
}
export default Profile;