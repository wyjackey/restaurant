var qty = 1;
var list = [0];


$(document).ready(function() {
	$('input[name="buy"]').click(function() {
		var name = $(this).parent().parent().parent().text().replace(/\s+/g, '').slice(0, -1);
		var price = $(this).val();

		if ($.inArray(name, list) == -1) {
			list.unshift(name);
			
			alert(list);
			$("p.rcart-empty").empty();
			$("p.rcart-empty").append('<input type="button" value="去卖单"/>')

			var div = $("#basket_view");
			var toppx = div.css('top');
			var top = parseInt(toppx, 10);

			if (top > -650) {
				$("#basket_view").css('top', top - 45 + "px");
			}

			$("#basket_view ul").append('<li class="rcart-dish eleme_view">' 
			+ '<div class="rcart-d-name">' + name + '</div>' 
			+ '<div class="rcart-d-modify">' 
			+ '<a class="rcart-d-act minus d_btn" ubt-click="427">-</a>' 
			+ '<input class="rcart-d-qty set_num_in" id="shuliang'+name+'" type = "text" value = '+qty+' ubt-change="427">' 
			+ '<a class="rcart-d-act add i_btn" ubt-click="427">+</a>'
			+'</div>' 
			+ '<div id="cost'+name+'" class="rcart-d-total" >' + price + '</div>' 
			+ '<a class="rcart-d-del r_btn">×</a>' 
			+ '</li>');			
		}
		
		else{
			var totalC=$("#shuliang"+name).val();
			
			var total=parseInt(totalC,10);
			var totalqty=total+1;
			
			var totalcost=price*totalqty.toFixed(2);
			
			$("#shuliang"+name).val(totalqty);
			$("#cost"+name).text(totalcost);
		}

	});

});

