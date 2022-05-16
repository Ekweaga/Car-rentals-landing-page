import React from 'react'
import Button from './button'
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './item.css'

function Item({title,desc,backgroundimg,leftbtntxt,leftbtnlink,rightbtnlink, rightbtntxt,twobuttons,first}) {
  return (
    <div className='item' style={{
        backgroundImage:`url(${backgroundimg})`

    }}>

        <div className='item_container'>
            <div className='item_text'>
                <p>{title}</p>
                <div className='item_textDescr'>
                    <p>{desc}</p>
                </div>
            </div>
            <div className='item_lowerThird'>
                <div className='item_buttons'>
                    <Button imps='secondary' text={leftbtntxt} link={leftbtnlink}/>
                    {
                        twobuttons && (<Button text={rightbtntxt} link={rightbtnlink}/>)
                    }
                </div>
                {first && (<div className='item_expand'>
                            
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Item