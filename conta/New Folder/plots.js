var tableData = data;
function updateInfo(){

var input1 = d3.select("#respuesta1");
var input2 = d3.select("#respuesta2");
//debugger

var dateParser = d3.timeParse("%_d/%_m/%Y"); 
var dateInputText0 = d3.select("#inputFecha");

var new_table0 = tableData.filter(info => info.datetime> new Date(dateInputText0.property("value")).getTime());  

if(Object.entries(new_table0).length===0 ){
  new_table0 = tableData
}

var dateInputText1 = d3.select("#outputFecha");

var new_table1 = new_table0.filter(info => info.datetime<= new Date(dateInputText1.property("value")).getTime());  

if(Object.entries(new_table1).length===0 ){
  new_table1 = new_table0
}
debugger


      //displayData(new_table1);
      var dateInputText2 = d3.select("#oferta1");
      var new_table2 = new_table1.filter(info => info.branch===dateInputText2.property("value"));  
      if(Object.entries(new_table2).length===0 ){
        new_table2 = new_table1
      }
      //      debugger
      //displayData(new_table2);
      var dateInputText3 = d3.select("#oferta2");
      var new_table3 = new_table2.filter(info => info.shift===dateInputText3.property("value"));
      if(Object.entries(new_table3).length===0 ){
        new_table3 = new_table2
      }

      var dateInputText5 = d3.select("#oferta3");
      var new_table5 = new_table3.filter(info => info.volumen===parseFloat(dateInputText5.property("value")));
      if(Object.entries(new_table5).length===0 ){
        new_table5 = new_table3
      }

      var x1 = [], y1 = [];
      var x2 = [], y2 = [];
      var x3 = [], y3 = [], totals3=[];
      var x3a = [], y3a = [], totals3a=[];
      var x1a = [], y1a = [], totals1={},totals1a={},totals1b=[],totals1c=[],totals1d=[],totals1e=[];
      var x2a = [], y2a = [], totals2={},totals2a={},totals2b=[],totals2c=[],totals2d=[],totals2e=[];
      var sub1a = 0, sub2a = 0;
      var x1b = [], y1b = [];
      var x2b = [], y2b = [];
      var sub1b = 0, sub2b = 0;
      var x1c = [], y1c = [];
      var x2c = [], y2c = [];
      var acm1c = 0, acm2c = 0;
      var x1d = [], y1d = [];
      var x2d = [], y2d = [];
      var sub1d = 0, sub2d = 0;
      var x1e = [], y1e = [];
      var x2e = [], y2e = [];
      var sub1e = 0, sub2e = 0;
      var sub1f = 0, sub2f = 0;
      var sub1g = 0, sub2g = 0;
      var aux1 = 1, aux2 = 1;
//debugger
new_table5.forEach(function(item){
  totals1a[item] = (totals1a[item] || 0) + parseFloat(item[input1.property("value")]);
  if(Object.values(totals1) < parseFloat(item[input1.property("value")])){ 
    totals1[item] = parseFloat(item[input1.property("value")]);
  }
  totals2a[item] = (totals2a[item] || 0) + parseFloat(item[input2.property("value")]);
  if(Object.values(totals2) < parseFloat(item[input2.property("value")])){ 
    totals2[item] = parseFloat(item[input2.property("value")]);
  }
  if(Object.values(totals3) < parseFloat(item[input2.property("value")])-parseFloat(item[input1.property("value")])){ 
    totals3[item] =parseFloat(item[input2.property("value")])-parseFloat(item[input1.property("value")]);
  }
  if(Object.values(totals3a) < parseFloat(item[input1.property("value")])-parseFloat(item[input2.property("value")])){ 
    totals3a[item] =parseFloat(item[input1.property("value")])-parseFloat(item[input2.property("value")]);
  }
        var x3 = [], y3 = [], totals3=[];
  sub1e= -parseFloat(Object.values(totals2a)[0]);
  sub2e= -parseFloat(Object.values(totals1a)[0]);

  });

      var dateParser = d3.timeParse("%_d/%_m/%Y"); 
      totals1b[0] = "";
      totals2b[0] = "";
      totals1c[0] = "";
      totals2c[0] = "";
      totals1d[0] = "";
      totals2d[0] = "";
      totals1e[0] = "";
      totals2e[0] = "";

     Object.entries(new_table5).forEach(([key]) => {
          row = new_table5[key];
          x1.push( dateParser(moment(row['datetime']).format('DD/MM/YYYY')) );
          y1.push( row[input1.property("value")] );
          y2.push( row[input2.property("value")] );
          sub1a = row[input1.property("value")] / parseFloat(Object.values(totals1)[0]);
          y1a.push( sub1a * 100 );
          sub2a = row[input2.property("value")] / parseFloat(Object.values(totals2)[0]);
          y2a.push( sub2a * 100);
          //sub1b = (row[input1.property("value")] / row[input2.property("value")]) - 1;
          //y1b.push( sub1b * 100 );
          //sub2b = (row[input2.property("value")] / row[input1.property("value")]) - 1;
          //y2b.push( sub2b * 100);
          sub1b = (row[input1.property("value")] / parseFloat(Object.values(totals1a)[0]));
          y1b.push( sub1b );
          sub2b = (row[input2.property("value")] / parseFloat(Object.values(totals2a)[0]));
          y2b.push( sub2b );
//debugger;
          acm1c += row[input1.property("value")];
          y1c.push( acm1c );
          acm2c += row[input2.property("value")];
          y2c.push( acm2c );
          sub1d += (row[input1.property("value")] - row[input2.property("value")]);
          y1d.push( sub1d );
          sub1g = (row[input1.property("value")] - row[input2.property("value")]) / parseFloat(Object.values(totals3)[0]);
          y3.push( sub1g );
          sub2g = (row[input2.property("value")] - row[input1.property("value")]) / parseFloat(Object.values(totals3a)[0]);
          y3a.push( sub2g );
          sub2d += (row[input2.property("value")] - row[input1.property("value")]);
          y2d.push( sub2d );
          sub2d += (row[input1.property("value")] - row[input2.property("value")]);
          y2d.push( sub2d );

          sub1e = (row[input1.property("value")] + sub1e);
          sub2e = row[input2.property("value")]+sub2e ;
          
          if (acm1c == parseFloat(Object.values(totals1a)[0]) && acm2c == parseFloat(Object.values(totals2a)[0])){
            y1e.push( sub1e );
            y2e.push( sub2e );
          }

          x2.push(row['branch']);
          x3.push(row['shift']);

          for (var i = 0; i <= totals1b.length- 1; i++) {
            if(row['branch']==totals1b[i]){
              aux1=totals1c[i] ;
              totals1c[i] =  aux1 + (row[input1.property("value")] - row[input2.property("value")]);
              break;
            }
            if (i == totals1b.length- 1) {
              totals1b.push(row['branch']);
              sub1f=row[input1.property("value")] - row[input2.property("value")]
              totals1c.push(sub1f);
              break;
            }}
          
            for (var j = 0; j <=  totals2b.length- 1; j++) {
              if(row['branch']==totals2b[j]){
                aux2 = totals2c[j];
                totals2c[j] = aux2 + row[input2.property("value")] - row[input1.property("value")];
                break;
              }
              if (j == totals2b.length- 1) {
                totals2b.push(row['branch']);
                sub2f= row[input2.property("value")] - row[input1.property("value")]
                totals2c.push(sub2f);
                break;
              }}
              if (acm1c == parseFloat(Object.values(totals1a)[0]) && acm2c == parseFloat(Object.values(totals2a)[0])){
                y1e.push( sub1e );
                y2e.push( sub2e );
              }
    
              for (var i = 0; i <= totals1d.length- 1; i++) {
                if(row['shift']==totals1d[i]){
                  aux3=totals1e[i] ;
                  totals1e[i] =  aux3 + (row[input1.property("value")] - row[input2.property("value")]);
                  break;
                }
                if (i == totals1d.length- 1) {
                  totals1d.push(row['shift']);
                  sub1f=row[input1.property("value")] - row[input2.property("value")]
                  totals1e.push(sub1f);
                  break;
                }}
              
                for (var j = 0; j <=  totals2d.length- 1; j++) {
                  if(row['shift']==totals2d[j]){
                    aux2 = totals2e[j];
                    totals2e[j] = aux2 + row[input2.property("value")] - row[input1.property("value")];
                    break;
                  }
                  if (j == totals2d.length- 1) {
                    totals2d.push(row['shift']);
                    sub2f= row[input2.property("value")] - row[input1.property("value")]
                    totals2e.push(sub2f);
                    break;
                  }}
    


          
     });
// Create the Traces
var trace1 = {
  x: x1,
  y: y1,

  mode: "markers",
  type: "scatter",
  name: input1.property("value"),
  marker: {
    color: "orange",
    symbol: "hexagram"
  }
};

var trace2 = {
  x: x1,
  y: y2,

  mode: "markers",
  type: "scatter",
  name: input2.property("value"),
  marker: {
    color: "#2077b4",
    symbol: "diamond-x"
  }
};

var trace1a = {
  x: x1,
  y: y1a,

  mode: "markers",
  type: "scatter",
  name:  input1.property("value"),
  marker: {
    color: "orange",
    symbol: "hexagram"
  }
};

var trace2a = {
  x: x1,
  y: y2a,

  mode: "markers",
  type: "scatter",
  name:  input2.property("value"),
  marker: {
    color: "#2077b4",
    symbol: "diamond-x"
  }
};


var trace1b = {
  x: x1,
  y: y1b,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name: input1.property("value"),
  marker: {
    color: "orange",
    symbol: "hexagram"
  }
};

var trace2b = {
  x: x1,
  y: y2b,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name: input2.property("value"),
  marker: {
    color: "#2077b4",
    symbol: "diamond-x"
  }
};

var trace1c = {
  x: x1,
  y: y1c,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name: input1.property("value"),
  marker: {
    color: "orange",
    symbol: "hexagram"
  }
};

var trace2c = {
  x: x1,
  y: y2c,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name: input2.property("value"),
  marker: {
    color: "#2077b4",
    symbol: "diamond-x"
  }
};

var trace1d = {
  x: x1,
  y: y1d,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name: input1.property("value"),
  marker: {
    color: "orange",
    symbol: "hexagram"
  }
};

var trace2d = {
  x: x1,
  y: y2d,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name: input2.property("value"),
  marker: {
    color: "#2077b4",
    symbol: "diamond-x"
  }
};

var trace1k = {
  x: x1,
  y: y3,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name: input1.property("value"),
  marker: {
    color: "orange",
    symbol: "hexagram"
  }
};

var trace2k = {
  x: x1,
  y: y3a,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name: input2.property("value"),
  marker: {
    color: "#2077b4",
    symbol: "diamond-x"
  }
};

// Create the data array for the plot
var data0 = [trace1, trace2, trace1c, trace2c, trace1d, trace2d];
var data1 = [trace1a, trace2a, trace1b, trace2b, trace1k, trace2k];
// Define the plot layout
var layout = {
  autosize: true,

  title: dateInputText2.property("value") ,
  xaxis: { 
title: "",
tickformat: '%d-%m-%Y',
    type: 'date', 
automargin: true

 },
  yaxis: { title: "Amount ($)", type: "linear", automargin: true }
};

var layout0 = {
  autosize: true,

  title: dateInputText2.property("value") ,
  xaxis: { 
title: "",
tickformat: '%d-%m-%Y',
    type: 'date', 
automargin: true

 },
  yaxis: { title: "Performance (%)", type: "linear", automargin: true }
};



Plotly.newPlot("plot", data0, layout);
Plotly.newPlot("plot1", data1, layout0);

        //Build a Pie Chart
        var trace1e = {
          values: y1,
          labels: x2,
          type: 'pie',
          text: x2,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data2 = [trace1e];

      var layout2 = {
          title: input1.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot2", data2, layout2);



        //Build a Pie Chart
        var trace2e = {
          values: y2,
          labels: x2,
          type: 'pie',
          text: x2,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data3 = [trace2e];

      var layout3 = {
          title: input2.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot3", data3, layout3);

        //Build a Pie Chart
        var trace1f = {
          values: y1,
          labels: x3,
          type: 'pie',
          text: x3,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data4 = [trace1f];

      var layout4 = {
          title: input1.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot4", data4, layout4);



        //Build a Pie Chart
        var trace2f = {
          values: y2,
          labels: x3,
          type: 'pie',
          text: x3,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data5 = [trace2f];

      var layout5 = {
          title: input2.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot5", data5, layout5);

        //Build a Pie Chart
        var trace1g = {
          values: totals1c,
          labels: totals1b,
          type: 'pie',
          text: totals1b,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data6 = [trace1g];

      var layout6 = {
          title: input1.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot6", data6, layout6);


        //Build a Pie Chart
        var trace2h = {
          values: totals2c,
          labels: totals2b,
          type: 'pie',
          text: totals2b,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data7 = [trace2h];

      var layout7 = {
          title: input2.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot7", data7, layout7);

       //Build a Pie Chart
       var trace1i = {
        values: totals1e,
        labels: totals1d,
        type: 'pie',
        text: totals1d,
        textinfo: 'percent',
        hoverinfo: 'label+text+value+percent'
    };
    var data8 = [trace1i];

    var layout8 = {
        title: input1.property("value")
        //`Top Ten Measurements for Sample ${sample}`,
    };

Plotly.newPlot("plot8", data8, layout8);


      //Build a Pie Chart
      var trace2j = {
        values: totals2e,
        labels: totals2d,
        type: 'pie',
        text: totals2d,
        textinfo: 'percent',
        hoverinfo: 'label+text+value+percent'
    };
    var data9 = [trace2j];

    var layout9 = {
        title: input2.property("value")
        //`Top Ten Measurements for Sample ${sample}`,
    };

Plotly.newPlot("plot9", data9, layout9);
debugger

}
updateInfo();

