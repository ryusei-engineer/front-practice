import { Search } from '@mui/icons-material'
import React from 'react'

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <Search className='widgets__searchIcon'/>
        <input type="text" placeholder='キーワード検索'/>
      </div>

      <div className="widgets__widgetsContainer">
        <h2>今どうしてる</h2>
      </div>
    </div>
  )
}

export default Widgets