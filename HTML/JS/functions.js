var qty = 1;
var list = [];
var menuList = [];
var name = 0;

$(document).ready(function() {
	$('input[name="buy"]').click(function() {
		name = $(this).parent().parent().parent().text().replace(/\s+/g, '').slice(0, -1);
		var price = $(this).val();

		if ($.inArray(name, list) == -1) {
			list.unshift(name);
			var temp = [];
			temp[0] = name;
			temp[1] = 1;
			temp[2] = price
			menuList.push(temp);
			// alert(list);

			var div = $("#basket_view");
			var toppx = div.css('top');
			var top = parseInt(toppx, 10);

			if (top > -650) {
				$("#basket_view").css('top', top - 45 + "px");
			}

			$("#basket_view ul").append('<li class="rcart-dish eleme_view">' + '<div class="rcart-d-name">' + name + '</div>' + '<div class="rcart-d-modify">' + '<a class="rcart-d-act minus d_btn" ubt-click="427">-</a>' + '<input class="rcart-d-qty set_num_in" id="shuliang' + name + '" type = "text" value = ' + qty + ' ubt-change="427">' + '<a class="rcart-d-act add i_btn" ubt-click="427">+</a>' + '</div>' + '<div id="cost' + name + '" class="rcart-d-total" >' + price + '</div>' + '<a class="rcart-d-del r_btn">×</a>' + '</li>');

		} else {
			var length = menuList.length;
			var totalC = $("#shuliang" + name).val();

			var total = parseInt(totalC, 10);
			var totalqty = total + 1;

			var totalcost = price * totalqty.toFixed(2);

			$("#shuliang" + name).val(totalqty);
			$("#cost" + name).text(totalcost);
			
			for(var j = 0; j < length; j++)
			{
				if(menuList[j][0] == name)
				{
					menuList[j][1] = totalqty;
					break;
				}
			}
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
	$("p.rcart-empty").append('<div ><input name="checkout" type="button" value="去买单" onclick="topay()"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总计:&nbsp;&yen;' + total + '</div>');

	// sessionStorage.setItem("Amount",total);
	// sessionStorage.getItem("Amount")
	// Session("Amount") = total
	sessionStorage.setItem('menuList', JSON.stringify(menuList));
	sessionStorage.setItem('amount', total);
	// localStorage.setItem("listMenu", JSON.stringify(list));
	
	// var temp2 = sessionStorage.getItem('menuList');
    // var movies2 = $.parseJSON(temp2);
	// // var retrievedData = localStorage.getItem("listMenu");
	// // var movies2 = JSON.parse(retrievedData);
	
	// var m = movies2.length;
	// for (var i = 0; i < m; i++) {
		// var current = movies2[i];
		// // alert(current);
		// alert(movies2[i]);
	// }
	total = 0;
	
	

}

function topay() {
	window.open('pages/checkout.html', 'CheckOut', 'width=800,height=600');
	return false;

}

