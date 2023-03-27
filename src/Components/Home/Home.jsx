import React from 'react'
import './home.css'
import journal from '../MyJournal/JournalItem';

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


  return (
    <div>
      <p class="welcometext">
        <br/>Welcome to Bullet Journal! 
         This website was created just for you!<br/>
        We provide great opportunities for personal growth 
        and maintaining a healthy lifestyle!
      </p>
      <br/>
      <br/>
      <p class='signuptoday'>
        Take advantage and create your <a class='linktext' href='./Login/Register.js'>FREE account today!</a>

      </p>
      <p class='bold'>Create tasks</p>
      <li>Go Shopping</li>
      <li>Fill water bottle</li>
      <li>Workout</li>
      <li>Shower</li>
      <p>{journal}</p>

      <p class='bold'>
        <br/>Set reminders
      </p>
        
      <button id='collapsebtn' class='collapseheader' onClick={togglecollapse}>Today's Reminder's ↓ </button>
      <div class='reminders'>
        <p id='collapsetxt' class='collapse'>
          <li>Justin's Bday</li>
          <li>Mother's Day</li>
        </p>
      </div>
      <br/>
      <button id='collapsebtn2' class='collapseheader' onClick={togglecollapse2}>Upcoming Reminder's ↓ </button>
      <div class='reminders'>
        <p id='collapsetxt2' class='collapse'>
          <li>Sarah's Bday</li>
          <li>Father's Day</li>
          <li>Sierra's Bday</li>
        </p>
      </div>

      <br/><br/><br/>
      <p class="bottomtext">Already have an account? <br/> Sign-in <a href='#' class='linktext'>HERE</a></p>



    </div>
    
      
  )
}

export default Home