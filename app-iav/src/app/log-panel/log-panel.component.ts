import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-panel',
  templateUrl: './log-panel.component.html',
  styleUrls: ['./log-panel.component.css']
})
export class LogPanelComponent implements OnInit {

  constructor(public logService: LogService) { }

  ngOnInit() {
  }

}
