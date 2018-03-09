import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import { ActivatedRoute } from "@angular/router";



@Component({
    selector: 'cucumber',
    templateUrl: './app.cucumber-component.html',
    styleUrls: ['./app.cucumber-component.css']

})

export class CucumberComponent {
    i: number = 50;
    public doughnutChartLabels: string[] = ['Passed'];
    public Passed_doughnutChartData: number[] = [this.i, 80];
    public Failed_doughnutChartData: number[] = [300, 0, 700];
    public Pending_doughnutChartData: number[] = [100, 0, 900];

    opts =
    {
        tooltips: {
            enabled: false
        },
        cutoutPercentage: 85
    };
    public doughnutChartType: string = 'doughnut';

    public Passed_color: any[] = [
        {
            backgroundColor: ["#009933"]
        }];
    public Failed_color: any[] = [
        {
            backgroundColor: ["#cc0000"]
        }];
    public Pending_color: any[] = [
        {
            backgroundColor: ["#ff9900"]
        }];

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}