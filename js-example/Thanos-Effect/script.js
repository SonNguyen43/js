disintegrate.init();

/* Thêm sự kiện click cho img */
document.getElementById('img').addEventListener('click', e => {
    /* Tạo hạt khi click */
    const disObj = disintegrate.getDisObj(e.target);
    disintegrate.createSimultaneousParticles(disObj);

    /* Remove ảnh */
    e.target.remove();
})

/* Hàm tạo cho các hạt di chuyển xung quanh  */
const thanosSnap = function(){
    /* Tạo tốc độ di chuyển theo trục */
    this.speedX = Math.random();
    this.speedY = Math.random() * -1;

    /* Thời lượng kéo dài trong bao nhiêu mili giây */
    this.animationDuration = 4000;

    /* Đặt size cho hạt */
    this.size = 5;

    /* Di chuyển và biến mất (thay đổi các giá trị của hạt được tạo ra) */
    /* ctx: bối cảnh || precentComplete: phần trăm hoàn thành */
    this.draw = (ctx,precentComplete) => {
        /* Vẽ hình chữ nhật - vị trí bắt đầu kết thúc */
        ctx.beginPath();
        ctx.fillRect(this.startX - this.size / 2, this.startY - this.size / 2, this.size, this.size);
        
        /* Nhận dạng màu ảnh (giữ lại màu ảnh) */
        const r = this.rgbArray[0];
        const g = this.rgbArray[1];
        const b = this.rgbArray[2];
        const a = 1 - precentComplete;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        ctx.fill();

        /* Tăng tốc độ di chuyển */
        this.speedX *= 1.4;
        this.speedY *= 1.4;

        /* Di chuyển theo vị trí và tốc độ */
        this.startX += this.speedX;
        this.startY += this.speedY;

        /* Resize nếu thích */
        // this.size = 5;
    }
}

disintegrate.addParticleType(thanosSnap);