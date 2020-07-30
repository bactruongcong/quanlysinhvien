var svService = new SinhVienServices();

var renderSinhVien = function () {
  var promise = svService.layDanhsachsinhvien();
  promise
    .then(function (res) {
      console.log("data", res.data);
      //Tao <tr table..
      //Tao noi dung cac the tr
      var contentTable = "";

      for (var index = 0; index < res.data.length; index++) {
        //Moi lan duyet lay ra 1 doi tuong sinh vien
        var sinhVien = res.data[index];
        contentTable += `
            <tr>
                <td>${sinhVien.HoTen}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            `;
      }
      //In ra giao dien
      document.getElementById("tblSinhVien").innerHTML = contentTable;
    })
    .catch(function (err) {
      console.log(error.response.data);
    });
};
renderSinhVien();
var themsinhvien = function () {
  console.log("Thêm sinh viên");
};

var xoaSinhVien = function () {
  console.log("Xóa sinh viên");
};
