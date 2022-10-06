import React, {useState} from 'react'
import './HidenShow.css'

// Description : Implement a button to show/hide the text content

const HideAndShow = () => {
    const [show, setShow] = useState(false)
    
    return (
        <div className='container'>
        <div className='card'>
            <button className='btn' onClick={() => setShow(!show)}>
                { show ? 'Hide' : 'Show' }
            </button>
            {show ? <Text/> : null }
        </div>
        </div>
    );
};

export default HideAndShow;

const Text = () => <p className='text'>Show me if you a g no cap</p>