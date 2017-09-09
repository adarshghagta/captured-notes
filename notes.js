/*var video = $("#video")[0];
var canvas = $("#canvas")[0];
var context = canvas.getContext("2d");
var w, h, ratio;
video.onloadedmetadata = function() {
	ratio = video.videoWidth / video.videoHeight;
	w = video.videoWidth - 100;
	h = parseInt(w / ratio, 10);
	canvas.width = w;
	canvas.height = h;
};
function takeScreenshot() {
	context.fillRect(0, 0, w, h);
	context.drawImage(video, 0, 0, w, h);
}*/
$.feedback({
	ajaxURL: 'http://test.url.com',
	html2canvasURL: 'html2canvas.js',
	html2canvas: window.html2canvas
});
/*function takeSnap() {
	window.html2canvas($("#1")[0], {
	    onrendered: function(canvas) {
	        // canvas is the final rendered <canvas> element
	        $("#2")[0].append(canvas);
	    },
	    logging: true
	});
}*/