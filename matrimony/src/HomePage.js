import React, { useState } from "react";
import userpic from './images/userpic.png'
import userpic2 from './images/user2.png'

const HomePage = () => {
    
    const [row1, setRow1]=useState([1,2,3,4])
    const [row2, setRow2]=useState([1,2,3,4,5,6])

  return (
    <>
      <div className="homepage_row1">
        <img src={userpic}/>
        <ul>
            <li>MY HOME</li>
            <li>SEARCH</li>
            <li>MATCHES</li>
            <li>MAILBOX</li>
            <li>UPGRADE NOW</li>
        </ul>
        <img  src={userpic}/>
      </div>
      <div className="homepage_row2">
        <button className="regular">Regular</button>
        <button>PRIME</button>
      </div>
      <div className="homepage_row3">
        <div className="homepage_row3_col1">
          <div className="homepage_row3_col1_titlediv">
            <div className="homepage_row3_col1_titlediv_accountdetails">
              <img  src={userpic}/>
              <label>Good Afternoon!</label>
              <h4>Dony Joseph</h4>
              <label>Profile Completeness 40%</label>
              <label>Complete Your Profile {">"}</label>
            </div>
            <label>
              As a free member, you are unable to talk face to face with matches
              you like.
            </label>
            <button>Upgrade to make video calls</button>
          </div>
        </div>
        <div className="homepage_row3_col2">
            <label className="mainlabel">Your profile is pending verification!</label>
            <div className="homepage_row3_col2_row2">
                <label className="headlabel">Your Daily Recommendations for 6th Jun</label>
                <div className="roundlist">
                    {row1.map(()=>{
                        return <div className="singleround"><img src={userpic}/> <label>Alphonsa Jose</label></div>
                    })}
                </div>
            </div>
            <div className="homepage_row3_col2_row3"> 
                <div className="homepage_row3_col2_row3_row1">
                <label className="headlabel">19 New Matches</label>
                <div className="squarelist">
                    {row2.map(()=>{
                        return <div className="singlediv"><img src={userpic2}/> <label>Alphonsa Jose</label></div>
                    })}
                </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
