import { Component } from '@angular/core';
//Imprting Chart.js module to create chart
import { Chart } from 'chart.js';
//Importing Services
import { DataLoadService } from '../data-load.service';
import { LogService } from '../log.service';


@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.css']
}) 

export class ChartPanelComponent {
	/**
    * This is a local chart varible to store the information required for creating charts.
    **/
    public chart:any[] = [];
    /**
    * Instantiating Services 
    **/
  	constructor(
  		private dataLoadService : DataLoadService,
  		private logService: LogService) { }

  	ngOnInit() {
	  	/**
	    * Calling the function of the service to load the data from external API
	    **/
  		this.dataLoadService.downloadDataSet()
  		.subscribe(data => {
  			/**
		    * Service call to display log messages when data has loaded.
		    **/
		    this.logService.add("Log Service: Data Loaded");
  			/**
		    * split on new lines  &
		    creating variables to store data
		    **/
	        let lines = [];
		    let featureOne = [];
	        let featureTwo = [];
	        let featureThree = [];
	        let featureFour = [];
	        let trueLabel = [];
	        lines = data.split('\n');
	        /**
		    * pushing the data in separate arrays
		    **/
	        for (let i = 0; i < lines.length - 2; i++){
	          let line = lines[i].split(',');
	          featureOne.push(parseFloat(line[0]));
	          featureTwo.push(parseFloat(line[1]));
	          featureThree.push(parseFloat(line[2]));
	          featureFour.push(parseFloat(line[3]));
	          trueLabel.push(line[4]);
	        }
	        /**
		    * Service call to display log messages for loaded data information.
		    **/
	  		this.logService.add("Log Service: Read data with 5 columns and 150 rows.");
	  		/**
		    * chart module initialized with options
		    **/
		  	this.chart = new Chart('canvas',{
		  		type: 'line',
		  		data: {
		  			labels: trueLabel,
		  			datasets:[
			  			{
			  				data: featureOne,
			  				borderColor: 'blue',
			  				label: 'feature-one',
			  				fill: false
			  			},
			  			{
			  				data: featureTwo,
			  				borderColor: 'red',
			  				label: 'feature-two',
			  				fill: false
			  			},
			  			{
			  				data: featureThree,
			  				borderColor: 'gray',
			  				label: 'feature-three',
			  				fill: false
			  			},
			  			{
			  				data: featureFour,
			  				borderColor: 'yellow',
			  				label: 'feature-four',
			  				fill: false
			  			}
			  		]
		  		},
		  		options:{
		  			legend: {
		  				display: true
		  			},
		  			scales: {
		  				xAxes: [{
		  					display: true
		  				}],
		  				yAxes: [{
		  					display: true
		  				}]
		  			}
		  		}
		  	});
		  	/**
		    * Service call to display log messages after the chart created.
		    **/
		  	this.logService.add("Log Service: Line chart created with above data");
  		});
	}
}