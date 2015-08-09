

! function getreport() {
				var line1 = [[7, '菜品1'], [9, '菜品2'], [15, '菜品3'], [12, '菜品4'], [4, '菜品5'], [3, '菜品6'], [10, '菜品7']];
				var line2 = [0, 0];
				var titles = $("input[name='sales']:checked").next('label').text();
				for (var i = 0; i < line1.length; i++) {
					line3 = [line1[i][1], line1[i][0]];

					line2.unshift(line3);
				}
				var plot1 = $.jqplot('chart1', [line1], {
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
					$('#info2').html('菜品: ' + line1[pointIndex][1] + ', 排名: ' + data[1] + ', 销量: ' + data[0]);
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

			});