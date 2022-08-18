import React from 'react'
//import { Items } from '../context/Data'
import { AiFillStar, AiOutlineStar} from "react-icons/ai";

function Rating({rating, onClick, style }) {
  return (
   <>
    {
        [...Array(5)].map((_, i) => (
            <span key={i} onClick={() => onClick(i)} style={style} className="RatingStar">
                {rating > i ? (
                    <AiFillStar   className='star' />
                ): (
                    <AiOutlineStar  className='star'/>
                )}
                
            </span>
        ))
    }
   </>
  )
}

export default Rating