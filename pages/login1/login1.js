Page({
  data: {//页面获取
    name: '',
    password: ''

  },


  //获取用户名的值并将值赋给最先定义的初始化变量
  nameInput: function (e) {
    this.setData({ name: e.detail.value })
  },
  //跟上面一样
  passwordInput: function (e) {
    this.setData({ password: e.detail.value })
  },

  //获取session
  getSession:function(){
    var that = this;
    wx.login({
      success:function(res){
        if(res.code){
            //发起网络请求
            wx.request({
              url: 'http://127.0.0.1:8080/a/emp',
              data: {//发送给后台的数据
                code:res.code
              },
              success:function(res){
                wx.setStorageSync("sessionId", res.sessionId);
              },
              fail:function(errMsg){
                  console.log(errMsg);
              }
            })
        }else{
          console.log('登陆失败' + res.errMsg);
        }
      }
    })
  },

  //定时任务，每隔二十分钟刷新session
  refresh:function(){
    var that = this;
    ssetInterval(that.getSession,20*60*1000);
  }


  // login: function () {
  //   var that = this;
  //   wx.request({
  //     //url: 'http://218.25.37.253:8080/a/emp', //218.25.37.253
  //     url: 'http://127.0.0.1:8080/a/emp',
  //     header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
  //     data: {//发送给后台的数据
  //       name: that.data.name,
  //       password: that.data.password,
  //     },
  //     method: 'post',//get为默认方法/POST
  //     success: function (res) {
  //       var resData = res.data;
  //       if (resData == true) {
  //         // 这里修改成跳转的页面
  //          wx.showToast({
  //             title: '登录成功',
  //            icon: 'success',
  //            duration: 2000,
  //           success: function () {
  //             wx.navigateTo({
  //               url: '/pages/message/message'
  //             })
  //           }
  //         })
  //       } else {
  //         wx.showToast({
  //           title: '登录失败',
  //           icon: 'none',
  //           duration: 2000,
  //         })
  //       }
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }


})