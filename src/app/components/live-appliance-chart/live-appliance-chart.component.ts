import { Component, NgZone, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { RequestHandlerService } from 'src/app/services/request-handler.service';
import { PreffixUrl } from 'src/app/enums/preffix-url.enum';
import { StorageKey } from 'src/app/enums/storage-key.enum';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-live-appliance-chart',
  templateUrl: './live-appliance-chart.component.html',
  styleUrls: ['./live-appliance-chart.component.less']
})
export class LiveApplianceChartComponent implements OnInit {

  constructor(private zone: NgZone, private request: RequestHandlerService) { }

  ngAfterViewInit() {
    this.request.getAll(PreffixUrl.ApplianceSensorReadingStatistics).subscribe((result) => {
      this.zone.runOutsideAngular(() => {
        let chart = am4core.create("applianceDiv", am4charts.XYChart);
        console.log(result);

        chart.data = result;
        chart.padding(40, 40, 40, 40);

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "appliance";
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.extraMax = 0.1;
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "appliance";
        series.dataFields.valueY = "power";
        series.tooltipText = "{valueY.value}"
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.cornerRadiusTopLeft = 10;
        let labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.verticalCenter = "bottom";
        labelBullet.label.dy = -10;
        labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

        chart.zoomOutButton.disabled = true;

        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", function (fill, target) {
          return chart.colors.getIndex(target.dataItem.index);
        });

        setInterval(function () {
          am4core.array.each(chart.data, function (item) {
            if (JSON.parse(localStorage.getItem(StorageKey.AppliancePattern)).appliance == item.appliance) {
              item.power = Math.abs(JSON.parse(localStorage.getItem(StorageKey.AppliancePattern)).power);
            }
          })
          chart.invalidateRawData();
        }, 1000)

        categoryAxis.sortBySeries = series;

      });

    });
  }
  ngOnInit(): void {
  }

}
