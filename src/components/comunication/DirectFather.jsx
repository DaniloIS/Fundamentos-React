import React from 'react';
import DirectChild from './DirectChild';

export default function DirectFather(props) {
    return (
        
        <div>
            <DirectChild name="Danilo" age={23} bool={true} />
            <DirectChild name="Daniel" age={20} bool={false} />
        </div>
    
    )
}