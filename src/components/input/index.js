import React from 'react'
import PropTypes from "prop-types";
import Label from '../label';

export const Input = (props) =>{
  const {onChange, value, placeholder} = props
  return(
    <input value={value} onChange={onChange} className="bg-app-gray100 p-5 text-gray-300 w-full rounded-md" placeholder={placeholder}/>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder:PropTypes.string,
};
export const InputWithIcon = (props) =>{
  const {onChange, value, placeholder,icon} = props
  return(
    <div className="bg-app-gray100 p-5 text-gray-300 w-full rounded-md gap-5 flex">
      <img src={icon} alt="icon"/>
      <input value={value} onChange={onChange} placeholder={placeholder} className="bg-transparent outline-none w-full"/>
    </div>
  )
}


Input.InputWithIcon = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder:PropTypes.string,
  icon:PropTypes.string
};

export const InputArea = (props) =>{
  const {onChange, value, placeholder} = props
  return(
    <textarea value={value} onChange={onChange} className="h-36 bg-app-gray100 p-5 text-gray-300 w-full rounded-md" placeholder={placeholder}/>
  )
}

InputArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder:PropTypes.string,
  
};


export const UnderlineInput = (props) => {
  const {onChange, value, placeholder} = props
  return(
    <input value={value} onChange={onChange} className="outlined-none bg-transparent p-5 text-gray-300 w-full border-b-2" placeholder={placeholder}/>
  )
}

UnderlineInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder:PropTypes.string,
};

export const InputUnit = (props) =>{
  const{label, value, desc, onChange, placeholder, className, topdesc, textarea, icon, info} = props

  return(
    <div className={`gap-1 flex flex-col ${className}`}>
      <h4 className="text-white">{label}</h4>
      {topdesc&&<Label className="pb-8" info={info}>{desc}</Label>}
      {!textarea?icon?<InputWithIcon vlaue={value} onChange={onChange} placeholder={placeholder} icon={icon}/>:<Input vlaue={value} onChange={onChange} placeholder={placeholder}/>:
      <InputArea vlaue={value} onChange={onChange} placeholder={placeholder} />}
      {!topdesc&&<Label>{desc}</Label>}
    </div>
  )
}

InputUnit.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label:PropTypes.string,
  desc:PropTypes.string,
  placeholder:PropTypes.string,
  topdesc:PropTypes.bool,
  textarea:PropTypes.bool,
  icon:PropTypes.string,
  info:PropTypes.func,
};

InputUnit.defaultProps = {
  topdesc: false,
  textarea:false,

};



export const UnderlineInputUnit = (props) =>{
  const{label, value, desk, onChange, placeholder} = props

  return(
    <div className="gap-1 flex flex-col">
      <h4 className="text-white">{label}</h4>
      <UnderlineInput vlaue={value} onChange={onChange} placeholder={placeholder} />
      <Label>{desk}</Label>
    </div>
  )
}

UnderlineInputUnit.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label:PropTypes.string,
  desk:PropTypes.string,
  placeholder:PropTypes.string,
};