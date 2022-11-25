import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../redux/slices/userSlice'
import MainLayout from '../component/MainLayout'


const Home = () => {

  const count = useSelector(state => state.counterReducer.value)
  const name = useSelector(state => state.userReducer.name)

  const dispatch = useDispatch()

  console.log('count :', count);
  console.log('name :', name);

  const handleClick = () => {
    dispatch(setName("folani adam"))
  }

  return (
    <div>
      <span className='text-primary'>nextjs redux</span>
      <button onClick={handleClick} className="btn-blue">btn</button>
    </div>
  )
}

Home.getLayout = (page) => <MainLayout title="index page">{page}</MainLayout>
export default Home