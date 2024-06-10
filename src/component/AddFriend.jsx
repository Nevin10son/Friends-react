import axios from 'axios'
import React, { useState } from 'react'

const AddFriend = () => {
    const [data,setdata]=useState(
        {
            "name": "",
            "friendName": "",
            "friendNickName":"",
            "DescribeYourFriend":""
        }
    )
    const inputHandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Added Successfully")
                    
                } else {
                    alert("Somethings Wrong")
                    
                }
            }
        )
    }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name:</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Friend Name:</label>
                        <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Friend Nick Name:</label>
                        <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Friend Desc:</label>
                        <textarea name="DescribeYourFriend" value={data.DescribeYourFriend} onChange={inputHandler} className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>Add</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddFriend
