import {Component, Input, OnInit} from '@angular/core';

import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [LoggingService, AccountsService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  onSetTo(status: string){
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }


  ngOnInit() {
  }

}
