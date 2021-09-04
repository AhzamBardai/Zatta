import React from 'react';

function DashSearch({ setFilter, filter }) {

    function resetFilter () {
        setFilter("")
    }

    return (
        <div>
            <input type= "text" placeholder= "Filter Search" value={filter} onChange={e => {setFilter(e.target.value)}}/>
            <button type= "submit" onClick={resetFilter} >Reset</button>
        </div>

    );
}

export default DashSearch;