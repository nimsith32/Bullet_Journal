import React from 'react'
import './home.css'
import Journal from '../MyJournal/JournalItem';
import { Calendar } from '../Calender/Calendar';
import { useRecoilValue } from 'recoil';
import { journalAtom } from "../../State"
import PieChart from "../FinancialTracker/LineChart"

const togglecollapse = () =>{
  
  var todaysHiddenText = document.getElementById('collapsetxt');
  var todaysCollapsebtn = document.getElementById('collapsebtn');
  
  if(todaysHiddenText.className != ""){
      todaysHiddenText.className = "";
      todaysCollapsebtn.textContent = "Today's Reminder's ↑"
      
  }else{
    todaysHiddenText.className = "collapse";
    todaysCollapsebtn.textContent = todaysCollapsebtn.textContent.slice(0,-1);
    todaysCollapsebtn.textContent = todaysCollapsebtn.textContent + "↓";
  }
  

};

const togglecollapse2 = () =>{
  
  var upcomingHiddenText = document.getElementById('collapsetxt2');
  var upcomingCollapsebtn = document.getElementById('collapsebtn2');
  
  if(upcomingHiddenText.className != ""){
      upcomingHiddenText.className = "";
      upcomingCollapsebtn.textContent = "Upcoming Reminder's ↑"
      
  }else{
    upcomingHiddenText.className = "collapse";
    upcomingCollapsebtn.textContent = upcomingCollapsebtn.textContent.slice(0,-1);
    upcomingCollapsebtn.textContent = upcomingCollapsebtn.textContent + "↓";
  }
  

};
function Home(){
  const journalItems = useRecoilValue(journalAtom)

  return (
    <div>
      <p className="welcometext">
        <br/>Welcome to Bullet Journal! 
         This website was created just for you!<br/>
        We provide great opportunities for personal growth 
        and maintaining a healthy lifestyle!
      </p>
      <br/>
      <br/>
      <p className='signuptoday'>
        Take advantage and create your <a className='linktext' href='./Login/Register.js'>FREE account today!</a>


      </p>
      <p className='bold'>Create tasks</p>
      <li>Go Shopping</li>
      <li>Fill water bottle</li>
      <li>Workout</li>
      <li>Shower</li>
      {journalItems.map((items, i) => 
      <React.Fragment key={i}>
        <Journal items={items} />
      </React.Fragment>
      )}
      <PieChart />
      <Calendar />

      <p className='bold'> 
        <br/>Set reminders
      </p>
        
      <button id='collapsebtn' className='collapseheader' onClick={togglecollapse}>Today's Reminder's ↓ </button>
      <div className='reminders'>
        <p id='collapsetxt' className='collapse'>
          <li>Justin's Bday</li>
          <li>Mother's Day</li>
        </p>
      </div>
      <br/>
      <button id='collapsebtn2' className='collapseheader' onClick={togglecollapse2}>Upcoming Reminder's ↓ </button>
      <div className='reminders'>
        <p id='collapsetxt2' className='collapse'>
          <li>Sarah's Bday</li>
          <li>Father's Day</li>
          <li>Sierra's Bday</li>
        </p>
      </div>

      <br/><br/><br/>
      <p className="bottomtext">Already have an account? <br/> Sign-in <a href='#' className='linktext'>HERE</a></p>



    </div>
    
      
  )
}

export default Home