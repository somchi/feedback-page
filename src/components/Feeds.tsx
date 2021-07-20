import { Feed } from "../store/types"

type Props={
    option: Feed
}

export const Feeds=(prop: Props)=>{
    return(
        <div className='feeds-item'>
            <div className='feeds-item-feed'>
                <div className='feed-vote'>
                    <p>{prop.option.votes}</p>
                </div>
                <div className='feed-details'>
                    <p className='feed-details-title'>{prop.option.title}</p>
                    <p className='feed-details-des'>{prop.option.description}</p>
                    <p className='feed-details-tag'>{prop.option.tag}</p>
                </div>
            </div>
            <div className='feeds-item-comment'>
                <p><span>&#9899;</span>{prop.option.comments}</p>
            </div>
        </div>
    )
}