import { FormGroup , FormControl , Validators } from "@angular/forms"

export class generalAdaptor{
    loginForm(): FormGroup{
        return new FormGroup({
            email : new FormControl('' , [Validators.required , Validators.email]) ,
            password : new FormControl('' , Validators.required)
        })
    }
}

