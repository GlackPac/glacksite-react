import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css'

function ExampleLightBox() {
    
    console.log(process.env.REACT_APP_NOT_SECRET_CODE)
    return(
        <Gallery>
            <Item
            original="https://drive.google.com/uc?export=view&id=1zJs1nAOz_4VdYWmezFxGIOQHCPMIc-ps"
            thumbnail="https://placekitten.com/80/60?image=1"
            width="1024"
            height="768"
            >
            {({ ref, open }) => (
                <img alt='cat' ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src="https://placekitten.com/80/60?image=1" />
            )}
            </Item>
            <Item
            original="https://placekitten.com/1024/768?image=2"
            thumbnail="https://placekitten.com/80/60?image=2"
            width="1024"
            height="768"
            >
            {({ ref, open }) => (
                <img alt='cat' ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src="https://placekitten.com/80/60?image=2" />
            )}
            </Item>
        </Gallery>
    )

};

export default ExampleLightBox;