import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
    const [datas,channgedata] = useState([])
    const fetchData =()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view    ").then(
            (response)=>{
                channgedata(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message);
                alert(error.message )
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
    
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Friend Name</th>
      <th scope="col">Friend NicK name</th>
      <th scope="col">Describe Friend</th>
    </tr>
  </thead>
        {datas.map(
            (value,index)=>{
                return   <tbody>
                <tr>
                  <td>{value.name}</td>
                  <td>{value.friendName}</td>
                  <td>{value.friendNickName}</td>
                  <td>{value.DescribeYourFriend}</td>
               </tr>
              </tbody>
            }
        )}
</table>
            </div>
        </div>
      </div>
    </div>
  )
}


export default ViewAll
