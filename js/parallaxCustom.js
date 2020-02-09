// The Window interface represents a window containing a DOM document
window.onload = function () {
    let pictures = [
        'files/xtreme1.jpg',
        'files/xtreme2.jpg',
        'files/xtreme3.jpg',
        'files/xtreme4.jpg',
        'files/xtreme5.jpg'
    ];


    let numPics = pictures.length;

    if (document.images) {
        let chosenPic = Math.floor((Math.random() * numPics));

        $('.parallax-window').parallax({imageSrc: pictures[chosenPic]});

    }
};