

Highcharts.chart('gross',{
    chart:{ 
       
        type: 'line',
        height:  (7 / 12 * 100) + '%',
 

     },
     
    title:{
        text: 'WorldWide vs Japan Original Release Box Office Revenue'
    },
    xAxis:{
        categories:[
            'Castle in the Sky',
            'Grave of the Fireflies',
            'My Neighbor Totoro',
            'Kiki Delivery Service',
            'Only Yesterday', 
            'Porco Rosso', 
           // 'Ocean Waves', 
            'Pom Poko', 
            'Whisper of the Heart',
            'Princess Mononoke', 
            'My Neighbors the Yamadas',
            'Spirited Away', 
            'The Cat Returns',
            'Howls Moving Castle',
            'Tales from Earthsea', 
            'Ponyo',
            'The Secret World of Arrietty', 
            'From Up on Poppy Hill', 
            'The Wind Rises', 
            'The Tale of the Princess Kaguya', 
            'When Marnie Was There', 
            // 'How Do You Live?'
        ],
    },
    yAxis:{
        min: 0,
        title:{
            text: 'Total Gross ($)'
        }
    },
    plotOptions:{
        columns:{
            pointPadding: 0.2, 
            borderWidth:0
        }
    },
    plotOptions: {
        series: {
            animation: {
                duration: 1000
              
            }
        }
    },
    series:[{
        name: 'Japan',
        color: '#3FE68B',
        data: [5376921, 15676655, 10789330, 39633315, 29308629, 57410164,  41203342, 29039692, 177914155,0, 280001103, 59501445, 213682440, 7700000, 15090339, 19202743, 57585, 5209580, 54915, 27388],
    }, {
        name: 'WorldWide',
        color: '#F17D7D',
        data:[6037660, 516962, 30476708, 10150365, 545825, 1354729, 1252335, 585013, 162112497, 0, 347742810, 54505478, 236212992, 68673762, 203204882, 148800274, 61459425, 136454220, 24638337, 34949567]
    // }, {
    //     name: 'US & Canada',
    //     data:[523664, 516962, 2250213, 1004057, 454243, 443059, 87738, 372405, 498156, 4845631, 1191000, 13750644, 563718, 5576743, 48658, 15743471, 19587032, 1002895, 5209580, 974913, 561085 ]
    // }]
    },{
        name: 'Budget',
        data: [3300000, 3700000, 3700000, 7342120, 10000000, 84427, 0, 0, 23000000, 15270000, 17000000, 20000000, 22021680, 22000000, 31197550, 23000000, 22000000, 30000000, 49000000 , 10500000]
    }]
}); 
Highcharts.chart('directors', {
    chart: {
        type: 'packedbubble', 
        height: '60%',
    },
    title:{
        text: 'Studio Ghibli Directors and their Awards'
    },
    tooltip:{
        // useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} Awards'
    },
    plotOptions:{
        packedbubble:{
            minSize: '10%',
            maxSize: '500%',
            zMin: 0,
            zMax: 2000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series:[{
        name: 'Hayao Miyazaki',
        color: '#3FE68B',
        data: [{
            name: 'Castle in the Sky',
            value: 3
        },{
            name: 'My Neighbor Totoro',
            value: 6
        }, {
            name: 'Kikis Delivery Service',
            value: 11
        },{
            name: 'Porco Rosso',
            value: 2
        }, { 
            name: 'Princess Mononoke',
            value: 28
        }, {
            name: 'Spirited Away',
            value: 36
        }, {
            name: 'Howls Moving Castle', 
            value: 10
        }, {
            name: 'Ponyo', 
            value: 6
        }, {
            name: 'The Wind Rises',
            value: 11
        }]
    }, {
        name: 'Isao Takahata',
        color:'#F17D7D',
        data: [{
            name: 'Grave of the Fireflies', 
            value: 3
        }, {
            name: 'Only Yesterday',
            value: 1, 
        }, {
            name: 'Pom Poko', 
            value: 3
        }, {
            name: 'The Tale of Princess Kaguya',
            value: 13
        }]
    }, {
        name: 'Goro Miyazaki', 
        data:[{
            name: 'From Up on Poppy Hill',
            value: 6
        }]
    }, {
        name: 'Hiromasa Yonebayashi',
        data: [{
            name: 'Arrietty',
            value: 11
        }, {
            name: 'When Marnie was There', 
            value: 4
        }]
    }]
})
;

Highcharts.chart('top10anime', {
    chart: {
        type: 'bar',
        height:  (8 / 14 * 100) + '%',
    },
    title:{
        text: 'Top 10 Highest Grossing Anime Films'
    },
    xAxis:{
        categories: [
            'Your Name (2016)',
            'Spirited Away (2001)',
            'Howls Moving Castle (2004)', 
            'Ponyo (2008)', 
            'Weathering with You (2019)', 
            'Stand by Me Doraemon (2014)', 
            'Pokemon: The First Movie (1998)', 
            'Princess Mononoke (1997)', 
            'The Secret World of Arrietty (2010)', 
            'The Wind Rises (2013)']
    },
    yAxis:{
        min: 0,
        title:{
            text: 'WorldWide Gross ($)'
        }
    },
    legend:{
        enabled:false,
    },
    series: [{
        data:[{
            y: 359275409,
            color: '#183C64',
        },{
            y: 347742810, 
            color: '#3FE68B',
        }, {
            y: 235184110, 
            color: '#3FE68B',
        },{
            y: 203204882, 
            color:'#3FE68B',
        },{
            y: 192704855, 
            color:'#183C64',
        },{
            y: 183442714, 
            color: '#183C64',
        },{
            y: 172744662, 
            color: '#183C64',
        },{
            y: 160799185, 
            color: '#3FE68B',
        }, {
            y: 145570827, 
            color: '#3FE68B',
        },{
            y: 136333220, 
            color:'#3FE68B',
        }]
    }]
},  function (chart) {

    $legend = $('#customLegend');
    $legend.append('<div class="item"><div class="symbol" style="background-color:'+'#183C64'+'"></div><div class="serieName" id="">' + 'Non-Ghibli Movie' + '</div></div>');
    $legend.append('<div class="item"><div class="symbol" style="background-color:'+'#3FE68B'+'"></div><div class="serieName" id="">' + 'Ghibli Movie' + '</div></div>');


});

Highcharts.chart('RTGhibli', {
    chart: {
        type: 'pie'
    }, 
    title:{
        text: 'Studio Ghibli on Rotten Tomatoes'
    },
    tooltip:{
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions:{
        pie:{
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels:{
                enabled: false
            },
            showInLegend: true
        }
    },
    series:[{
        name: 'TomatoMeter',
        colorByPoint: true,
        data:[{
            name: 'Fresh',
            y : 95.45,
            color:'#3FE68B',
        },{
            name: 'Rotten',
            y: 4.55,
            color: '#183C64',
        }]
    }]
});

Highcharts.chart('RTDisney',{
    chart: {
        type: 'pie'
    },
    title:{
        text: 'Disney on Rotten Tomatoes'
    },
    tooltip:{
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions:{
        pie:{
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels:{
                enabled: false
            },
            showInLegend: true
        }
    },
        series:[{
            name: 'TomatoMeter',
            colorByPoint: true,
            data:[{
                name: 'Fresh',
                y : 78.26,
                color:'#3FE68B',
            },{
                name: 'Rotten',
                y: 21.74,
                color: '#183C64',
            }]
        }]
})
;


(function() {

    'use strict';
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();
