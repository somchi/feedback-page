import React from "react";
import { Feeds } from "../components/Feeds";
import { Menu } from "../components/Menu";
import { Tags } from "../components/tags";
import path from "../routes/path";
import { Feed } from "../store/types";

const IndexPage=()=>{
    const sampleFeedback: Array<Feed> = [
        {votes: 100, comments: 3, title: 'Add tags for solution', tag: 'Enhancement', description: 'Easier to search for solution based on specific stack'},
        {votes: 60, comments: 1, title: 'Add tags for solution', tag: 'UI', description: 'Easier to search for solution based on specific stack'},
        {votes: 90, comments: 5, title: 'Add tags for solution', tag: 'Feature', description: 'Easier to search for solution based on specific stack'},
        {votes: 87, comments: 4, title: 'Add tags for solution', tag: 'UX', description: 'Easier to search for solution based on specific stack'},
        {votes: 59, comments: 9, title: 'Add tags for solution', tag: 'Feature', description: 'Easier to search for solution based on specific stack'}
    ]
    const sampleTags = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Features']
    const renderFeedback=():JSX.Element[]=>{
        const feedbacks:Array<JSX.Element> = []
        for(let i in sampleFeedback){
            let feedback = sampleFeedback[i]
            feedbacks.push(
                <Feeds option={feedback}/>
            )
        }
        return feedbacks
    }
    return(
        <div className='container'>
            <div className='left'>
                <div className='description'>
                    <div className='des-items'>
                        <p id='feed-mentor'>Frontend Mentor</p>
                        <p>Feedback Board</p>
                    </div>
                </div>
                <div className='tools'>
                    <Tags tags={sampleTags}/>
                </div>
                <div className='roadmap'>
                    <div  className='roadmap-item roadmap-head'>
                        <p className='roadmap-title'>Roadmap</p>
                        <p className='roadmap-link'><a href={path.index}>View</a></p>
                    </div>
                    <div className='roadmap-item roadmap-body'>
                        <p><span className='body-planned'>&#9899;</span>Planned</p>
                        <p>2</p>
                        <p><span className='body-progress'>&#9899;</span>In-progress</p>
                        <p>3</p>
                        <p><span className='body-live'>&#9899;</span>Live</p>
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <Menu/>
                <div className='feeds'>
                    {renderFeedback()}
                </div>
            </div>
        </div>
    )
}

export default IndexPage