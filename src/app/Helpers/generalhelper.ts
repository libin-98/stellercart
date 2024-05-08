export class generalHelper{
    checkLogin(usrlist :any , userCred:any):boolean{
        if(usrlist && userCred){
          let user = usrlist.find((regUser: any)=> regUser.email.toLowerCase() == userCred.email.toLowerCase() && regUser.password.toLowerCase() == userCred.password.toLowerCase())
          console.log("user",user);
          if(user){
            localStorage.setItem('loggedUser' , JSON.stringify(user))
            return true;
          }
            
        else{
            return false;
        }
        }else{
            return false;
        }
    }
    
}