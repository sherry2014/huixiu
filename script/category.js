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
    var categorys = {};
    categorys['CURTAIN'] = ['HXWC-005.png', 'HXWC-007.png', 'HXWC-012.png', 'HXWC-016.png', 'HXWC-018.png', 'HXWC-020.png', 'HXWC-022.png', 'HXWC-023.png', 'HXWC-024.png', 'HXWC-025.png', 'HXWC-029.png', 'HXWC-031.png', 'HXWC-034.png', 'HXWC-040.png'];
    categorys['CURTAIN/COFFEECURTAIN'] = ['HXDC-001.png',
        'HXDC-004.png',
        'HXDC-008.png',
        'HXDC-010.png',
        'HXDC-013.png',
        'HXDC-015.png',
        'HXWC-118.png',
        'HXWC-120.png',
        'HXWC-122.png',
        'HXWC-124.png',
        'MK99-2.jpg',
        'MK99-3.jpg',
        'HXDC-002.png',
        'HXDC-007.png',
        'HXDC-009.png',
        'HXDC-012.png',
        'HXDC-014.png',
        'HXWC-117.png',
        'HXWC-119.png',
        'HXWC-121.png',
        'HXWC-123.png',
        'MK99-1.jpg',
        'MK99-5.jpg',
        'MK99-4.jpg',];
	categorys['CURTAIN/NEW'] = ["DQ012-1.png",
		"DQ012.png",
		"DQ013-1.png",
		"DQ013.png",
		"DQ014-1.png",
		"DQ014.png",
		"DQ015-1.png",
		"DQ015.png",
		"DQ018-1.png",
		"DQ018.png",
		"DQ019-1.png",
		"DQ019.png",
		"DQ020-1.png",
		"DQ020.png",
		"DQ021-1.png",
		"DQ021.png",
		"DQ035-1.png",
		"DQ035.png",
		"DQ036-1.png",
		"DQ036.png",
		"DQ037-1.png",
		"DQ037.png",
		"DQ038-1.png",
		"DQ038.png",
		"DQ039-1.png",
		"DQ039.png",
		"DQ040-1.png",
		"DQ040.png",
		"DQ041-1.png",
		"DQ041.png",
		"DQ042-1.png",
		"DQ042.png",
		"DQ043-1.png",
		"DQ043.png",
		"DQ044-1.png",
		"DQ044.png",
		"DQ045-1.png",
		"DQ045.png",
		"DQ046-1.png",
		"DQ046.png"
	];


	categorys['TABLECLOTH'] = [];
	categorys['TABLECLOTH/PLACEMAT'] = ["HXPM-001.png",
		"HXPM-002.png",
		"HXPM-003.png",
		"HXPM-004.png",
		"HXPM-005.png",
		"HXPM-006.png",
		"HXPM-007.png",
		"HXPM-008.png",
		"HXPM-009.png",
		"HXPM-010.png",
		"HXPM-011.png",
		"HXPM-012.png",
		"HXPM-013.png",
		"HXPM-014.png",
		"HXPM-015.png",
		"HXPM-016.png",
		"HXPM-017.png",
		"HXPM-018.png",
		"HXPM-019.png",
		"HXPM-020.png",
		"HXPM-021.png",
		"HXPM-022.png",
		"HXPM-023.png",
		"HXPM-024.png",
		"HXTR-024.png",
		"HXTR-025.png",
		"QQ截图20131201134528.png",
		"QQ截图20131201134537.png"];
	categorys['TABLECLOTH/TABLECLOTH'] = ["HXTC-003.png",
		"HXTC-004.png",
		"HXTC-005.png",
		"HXTC-008.png",
		"HXTC-009.png",
		"HXTC-010.png",
		"HXTC-011.png",
		"HXTC-012.png",
		"HXTC-013.png",
		"HXTC-014.png",
		"HXTC-018.png",
		"HXTC-019.png",
		"HXTC-025.png",
		"HXTC-026.png",
		"HXTC-032.png",
		"HXTC-033.png"];

	categorys['GARMENTFABRIC/POLYLACE'] = ["DS1419.jpg",
		"DS1425T.jpg",
		"DS1572T.jpg",
		"DS1616.jpg",
		"F1-1.jpg",
		"F10-1.jpg",
		"F100-2.jpg",
		"F103-1.jpg",
		"F104-1.jpg",
		"F105-1.jpg",
		"F107-1.jpg",
		"F109-1.jpg",
		"F11-1.jpg",
		"F112-1.jpg",
		"F114-1.jpg",
		"F115-1.jpg",
		"F115-2.jpg",
		"F12.jpg",
		"F128.jpg",
		"F133-1.jpg",
		"F133.jpg",
		"F134.jpg",
		"F137-1.jpg",
		"F14-1.jpg",
		"F140-1.jpg",
		"F142-1.jpg",
		"F146-1.jpg",
		"F149-1.jpg",
		"F15-1.jpg",
		"F154-1.jpg",
		"F157.jpg",
		"F158-1.jpg",
		"F159.jpg",
		"F160-1.jpg",
		"F161-1.jpg",
		"F166-1.jpg",
		"F167-1.jpg",
		"F17-1.jpg",
		"F18-1.jpg",
		"F189-1.jpg",
		"F19-1.jpg",
		"F191-1.jpg",
		"F194-1.jpg",
		"F199-1.jpg",
		"F20-1.jpg",
		"F205-1.jpg",
		"F211-1.jpg",
		"F219-1.jpg",
		"F220-1.jpg",
		"F221-2.jpg",
		"F222-1.jpg",
		"F23.jpg",
		"F231-1.jpg",
		"F234-1.jpg",
		"F236-1.jpg",
		"F237-1.jpg",
		"F239-1.jpg",
		"F245-1.jpg",
		"F246-1.jpg",
		"F249-1.jpg",
		"F252-1.jpg",
		"F257-1.jpg",
		"F258-1.jpg",
		"F263-2.jpg",
		"F265-1.jpg",
		"F266-1.jpg",
		"F270-1.jpg",
		"F272-1.jpg",
		"F278-1.jpg",
		"F279-1.jpg",
		"F28-1.jpg",
		"F280-1.jpg",
		"F281-1.jpg",
		"F283-1.jpg",
		"F295-1.jpg",
		"F296-1.jpg",
		"F297-1.jpg",
		"F299-1.jpg",
		"F3-1.jpg",
		"F300-1.jpg",
		"F304-1.jpg",
		"F305-1.jpg",
		"F306-1.jpg",
		"F307-1.jpg",
		"F31-1.jpg",
		"F311-1.jpg",
		"F313-1.jpg",
		"F315.jpg",
		"F316.jpg",
		"F319.jpg",
		"F32-1.jpg",
		"F322.jpg",
		"F324.jpg",
		"F329-1.jpg",
		"F33-1.jpg",
		"F330.jpg",
		"F332-1.jpg",
		"F336-1.jpg",
		"F337-1.jpg",
		"F338.jpg",
		"F340-1.jpg",
		"F343-1.jpg",
		"F344-1.jpg",
		"F345-1.jpg",
		"F348-1.jpg",
		"F349-1.jpg",
		"F35-1.jpg",
		"F352-1.jpg",
		"F354-1.jpg",
		"F355-1.jpg",
		"F357-1.jpg",
		"F358-1.jpg",
		"F359-1.jpg",
		"F360-1.jpg",
		"F367-2.jpg",
		"F370.jpg",
		"F384-1.jpg",
		"F387-1.jpg",
		"F39-1.jpg",
		"F390-1.jpg",
		"F392-1.jpg",
		"F398-1.jpg",
		"F4-1.jpg",
		"F40-1.jpg",
		"F401.jpg",
		"F410-1.jpg",
		"F411-1.jpg",
		"F413-1.jpg",
		"F42.jpg",
		"F433-4.jpg",
		"F437-1.jpg",
		"F446-1.jpg",
		"F462-1.jpg",
		"F473-1.jpg",
		"F48-1.jpg",
		"F49-1.jpg",
		"F497-1.jpg",
		"F50-1.jpg",
		"F51-1.jpg",
		"F523-1.jpg",
		"F526-1.jpg",
		"F529-1.jpg",
		"F530-1.jpg",
		"F532-1.jpg",
		"F533-1.jpg",
		"F534-1.jpg",
		"F537-1.jpg",
		"F55-1.jpg",
		"F559-1.jpg",
		"F561-1.jpg",
		"F565-1.jpg",
		"F572-2X.jpg",
		"F591-1.jpg",
		"F612-1.jpg",
		"F616-1.jpg",
		"F617-1.jpg",
		"F62.jpg",
		"F621-1.jpg",
		"F622-1.jpg",
		"F623-1.jpg",
		"F624-1.jpg",
		"F625-1.jpg",
		"F629-1.jpg",
		"F630-1.jpg",
		"F634-1.jpg",
		"F636-1.jpg",
		"F644-1.jpg",
		"F645-1.jpg",
		"F646-1.jpg",
		"F648-1.jpg",
		"F65-1.jpg",
		"F654-1.jpg",
		"F655-X.jpg",
		"F657-1.jpg",
		"F658-1.jpg",
		"F659-1.jpg",
		"F66-1.jpg",
		"F665-1.jpg",
		"F70-1.jpg",
		"F73-1.jpg",
		"F8-1.jpg",
		"F80.jpg",
		"F86-1.jpg",
		"F9-1.jpg",
		"F90-1.jpg",
		"F93-1.jpg",
		"F95-1.jpg",
		"F98-1.jpg",
		"FJH276-1.jpg",
		"FX507.jpg",
		"FX559.jpg",
		"GHC-382.jpg",
		"HR001.jpg",
		"HR002.jpg",
		"HR003.jpg",
		"HR004.jpg",
		"HR005.jpg",
		"HR006.jpg",
		"HR007.jpg",
		"HR008.jpg",
		"HR009.jpg",
		"HR010.jpg",
		"HR011.jpg",
		"HR012.jpg",
		"HR013.jpg",
		"HR014.jpg",
		"HR016.jpg",
		"HR017.jpg",
		"HR018.jpg",
		"HR024.jpg",
		"HR025.jpg",
		"HR027.jpg",
		"HR034.jpg",
		"HR040.jpg",
		"HR042.jpg",
		"HR043.jpg",
		"HR045.jpg",
		"HR049.jpg",
		"HR051.jpg",
		"HR052.jpg",
		"HR053.jpg",
		"HR056.jpg",
		"HR059.jpg",
		"HR061.jpg",
		"HR062.jpg",
		"HR063.jpg",
		"HR065.jpg",
		"HR067.jpg",
		"HR068.jpg",
		"HR074.jpg",
		"HW7967.jpg",
		"HW8980.jpg",
		"HW9055.jpg",
		"HW9058.jpg",
		"HW9060.jpg",
		"HW9434.jpg",
		"HW9446.jpg",
		"HW9512.jpg",
		"HW9573.jpg",
		"HW9619.jpg",
		"HW9666.jpg",
		"HW9805.jpg",
		"W1025.jpg",
		"W108.jpg",
		"W1571.jpg",
		"W1572.jpg",
		"W1580.jpg",
		"W1758.jpg",
		"W1759.jpg",
		"W1794.jpg",
		"W1831.jpg",
		"W1833.jpg",
		"W213.jpg",
		"W2633.jpg",
		"W2634.jpg",
		"W2635.jpg",
		"W2716.jpg",
		"W2717.jpg",
		"W2795.jpg",
		"W3040.jpg",
		"W310.jpg",
		"W351-1.jpg",
		"W479.jpg",
		"W480.jpg",
		"W824.jpg",
		"W872.jpg",
		"W874.jpg",
		"W9572.jpg",
		"YG008.jpg"
	];
	categorys['GARMENTFABRIC/TASSELS'] = [];


    var Request = new Object();
    Request = GetRequest();
    var category = Request['category'];
    var sub = Request['sub'];
    var scat = '';
    if (sub != undefined && sub != '') {
        cat = category + "/" + sub;
        scat = sub;
    } else {
        cat = category;
    }
    pics = categorys[cat];
	$('.art_list_title').text(cat);
    for (var i in pics) {
        var id = pics[i];
        var ids = id.split('.');
        var name = ids[0];
        var t = ids[1];
        //DS1419
        var $item = $("<div class='prod_list_list'></div>");
        var $item_pic = $("<div class='prod_list_pic'><a href='view.html?id=" + name + "&sub=" + scat + "&category=" + category + "&t=" + t + "' title='" + name + "'><img name='picautozoom' src='pics/huixiu/" + cat + "/exp" + name + "." + t + "' border='0'/></a></div>");
        var $item_name = $("<div class='prod_list_name'><a href='view.html?id=" + name + "&sub=" + scat + "&category=" + category + "&t=" + t + "' title='" + name + "'>" + name + "</a></div>");
        $item.append($item_pic);
        $item.append($item_name);
        $(".prod_list_con").append($item);
    }
});