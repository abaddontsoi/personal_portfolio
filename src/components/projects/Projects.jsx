import React from 'react'

import './Project.css'
import './Project_cards.css'

const Projects = () => {
    return (
        <div className='p'>
            <div className='p-left'>
                <div className="p-left-desc-container">
                    <h1 className='p-TT'>My Projects</h1>
                    <div className="p-left-desc">
                        Before I get into the sea of web development, 
                        C++, Java and Python were my best friends in programming courses.
                    </div>
                    <div className="p-left-desc">
                        I also upload my creations to GitHub, including academic group assignments
                        and community side projects. 
                    </div>
                    <div className="p-left-desc-checkout_box">
                        <a href="https://github.com/abaddontsoi" target='_blank' rel="noreferrer">
                            <button className='p-left-desc-github-button'>
                                <div className='p-left-desc-github-button-text'>
                                    Check out my GitHub
                                </div>
                                <img src='https://avatars.githubusercontent.com/u/67108399?v=4' alt='github icon'/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='p-right'>
                <div className="p-right-exam-container">    
                    <div className='p-right-example-col1'>
                        <div className="p-right-example-card">
                            <div className="box">
                                <div className="p-right-box-content">
                                    <h2>
                                        01
                                    </h2>
                                    <h3>
                                        Shikoto_grab
                                    </h3>
                                    <p>
                                        A set of Python scripts that download text from a 
                                        article website called Shikoto
                                    </p>
                                    <a href="https://github.com/abaddontsoi/shikoto_grab.git"
                                    className='card1' target='_blank' rel="noreferrer">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="p-right-example-card">
                            <div className="box">
                                <div className="p-right-box-content">
                                    <h2>
                                        03
                                    </h2>
                                    <h3>
                                        POS of Hunter Store
                                    </h3>
                                    <p>
                                        This is a point of sales system written with
                                        python and Micriosoft Asscess
                                    </p>
                                    <a href="https://github.com/abaddontsoi/2240_gp_project.git"
                                    className='card3' target='_blank' rel="noreferrer">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-right-example-col2'>
                        <div className="p-right-example-card">
                            <div className="box">
                                <div className="p-right-box-content">
                                    <h2>
                                        02
                                    </h2>
                                    <h3>
                                        AbaLooter
                                    </h3>
                                    <p>
                                        Python scripts that allows the user downloading
                                        posts on IG.
                                    </p>
                                    <a href="https://github.com/abaddontsoi/abalooter.git"
                                    className='card2' target='_blank' rel="noreferrer">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="p-right-example-card">
                            <div className="box">
                                <div className="p-right-box-content">
                                    <h2>
                                        04
                                    </h2>
                                    <h3>
                                        ATM with GUI
                                    </h3>
                                    <p>
                                        This is a group project in year 2021/22, which 
                                        simulates normal usage and working machanism of a 
                                        ATM
                                    </p>
                                    <a href="https://github.com/abaddontsoi/oop_prototype_private.git"
                                    className='card4' target='_blank' rel="noreferrer">Read More</a>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
