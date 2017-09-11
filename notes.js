var video = $("#video")[0];
var canvas = $("#canvas")[0];
var context = canvas.getContext("2d");
var w, h, ratio;
canvas.width = 400;
canvas.height = 300;
video.onloadedmetadata = function() {
	ratio = video.videoWidth / video.videoHeight;
	w = video.videoWidth - 100;
	h = parseInt(w / ratio, 10);
	canvas.width = w;
	canvas.height = h;
};

function showImage(image) {
	$("#output-image").attr("src", image);
}

function takeScreenshot(image) {
	context.fillRect(0, 0, w, h);
	context.drawImage(video, 0, 0, w, h);
	img = canvas.toDataURL();
	showImage(img);
	$.feedback({
		ajaxURL: 'http://test.url.com',
		html2canvas: window.html2canvas,
		onScreenshotTaken: showImage,
		showDescriptionModal: false,
		feedbackButton: "#123",
		capturedElement: "#output-image"
	});
}
/*function takeScreenshot(image) {
	$("#output-image").attr("src", image);
}
$.feedback({
	ajaxURL: 'http://test.url.com',
	html2canvas: window.html2canvas,
	onScreenshotTaken: takeScreenshot,
	showDescriptionModal: false,
	feedbackButton: "#123",
	capturedElement: "#1"
});*/
/*function takeSnap() {
	window.html2canvas($("#1")[0], {
	    onrendered: function(canvas) {
	        // canvas is the final rendered <canvas> element
	        $("#2")[0].append(canvas);
	    },
	    logging: true
	});
}*/