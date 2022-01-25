import React from 'react';

const Song1 = () => {
    let title1 = "Mr. Brightside";
    let reDate1 = 2004;
    let title2 = "Sam's Town";
    let reDate2= 2006;

    return (
    <>
    <h3>Songs</h3>
    <ul id="song">
        <li>{title1} - {reDate1}</li>
        <li>{title2} - {reDate2}</li>
    </ul>
    </>);
};

export default Song1;