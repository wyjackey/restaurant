var qty = 0;
var list = [];

$(document).ready(function() {


	var temp = sessionStorage.getItem('menuList');
    var menuList = $.parseJSON(temp);
	// var retrievedData = localStorage.getItem("listMenu");
	// var movies2 = JSON.parse(retrievedData);
	
	// <li class="cgroup-item s_food" data-id="26452480" >
      // <div class="cdish-name">
            // 土豆片
    // </div>
    // <div class="cdish-price symbol-rmb">2</div>
    // <div class="cdish-modify">
            // <a class="cdish-action desc dec_btn" ubt-click="434">-</a><input class="cdish-qty set_num" type="text" value="1" ubt-change="434" /><a class="cdish-action incr inc_btn" ubt-click="434">+</a>
          // </div>
    // <div class="cdish-total symbol-rmb">2</div>
        // <div class="cdish-del">
      // <a class="del del_btn" ubt-click="433">&times;</a>
    // </div>
	// </li>
	
	// <ul class="cgroup-list">

	var m = menuList.length;
	for (var i = 0; i < m; i++) {
		list = menuList[i];
		var name = list[0];
		var number = list[1];
		var price = list[2];
		qty = qty + number;
		$("#cate_view ul").append('<li class="cgroup-item s_food" data-id=">'+name+'" ><div class="cdish-name">'+name+'</div><div class="cdish-price">&nbsp;&yen;'+price
		+'</div><div class="cdish-modify"><a class="cdish-action desc dec_btn" ubt-click="434">-</a><input class="cdish-qty set_num" type="text" value="'+number
		+'" ubt-change="434" /><a class="cdish-action incr inc_btn" ubt-click="434">+</a></div><div class="cdish-total">&nbsp;&yen;'+number*price
		+'</div><div class="cdish-del"><a class="del del_btn" ubt-click="433"></a></div></li>');
		// $("#cate_view_1847524").append('<li class="cgroup-item s_food" data-id="')
		// alert(current);
	}
	
	var total = sessionStorage.getItem('amount');
	$("#summary").append('<div class="cart-summary basket_info">共'+qty+'份美食　应付金额：<span id="total_price_basket" class="symbol-rmb cart-cost">'+total+'</span></div>');

});


