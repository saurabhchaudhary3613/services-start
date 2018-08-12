import { Component, EventEmitter} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountService: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.loggingService.logStatusChange(accountStatus);
     // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
