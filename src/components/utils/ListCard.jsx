import React from 'react'
import CardItem from './CardItem'

export default function ListCard() {
const people = ['Nika',
'John',
'Sina',]
    


  return (
    <div className='listcard'>
        <CardItem people={people}/>
    </div>
  )
}
