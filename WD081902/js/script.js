document.getElementById("submit").addEventListener("click", function (event) {
    let key = document.getElementById("key").value.trim();
    let from = document.getElementById("from").value.trim();
    let to = document.getElementById("to").value.trim();

    let errors = [];

    // Kiểm tra trường Keyword
    if (key === "") {
        errors.push("Keyword không được bỏ trống.");
    }

    // Kiểm tra Price 'from'
    if (from === "") {
        errors.push("Price 'from' không được để trống.");
    } else if (isNaN(from)) {
        errors.push("Price 'from' phải là số.");
    }

    // Kiểm tra Price 'to'
    if (to === "") {
        errors.push("Price 'to' không được để trống.");
    } else if (isNaN(to)) {
        errors.push("Price 'to' phải là số.");
    }

    // Hiển thị lỗi nếu có
    if (errors.length > 0) {
        alert(errors.join("\n"));
        event.preventDefault(); // Ngăn form gửi đi nếu có lỗi
    } else {
        alert("Validate thành công");
    }
});
