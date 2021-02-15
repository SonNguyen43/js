const modelParams = {
    flipHorizontal: true,   // flip e.g for video 
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.79,    // confidence threshold for predictions.
}

navigator.getUserMedia = 
    navigator.getUserMedia ||
    /* -webkit là của Chrome và Safari */
    navigator.webkitGetUserMedia ||
    /* -moz là của Firefox */
    navigator.mozGetUserMedia ||
    /* -o là của Opera */
    /* -ms là của Internet Explorer */
    navigator.msGetUserMedia;

/* Select everything in my html */
const video = document.querySelector("#video");
const audio = document.querySelector("#audio");
const canvas = document.querySelector("#canvas");

/* 
    Đối tượng getContext("2d") trong HTML5 sở hữu nhiều hàm dành cho vẽ hình ảnh 
    như hình hộp, hình tròn 
*/
const context = canvas.getContext("2d");
let model;

/* Mở Webcam */
handTrack.startVideo(video).then(status =>{
    if (status) {
        navigator.getUserMedia({video: {}}, stream =>{
            video.srcObject = stream;

            /* Cập nhật mỗi giây */
            setInterval(runDetection, 1000);
        },
            err =>console.log(err)
        );
    }
});

function runDetection(){
    model.detect(video).then(predictions =>{
        console.log(predictions);

        /* Tạo ra một bản sao */
        // model.renderPredictions(predictions, canvas, context, video);

        if(predictions.length > 0){
            /* Phát audio */
            audio.play();

            /* Alert */
            Swal.fire({
                icon: 'success',
                title: 'Xác nhận..! Đã nhận lệnh..!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
}

/* Load cái model của thư viện lên */
handTrack.load(modelParams).then(lmodel =>{
    model = lmodel;
})