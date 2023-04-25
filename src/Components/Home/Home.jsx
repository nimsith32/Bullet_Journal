import React from 'react'
import './home.css'
import {Journal as journal} from '../MyJournal/JournalItem';
import { Calendar } from '../Calender/Calendar';
import { useRecoilValue } from 'recoil';
import { journalAtom } from "../../State"

function Home(){
  const journalItems = useRecoilValue(journalAtom)

  return (
  <>
    <div>
      <Calendar/>
    </div>
  </>  
      
  )
}

export default Home