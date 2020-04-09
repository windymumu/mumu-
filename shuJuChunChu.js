// 储存班级的数组
// grade == 年级
// className == 班级
// classTeacher == 班主任工号
var classArr = [
    //一年级
    {grade:1,className:1,classTeacher:"001"},
    {grade:1,className:2,classTeacher:"002"},
    {grade:1,className:3,classTeacher:"003"},
    //二年级
    {grade:2,className:1,classTeacher:"004"},
    {grade:2,className:2,classTeacher:"005"},
    {grade:2,className:3,classTeacher:"006"},
    //三年级
    {grade:3,className:1,classTeacher:"007"},
    {grade:3,className:2,classTeacher:"008"},
    {grade:3,className:3,classTeacher:"009"},
];
//储存学生的数组
//stuID == 学号（不可重复）
//stuName == 学生姓名
//stuAge == 学生年龄
//stuSex == 学生性别
//stuGrade == 学生年级
//stuClass == 学生班级
//stuState == 学生状态（三个状态：在校、休学、毕业）
//stuParentName == 家长姓名
//stuParentTelephone == 家长电话/家长联系方式
//stuHomeAddress == 家庭住址
//stuAdmissionTime == 入学时间（格式：年-月-日）
//loginID == 学生登陆ID（不可重复）
//passWord == 学生登陆密码
//year1Semester1Achievement == 学生第一年第一学期成绩
//year1Semester2Achievement == 学生第一年第二学期成绩
//year2Semester1Achievement == 学生第二年第一学期成绩
//year2Semester2Achievement == 学生第二年第二学期成绩
//year3Semester1Achievement == 学生第三年第一学期成绩
//year3Semester2Achievement == 学生第三年第二学期成绩
//privilegeLevel == 权限等级（学生权限等级不得高于1）
var stuArr = [
    //一年级
    {stuID:"001",stuName:"喜德贵",stuAge:"3",stuSex:"男",stuGrade:1,stuClass:1,stuState:"在校",stuParentName:"喜羊羊",stuParentTelephone:"18988248565",stuHomeAddress:"成都市都江堰奎光东二街",stuAdmissionTime:"2020-9-1",loginID:"100001",passWord:"000000",year1Semester1Achievement:"75",year1Semester2Achievement:"75",year2Semester1Achievement:"",year2Semester2Achievement:"",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"002",stuName:"加藤惠",stuAge:"3",stuSex:"女",stuGrade:1,stuClass:1,stuState:"在校",stuParentName:"加藤鹰",stuParentTelephone:"18988265465",stuHomeAddress:"成都市都江堰石油街",stuAdmissionTime:"2020-9-1",loginID:"100002",passWord:"000000",year1Semester1Achievement:"96",year1Semester2Achievement:"85",year2Semester1Achievement:"",year2Semester2Achievement:"",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"003",stuName:"田所浩二",stuAge:"3",stuSex:"男",stuGrade:1,stuClass:1,stuState:"在校",stuParentName:"野兽先辈",stuParentTelephone:"19908248565",stuHomeAddress:"成都市青羊区北街",stuAdmissionTime:"2020-9-1",loginID:"100003",passWord:"000000",year1Semester1Achievement:"76",year1Semester2Achievement:"75",year2Semester1Achievement:"",year2Semester2Achievement:"",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"004",stuName:"马小皓",stuAge:"3",stuSex:"男",stuGrade:1,stuClass:2,stuState:"在校",stuParentName:"马小飞",stuParentTelephone:"17388248535",stuHomeAddress:"成都市天顺北街66号",stuAdmissionTime:"2020-9-1",loginID:"100004",passWord:"000000",year1Semester1Achievement:"88",year1Semester2Achievement:"85",year2Semester1Achievement:"",year2Semester2Achievement:"",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"005",stuName:"李晨晨",stuAge:"3",stuSex:"女",stuGrade:1,stuClass:2,stuState:"在校",stuParentName:"李玉祥",stuParentTelephone:"13588212335",stuHomeAddress:"北京市天通苑",stuAdmissionTime:"2020-9-1",loginID:"100005",passWord:"000000",year1Semester1Achievement:"59",year1Semester2Achievement:"95",year2Semester1Achievement:"",year2Semester2Achievement:"",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"006",stuName:"王尚信",stuAge:"3",stuSex:"男",stuGrade:1,stuClass:2,stuState:"休学",stuParentName:"王啸",stuParentTelephone:"17388245153",stuHomeAddress:"成都市金牛区茶店子",stuAdmissionTime:"2020-9-1",loginID:"100006",passWord:"000000",year1Semester1Achievement:"76",year1Semester2Achievement:"58",year2Semester1Achievement:"",year2Semester2Achievement:"",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"007",stuName:"周峰",stuAge:"3",stuSex:"男",stuGrade:1,stuClass:3,stuState:"在校",stuParentName:"周六福",stuParentTelephone:"17151118535",stuHomeAddress:"成都市金牛区营门口",stuAdmissionTime:"2020-9-1",loginID:"100007",passWord:"000000",year1Semester1Achievement:"95",year1Semester2Achievement:"75",year2Semester1Achievement:"",year2Semester2Achievement:"",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"008",stuName:"肖萧",stuAge:"3",stuSex:"女",stuGrade:1,stuClass:3,stuState:"在校",stuParentName:"肖潇乐",stuParentTelephone:"13533418535",stuHomeAddress:"成都市金牛区营门口",stuAdmissionTime:"2020-9-1",loginID:"100008",passWord:"000000",year1Semester1Achievement:"45",year1Semester2Achievement:"95",year2Semester1Achievement:"",year2Semester2Achievement:"",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"009",stuName:"利昊通",stuAge:"3",stuSex:"男",stuGrade:1,stuClass:3,stuState:"在校",stuParentName:"利群",stuParentTelephone:"18452518535",stuHomeAddress:"成都市龙泉驿司马路口北",stuAdmissionTime:"2020-9-1",loginID:"100009",passWord:"000000",year1Semester1Achievement:"75",year1Semester2Achievement:"58",year2Semester1Achievement:"",year2Semester2Achievement:"",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    //二年级
    {stuID:"010",stuName:"普莱斯",stuAge:"4",stuSex:"男",stuGrade:2,stuClass:1,stuState:"在校",stuParentName:"普格尔",stuParentTelephone:"13535758565",stuHomeAddress:"成都市都江堰奎光东二街",stuAdmissionTime:"2019-9-1",loginID:"100010",passWord:"000000",year1Semester1Achievement:"99",year1Semester2Achievement:"98",year2Semester1Achievement:"75",year2Semester2Achievement:"75",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"011",stuName:"格奥尔",stuAge:"4",stuSex:"女",stuGrade:2,stuClass:1,stuState:"在校",stuParentName:"戈阿斯",stuParentTelephone:"19955465465",stuHomeAddress:"成都市都江堰石油街",stuAdmissionTime:"2019-9-1",loginID:"100011",passWord:"000000",year1Semester1Achievement:"89",year1Semester2Achievement:"95",year2Semester1Achievement:"85",year2Semester2Achievement:"85",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"012",stuName:"钱文琦",stuAge:"4",stuSex:"男",stuGrade:2,stuClass:1,stuState:"在校",stuParentName:"葛瑞格",stuParentTelephone:"15564485565",stuHomeAddress:"成都市青羊区北街",stuAdmissionTime:"2019-9-1",loginID:"100012",passWord:"000000",year1Semester1Achievement:"95",year1Semester2Achievement:"96",year2Semester1Achievement:"74",year2Semester2Achievement:"95",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"013",stuName:"萨达",stuAge:"4",stuSex:"男",stuGrade:2,stuClass:2,stuState:"在校",stuParentName:"瓦德带",stuParentTelephone:"154258248535",stuHomeAddress:"成都市天顺北街66号",stuAdmissionTime:"2019-9-1",loginID:"100013",passWord:"000000",year1Semester1Achievement:"85",year1Semester2Achievement:"83",year2Semester1Achievement:"85",year2Semester2Achievement:"95",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"014",stuName:"德瓦达",stuAge:"4",stuSex:"女",stuGrade:2,stuClass:2,stuState:"在校",stuParentName:"瓦达瓦",stuParentTelephone:"13584812335",stuHomeAddress:"北京市天通苑",stuAdmissionTime:"2019-9-1",loginID:"100014",passWord:"000000",year1Semester1Achievement:"89",year1Semester2Achievement:"99",year2Semester1Achievement:"74",year2Semester2Achievement:"75",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"015",stuName:"王二伟",stuAge:"4",stuSex:"男",stuGrade:2,stuClass:2,stuState:"休学",stuParentName:"王伞",stuParentTelephone:"1708245153",stuHomeAddress:"成都市金牛区茶店子",stuAdmissionTime:"2019-9-1",loginID:"100015",passWord:"000000",year1Semester1Achievement:"98",year1Semester2Achievement:"99",year2Semester1Achievement:"85",year2Semester2Achievement:"58",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"016",stuName:"巍峨峰",stuAge:"4",stuSex:"男",stuGrade:2,stuClass:3,stuState:"在校",stuParentName:"奥德赛",stuParentTelephone:"19915118535",stuHomeAddress:"成都市金牛区营门口",stuAdmissionTime:"2019-9-1",loginID:"100016",passWord:"000000",year1Semester1Achievement:"92",year1Semester2Achievement:"94",year2Semester1Achievement:"95",year2Semester2Achievement:"95",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"017",stuName:"内格夫",stuAge:"4",stuSex:"女",stuGrade:2,stuClass:3,stuState:"在校",stuParentName:"威塞哥",stuParentTelephone:"13525538535",stuHomeAddress:"成都市金牛区营门口",stuAdmissionTime:"2019-9-1",loginID:"100017",passWord:"000000",year1Semester1Achievement:"75",year1Semester2Achievement:"85",year2Semester1Achievement:"74",year2Semester2Achievement:"75",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    {stuID:"018",stuName:"奥特曼",stuAge:"4",stuSex:"男",stuGrade:2,stuClass:3,stuState:"在校",stuParentName:"阿迪斯",stuParentTelephone:"18465348545",stuHomeAddress:"成都市龙泉驿司马路口北",stuAdmissionTime:"2019-9-1",loginID:"100018",passWord:"000000",year1Semester1Achievement:"65",year1Semester2Achievement:"85",year2Semester1Achievement:"85",year2Semester2Achievement:"75",year3Semester1Achievement:"",year3Semester2Achievement:"",privilegeLevel:1},
    //三年级
    {stuID:"019",stuName:"樱岛麻衣",stuAge:"5",stuSex:"女",stuGrade:3,stuClass:1,stuState:"在校",stuParentName:"神上园凛",stuParentTelephone:"13523358565",stuHomeAddress:"成都市都江堰奎光东二街",stuAdmissionTime:"2018-9-1",loginID:"100019",passWord:"000000",year1Semester1Achievement:"99",year1Semester2Achievement:"98",year2Semester1Achievement:"75",year2Semester2Achievement:"75",year3Semester1Achievement:"85",year3Semester2Achievement:"95",privilegeLevel:1},
    {stuID:"020",stuName:"奥尔加",stuAge:"5",stuSex:"女",stuGrade:3,stuClass:1,stuState:"在校",stuParentName:"伊芙琳",stuParentTelephone:"12433465465",stuHomeAddress:"成都市都江堰石油街",stuAdmissionTime:"2018-9-1",loginID:"100020",passWord:"000000",year1Semester1Achievement:"89",year1Semester2Achievement:"95",year2Semester1Achievement:"85",year2Semester2Achievement:"58",year3Semester1Achievement:"95",year3Semester2Achievement:"75",privilegeLevel:1},
    {stuID:"021",stuName:"恶魔人",stuAge:"5",stuSex:"男",stuGrade:3,stuClass:1,stuState:"在校",stuParentName:"卡兹",stuParentTelephone:"15234345565",stuHomeAddress:"成都市青羊区北街",stuAdmissionTime:"2018-9-1",loginID:"100021",passWord:"000000",year1Semester1Achievement:"95",year1Semester2Achievement:"96",year2Semester1Achievement:"74",year2Semester2Achievement:"75",year3Semester1Achievement:"57",year3Semester2Achievement:"75",privilegeLevel:1},
    {stuID:"022",stuName:"弗利萨",stuAge:"5",stuSex:"男",stuGrade:3,stuClass:2,stuState:"在校",stuParentName:"洪福贵",stuParentTelephone:"189652248535",stuHomeAddress:"成都市天顺北街66号",stuAdmissionTime:"2018-9-1",loginID:"100022",passWord:"000000",year1Semester1Achievement:"85",year1Semester2Achievement:"83",year2Semester1Achievement:"85",year2Semester2Achievement:"85",year3Semester1Achievement:"85",year3Semester2Achievement:"59",privilegeLevel:1},
    {stuID:"023",stuName:"结成梨斗",stuAge:"5",stuSex:"男",stuGrade:3,stuClass:2,stuState:"在校",stuParentName:"结成明日奈",stuParentTelephone:"1335452335",stuHomeAddress:"北京市天通苑",stuAdmissionTime:"2018-9-1",loginID:"100023",passWord:"000000",year1Semester1Achievement:"89",year1Semester2Achievement:"99",year2Semester1Achievement:"74",year2Semester2Achievement:"98",year3Semester1Achievement:"95",year3Semester2Achievement:"58",privilegeLevel:1},
    {stuID:"024",stuName:"艾雅法拉",stuAge:"5",stuSex:"女",stuGrade:3,stuClass:2,stuState:"休学",stuParentName:"芝挝蝇",stuParentTelephone:"1995125153",stuHomeAddress:"成都市金牛区茶店子",stuAdmissionTime:"2018-9-1",loginID:"100024",passWord:"000000",year1Semester1Achievement:"98",year1Semester2Achievement:"99",year2Semester1Achievement:"85",year2Semester2Achievement:"75",year3Semester1Achievement:"75",year3Semester2Achievement:"85",privilegeLevel:1},
    {stuID:"025",stuName:"伊芙利特",stuAge:"5",stuSex:"女",stuGrade:3,stuClass:3,stuState:"在校",stuParentName:"宇宫",stuParentTelephone:"19545128535",stuHomeAddress:"成都市金牛区营门口",stuAdmissionTime:"2018-9-1",loginID:"100025",passWord:"000000",year1Semester1Achievement:"92",year1Semester2Achievement:"94",year2Semester1Achievement:"95",year2Semester2Achievement:"85",year3Semester1Achievement:"58",year3Semester2Achievement:"95",privilegeLevel:1},
    {stuID:"026",stuName:"斯卡帝",stuAge:"5",stuSex:"女",stuGrade:3,stuClass:3,stuState:"在校",stuParentName:"宫崎野人",stuParentTelephone:"19562538535",stuHomeAddress:"成都市金牛区营门口",stuAdmissionTime:"2018-9-1",loginID:"100026",passWord:"000000",year1Semester1Achievement:"75",year1Semester2Achievement:"85",year2Semester1Achievement:"74",year2Semester2Achievement:"95",year3Semester1Achievement:"58",year3Semester2Achievement:"95",privilegeLevel:1},
    {stuID:"027",stuName:"赫拉格",stuAge:"5",stuSex:"男",stuGrade:3,stuClass:3,stuState:"在校",stuParentName:"山本",stuParentTelephone:"19956448545",stuHomeAddress:"成都市龙泉驿司马路口北",stuAdmissionTime:"2018-9-1",loginID:"100027",passWord:"000000",year1Semester1Achievement:"65",year1Semester2Achievement:"85",year2Semester1Achievement:"85",year2Semester2Achievement:"58",year3Semester1Achievement:"85",year3Semester2Achievement:"75",privilegeLevel:1}
];
//储存教师的数组
//tchID == 教师工号（不可重复）
//tchName == 教师名字
//tchAge == 教师年龄
//tchSex == 教师性别（男、女）
//tchGrade == 教师负责年级
//tchClass == 教师负责班级
//loginID == 教师登陆ID（不可重复）
//passWord == 教师登陆密码
//privilegeLevel == 教师权限等级(教师等级权限不得低于2，管理员教师等级权限不得大于3,园长的权限等级不得修改，所有账号不得添加权限等级等于4的账号)
var teacherArr =[
    //一年级老师
    {tchID:"001",tchName:"王利",tchAge:"32",tchSex:"女",tchGrade:1,tchClass:1,loginID:"200001",passWord:"000000",privilegeLevel:2},
    {tchID:"002",tchName:"周大福",tchAge:"19",tchSex:"女",tchGrade:1,tchClass:2,loginID:"200002",passWord:"000000",privilegeLevel:2},
    {tchID:"003",tchName:"周大生",tchAge:"26",tchSex:"女",tchGrade:1,tchClass:3,loginID:"200003",passWord:"000000",privilegeLevel:2},
    //二年级老师
    {tchID:"004",tchName:"李晓丽",tchAge:"45",tchSex:"女",tchGrade:2,tchClass:1,loginID:"200004",passWord:"000000",privilegeLevel:2},
    {tchID:"005",tchName:"王利花",tchAge:"52",tchSex:"女",tchGrade:2,tchClass:2,loginID:"200005",passWord:"000000",privilegeLevel:2},
    {tchID:"006",tchName:"冯玉同",tchAge:"35",tchSex:"男",tchGrade:2,tchClass:3,loginID:"200006",passWord:"000000",privilegeLevel:2},
    //三年级老师
    {tchID:"007",tchName:"杨浩",tchAge:"24",tchSex:"男",tchGrade:3,tchClass:1,loginID:"200007",passWord:"000000",privilegeLevel:2},
    {tchID:"008",tchName:"李明浩",tchAge:"33",tchSex:"男",tchGrade:3,tchClass:2,loginID:"200008",passWord:"000000",privilegeLevel:2},
    {tchID:"009",tchName:"程凯",tchAge:"31",tchSex:"男",tchGrade:3,tchClass:3,loginID:"200009",passWord:"000000",privilegeLevel:2},
    //管理员老师
    {tchID:"010",tchName:"马富裕",tchAge:"35",tchSex:"男",tchGrade:null,tchClass:null,loginID:"200010",passWord:"000000",privilegeLevel:3},
    //园长
    {tchID:"011",tchName:"赵灿路",tchAge:"55",tchSex:"男",tchGrade:null,tchClass:null,loginID:"200011",passWord:"000000",privilegeLevel:4}
];
//公告储存数组
//noticeType == 公告类型（all == 园长发布的全局公告、class == 教师发布的班级公告）
//noticeGrade == 如果为班级公告，为发布公告老师的年级，全局公告为null
//noticeClass == 如果为班级公告，为发布公告老师的班级，全局公告为null
//noticeTitle == 获取公告标题
//noticeMain == 获取公告内容
//noticeDate == 获取公告发布时间
//noticePublisher == 获取发布公告的人
var noticeArr = [
    {noticeType:"",noticeGrade:null,noticeClass:null,noticeTitle:"",noticeMain:"",noticeDate:"",noticePublisher:""}
];
//照片墙储存数组
//spwImg == 图片路径
//spwGrade == 获取照片墙发布的年级
//spwClass == 获取照片墙发布的班级
//spwTitle == 获取照片墙的标题
//spwMain == 获取照片墙的内容
//spwDate == 获取照片墙的发布时间
//spwPublisher == 获取照片墙的发布人
var sharePhotoWallArr = [
    {spwImg:"",spwGrade:null,spwClass:null,spwTitle:"",spwMain:"",spwDate:"",spwPublisher:""}
];
//反馈信息储存数组
//FeedBackkMain == 获取反馈的主要信息
//FeedBackGrade == 获取反馈人的年级
//FeedBackClass == 获取反馈人的班级
//FeedBackDate == 获取反馈发布的日期
//FeedBackPublisher == 获取反馈的人
var stuFeedBackArr = [
    {FeedBackkMain:"",FeedBackGrade:null,FeedBackClass:null,FeedBackDate:"",FeedBackPublisher:""}
]