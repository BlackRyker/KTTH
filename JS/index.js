$(document).ready(function () {
    var i = 1;
    $("#btnDK").click(function () {
        $("#myModal").modal();
    })

    function kiemTraTen() {
        var i = 1;
        var mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#txtTen").val() == "") {
            $("#tbTen").html("Không để trống");
            return false;
        }
        if($(!mauKT.test($("#txtTen").val()))){
            $("#tbTen").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbTen").html("*");
        return true;
    }
    $("#txtTen").blur(kiemTraTen);
    
    function kiemTraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/
        if($("#txtSDT").val() == "") {
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if($(!mauKT.test($("#txtSDT").val()))){
            $("#tbSDT").html("Theo Dạng 0xxx-xxx-xxx trong đó x là số");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txSDT").blur(kiemTraSDT);

    $("#btnSubDK").click(function(){
    var ten = $("#txtTen").val();
    var ht = $("#txt").val();
    var email = $("#txtEmail").val();
    var dong = '<tr><td>'+ i + '<td>'+ ten + '</td>' + '<td>'+ cmnd + '<td>'+ qq + '<td>'+ email + '<td>'+ sdt + '</td>'+ anhdaidien + '</td></tr>'
    $("#danhSach").append(dong);
    $("#myModal").hide();
    })
})