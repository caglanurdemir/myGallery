function msg() {
    alert("ALERT MSG");
    console.log("script is working!");
}
msg();

var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};