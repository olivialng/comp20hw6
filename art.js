function makeObject(name, price, small, large) {
	this.name = name;
	this.price = price;
	this.small = small;
	this.large = large
}
function createArt(src, height, width, id) {
	var image = document.createElement('img');
	image.setAttribute('src', src);
	image.setAttribute('height', height);	
	image.setAttribute('width', width);
	image.setAttribute('id', id);
	return image; 
};

function Display(array, id){
  for (var i = 0; i < 5; i++){
    if (id == array[i].small.id)
      return array[i].large.src
  }
}

var images = [];
$(document).ready(function(){
	var thmb1 = createArt('img/monet 1 thmb.jpg', '150px', '150px', 'monet1_s');
	var thmb2 = createArt('img/monet 2 thmb.jpg', '150px', '150px', 'monet2_s');
	var thmb3 = createArt('img/monet 3 thmb.jpg', '150px', '150px', 'monet3_s');
	var thmb4 = createArt('img/monet 4 thmb.jpg', '150px', '150px', 'monet4_s');
	var thmb5 = createArt('img/monet 5 thmb.jpg', '150px', '150px', 'monet5_s');

	var large1 = createArt('img/monet 1 thmb.jpg', '500px', '500px', 'monet1_l');
	var large2 = createArt('img/monet 2 thmb.jpg', '500px', '500px', 'monet2_l');
	var large3 = createArt('img/monet 3 thmb.jpg', '500px', '500px', 'monet3_l');
	var large4 = createArt('img/monet 4 thmb.jpg', '500px', '500px', 'monet4_l');
	var large5 = createArt('img/monet 5 thmb.jpg', '500px', '500px', 'monet5_l');

	var monet1 = new makeObject('Waterlilies', "$" + 85 + "." + 0 + 0, thmb1, large1);
	var monet2 = new makeObject('Centered Waterlilies', "$" + 200 + "." + 0 + 0, thmb2, large2);
	var monet3 = new makeObject('Monet Bridge', "$" + 823 + "." + 0 + 0, thmb3, large3);
	var monet4 = new makeObject('Grass Lilies', "$" + 230 + "." + 0 + 0, thmb4, large4);
	var monet5 = new makeObject('Monets House', "$" + 23 + "." + 0 + 0, thmb5, large5);
	images = [monet1, monet2, monet3, monet4, monet5];

	for (var i = 0; i < 5; i++){
	    var image_div = document.getElementById("image_div");
	    image_div.appendChild(images[i].small);
  	}
});

// Fade the image in when hovering over the small thumbnail
$(document).on("mouseenter", "img", function(){
  var big_src = Display(images, $(this).attr("id"));
  $("#image_big").css("background-image", "url('" + big_src + "')");
   $("#image_big").fadeIn();
});

// Fade the image out when leaving the small thumbnail
$(document).on("mouseleave", "img", function(){
  $("#image_big").fadeOut();
});

// Display the name and price of the art above the pic
$(document).on("click", "img", function(){
  for (var i = 0; i < 5; i++){
    if ($(this).attr("id") == images[i].small.id){
      var name = images[i].name
      var price = images[i].price
      $("#price").text(name + " " +  price);
    }
  }
  setTimeout(function() {
    $("p").text(" ");
  },5000);
});








