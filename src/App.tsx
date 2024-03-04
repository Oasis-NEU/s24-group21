//import { useState } from 'react'
import './App.css'
import React from 'react';

function App() {

  return (
    <>
      <head id="root">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Group Project Hub</title>

      </head>

      <body>
      <div id="root">
        
        <div id="home">

          <div className="nav-bar">
            <nav>
                <a href="#home"><img src="public/Oasis Logo.png" className="logo"></img></a>
                <ul id="topmenu">
                  <li><a href="#partnerForm">Partner Form</a></li>
                  <li><a href="#calendar">Calendar</a></li>
                  <li><a href="#to-do">To-Do</a></li>
                  <li><a href="#myProfile">My Profile</a></li>
                </ul>          
            </nav>
          </div>

          <div className="row">

            <div className="home-left">
              
                  <h1 className="sub-title">Welcome to the <br></br><span>Group Project Hub!</span></h1>
                  <p>
                    <ol>
                      <li>Enter your <a href="#partnerForm"><span>Partner Preferences</span></a> and we'll find your perfect match!</li>
                      <li>Plan meeting times with our <a href="#calendar"><span>Calendar</span></a>!</li>
                      <li>Create your own personalized <a href="#to-do"><span>To-Do</span></a> list!</li>
                    </ol>
                    <div className="sign-buttons">
                      <button className="sign-in">Sign-In</button>
                      <button className="sign-up">Sign-Up</button>
                    </div>
                  </p>
              
            </div>
            
            <div className="home-right">
              <img src="public\Oasis Logo.png"></img>
            </div>

          </div>
        </div>


      </div> 







      <div id="partnerForm">
        <div className="container">
          <h1 className="sub-title">Partner Form</h1>
            <form>
            <input type="text" name="Name" placeholder="Your Name" required></input>
            <input type="email" name="Email" placeholder="Your Email" required></input>
            
          <div >
            <button type="submit" className="submit-button">Submit</button>
          </div>
          </form>
          </div>
      </div>



      <div id="calendar">

        <div className="container">

          <h1 className="calendar-title">Calendar</h1>

          <table>
            <tr>
              <th></th>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
            <tr>
              <td>12:00-1:00 am</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>1:00-2:00 am</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>2:00-3:00 am</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>3:00-4:00 am</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>4:00-5:00 am</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>5:00-6:00 am</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>6:00-7:00 am</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>7:00-8:00 am</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>8:00-9:00 am</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>9:00-10:00 am</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
            <td>10:00-11:00 am</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>11:00-12:00 am</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>12:00-1:00 pm</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>1:00-2:00 pm</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>2:00-3:00 pm</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>3:00-4:00 pm</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>4:00-5:00 pm</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>5:00-6:00 pm</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>6:00-7:00 pm</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>7:00-8:00 pm</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>8:00-9:00 pm</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>9:00-10:00 pm</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>10:00-11:00 pm</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>11:00-12:00 pm</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
              <td>%</td>
            </tr>
        </table>

        </div>

      </div>


      <div id="myProfile">

        <div className="container">

          <h1 className="profile-title">My Profile</h1>

        </div>

      </div>




      </body>
    </>
  )
}

export default App
