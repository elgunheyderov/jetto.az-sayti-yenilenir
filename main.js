






/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);













// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();







class YBCard {

  constructor(id, title, description, image) {
    this.idCard = id
    this.titre = title
    this.description = description
    this.image = image
  }

  initCard() {
    this.updateDom();
    this.activateListeners();
  }

  updateDom() {
    var cardDom = document.getElementById(this.idCard)
    if(cardDom.hasChildNodes()){
      var cardDomImage = cardDom.getElementsByClassName('card-image')[0]
      cardDomImage.src = this.image;

      var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
      cardDomTitle.innerHTML = this.titre;

      var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
      cardDomDesc.innerHTML = this.description;
    }
  }

  activateListeners() {
    var cardDom = document.getElementById(this.idCard)
    cardDom.addEventListener("mouseover", function( event ) {
      var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
      var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
      var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
      var cardMiddleHeight = cardDomTitle.offsetHeight + cardDomDesc.offsetHeight;
      cardDomMiddle.style.height = cardMiddleHeight + 15 + "px";
    }, false);

    cardDom.addEventListener("mouseout", function( event ) {
      var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
      cardDomMiddle.style.height = 50 + "px";
    }, false);
  }
}

var card1 = new YBCard("card1", "Bağlamaların Daşınılması", "“JETTO” ABŞ, Almaniya, BƏƏ, Türkiyə,Çin və Rusiyadan poçt bağlamalarının, onlayn mağazalar vasitəsilə sifariş edilən malların,eləcə də böyük həcmli və ağır çəkili qeyri-standart yüklərin qısa müddətdə hava nəqliyyatı ilə çatdırılmasını təşkil edir. JETTO.az saytında qeydiyyatdan keçərək xidmətlərimizdən istifadə edə bilərsiniz.", "https://umbro-rus.ru/assets/images/resources/slider/umbro-rus_%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0%20%D0%BA%D1%83%D1%80%D1%8C%D0%B5%D1%80%D0%BE%D0%BC.jpg")
card1.initCard();

var card2 = new YBCard("card2", "Korporativ Xidmətlər", "Əgər siz onlayn alış edə bilmirsinizsə, biz Sizə kömək edərik! Əməkdaşlarımız daim Sizin suallarınızı cavablandırmağa, Sizə kömək etməyə və ya mövcud şərtlərinə uyğun olaraq ən yaxşı seçimləri təklif etməyə hazırdırlar. Biz sizin üçün bütün internet- mağazaları əlçatan edirik. Siz alırsınız, biz sürətli və sərfəli çatdırırıq.", "https://mot63.ru/upload/iblock/fa6/fa6e2a532d8a49eb52343ec435e45b88.jpg");
card2.initCard();

var card3 = new YBCard("card3", "Kuryer Xidməti", "Dəyərli vaxtınızı itirməyin, kuryer sifariş edin! Kuryerimiz bağlamanızı evinizə, iş yerinizə və ya istənilən digər ünvana çatdıra bilər. Bağlamaların sayından və çəkisindən asılı olmayaraq, çatdırılma haqqı hər hesaba(akkaunta) və seçilən tarifə uyğun olaraq hesablanır. Çatdırıma haqqını bağlamanı əldə edən zaman nəğd ödəyə bilərsiniz.", "https://content.fortune.com/wp-content/uploads/2016/05/190582_volvo_cars_pioneers_two_hour_in_car_delivery_service_with_swedish_start_up.jpg?resize=1200,600");
card3.initCard();


























$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



















