import React,{ useState, useEffect} from 'react'
import {db} from "../firebase"
import { getDocs,  collection} from '@firebase/firestore'
import GueatFormRow from './GueatFormRow'

export default function GuestForm() {
    const [users, setUsers] = useState([])
    async function getAllDataOnce(){
        const querySnapshot = await getDocs(collection(db, "Guests"));
        const newData = []
        let key = 1
        querySnapshot.forEach(element => {
            if (element.data().second){
                // console.log(true, element.data().second);
                const userInfo = {
                    first: element.data().first,
                     second: element.data().second,
                     date: element.data().date ,
                     key: key++ };
                newData.push(userInfo)
            }else{
                // console.log(false);
                const userInfo = {
                    first: element.data().first,
                     date: element.data().date ,
                     key: key++ };
                newData.push(userInfo)
            }   
        })
        // const newStateArr = [...users, newData]
        // setUsers(users => [...users, newData])
        // console.log('users: ', users);
        // console.log('newData: ', newData);
        setUsers(users =>  newData)
        // console.log('users: ',users);
        
    }
    let count = 0;
    useEffect(() => {getAllDataOnce()}, [count])
    // getAllDataOnce()

  return (
    <div>
        <h1>Guest info</h1>
        {users.map((item) => 
         item.second ? <GueatFormRow first={item.first} second={item.second} date={item.date} key={item.key}/>  : <GueatFormRow first={item.first}  date={item.date} key={item.key}/>
        )}
    </div>
  )
}
