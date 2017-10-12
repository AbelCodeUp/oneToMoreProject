
// window.urlsGW = 'http://hifan.gogo-talk.com/'
window.urlsGW = 'http://hifan.gogo-talk.com/'
window.ConfirmOrderPay=window.urlsGW+'confirmOrderPay.html'; //官网支付页面
window.CourseBuy=window.urlsGW+'CourseBuy.html'; //官网商品页面
window.Auth=window.urlsGW+'auth.html'; //跨域
window.Active=window.urlsGW+'active.html'; //活动页


// 'http://192.168.0.2:803' 测试
//'49.4.128.115'
// 'http://learnapi.gogo-talk.com:8333/'  正式
//  window.urls='http://117.107.153.228:803/';

window.urls='http://learnapi.gogo-talk.com:8333/';
window.ExchangeClass = window.urls+'api/ExChange/ExchangeClass';

window.GetSystemTime=window.urls+'api/HomePage/GetSystemTime'; //获取服务器时间

window.GetImageUrl=window.urls+'api/Register/GetImageUrl'; //获取二维码图片
window.GetOpenId=window.urls+'api/Register/GetOpenId'; //获取openId
window.UserRegister=window.urls+'api/Register/UserRegister'; //注册
window.SendPhoneCode=window.urls+'api/Register/SendPhoneCode'; //通过手机号获取验证码
window.ChangePwdByWeChat=window.urls+'api/Register/ChangePwdByWeChat'; //修改密码 
window.Login=window.urls+'api/Register/Login'; //登录
window.GetQRCodeByMobile=window.urls+'api/Register/GetQRCodeByMobile'; //通过手机号获取二维码

window.GetIntegralState=window.urls+'api/HomePage/GetIntegralState'; //是否完善资料与分享朋友圈
window.GetOrdinaryStudentInfo=window.urls+'api/HomePage/GetOrdinaryStudentInfo'; //获取学员信息，判断是否是付费用户
window.GetRecommendedCourses=window.urls+'api/HomePage/GetRecommendedCourses'; //推荐预约
window.GetNotMyLess=window.urls+'api/HomePage/GetNotMyLess'; //待上课程
window.GetCompleteMyLess=window.urls+'api/HomePage/GetCompleteMyLess';
window.GetLatelyClassInfo=window.urls+'api/Lesson/GetLatelyClassInfo'; //最近结束
window.GradeInvestigation=window.urls+'api/HomePage/GradeInvestigation'; //定级


window.GetBookList=window.urls+'api/HomePage/GetBookList'; //获取教材信息
window.GetUnitBookList=window.urls+'api/HomePage/GetUnitBookList'; //获取当前教材完成的课时
window.GetBookOverInfo=window.urls+'api/HomePage/GetBookOverInfo'; //获取当前教材对应的单元
window.CancelLesson=window.urls+'api/Demands/CancelLesson'; //取消约课
window.Tch_Comment=window.urls+'api/HomePage/Tch_Comment'; //评价
window.ClassBookDetails=window.urls+'api/Demands/ClassBookDetails'; //获取约课详情
window.GetLessonRoom=window.urls+'api/Demands/GetLessonRoom'; //
window.JoinLessonRoom=window.urls+'api/Demands/JoinLessonRoom'; //加入课程
window.GetTch_Lesson=window.urls+'api/Demands/GetTch_Lesson'; //通过日期获取时间点
window.ReserveLessonRoom=window.urls+'api/Demands/ReserveLessonRoom'; //预约课程
window.GetCompleteLessonInfo=window.urls+'api/HomePage/GetCompleteLessonInfo'; //课后评价
window.GetLessonDeatil=window.urls+'api/HomePage/GetLessonDeatil'; //课程详情


window.GetStudentInfo=window.urls+'api/HomePage/GetStudentInfo'; //获取个人信息
window.SendChangePwdSMS=window.urls+'api/HomePage/SendChangePwdSMS'; //根据原手机号获取验证码
window.SendSMSCode=window.urls+'api/HomePage/SendSMSCode'; //根据新手机号获取验证码
window.ExistMobilCode=window.urls+"api/HomePage/ExistMobilCode"; //修改手机号，验证手机
window.UpdateStudentInfo=window.urls+"api/HomePage/UpdateStudentInfo"; //修改个人资料
window.ChangePwdByOldPwd=window.urls+'api/HomePage/ChangePwdByOldPwd'; //修改密码
window.Uploads=window.urls+'api/HomePage/Upload'; //修改头像
window.UploadImg=window.urls+'api/HomePage/UploadImg';


window.GetClassHour=window.urls+'api/Lesson/GetClassHour'; //我的课时信息
window.GetClassHourPage=window.urls+'api/Lesson/GetClassHourPage'; //我的课时列表
window.GetOrderPage=window.urls+'api/Order/GetOrderPage'; //我的订单列表
window.CancelOrder=window.urls+'api/Order/CancelOrder'; //取消订单
window.Exchange=window.urls+'api/GiveCouponIntegral/Exchange'; //积分兑换
window.GetScoreList=window.urls+'api/HomePage/GetScoreList'; //积分列表
window.GetStudentAllScore=window.urls+'api/HomePage/GetStudentAllScore'; //获取所有积分
window.GetCouponListStudent=window.urls+'api/GiveCouponIntegral/GetCouponListStudent'; //获取优惠劵
window.GetCouponDetails=window.urls+'api/GiveCouponIntegral/GetCouponDetails'; //获取优惠劵详情



