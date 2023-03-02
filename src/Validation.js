export default function Validation(value){
let error = [];
if(!value.Username){
    error.Username = '★ Please Enter Your Username'
}
if(!value.Password){
    error.Password = '★ Please Enter Your Password'
}
return error;
}