import { Component } from '@angular/core';
import { faClose} from '@fortawesome/free-solid-svg-icons';
import{ faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLock} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  icon1=faClose;
  icon2=faEnvelope;
  icon3=faLock;
}
