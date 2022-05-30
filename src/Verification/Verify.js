import React from 'react';
import { useHistory } from "react-router-dom";

function Verify() {
    const link = sessionStorage.getItem("link")
    const history = useHistory();
    async function handleClick() {
        console.log(link);
        window.open(link, '_blank', 'noopener,noreferrer');
        history.push("/login");
      };

    return (
        <div>
            <a href='/login' onClick={handleClick}>Click me</a>
         </div>
    );
}

export default Verify;
