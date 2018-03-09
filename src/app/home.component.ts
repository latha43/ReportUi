import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import { HomeService } from "./service/home.service";
import { Service } from "./classes/service";



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomeService]

})

export class HomeComponent implements OnInit {


    public MCL_doughnutChartData: number[];
    public Transdoc_doughnutChartData: number[] = [800, 0, 150];
    public Vessel_doughnutChartData: number[] = [900, 0, 100];
    public VM_doughnutChartData: number[] = [550, 0, 400];
    public Container_doughnutChartData: number[] = [760, 0, 250];
    public Task_doughnutChartData: number[] = [900, 0, 150];
    public Angular_doughnutChartData: number[] = [750, 0, 250];
    public mclpercentage: number;

    private mcl: Service;

    public constructor(private http: Http, private homeServ: HomeService) {

    }

    public ngOnInit() {
        this.homeServ.getData('mcl')
            .subscribe(res => { this.mcl = res; }).add(() => {
                this.MCL_doughnutChartData = [this.mcl.passed, this.mcl.failed, this.mcl.pending];
                this.mclpercentage = Math.round((this.mcl.passed/this.mcl.testCases)*100);
            })
        // this.MCL_doughnutChartData=[7,1,0]

    }
    opts =
    {
        cutoutPercentage: 85
    };
    public doughnutChartType: string = 'doughnut';
    public MCLdoughnutColors: any[] = [
        {
            backgroundColor: ["#EF5350"]
        }];
    public Transdoc_doughnutColors: any[] = [
        {
            backgroundColor: ["#1565C0"]
        }];
    public Vessel_doughnutColors: any[] = [
        {
            backgroundColor: ["#4E342E"]
        }];
    public VM_doughnutColors: any[] = [
        {
            backgroundColor: ["#F57C00"]
        }];
    public Container_doughnutColors: any[] = [
        {
            backgroundColor: ["#FFEB3B"]
        }];
    public Task_doughnutColors: any[] = [
        {
            backgroundColor: ["#00C853"]
        }];
    public Angular_doughnutColors: any[] = [
        {
            backgroundColor: ["#3949AB"]
        }];
    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}