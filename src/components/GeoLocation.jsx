import React, {  useEffect, useContext } from "react"
import photoContext from '../context/photos/photoContext'


var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};


function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const GeoLocation = () => {
  const {location, setLocation}=useContext(photoContext)


  function success(pos) {
    var crd = pos.coords;
    setLocation({latitude:crd.latitude,longitude:crd.longitude})

  }



    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.permissions
              .query({ name: "geolocation" })
              .then(function (result) {
                if (result.state === "granted") {
                  //console.log(result.state);
                  //If granted then you can directly call your function here
                  navigator.geolocation.getCurrentPosition(success);
                } else if (result.state === "prompt") {
                  navigator.geolocation.getCurrentPosition(success, errors, options);
                  //console.log("in 1")
                } else if (result.state === "denied") {
                  //console.log("in 2")
                  //If denied then you have to show instructions to enable location
                }
                result.onchange = function () {
                  console.log(result.state);
                };
              });
          } else {
            alert("Sorry Not available!");
          }

    },[])
    useEffect(()=>{console.log(location)},[location])
  
}

export default GeoLocation



