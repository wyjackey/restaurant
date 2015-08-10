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

	
	for (var i = 1; i < 30; i++) {
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

	var titles = $("input[name='sales']:checked").next('label').text();
	var le = line1.length;

	for (var i = 0; i < line1.length; i++) {
		var line3 = [line1[i][1], line1[i][0]];

		line2.unshift(line3);
	}
	line2.pop();
	line2.pop();

	var plot1 = $.jqplot('chart1', [line1], {
		height : le * 30 + "px",

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
	var plot2 = $.jqplot('pieChart', [line2], {
		seriesDefaults : {
			renderer : $.jqplot.PieRenderer,
			rendererOptions : {
				showDataLabels : true
			}
		},
		legend : {
			show : true,
			location : 'e'
		}
	});

};

function emptyOldCharts() {
	$("#chart1").empty();
	$("#pieChart").empty();
	$("#info2").empty();
}
