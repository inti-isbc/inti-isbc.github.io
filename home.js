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

var yuen = new Icon("yuen",'yuen_des');
var clara = new Icon("clara",'clara_des');
var suaane = new Icon("suaane","suaane_des");
var alyssa = new Icon("alyssa",'alyssa_des');
var alwin = new Icon("alwin",'alwin_des');
var terry = new Icon('terry','terry_des');
var nigell = new Icon("nigell","nigell_des");
var kabilen = new Icon("kabilen",'kabilen_des');

var intima = new Icon("intima",'intima_des');
var isst = new Icon("isst",'isst_des');
var leeren = new Icon("leeren",'leeren_des');
var syuenern = new Icon("syuenern",'syuenern_des');
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

var all = [yuen, clara, suaane, alyssa, alwin, terry, nigell , kabilen, intima, isst, leeren, syuenern , ashley, nicholas, woeiming, mingchan, boonchung, fuyong,yankun,eugene_phuah,eugene_lim,peigent,arthur,wueilong,jingru,alrik,ricky,yontze];

$(document).ready(function(){
	$('.facemash_parent').mouseenter(function(){

		var a = $(this).attr('id');
		var k = this.children;
		for(var i = 0 ; i < k.length ; k++)
			if($(k[i]).attr('class') == 'facemash_picture')
				$(k[i]).css('-webkit-filter','grayscale(0%)');
				$(k[i]).css('-moz-filter','grayscale(0%)');
				$(k[i]).css('-o-filter','grayscale(0%)');
				$(k[i]).css('filter','grayscale(0%)');


		console.log(a);
		for(var i = 0 ; i < all.length ; i++)
		{
			if(a == all[i].img)
			{
				//move irrelevant pictures back to their original position
				$('#' + all[i].des).slideDown(200, function(){

				});
			} 
		}
	});

	$('.facemash_parent').mouseleave(function(){

		var a = $(this).attr('id');
		var k = this.children;
		for(var i = 0 ; i < k.length ; k++)
			if($(k[i]).attr('class') == 'facemash_picture')
				$(k[i]).css('-webkit-filter','grayscale(100%) contrast(150%) sepia(80%)');
				$(k[i]).css('-moz-filter','grayscale(100%) contrast(150%) sepia(80%)');
				$(k[i]).css('-o-filter','grayscale(100%) contrast(150%) sepia(80%)');
				$(k[i]).css('filter','grayscale(100%) contrast(150%) sepia(80%)');

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