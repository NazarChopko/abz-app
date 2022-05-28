import React,{useState,useEffect,forceUpdate} from 'react';
import axios from "axios";


import FirstBlock from './FirstBlock/FirstBlock';
import UserList from './UsersList/UserList';
import Form from './Form/Form';




const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1'

 
const MainContainer = () => {
    const [users,setUsers] = useState([])
    const [page,setPage] = useState(1)
    const [isNextPage,setIsNextPage] = useState('')
    const [position,setPosition] = useState(null)
    

    const getPosition = async() => {
      try {
        const {data} = await axios.get(`${BASE_URL}/positions`)
        setPosition(data.positions)
      } catch (error) {
        console.log(error)
      }
    }

    const getUsers = async() => {
        try {
          const {data} = await axios.get(`${BASE_URL}/users?page=${page}&count=6`)
          setPage((prev)=>prev+1)
          setIsNextPage(data.links.next_url)
          setUsers((user)=>[...user,...data.users])
        } catch (error) {
          console.log(error)
        }
        }   

      const getToken = async()=>{
        const {data} = await axios.get(`${BASE_URL}/token`)
        return data.token
      }

    const getFirstPage = async() =>{
      const {data} = await axios.get(`${BASE_URL}/users?page=1&count=6`)
      setPage(2)
      setUsers([...data.users])
      setIsNextPage(data.links.next_url)
    }

      const postUser = async(data)=>{
        try {
          const token = await getToken()
          const postUser = await axios.post(`${BASE_URL}/users`,{
            ...data
          },
          { headers:{
            'content-type': 'multipart/form-data',
            'Token':token,
            },
            })
          
          return postUser
        } catch (error) {
          console.log(error)
        }
        
      }
    
    useEffect(()=>{
        getUsers()
        getPosition()
    },[])
    
    
  

  return (
    <div className='mainContainer'>
        <FirstBlock/>
        <UserList users={users} isNextPage={isNextPage} getUsers={getUsers} />
        <Form setPage={setPage} getFirstPage={getFirstPage} position={position} postUser={postUser}/>
        
        
        
    </div>
  )
}

export default MainContainer