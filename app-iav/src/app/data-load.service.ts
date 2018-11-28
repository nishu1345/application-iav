import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//Importing Services
import { LogService } from './log.service';
/**
* Service, that downloads a dataset from url and stores it locally.
*/
@Injectable({
  providedIn: 'root'
})
export class DataLoadService {
  /**
    * Instantiating Services 
  **/
  constructor(
    private http : HttpClient,
    private logService: LogService) { }
  /**
  * From this url the dataset gets loaded.
  */
  private DATASET_URL : string = 'https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data';
  /**
  * Finished loading data already?
  */
  public isLoading : boolean = false;
  /**
  * This is the local store.
  */
  public store : Array<any> = [];
  /**
  * Downloads the dataset.
  */
  public downloadDataSet() {
    /**
    * Data Loading started.
    **/
    this.isLoading = true;
    /**
    * This will return the data from API and map it to result variable.
    **/
    return this.http.get(this.DATASET_URL, {responseType: 'text'})
      .pipe(
        map(result => result) 
      );
  }
}
