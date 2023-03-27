import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../store/authSlice"
import jwtDecode from 'jwt-decode'


const useAuth = () => {

 const token = useSelector(selectCurrentToken)
let isUser = false
let isAdmin = false
let status = "admin"
if (token) {
    const decoded = jwtDecode(token)
    console.log(decoded)
    const { surname, role } = decoded.UserInfo

    isUser = role.includes('user')
    isAdmin = role.includes('admin')

    if (isUser){
         status = "user"}

    else if(isAdmin)
   {
    status = "admin"
} 

    return { surname, role, status, isUser, isAdmin }
}

return { surname: '', role: [], isUser, isAdmin, status }
}
export default useAuth