export const Menu=()=>{
    return(
        <div className='menu'>
            <div className='menu-suggestion'>
                <div className='menu-suggestion-1'>
                    <p>&#9906;</p>
                </div>
                <div className='menu-suggestion-2'>
                    <p><span>6&nbsp;</span> Suggestions</p>
                </div>
                <div className='menu-suggestion-3'>
                    <p>Sort by:</p>
                    <select>
                        <option>Most Upvotes</option>
                        <option>Most Recent</option>
                    </select>
                </div>
            </div>
            <div className='menu-feedback'>
                <button> <span>&#10010;</span>Add Feedback</button>
            </div>
        </div>
    )
}