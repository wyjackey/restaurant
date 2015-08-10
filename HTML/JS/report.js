$(document).ready(getreport);
function getreport(evt) {

	var type = [0];
	var item = [0];

	emptyOldCharts();

	for (var i = 1; i < 10; i++) {
		var x = ["菜类" + i];
		type.unshift(x);
	}
	type.pop();

	for (var i = 1; i < 15; i++) {
		var x = ["菜品" + i];
		item.unshift(x);
	}
	item.pop();

	var line1 = [0, 0];
	var line2 = [0, 0];
	var charType = $("#chartSelect").val();

	if ($("#chartSelect").val() == "type") {
		for (var i = 0; i < type.length; i++) {
			if ($("input[name='sales']:checked").val() == "qty") {
				var x = [i, type[i]];
				line1.unshift(x);
			} else {
				var x = [i * 4, type[i]];
				line1.unshift(x);
			}
		}
	} else if ($("#chartSelect").val() == "item") {
		for (var i = 0; i < item.length; i++) {
			if ($("input[name='sales']:checked").val() == "qty") {
				var x = [i, item[i]];
				line1.unshift(x);
			} else {
				var x = [i * 4, item[i]];
				line1.unshift(x);
			}
		}

	}
	line1.pop();
	line1.pop();

	var le = line1.length;
	var titles = $("input[name='sales']:checked").next('label').text();

	for (var i = 0; i < line1.length; i++) {
		var line3 = [line1[i][1], line1[i][0]];

		line2.unshift(line3);
	}
	line2.pop();
	line2.pop();

	var plot1 = $.jqplot('chart1', [line1], {
		height : line1.length * 30 + "px",

		title : titles,
		seriesDefaults : {
			renderer : $.jqplot.BarRenderer,
			shadowAngle : 135,
			rendererOptions : {
				barDirection : 'horizontal'
			},
			pointLabels : {
				show : true
			}
		},

		axes : {
			yaxis : {
				renderer : $.jqplot.CategoryAxisRenderer
			}
		}
	});

	$('#chart1').bind('jqplotDataHighlight', function(ev, seriesIndex, pointIndex, data) {
		$('#info2').html('菜类: ' + line1[pointIndex][1] + ', 排名: ' + data[1] + ', 销量: ' + data[0]);
	});
	
	$('#pieChart').bind('jqplotDataHighlight', function(ev, seriesIndex, pointIndex, data) {
		$('#pieInfo').html('菜类: ' + line1[pointIndex][1] + ', 排名: ' + data[1] + ', 销量: ' + data[0]);
	});
	
	
	var plot2 = $.jqplot('pieChart', [line2], {
		seriesDefaults : {
			renderer : $.jqplot.PieRenderer,
			rendererOptions : {
				showDataLabels : true
			}
		},

	});

	getTimeChart();

};

function emptyOldCharts() {
	$("#chart1").empty();
	$("#chart1").css({
		height : 'auto'
	})
	$("#pieChart").empty();
	$("#info2").empty();
	$("#chart2").empty();
}

function getTimeChart() {
	var date = ['2015-1-1', '2015-2-1', '2015-3-1', '2015-4-1', '2015-5-1', '2015-6-1', '2015-7-1', '2015-8-1', '2015-9-1', '2015-10-1', '2015-11-1', '2015-12-1'];
	var sales = [2000, 2088, 1546, 1000, 1500, 3000, 3698, 6054, 4125, 2415, 1025, 789];
	var line1 = [0, 0];
	var line2=[0,0];

	for (var i = 0; i < date.length; i++) {
		if ($("input[name='sales']:checked").val() == "qty") {
			var x = [date[i], sales[i]];
			line1.unshift(x);
		} else {
			
			var x = [date[i], sales[i]*3];
			line1.unshift(x);
		}
	}

	line1.pop();
	line1.pop();
	// alert(line2);

	var plot2 = $.jqplot('chart2', [line1], {
		axes : {
			xaxis : {
				renderer : $.jqplot.DateAxisRenderer,
				label : '时间',
				labelRenderer : $.jqplot.CanvasAxisLabelRenderer,
				tickRenderer : $.jqplot.CanvasAxisTickRenderer,
				tickOptions : {
					// labelPosition: 'middle',
					angle : -15
				}

			},
			yaxis : {
				label : '销售量',
				labelRenderer : $.jqplot.CanvasAxisLabelRenderer
			}
		}
	});

	for (var i = 0; i < line1.length; i++) {
		var line3 = [line1[i][1], line1[i][0]];

		line2.unshift(line3);
	}
	line2.pop();
	line2.pop();
	

	var plot2 = $.jqplot('pieChart2', [line1], {
		seriesDefaults : {
			renderer : $.jqplot.PieRenderer,
			rendererOptions : {
				showDataLabels : true
			}
		},

	});
	
	$('#pieChart2').bind('jqplotDataHighlight', function(ev, seriesIndex, pointIndex, data) {
		$('#pieInfo2').html(' 日期: ' + data[0] + ', 销量: ' + data[1]);
	});
}

