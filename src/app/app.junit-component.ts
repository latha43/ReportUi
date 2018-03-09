import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import { ActivatedRoute } from "@angular/router";



@Component({
    selector: 'junit',
    templateUrl: './app.junit-component.html',
    styleUrls: ['./app.junit-component.css']

})

export class JunitComponent {

    public doughnutChartLabels: string[] = ['Passed', 'Failed', 'Skipped'];
    public doughnutChartData: number[] = [750, 150, 100];
    public doughnutChartType: string = 'doughnut';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}