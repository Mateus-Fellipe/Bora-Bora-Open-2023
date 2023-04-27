const imgs = ["img-01", "img-02", "img-03", "img-04", "img-05", "img-06", "img-07", "img-8"]

function modal(url){
    var windonwModal = document.getElementById("modal");
    var imgModal = document.getElementById("imgModal");
    var closeModal = document.getElementById("closeModal");

    windonwModal.style.display = 'block';
    imgModal.src= url;

    closeModal.onclick = function(){
        windonwModal.style.display = 'none';
    }
}

function selectImages(){

}

