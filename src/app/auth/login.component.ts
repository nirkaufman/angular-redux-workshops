import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngr-login',
  template: `
    <div class="card"
         style="width: 20rem;">
      <div class="card-block">
        <h4 class="card-title">Login</h4>
        <form>
          <div class="form-group">
            <label>Email</label>
            <input type="text"
                   class="form-control">
            <small class="form-text text-danger">Validation massage</small>
          </div>

          <div class="form-group">
            <label>Password</label>
            <input type="password"
                   class="form-control">
            <small class="form-text text-danger">Validation massage</small>
          </div>

          <button type="submit"
                  class="btn btn-primary">Login
          </button>
        </form>
      </div>
    </div>
  `,
})
export class LoginComponent {


}
