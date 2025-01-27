export const validatePassword = (password:string): boolean =>{
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passwordRegex.test(password);
}