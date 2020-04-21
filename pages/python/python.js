//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //motto: '检测结果：',
    // value: '0',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // userImage: "/images/jia.png",
    img_arr: [],
  },
  //事件处理函数
  bindViewTap: function () {
    var that = this //！！！！！！！！！“搭桥”

    //利用API从本地读取一张图片
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        //将读取的图片替换之前的图片
        that.setData(
          {
            userImage: tempFilePaths[0],
            img_arr: that.data.img_arr.concat(tempFilePaths[0]),
          }
        )//通过that访问
        console.log(that.data.userImage)
      }
    })
  },
  changeName: function (e) {
    this.setData({
      value: "xiao",
    })

  },
  upload: function () {
    var that = this
    wx.uploadFile({
      url: 'http://127.0.0.1:8090/postdata',
      // filePath: that.data.img_arr[0],
      filePath: that.data.userImage,
      name: 'content',
      // formData: adds,
      success: function (res) {
        console.log(res.data);
        that.setData({
          value: JSON.parse(res.data)['value'],
          userImage: JSON.parse(res.data)['resurl']
        })

        if (res) {
          wx.showToast({
            title: '检测完成！',
            duration: 3000
          });
        }
      }
    })
    this.setData({
      formdata: ''
    })
  },
  takePhoto() {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        that.setData(
          {
            userImage: res.tempFilePaths[0],

          })
        console.log("res.tempImagePath" + tempFilePaths[0])
      }
    })
  },
  /* onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },*/

  onLoad: function (options) {

    var that = this;

    //获取用户信息
    wx.getUserInfo({
      success: function (res) {

        console.log(1);
        console.log(res);
        that.data.userInfo = res.userInfo;

        that.setData({
          userInfo: that.data.userInfo
        })
      }
    })
  },



})