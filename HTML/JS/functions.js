var qty = 1;
var list = [];
var name = 0;

$(document).ready(function() {
	$('input[name="buy"]').click(function() {
		name = $(this).parent().parent().parent().text().replace(/\s+/g, '').slice(0, -1);
		var price = $(this).val();

		if ($.inArray(name, list) == -1) {
			list.unshift(name);

			// alert(list);

			var div = $("#basket_view");
			var toppx = div.css('top');
			var top = parseInt(toppx, 10);

			if (top > -650) {
				$("#basket_view").css('top', top - 45 + "px");
			}

			$("#basket_view ul").append('<li class="rcart-dish eleme_view">' + '<div class="rcart-d-name">' + name + '</div>' + '<div class="rcart-d-modify">' + '<a class="rcart-d-act minus d_btn" ubt-click="427">-</a>' + '<input class="rcart-d-qty set_num_in" id="shuliang' + name + '" type = "text" value = ' + qty + ' ubt-change="427">' + '<a class="rcart-d-act add i_btn" ubt-click="427">+</a>' + '</div>' + '<div id="cost' + name + '" class="rcart-d-total" >' + price + '</div>' + '<a class="rcart-d-del r_btn">×</a>' + '</li>');

		} else {
			var totalC = $("#shuliang" + name).val();

			var total = parseInt(totalC, 10);
			var totalqty = total + 1;

			var totalcost = price * totalqty.toFixed(2);

			$("#shuliang" + name).val(totalqty);
			$("#cost" + name).text(totalcost);
		}

		gettotalcost();

	});

});

function gettotalcost() {
	var total = 0;
	var l = list.length;

	for (var i = 0; i < l; i++) {
		var current = list[i];
		// alert(current);
		costC = $("#cost" + current).text();
		var cost = parseFloat(costC, 10);
		// alert("list: "+list);
		// alert("cost: "+cost);
		total = total + cost;
		// alert("total: "+total);
	}

	$("p.rcart-empty").empty();
	$("p.rcart-empty").append('<div ><input name="checkout" type="button" value="去卖单" onclick="topay()"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总计:&nbsp;&yen;' + total + '</div>');

	total = 0;

}

function topay() {
	window.open('pages/checkout.html', 'CheckOut', 'width=800,height=600');
	return false;

}

