import React from 'react'
import "./slideoutmenu.scss"

const SlideOutMenu = () => {
  return (
    <div className='slideoutmenu'>
      <div className="slideoutmenu__links">
        <h3 className="slideoutmenu__links-link">Page 1</h3>
        <hr className='slideoutmenu__links-lines' />
        <h3 className="slideoutmenu__links-link">Page 2</h3>
        <hr className='slideoutmenu__links-lines' />
        <h3 className="slideoutmenu__links-link">Page 3</h3>
        <hr className='slideoutmenu__links-lines' />
        <h3 className="slideoutmenu__links-link">Page 4</h3>
        <hr className='slideoutmenu__links-lines' />
        <h3 className="slideoutmenu__links-link">Page 5</h3>
        <hr className='slideoutmenu__links-lines' />
      </div>
    </div>
  )
}

export default SlideOutMenu