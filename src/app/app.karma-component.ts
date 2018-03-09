import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import { ActivatedRoute } from "@angular/router";



@Component({
    selector: 'karma',
    templateUrl: './app.karma-component.html',
    styleUrls: ['./app.karma-component.css']

})

export class KarmaComponent {

    public doughnutChartLabels: string[] = ['Passed', 'Failed', 'Skipped'];
    public doughnutChartData: number[] = [350, 450, 250];
    public doughnutChartType: string = 'doughnut';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}