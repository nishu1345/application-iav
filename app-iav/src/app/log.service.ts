import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
	/**
	* This is the local store.
	*/
  	public logs: string[] = [];
  	/**
	  * add the message in the logs 
	**/
  	public add(log: string) {
    	this.logs.push(log);
  	}
  	/**
	  * clear the logs
	**/
  	public clear() {
    	this.logs = [];
  	}
}
