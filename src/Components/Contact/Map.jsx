import React from 'react';

const Map = (props) => {
    

    return(
        <div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />
    )
}

export default Map;