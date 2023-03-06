
const Validation = (values) => {
  let errors = {}

 if(!values.user_email){
    errors.user_email = "Email Required"
  }

  else if(!values.user_password){
    errors.user_password = "Password Required"
  }
  else if(values.user_password.length <= 5){
    errors.user_password = "Password Length Must Be Greater Than 5"
  }

  return errors;

}

export default Validation;