import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataLoadService } from './data-load.service';

describe('DataLoadService', () => {
	let service: DataLoadService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
  	TestBed.configureTestingModule({
	  	imports: [HttpClientTestingModule],
	  	providers: [DataLoadService]
	  })
  	service = TestBed.get(DataLoadService);
    httpMock = TestBed.get(HttpTestingController);
	});

  afterEach(() => {
    httpMock.verify();
  })

  it('should retrieve data from API via GET', () => {
    service.downloadDataSet().subscribe(data => {
    	expect(data.length).toBe(152);
    })
    const req = httpMock.expectOne(`${service.DATASET_URL}`);
    expect(req.request.method).toBe('GET'); 
  });
});
