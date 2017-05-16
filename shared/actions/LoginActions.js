export function login(userID, password, history) {
  return {
    type : 'LOGIN',
    userId : userID,
    password,
    history
  }
}
