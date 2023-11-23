import React from 'react'
import "./index.css"

function Header() {
  return (
    <div className='header'>
<div className='left'><h1>A Bootstrap 5 template for modern businesses</h1>
<p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
<div className='btn'><button className='LeftBtn'>Get Started</button> <button className='rightBtn'>Learn More</button></div>
</div>
<div className='right'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCYVSTgcu8DrfYwQ_4eDqEYCp40DrZyn5Lg&usqp=CAU" alt="" /></div>

    </div>
  )
}

export default Header