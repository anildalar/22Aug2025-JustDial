import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { BASE_URL } from '../helper/Helper';

export default function BusinessListing() {
    const { city } = useParams();                  // "Neemuch"
    const [searchParams] = useSearchParams();
    const business = searchParams.get("q"); 
    const [allBusinesses,setAllBusinesses] = useState([]);

    useEffect(()=>{
        //Call the api
        try {
            axios.get(`${BASE_URL}/api/businesses?populate=cities&filters[name][$containsi]=${business}&filters[cities][name][$eq]=${city}`)
                .then(function (response) {
                // handle success
                    console.log(response?.data?.data);
                    setAllBusinesses(response?.data?.data);
                })
                .catch(function (error) {
                // handle error
                console.log(error);
                })
                .finally(function () {
                // always executed
                });
            } catch (error) {
                console.log(error);
            }
    },[]);


    return (
        <>
            <div>BusinessListing</div>
            <p>City: {city}</p>
            <p>Search: {business}</p>
            <hr />

            <ul className="list-group">
                {
                    console.log('>>>>',allBusinesses)
                }
                {
                    allBusinesses.length > 0 &&
                    allBusinesses.map((cv,idx,arr)=>{
                        return (
                            <li className="list-group-item">{cv.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}
