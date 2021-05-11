import { Component, NgZone, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { AxisRendererCurveX, AxisRendererCurveY } from '@amcharts/amcharts4/plugins/timeline';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-household-trend-chart',
  templateUrl: './household-trend-chart.component.html',
  styleUrls: ['./household-trend-chart.component.less']
})
export class HouseholdTrendChartComponent implements OnInit {


  constructor(private zone: NgZone) { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4plugins_timeline.SerpentineChart);
      chart.curveContainer.padding(100, 20, 50, 20);
      chart.levelCount = 3;
      chart.yAxisRadius = am4core.percent(20);
      chart.yAxisInnerRadius = am4core.percent(2);
      chart.maskBullets = false;

      let colorSet = new am4core.ColorSet();

      chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
      chart.dateFormatter.dateFormat = "HH";

      chart.data = [{
        "category": "",
        "start": "2019-01-10 06:00",
        "end": "2019-01-10 07:00",
        "color": colorSet.getIndex(15),
        "textDisabled": false,
        "text":"9",
        "icon": "https://nk1bd.com/wp-content/uploads/2020/07/Dell-Inspiron-15-3580-Intel-CDC-4205U-15.6-inch-HD-Laptop-with-Genuine-Windows-10.jpg"
      }, {
        "category": "",
        "start": "2019-01-10 07:00",
        "end": "2019-01-10 08:00",
        "color": colorSet.getIndex(14),
        "textDisabled": false,
        "text":"19",
        "icon": "https://images-na.ssl-images-amazon.com/images/I/4131L2GDpSL._SY355_.jpg"
      },
      {
        "category": "",
        "start": "2019-01-10 08:00",
        "end": "2019-01-10 09:00",
        "color": colorSet.getIndex(13),
        "textDisabled": false,
        "text":"1",
        "icon": "https://www.tvsales.co.zw/pub/media/catalog/product/cache/f16bdfca4f6b3b057c659d0b12fd6c69/5/0/50PUT6002_98-IMS-en_SG.jpg"
      },
      {
        "category": "",
        "start": "2019-01-10 09:00",
        "end": "2019-01-10 10:00",
        "color": colorSet.getIndex(12),
        "textDisabled": false,
        "text":"21",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g1nynpej-4WHO8ofpw1LMqGx56lVicMGKkuxueyraV08e_1eYRXSEBtx1IFXzvYj_y8&usqp=CAU"
      },
      {
        "category": "",
        "start": "2019-01-10 10:00",
        "end": "2019-01-10 12:00",
        "color": colorSet.getIndex(11),
        "textDisabled": false,
        "text":"13",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g1nynpej-4WHO8ofpw1LMqGx56lVicMGKkuxueyraV08e_1eYRXSEBtx1IFXzvYj_y8&usqp=CAU"
      },
      {
        "category": "",
        "start": "2019-01-10 12:00",
        "end": "2019-01-10 13:00",
        "color": colorSet.getIndex(10),
        "textDisabled": false,
        "text":"45",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g1nynpej-4WHO8ofpw1LMqGx56lVicMGKkuxueyraV08e_1eYRXSEBtx1IFXzvYj_y8&usqp=CAU"
      },
      {
        "category": "",
        "start": "2019-01-10 13:00",
        "end": "2019-01-10 14:00",
        "color": colorSet.getIndex(9),
        "textDisabled": false,
        "text":"31",
        "icon": "https://www.tvsales.co.zw/pub/media/catalog/product/cache/f16bdfca4f6b3b057c659d0b12fd6c69/5/0/50PUT6002_98-IMS-en_SG.jpg"
      },
      {
        "category": "",
        "start": "2019-01-10 14:00",
        "end": "2019-01-10 16:00",
        "color": colorSet.getIndex(8),
        "textDisabled": false,
        "text":"13",
        "icon": "https://images-na.ssl-images-amazon.com/images/I/4131L2GDpSL._SY355_.jpg"
      },
      {
        "category": "",
        "start": "2019-01-10 16:00",
        "end": "2019-01-10 17:00",
        "color": colorSet.getIndex(7),
        "textDisabled": false,
        "text":"19",
        "icon": "https://images-na.ssl-images-amazon.com/images/I/4131L2GDpSL._SY355_.jpg"
      },
      {
        "category": "",
        "start": "2019-01-10 17:00",
        "end": "2019-01-10 20:00",
        "color": colorSet.getIndex(6),
        "textDisabled": false,
        "text":"25",
        "icon": "https://images-na.ssl-images-amazon.com/images/I/4131L2GDpSL._SY355_.jpg"
      },
      {
        "category": "",
        "start": "2019-01-10 20:00",
        "end": "2019-01-10 20:30",
        "color": colorSet.getIndex(5),
        "textDisabled": false,
        "text":"21",
        "icon": "https://images-na.ssl-images-amazon.com/images/I/4131L2GDpSL._SY355_.jpg"
      },
      {
        "category": "",
        "start": "2019-01-10 20:30",
        "end": "2019-01-10 21:30",
        "color": colorSet.getIndex(4),
        "textDisabled": false,
        "text":"5",
        "icon": "https://nk1bd.com/wp-content/uploads/2020/07/Dell-Inspiron-15-3580-Intel-CDC-4205U-15.6-inch-HD-Laptop-with-Genuine-Windows-10.jpg"
      },
      {
        "category": "",
        "start": "2019-01-10 21:30",
        "end": "2019-01-10 22:00",
        "color": colorSet.getIndex(3),
        "textDisabled": false,
        "text":"30",
        "icon": "https://nk1bd.com/wp-content/uploads/2020/07/Dell-Inspiron-15-3580-Intel-CDC-4205U-15.6-inch-HD-Laptop-with-Genuine-Windows-10.jpg"
      },
      {
        "category": "",
        "start": "2019-01-10 22:00",
        "end": "2019-01-10 23:00",
        "color": colorSet.getIndex(2),
        "textDisabled": false,
        "text":"7",
        "icon": "https://nk1bd.com/wp-content/uploads/2020/07/Dell-Inspiron-15-3580-Intel-CDC-4205U-15.6-inch-HD-Laptop-with-Genuine-Windows-10.jpg"
      },
      {
        "category": "",
        "start": "2019-01-10 23:00",
        "end": "2019-01-11 00:00",
        "color": colorSet.getIndex(1),
        "textDisabled": false,
        "text":"52",
        "icon": "https://nk1bd.com/wp-content/uploads/2020/07/Dell-Inspiron-15-3580-Intel-CDC-4205U-15.6-inch-HD-Laptop-with-Genuine-Windows-10.jpg"
      },
      {
        "category": "",
        "start": "2019-01-11 00:00",
        "end": "2019-01-11 01:00",
        "color": colorSet.getIndex(0),
        "text": "28",
        "textDisabled": false,
        "icon": "https://nk1bd.com/wp-content/uploads/2020/07/Dell-Inspiron-15-3580-Intel-CDC-4205U-15.6-inch-HD-Laptop-with-Genuine-Windows-10.jpg"
      }];

      chart.fontSize = 10;
      chart.tooltipContainer.fontSize = 10;

      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis<AxisRendererCurveY>());
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.labels.template.paddingRight = 25;
      categoryAxis.renderer.minGridDistance = 10;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis<am4plugins_timeline.AxisRendererCurveX>());
      dateAxis.renderer.minGridDistance = 70;
      dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
      dateAxis.renderer.tooltipLocation = 0;
      dateAxis.renderer.line.strokeDasharray = "1,4";
      dateAxis.renderer.line.strokeOpacity = 0.5;
      dateAxis.tooltip.background.fillOpacity = 0.2;
      dateAxis.tooltip.background.cornerRadius = 5;
      dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
      dateAxis.tooltip.label.paddingTop = 7;
      dateAxis.endLocation = 0;
      dateAxis.startLocation = -0.5;

      let labelTemplate = dateAxis.renderer.labels.template;
      labelTemplate.verticalCenter = "middle";
      labelTemplate.fillOpacity = 0.4;
      labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
      labelTemplate.background.fillOpacity = 1;
      labelTemplate.padding(7, 7, 7, 7);

      let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
      series.columns.template.height = am4core.percent(15);

      series.dataFields.openDateX = "start";
      series.dataFields.dateX = "end";
      series.dataFields.categoryY = "category";
      series.baseAxis = categoryAxis;
      series.columns.template.propertyFields.fill = "color"; // get color from data
      series.columns.template.propertyFields.stroke = "color";
      series.columns.template.strokeOpacity = 0;
      series.columns.template.fillOpacity = 0.6;

      let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
      imageBullet1.locationX = 1;
      imageBullet1.propertyFields.stroke = "color";
      imageBullet1.background.propertyFields.fill = "color";
      imageBullet1.image = new am4core.Image();
      imageBullet1.image.propertyFields.href = "icon";
      imageBullet1.image.scale = 0.5;
      imageBullet1.circle.radius = am4core.percent(100);
      imageBullet1.dy = -5;


      let textBullet = series.bullets.push(new am4charts.LabelBullet());
      textBullet.label.propertyFields.text = "text";
      textBullet.disabled = true;
      textBullet.propertyFields.disabled = "textDisabled";
      textBullet.label.strokeOpacity = 0;
      textBullet.locationX = 1;
      textBullet.dy = - 100;
      textBullet.label.textAlign = "middle";

      chart.scrollbarX = new am4core.Scrollbar();
      chart.scrollbarX.align = "center"
      chart.scrollbarX.width = am4core.percent(75);
      chart.scrollbarX.opacity = 0.5;

      let cursor = new am4plugins_timeline.CurveCursor();
      chart.cursor = cursor;
      cursor.xAxis = dateAxis;
      cursor.yAxis = categoryAxis;
      cursor.lineY.disabled = true;
      cursor.lineX.strokeDasharray = "1,4";
      cursor.lineX.strokeOpacity = 1;

      dateAxis.renderer.tooltipLocation2 = 0;
      categoryAxis.cursorTooltipEnabled = false;


      let label = chart.createChild(am4core.Label);
      label.text = "Daily House Hold Trends."
      label.isMeasured = false;
      label.y = am4core.percent(40);
      label.x = am4core.percent(50);
      label.horizontalCenter = "middle";
      label.fontSize = 20;
    });
  }


  ngOnInit(): void {
  }

}
