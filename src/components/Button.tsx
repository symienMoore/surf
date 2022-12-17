import React from 'react'

const Button = (props: any) => {
  return (
    <div className='flex'>
        <div className={`${props.bg} ${props.w} ${props.p} ${props.ml} ${props.font} rounded-md text-center`}>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Button