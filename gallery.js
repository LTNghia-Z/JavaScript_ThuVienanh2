/* Hàm cập nhật ảnh lớn khi rê chuột hoặc tab bàn phím */
function upDate(previewPic) {
  console.log("Triggered preview update");
  console.log("Alt:", previewPic.alt);
  console.log("Source:", previewPic.src);

  var targetDiv = document.getElementById("image");
  targetDiv.innerHTML = previewPic.alt;
  targetDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Hàm khôi phục trạng thái ban đầu khi rời chuột hoặc rời tiêu điểm phím */
function unDo() {
  var targetDiv = document.getElementById("image");
  targetDiv.style.backgroundImage = "url('')";
  targetDiv.innerHTML = "Hover over or tab to an image below to display here.";
}

/* Hàm chạy tự động khi tải trang (sự kiện onload) */
function initializeGallery() {
  // 9a. Thông báo kiểm tra sự kiện kích hoạt
  console.log("Page fully loaded: initializeGallery called");

  // Lấy danh sách toàn bộ các ảnh có class là 'preview'
  var images = document.querySelectorAll(".preview");

  // 9b. Vòng lặp duyệt qua từng ảnh
  for (var i = 0; i < images.length; i++) {
    // 9c. Gán thuộc tính tabindex để cho phép truy cập bằng phím Tab
    images[i].setAttribute("tabindex", "0");
    console.log("Assigned tabindex to image " + (i + 1));
  }
}
