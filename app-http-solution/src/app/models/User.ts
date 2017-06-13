export interface User {
  id: number,
  username: string,
  roles: Array<string>, 
  superuser: boolean,
}