$(document).ready(function(){
	setTimeout(function(){
		var k = document.getElementsByClassName('how_flash_card');
		var z = 0;
		for(var i = 0 ; i < 3 ; i++)
		{
			var j = $(k[i]).height();
			if(j > z) z = j;
		}

		for(var i = 0 ; i < 3 ;i++)
			$(k[i]).height(z);

	}, 500);
	$('#head_mini_button1').css('left' , (($('#header').width() - $('#head_mini_button2').width() - $('#head_mini_button1').width()) / 2 - 20));
	$('#head_mini_button2').css('right' , (($('#header').width() - $('#head_mini_button2').width() - $('#head_mini_button1').width()) / 2 - 20));
	
});

function Icon (img_id,description_id)
{
	this.img = img_id;
	this.des = description_id;
}

var nicholas = new Icon("nicholas","nicholas_des");
var woeiming = new Icon("woeiming",'woeiming_des');
var fuyong = new Icon ("fuyong","fuyong_des");
var mingchan = new Icon ('mingchan','mingchan_des');
var boonchung = new Icon("boonchung",'boonchung_des');
var yankun = new Icon("yankun",'yankun_des');
var eugene_phuah = new Icon("eugene_phuah",'eugene_phuah_des');
var peigent = new Icon("peigent",'peigent_des');
var arthur = new Icon("arthur",'arthur_des');
var eugene_lim = new Icon("eugene_lim",'eugene_lim_des');
var wueilong = new Icon("wueilong",'wueilong_des');
var jingru = new Icon("jingru",'jingru_des');
var alrik = new Icon("alrik",'alrik_des');
var ricky = new Icon("ricky",'ricky_des');
var yontze = new Icon("yontze",'yontze_des');
var ashley = new Icon("ashley",'ashley_des');

var all = [ashley, nicholas, woeiming, mingchan, boonchung, fuyong,yankun,eugene_phuah,eugene_lim,peigent,arthur,wueilong,jingru,alrik,ricky,yontze];

$(document).ready(function(){
	$('.facemash_parent').mouseenter(function(){
		$(this).css('-webkit-filter','grayscale(0%)');
		var a = $(this).attr('id');
		console.log(a);
		for(var i = 0 ; i < all.length ; i++)
		{
			if(a == all[i].img)
			{
				//move irrelevant pictures back to their original position
				$('#' + all[i].des).slideDown(100, function(){

				});
			} 
		}
	});

	$('.facemash_parent').mouseleave(function(){
		$(this).css('-webkit-filter','grayscale(100%) contrast(150%) sepia(80%)');
		var a = $(this).attr('id');
		console.log(a);
		for(var i = 0 ; i < all.length ; i++)
		{
			if(a == all[i].img)
			{
				$('#' + all[i].des).slideUp(100,function(){

				});
			} 
		}		
	});
});