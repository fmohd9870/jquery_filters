var products = [{
  "id": "100",
  "name": "iPhone 4S",
  "brand": "Apple",
  "os": "iOS"
},
{
  "id": "101",
  "name": "Moto X",
  "brand": "Motorola",
  "os": "Android"	
},
{
  "id": "102",
  "name": "iPhone 6",
  "brand": "Apple",
  "os": "iOS"
},
{
  "id": "103",
  "name": "Samsung Galaxy S",
  "brand": "Samsung",
  "os": "Android"
},
{
  "id": "104",
  "name": "Google Nexus",
  "brand": "ASUS",
  "os": "Android"
},
{
  "id": "105",
  "name": "Surface",
  "brand": "Microsoft",
  "os": "Windows"
}];
$(document).ready(function(){
  display_products();
  $("#brand").on("change",function(){
    temp=0;
    if($("#brand").val()=='1'){
      display_products();
    }
    else{
    var values = $("#brand").val();
    by_brand(temp,values);
    }
  });
  $("#os").on("change",function(){
    temp=0;
    if($("#os").val()=='1'){
      display_products();
    }
    else{
      var values=$("#os").val();
      by_os(temp,values);
    }
  });
  $("#search-btn").click(function(){
    var temp=0;
    var values=$("#search-input").val();
    by_search(temp,values);
  });
  $(".delete").on("click",function(){
    // var row_id=$(this).attr("data-id");
    var values=$(this).attr("data-id");
    console.log("delete id="+$(this).attr("data-id"));
    $("#r"+values).css("display","none");
  });
  
});
function display_products(){
  var temp=0;
  for(var i=0;i<products.length;i++){
    temp+="<tr class='row' id='r"+products[i].id+"'><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td><input type='button' data-id='"+products[i].id+"' class='delete' value='X'></td></tr>";
  }
  $("#tbody").html(temp);
}
function by_brand(temp,values){
  console.log("brand selected");
  console.log(values);
  for(var i=0;i<products.length;i++){
    if("'"+values+"'"=="'"+products[i].brand+"'"){
      console.log(products[i].brand);
    temp+="<tr class='row' id='r"+products[i].id+"'><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td><input type='button' data-id='"+products[i].id+"' class='delete' value='X'></td></tr>";
  }
}
$("#tbody").html(temp);
}
function by_os(temp,values){
  console.log("OS selected");
  console.log(values);
  for(var i=0;i<products.length;i++){
    if("'"+values+"'"=="'"+products[i].os+"'"){
      console.log(products[i].brand);
    temp+="<tr class='row' id='r"+products[i].id+"'><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td><input type='button' data-id='"+products[i].id+"' class='delete' value='X'></td></tr>";
  }
}
$("#tbody").html(temp);
}
function by_search(temp,values){
  console.log("brand selected");
  console.log(values);
  for(var i=0;i<products.length;i++){
    if("'"+values+"'"=="'"+products[i].id+"'"){
      console.log(products[i].brand);
    temp+="<tr class='row' id='r"+products[i].id+"'><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td><input type='button' data-id='"+products[i].id+"' class='delete' value='X'></td></tr>";
  }
}
$("#tbody").html(temp);
}
