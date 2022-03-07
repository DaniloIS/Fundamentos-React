import React from 'react';

export default function IndirectChild(props) {
    const callBack = props.onClick;

    const randomAge = () => parseInt(Math.random() * (25)) + 50;
    const randomNerd = () => Math.random() > 0.5;

    return (
        <div>
            <div>Filho</div>
            <button onClick={
                e => callBack('José', randomAge(), randomNerd())
            }>Fornecer Informalções</button>
        </div>
    );
}