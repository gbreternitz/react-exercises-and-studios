import React from 'react';
import classes from './HobbyLinks.module.css';

export default function hobbyLinks(){
    
    let hobbyUrls = ["https://www.mlssoccer.com/","https://cooking.nytimes.com/"]
    return(
        <>
            <div className={classes.soccerElement}><a href={hobbyUrls[0]}>Soccer</a></div>
            <a href={hobbyUrls[1]}>Cooking</a>
        </>
    )
}