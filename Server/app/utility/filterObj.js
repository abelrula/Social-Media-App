
exports.filterobj = (obj,...allowedFileds) =>{
    
    const allowed_value={}
    
    Object.keys( obj ).forEach( ( value ) =>{
       if( allowedFileds.includes(value)) allowed_value[value]=obj[value] 
    })
  return allowed_value   
}