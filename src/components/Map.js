import React,{useEffect} from 'react';

const Map = ({ profile }) => {

    const { latitude, longitude } = profile;
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=latitude;
        const lon=longitude;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })

    return (
        <iframe title="Profile Location" id="iframeId" height="500px" width="100%"></iframe>
    );
};

export default Map;
