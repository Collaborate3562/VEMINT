import React from 'react'
import { Input } from '../input'
import Proptypes from 'prop-types'

const SocialLink = (props) =>{
  const{icon, value, onChange, placeholder} = props
  return <div className="flex gap-5">
    <div className="rounded-md bg-app-gray100  p-5 flex justify-center items-center">
      <img src={icon}/>
    </div>
    <div className="w-full">
      <Input value={value} onChange={onChange} placeholder={placeholder}/>
    </div>
  </div>
}

SocialLink.prototype={
  icon:Proptypes.object,
  value:Proptypes.string,
  onChange:Proptypes.func,
  placeholder:Proptypes.string
}


export default SocialLink