import {useSelector} from 'react-redux'

const Profile = () => {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className='max-w-lg mx-auto'>
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>
        <input type="text" placeholder='username' id='username' className='rounded-lg p-3 border'></input>
        <input type="email" placeholder='email' id='email' className='rounded-lg p-3 border'></input>
        <input type="password" placeholder='password' id='password' className='rounded-lg p-3 border'></input>

        <button className='bg-blue-500 text-white rounded-lg p-3 uppercase'>update</button>
      </form>

      <div className='mt-5 flex justify-between'>
        <span className='text-red-500 cursor-pointer'>Delete Account</span>
        <span className='text-red-500 cursor-pointer'>Sign Out</span>
      </div>

    </div>
  )
}

export default Profile