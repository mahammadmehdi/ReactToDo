import React from 'react'
import "./index.css"

function Main() {
    return (
        <div className='main'>
            <div className='startText'>A better way to start building.</div>
            <div className='cards'><div className='card'><div>Icon</div> <h5>Featured title</h5> <span className='cardSpan'>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</span></div>
                <div className='card'><div>Icon</div> <h5>Featured title</h5> <span className='cardSpan'>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</span></div>
                <div className='card'><div>Icon</div> <h5>Featured title</h5> <span className='cardSpan'>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</span></div>
                <div className='card'><div>Icon</div> <h5>Featured title</h5> <span className='cardSpan'>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</span></div>
            </div>
        </div>
    )
}

export default Main