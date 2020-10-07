const orderFormObj = (elType, elConfType, placeHolder) => {
  return {
      elementType: elType, 
      elementConfig: {
        type: elConfType, 
        placeholder: placeHolder
      }, 
      value: ''
  }
}

export default orderFormObj