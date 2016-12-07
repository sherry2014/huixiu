function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串 
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
$(document).ready(function () {
    var Request = new Object();
    Request = GetRequest();
    var pic = Request['id'];
    var category = Request['category'];
    var sub = Request['sub'];
    if(sub !=undefined && sub!=''){
        category=category+"/"+sub;
    }
    var t = Request['t'];
    //DS1419
    $("#product_name").text(pic);
    $("#product_pic").attr("src", "pics/huixiu/"+category+"/"+pic+"."+t);
    $("#product_pic").attr("jqimg", "pics/huixiu/"+category+"/"+pic+"."+t);
    $(".no_jq_img").attr("src", "pics/huixiu/"+category+"/"+pic+"."+t);
});
