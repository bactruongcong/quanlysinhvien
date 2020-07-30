var SinhVienServices = function(){
    this.themMoi = function(sinhVien){

    }
    this.xoa = function (maSV){

    }
    this.capNhat = function(sinhvien){

    }
    this.layThongtinsinhvien = function(maSV){

    }
    this.layDanhsachsinhvien = function(){
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien',
            method: 'GET'
        });
    }
}