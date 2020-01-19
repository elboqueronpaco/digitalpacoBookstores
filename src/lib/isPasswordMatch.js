import isPassword from './isPassword'
export default (psw1, psw2) => (isPassword(psw1) && isPassword(psw2)) && psw1 === psw2
