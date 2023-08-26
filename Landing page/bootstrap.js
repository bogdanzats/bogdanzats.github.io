let taigo = document.querySelector('.taigo');
let golfVariant = document.querySelector('.golf_variant');
let newTRoc = document.querySelector('.newTRoc');
let ArteonShootingBrake = document.querySelector('.arteon_shooting_brake');
let tiguan = document.querySelector('.tiguan');
let ID3 = document.querySelector('.id3');

let tiguanCarousel = document.querySelector('.tiguan_carousel');
let taigoCarousel = document.querySelector('.taigo_carousel');
let golfVariantCarousel = document.querySelector('.golf_variant_carousel')
let newTRocCarousel = document.querySelector('.newTRoc_carousel');
let ArteonShootingBrakeCarousel = document.querySelector('.arteon_shooting_brake_carousel');
let ID3Carousel = document.querySelector('.id3_carousel');


taigo.onclick = function(){
    taigoCarousel.classList.remove('d-none');
    tiguanCarousel.classList.add('d-none');
    golfVariantCarousel.classList.add('d-none');
    newTRocCarousel.classList.add('d-none');
    ArteonShootingBrakeCarousel.classList.add('d-none');
    ID3Carousel.classList.add('d-none');
}

tiguan.onclick = function(){
    taigoCarousel.classList.add('d-none');
    tiguanCarousel.classList.remove('d-none');
    golfVariantCarousel.classList.add('d-none');
    newTRocCarousel.classList.add('d-none');
    ArteonShootingBrakeCarousel.classList.add('d-none');
    ID3Carousel.classList.add('d-none');
}

golfVariant.onclick = function(){
    taigoCarousel.classList.add('d-none');
    tiguanCarousel.classList.add('d-none');
    golfVariantCarousel.classList.remove('d-none');
    newTRocCarousel.classList.add('d-none');
    ArteonShootingBrakeCarousel.classList.add('d-none');
    ID3Carousel.classList.add('d-none');
}

newTRoc.onclick = function(){
    taigoCarousel.classList.add('d-none');
    tiguanCarousel.classList.add('d-none');
    golfVariantCarousel.classList.add('d-none');
    newTRocCarousel.classList.remove('d-none');
    ArteonShootingBrakeCarousel.classList.add('d-none');
    ID3Carousel.classList.add('d-none');
}

ArteonShootingBrake.onclick = function(){
    taigoCarousel.classList.add('d-none');
    tiguanCarousel.classList.add('d-none');
    golfVariantCarousel.classList.add('d-none');
    newTRocCarousel.classList.add('d-none');
    ArteonShootingBrakeCarousel.classList.remove('d-none');
    ID3Carousel.classList.add('d-none');
}

ID3.onclick = function(){
    taigoCarousel.classList.add('d-none');
    tiguanCarousel.classList.add('d-none');
    golfVariantCarousel.classList.add('d-none');
    newTRocCarousel.classList.add('d-none');
    ArteonShootingBrakeCarousel.classList.add('d-none');
    ID3Carousel.classList.remove('d-none');
}

