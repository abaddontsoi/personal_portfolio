import React from 'react'
import './intro.css'

import icon from '../../img/icon.png'

const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className="i-left-wrapper">
                    <h2 className='i-left-wrapper-greeting'>Greetings, I am</h2>
                    <h1 className='i-left-wrapper-name'>Abaddon Tsoi</h1>
                    <div className="i-left-jobtt">
                        <div className="i-left-jobtt-wrapper">
                            <div className="i-left-jobtt-item">
                                Self-learning Developer
                            </div>
                            <div className="i-left-jobtt-item">
                                Student, in ASSO Degree
                            </div>
                            <div className="i-left-jobtt-item">
                                Non-freerider
                            </div>
                        </div>
                    </div>
                    <div className="i-left-desc">
                        I am a student of Hong Kong Community College, 
                        studying in Associate Degree of IT. 
                        Currently, I am learning and practising web development. 
                        I wish to be an software engineer and 
                        also an information security researcher in the future.
                    </div>
                </div>
            </div>
            <div className='i-right'>
                <div className="i-right-icon-bg">
                    <img src={icon} alt='' className='i-right-icon' />
                </div>
            </div>
        </div>
    )
}

export default Intro
