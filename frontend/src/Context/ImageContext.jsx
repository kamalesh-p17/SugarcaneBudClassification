import React, { createContext, useEffect, useState } from 'react'

export const ImageContext = createContext(null);

const url = "http://192.168.1.6:"

const ImageContextProvider = (props) => {
    const [all_image, setAll_Image] = useState([]);

    useEffect(() => {
        fetch(`${url}5000/all_image`)
            .then((response) => response.json())
            .then((data) => setAll_Image(data))
    },[all_image])
    const contextvalue = {all_image,url}
    return(
        <ImageContext.Provider value = {contextvalue}>
            {props.children}
        </ImageContext.Provider>
    )
}
export default ImageContextProvider;