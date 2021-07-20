import React, { useState } from "react"

type Props = {
    tags: Array<string>
}

export const Tags=(prop: Props)=>{
    const [currentItem, setCurrent] = useState('')
    const changeBgColor=(e: React.MouseEvent<HTMLParagraphElement>)=>{
        const tag = e.currentTarget
        const prevItem = currentItem
        if(currentItem === ''){
            tag.className = 'tools-items-current'
            setCurrent(tag.id)
        }else{
            tag.className = 'tools-items-current'
            let updateTag = document.getElementById(prevItem.toString())
            if(updateTag!==null){
                updateTag.className = 'tools-items'
            }
            setCurrent(tag.id)
        }
       

    }   

    const renderTags=(): JSX.Element[]=>{
        let tags:Array<JSX.Element> = []
        for(let tag in prop.tags){
            let item = prop.tags[tag]
            tags.push(
                <div key={tag} className='tools-items' id={tag} onClick={changeBgColor}>
                    <p id={tag} >{item}</p>
                </div>
            )
        }
        return tags
    }
    return(
        <div className='tools-container'>
            {renderTags()}
        </div>
    )
}