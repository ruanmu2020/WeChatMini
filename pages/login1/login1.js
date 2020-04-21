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


  login: function () {
    console.log("登录获取的参数：" + this.data.name + "," + this.data.password)
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8080/a/emp',
      //url: 'http://10.1.9.82:1433/emp/emp',
      header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
      data: {//发送给后台的数据
        name: that.data.name,
        password: that.data.password,
      },
      method: 'post',//get为默认方法/POST
      success: function (res) {
        console.log("成功");
        console.log(res);
        var resData = res.data;
        if (resData == true) {
          // 这里修改成跳转的页面
           wx.showToast({
              title: '登录成功',
             icon: 'success',
             duration: 2000,
            success: function () {
              wx.navigateTo({
                url: '/pages/message/message'
              })
            }
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2000,
          })
        }
      }
    })
  },

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