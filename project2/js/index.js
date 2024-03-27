document.addEventListener("DOMContentLoaded", function() {
    // Lắng nghe sự kiện gửi biểu mẫu
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của biểu mẫu
  
      // Lấy giá trị từ các trường biểu mẫu
      var firstName = document.getElementById("fname").value;
      var lastName = document.getElementById("lname").value;
      var country = document.getElementById("country").value;
      var subject = document.getElementById("subject").value;
  
      // Gửi dữ liệu đến máy chủ hoặc xử lý nó ở đây
      // Ví dụ:
      console.log("First Name: " + firstName);
      console.log("Last Name: " + lastName);
      console.log("Country: " + country);
      console.log("Subject: " + subject);
  
      // Reset biểu mẫu sau khi gửi thành công
      form.reset();
    });
  });
  