var qty = 1;
var list = [];
var menuList = [];
var name = 0;


$(document).ready(function() {
	$('input[name="buy"]').click(function() {
		name = $(this).parent().parent().parent().text().replace(/\s+/g, '').slice(0, -1);
		var price = $(this).val();
		$("#basket_view > p").remove();
		$("#basket_view").prepend("<p>清空 <a href='javascript:void(0);' class='emptyB'>&times;</a></p>")

		if ($.inArray(name, list) == -1) {
			addItem(name, price);
		} else {
			increaseQty(name, price, 1);
		}
		
		gettotalcost();
	});
	
	
	$(document).on('click', 'a.add', function() {		
		var itemName = $(this).parent().prev().text();
		var qtyP=$(this).prev().val();
		var qty=parseFloat(qtyP,10).toFixed(2);		
		var totalP=$(this).parent().next().text();		
		var total=parseFloat(totalP,10).toFixed(2);
		var itemPrice=total/qty;
				
		increaseQty(itemName, itemPrice, 1);
		gettotalcost();		
	}); 
	
	
	$(document).on('click', 'a.minus', function(e) {
		var itemName = $(this).parent().prev().text();
		var qtyP = $(this).next().val();
		var qty = parseFloat(qtyP, 10).toFixed(2);
		var totalP = $(this).parent().next().text();
		var total = parseFloat(totalP, 10).toFixed(2);
		var itemPrice = total / qty;

		increaseQty(itemName, itemPrice, -1);
		gettotalcost();
		
		if (jQuery.isEmptyObject(list)) {
			reset();
		}
	}); 

	
	
	$(document).on('click', 'a.delete', function() {		
		$(this).parent().remove();
		
		deleteItem();
		gettotalcost();
	}); 
	
	
	$(document).on('click', '.emptyB', function() {
		reset();
	}); 

}); 


function addItem(name, price){
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

			$("#basket_view ul").append('<li class="rcart-dish eleme_view">' 
			+ '<div class="rcart-d-name" >' + name + '</div>' 
			+ '<div class="rcart-d-modify">' 
			+ '<a class="rcart-d-act minus d_btn"  >-</a>' 
			+ '<input class="rcart-d-qty set_num_in" id="shuliang' + name + '" type = "text" value = ' + qty + ' ubt-change="427">' 
			+ '<a class="rcart-d-act add i_btn"  >+</a>' 
			+ '</div>' 
			+ '<div id="cost' + name + '" class="rcart-d-total" >' + price + '</div>' 
			+ '<a class="rcart-d-del delete r_btn">×</a>' + '</li>');
}



function deleteItem(name) {
	var itemName;
	if (name != null) {

		itemName = name;
	} else {
		itemName = $(this).prev().prev().prev().text();
	}

	list.splice(list.indexOf(itemName), 1);

	

		var div = $("#basket_view");
		var toppx = div.css('top');
		var top = parseInt(toppx, 10);

		$("#basket_view").css('top', top + 45 + "px");
	

}


function reset(){
	$('#rst_cart').empty();
		$('#rst_cart').append('<div id="basket_view" class="rcart-list-wrapper eleme_view ui_c1" style="top: -40px;">' 
		+ '<p>篮子是空的</p>' 
		+ '<ul class="rcart-list basket_list" style="max-height: 721px;"></ul>' 
		+ '</div>' 
		+ '<div id="basket_view_7" class="rcart-list-wrapper eleme_view ui_c2">' 
		+ '<p class="rcart-empty" >篮子是空的</p></div>');
		
		list=[];
		menuList=[];
}


function increaseQty(name, price, change) {
	var length = menuList.length;
	var totalC = $("#shuliang" + name).val();

	var total = parseInt(totalC, 10);
	var totalqty = total + change;
	if (totalqty > 0) {
		var totalcost = price * totalqty;

		$("#shuliang" + name).val(totalqty);
		$("#cost" + name).text(totalcost);

		for (var j = 0; j < length; j++) {
			if (menuList[j][0] == name) {
				menuList[j][1] = totalqty;
				break;
			}
		}
	}
	else {
		$("#cost" + name).parent().remove();
		deleteItem(name);
		
	}

}

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

