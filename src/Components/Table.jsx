import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
export default function Table({myData}) {

    const [getID, setGetID] = useState({});

    // const getByID = (id) => {
    //     fetch(`http://8.219.139.67:8787/api/v1/users/${id}`)
    // }
    const getByID = async (id) => {
        const response = await axios.get(
            `http://8.219.139.67:8787/api/v1/users/${id}`
        )
        const {payload} = response.data
        setGetID(payload)
      }
      
      // Change the code in react js
      const howItWaschanged = async (id) => {
        const response = await axios.get(
            `http://8.219.139.67:8787/api/v1/users/${id}`
        )
        const {payload} = response.data
        setGetID(payload)
      }

      
  return (
    <div>
  <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>UserName</th>
        <th>Email</th>
        <th>Profile</th>
        <th>Telephone</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        myData.map((items) => (
            <tr>
                <td>{items.username}</td>
                <td>{items.email}</td>
                <td>{items.profile}</td>
                <td>{items.telephone}</td>
                <td>
                    {/* The button to open modal */}
                    <label
                    onClick={()=>{
                        getByID(items.id) 
                    }}
                     htmlFor="my-modal-3" className="btn">Details</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">{getID.username}</h3>
                        <p className="py-4">{getID.email}</p>
                    </div>
                    </div>
                </td>
            </tr>
        ))
      }

    </tbody>
  </table>
</div>
    </div>
  )
}
