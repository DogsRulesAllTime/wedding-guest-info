import React from 'react'
import "./guestsformrow.css"
export default function GueatFormRow({first, second='', date, key}) {
  return (
    <div className='guestRow' key={key}>
       <div className='guestRowBlock'>Гость 1 <br /> {first}</div> 
       <div className='guestRowBlock'>Гость 2 <br /> {second}</div> 
       <div className='guestRowBlock'>Дата отправки <br /> {date}</div> 
    </div>
  )
}
