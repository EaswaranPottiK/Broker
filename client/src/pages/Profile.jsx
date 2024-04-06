import { SignOutUserFailure, SignOutUserStart, SignOutUserSuccess } from '../redux/user/userSlice'
import {useDispatch} from 'react-redux'

const Profile = () => {
  const dispatch = useDispatch();
  const handleSignOut = async() => {
    try{
      dispatch(SignOutUserStart(data.message))
      const res = await fetch('api/auth/signout') 
      const data = await res.json();
      if (data.success === null){
        return;
      }
      dispatch(SignOutUserSuccess(data))
    }
    catch(error){
      console.log(error)
      dispatch(SignOutUserFailure(error.message))
    }
  }
  return (
    <div>
      {/* take care of this */}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default Profile