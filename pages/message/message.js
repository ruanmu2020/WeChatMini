/**
   * 每个小程序都需要在 app.js 中调用 App 方法注册小程序示例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。
整个小程序只有一个 App 实例，是全部页面共享的。开发者可以通过 getApp 方法获取到全局唯一的 App 示例，获取App上的数据或调用开发者注册在 App 上的函数。
   */
//Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
const app = getApp();
Page({
  /**
   * data:页面的初始数据
   */
  data: {
    //省市区start
    province: '',
    city: '',
    district: '',
    custNumber: '',
    provinceIndex: '',
    cityIndex: '',
    districtIndex: '',
    custNumberIndex: '',
    provinceCode: '',
    cityCode: '',
    districtCode: '',
    custNumberCode: '',
    //省市区end
    //是否发票随货
    selectt: false,
    billPr: '请选择',
    billProduct: [
      '是',
      '否',
    ],
    indexBill: 0,
    //是否发票随货end
    //是否开电子发票(接收邮箱）
    selecttt: false,
    billEma: '请选择',
    billEmail: [
      '是',
      '否',
    ],
    indexEmail: 0,
    //是否开电子发票(接收邮箱）end
    dates: '2008-08-08',
    //产品列表start
    selecttt: false,
    gradeName: '请选择',
    productname: [
      '重组乙型肝炎疫苗(汉逊酵母)',
      '甲型肝炎灭火疫苗(人二倍体细胞)',
      '腮腺炎减毒活疫苗',
      'ACYMW135群脑膜炎球菌多糖疫苗',
      '冻干人用狂犬疫苗(Vero细胞)',
      '双价肾综合症出血热疫苗(Vero细胞)',
    ],
    index: 0,
    //产品列表end
    //规格型号start
    selectttt: false,
    spec: '请选择',
    spec_model: [
      '0.5ml/瓶',
      '0.5ml/瓶(5瓶)',
      '1.0ml/瓶',
      '1.0ml*5瓶/人份',
      '10μg/0.5ml/瓶',
      '10μg/0.5ml/支',
      '20μg/0.5ml/瓶',
      '20μg/0.5ml/支',
      '320eu/0.5ml/瓶',
      '640eu/1ml/瓶',
      '320eu/0.5ml/支',
      '640eu/1ml/支'
    ],
    specIndex: 0,
    //规格型号end
    //单价/开票价(元)start
    selectPrice: false,
    pri: '请选择',
    price: [
      '58',
      '60',
      '70',
      '72',
      '78',
      '80',
      '85',
      '95',
      '108',
      '138',
      '158'
    ],
    priceIndex: 0,
    //单价/开票价(元)end
    qtyValue: '',
    cDCCGTValue: '',
    speReqValue: '',
    phoneValue: '',
    electrValue: '',
    mIValue: '',
    clerkPhoValue: '',
    canalsValue: '',
    districtValue: '',
  },
  /**
 * 点击下拉框
 */
  bindShowMsgg() {
    this.setData({
      selectt: !this.data.selectt
    })
  },
  /**
   * 已选下拉框
   */
  mySelectt(e) {
    var indexBill = e.currentTarget.dataset
    console.log("indexBill=" + indexBill)
    var name = e.currentTarget.dataset.name;
    this.setData({
      indexBill: indexBill,
      billPr: name,
      selectt: !this.data.selectt
    })
  },
  /**
 * 点击下拉框
 */
  bindShowMsggg() {
    this.setData({
      selecttt: !this.data.selecttt
    })
  },
  /**
   * 已选下拉框
   */
  mySelecttt(e) {
    var indexEmail = e.currentTarget.dataset
    console.log("indexEmail=" + indexEmail)
    var name = e.currentTarget.dataset.name;
    this.setData({
      indexEmail: indexEmail,
      billEma: name,
      selecttt: !this.data.selecttt
    })
  },
  /**
 * 规格型号点击下拉框
 */
  bindShowMsgggg() {
    this.setData({
      selectttt: !this.data.selectttt
    })
  },
  /**
   * 规格型号已选下拉框
   */
  mySelectttt(e) {
    var specIndex = e.currentTarget.dataset
    console.log("specIndex=" + specIndex)
    var name = e.currentTarget.dataset.name;
    this.setData({
      specIndex: specIndex,
      spec: name,
      selectttt: !this.data.selectttt
    })
  },
  /**
* 单价/开票价(元)点击下拉框
*/
  bindShowMsgPrice() {
    this.setData({
      selectPrice: !this.data.selectPrice
    })
  },
  /**
   * 单价/开票价(元)已选下拉框
   */
  mySelectPrice(e) {
    var priceIndex = e.currentTarget.dataset
    console.log("priceIndex=" + priceIndex)
    var name = e.currentTarget.dataset.name;
    this.setData({
      priceIndex: priceIndex,
      pri: name,
      selectPrice: !this.data.selectPrice
    })
  },
  //  点击日期组件确定事件 
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  /**
 * 点击下拉框
 */
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  /**
   * 已选下拉框
   */
  mySelect(e) {
    console.log(e)
    console.log('产品选的是', this.data.productname)
    var index = e.currentTarget.dataset
    console.log("index=" + index)
    var name = e.currentTarget.dataset.name;
    this.setData({
      index: index,
      gradeName: name,
      select: !this.data.select
    })
  },
  getPri: function (e) {
    this.setData({ pri: e.detail.value });
  },
  getSpec: function (e) {
    this.setData({ spec: e.detail.value });
  },
  getBillEma: function (e) {
    this.setData({ billEma: e.detail.value });
  },
  getBillPr: function (e) {
    this.setData({ billPr: e.detail.value });
  },
  getDates: function (e) {
    this.setData({ dates: e.detail.value });
  },
  getGradeName: function (e) {
    this.setData({ gradeName: e.detail.value });
  },

  getQtyValue: function (e) {
    this.setData({ qtyValue: e.detail.value });
  },
  getCDCCGTValue: function (e) {
    this.setData({ cDCCGTValue: e.detail.value });
  },
  getSpeReqValue: function (e) {
    this.setData({ speReqValue: e.detail.value });
  },
  getPhoneValue: function (e) {
    this.setData({ phoneValue: e.detail.value });
  },
  getElectrValue: function (e) {
    this.setData({ electrValue: e.detail.value });
  },
  getMIValue: function (e) {
    this.setData({ mIValue: e.detail.value });
  },
  getClerkPhoValue: function (e) {
    this.setData({ clerkPhoValue: e.detail.value });
  },
  getCanalsValue: function (e) {
    this.setData({ canalsValue: e.detail.value });
  },
  getDistrictValue: function (e) {
    this.setData({ districtValue: e.detail.value });
  },
  saveNewAddress: function () {
    console.log("登录获取的参数：" + this.data.billEma + "," + + this.data.billPr + "," + this.data.gradeName + "," + this.data.qtyValue + "," + this.data.cDCCGTValue + "," + this.data.speReqValue + "," + this.data.phoneValue + "," + this.data.electrValue + "," + this.data.mIValue + "," + this.data.clerkPhoValue + "," + this.data.canalsValue + ","
      + this.data.districtValue + "," + this.data.provin + "," + this.data.cityy + "," + this.data.distri);
    var that = this;
    let formValue = {
      values: JSON.stringify({
        dates: that.data.dates,
        province: that.data.provin,
        city: that.data.cityy,
        district: that.data.distri,
        fName: that.data.custNumberr,//fName:与后台实体类对应
        billEma: that.data.billEma,
        specModel: that.data.spec,
        price: that.data.pri,
        billPr: that.data.billPr,
        gradeName: that.data.gradeName,
        qtyValue: that.data.qtyValue,
        cDCCGTValue: that.data.cDCCGTValue,
        speReqValue: that.data.speReqValue,
        phoneValue: that.data.phoneValue,
        electrValue: that.data.electrValue,
        mIValue: that.data.mIValue,
        clerkPhoValue: that.data.clerkPhoValue,
        canalsValue: that.data.canalsValue,
        districtValue: that.data.districtValue
      })
    };
    wx.request({
      url: 'http://127.0.0.1:8080/b/massage',
      header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
      data: {//发送给后台的数据
        formValue: formValue.values,
      },


      method: 'get',//get为默认方法/POST
      success: function (res) {
        console.log("成功");
        console.log(res);
        var resData = res.data;
        console.log(resData + '+++++++');
        if (resData == "ok") {
          // 这里修改成跳转的页面 
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000,
            success: function () {
              wx.navigateTo({
                url: '/pages/kongbai/kongbai'
              })
            }
          })
        } else {
          wx.showToast({
            title: '保存失败',
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
    var that = this
    var header = { 'content-type': 'application/json' }
    wx.request({
      url: 'http://127.0.0.1:8080/c/province?parentId=' + '561b798645c74f', //查询省信息时parentId为空
      method: 'POST',
      header: header,
      success: function (provinceRes) {
        var cityParentId = provinceRes.data[0].fEntryId //省编码，用于默认级联查询 areacodeInfoList[0].areacode
        var provinceArray = []
        var provinceCodeArray = []
        for (var iprovince = 0; iprovince < provinceRes.data.length; iprovince++) {
          provinceArray[iprovince] = provinceRes.data[iprovince].fDataValue//areaname
          provinceCodeArray[iprovince] = provinceRes.data[iprovince].fEntryId//areacode
        }
        that.setData({// 获取省级数据
          province: provinceArray,
          provinceCode: provinceCodeArray,
          provin: provinceArray[0]
        })
        wx.request({
          url: 'http://127.0.0.1:8080/c/city?parentId=' + cityParentId,   //cityParentId,
          method: 'POST',
          header: header,
          success: function (cityRes) {
            var districtParentId = cityRes.data[0].fEntryId //市编码，用于默认级联查询
            var cityArray = []
            var cityCodeArray = []
            for (var icity = 0; icity < cityRes.data.length; icity++) {
              cityArray[icity] = cityRes.data[icity].fDataValue
              cityCodeArray[icity] = cityRes.data[icity].fEntryId
            }
            that.setData({// 获取市级数据
              city: cityArray,
              cityCode: cityCodeArray,
              cityy: cityArray[0]
            })
            wx.request({
              url: 'http://127.0.0.1:8080/c/district?parentId=' + districtParentId,
              method: 'POST',
              header: header,
              success: function (districtRes) {
                var districtArray = []
                var districtCodeArray = []
                var custNumberParentId = districtRes.data[0].fEntryId //区编码 用于默认级联查询
                for (var idistrict = 0; idistrict < districtRes.data.length; idistrict++) {
                  districtArray[idistrict] = districtRes.data[idistrict].fDataValue
                  districtCodeArray[idistrict] = districtRes.data[idistrict].fEntryId
                }
                that.setData({// 获取区级数据
                  district: districtArray,
                  districtCode: districtCodeArray,
                  distri: districtArray[0]
                })
                wx.request({
                  url: 'http://127.0.0.1:8080/c/custNumber?parentId=' + custNumberParentId,
                  method: 'POST',
                  header: header,
                  success: function (custNumberRes) {
                    var custNumberArray = []
                    var custNumberCodeArray = []
                    for (var icustNumber = 0; icustNumber < custNumberRes.data.length; icustNumber++) {
                      custNumberArray[icustNumber] = custNumberRes.data[icustNumber].fName
                      custNumberCodeArray[icustNumber] = custNumberRes.data[icustNumber].fNumber
                    }
                    that.setData({// 获取区级数据
                      custNumber: custNumberArray,
                      custNumberCode: custNumberCodeArray,
                      custNumberr: custNumberArray[0]
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  },

  provincePicker: function (e) {
    var that = this
    var header = { 'content-type': 'application/json' }
    //改变index值，通过setData()方法重绘界面
    var currentProIndex = e.detail.value
    var currentProCode = e.currentTarget.dataset.procode[currentProIndex] //当前省代表的Code,当做查询级联市的parentid
    var pro = this.data;
    var prov = pro.province[currentProIndex];
    that.setData({
      provinceIndex: currentProIndex,
      cityIndex: '',
      districtIndex: '',
      provin: prov,
    })
    wx.request({
      url: 'http://127.0.0.1:8080/c/city?parentId=' + currentProCode,
      method: 'POST',
      header: header,
      success: function (cityRes) {
        var cityArray = []
        var cityCodeArray = []
        var districtParentId = cityRes.data[0].fEntryId //市编码，用于默认级联查询
        for (var icity = 0; icity < cityRes.data.length; icity++) {
          cityArray[icity] = cityRes.data[icity].fDataValue
          cityCodeArray[icity] = cityRes.data[icity].fEntryId
        }
        that.setData({
          city: cityArray,
          cityCode: cityCodeArray
        })
        wx.request({
          url: 'http://127.0.0.1:8080/c/district?parentId=' + districtParentId,
          method: 'POST',
          header: header,
          success: function (districtRes) {
            var districtArray = []
            var districtCodeArray = []
            var custNumberParentId = districtRes.data[0].fEntryId //区编码 用于默认级联查询
            for (var idistrict = 0; idistrict < districtRes.data.length; idistrict++) {
              districtArray[idistrict] = districtRes.data[idistrict].fDataValue
              districtCodeArray[idistrict] = districtRes.data[idistrict].fEntryId
            }
            that.setData({
              district: districtArray,
              districtCode: districtCodeArray
            })
            wx.request({
              url: 'http://127.0.0.1:8080/c/custNumber?parentId=' + custNumberParentId,
              method: 'POST',
              header: header,
              success: function (custNumberRes) {
                var custNumberArray = []
                var custNumberCodeArray = []
                for (var icustNumber = 0; icustNumber < custNumberRes.data.length; icustNumber++) {
                  custNumberArray[icustNumber] = custNumberRes.data[icustNumber].fName
                  custNumberCodeArray[icustNumber] = custNumberRes.data[icustNumber].fNumber
                }
                that.setData({
                  custNumber: custNumberArray,
                  custNumberCode: custNumberCodeArray
                })
              }
            })
          }
        })
      }
    })
  },
  cityPicker: function (e) {
    var that = this
    var header = { 'content-type': 'application/json' }
    //改变index值，通过setData()方法重绘界面
    var currentCityIndex = e.detail.value
    var currentCityCode = e.currentTarget.dataset.citycode[currentCityIndex] //当前市代表的Code,当做查询级联区的parentid
    var ci = this.data;
    var cit = ci.city[currentCityIndex];
    that.setData({
      cityIndex: currentCityIndex,
      districtIndex: '',
      cityy: cit,
    })
    wx.request({
      url: 'http://127.0.0.1:8080/c/district?parentId=' + currentCityCode,
      method: 'POST',
      header: header,
      success: function (districtRes) {
        var districtRespCode = districtRes.data.result
        var districtArray = []
        var districtCodeArray = []
        var custNumberParentId = districtRes.data[0].fEntryId //区编码 用于默认级联查询
        for (var idistrict = 0; idistrict < districtRes.data.length; idistrict++) {
          districtArray[idistrict] = districtRes.data[idistrict].fDataValue
          districtCodeArray[idistrict] = districtRes.data[idistrict].fEntryId
        }
        that.setData({
          district: districtArray,
          districtCode: districtCodeArray
        })
        wx.request({
          url: 'http://127.0.0.1:8080/c/custNumber?parentId=' + custNumberParentId,
          method: 'POST',
          header: header,
          success: function (custNumberRes) {
            var custNumberArray = []
            var custNumberCodeArray = []
            for (var icustNumber = 0; icustNumber < custNumberRes.data.length; icustNumber++) {
              custNumberArray[icustNumber] = custNumberRes.data[icustNumber].fName
              custNumberCodeArray[icustNumber] = custNumberRes.data[icustNumber].fNumber
            }
            that.setData({
              custNumber: custNumberArray,
              custNumberCode: custNumberCodeArray
            })
          }
        })
      }
    })
  },
  districtPicker: function (e) {
    var that = this
    var header = { 'content-type': 'application/json' }
    //改变index值，通过setData()方法重绘界面
    var currentdistrictIndex = e.detail.value
    var currentdistrictCode = e.currentTarget.dataset.councode[currentdistrictIndex] //当前区代表的Code,当做查询级联街道的parentid
    var dis = this.data;
    var distr = dis.district[currentdistrictIndex];
    that.setData({
      districtIndex: currentdistrictIndex,
      custNumberIndex: '',
      distri: distr,
    })
    wx.request({
      url: 'http://127.0.0.1:8080/c/custNumber?parentId=' + currentdistrictCode,
      method: 'POST',
      header: header,
      success: function (custNumberRes) {
        var custNumberArray = []
        var custNumberCodeArray = []
        for (var icustNumber = 0; icustNumber < custNumberRes.data.length; icustNumber++) {
          custNumberArray[icustNumber] = custNumberRes.data[icustNumber].fName
          custNumberCodeArray[icustNumber] = custNumberRes.data[icustNumber].fNumber
        }
        that.setData({
          custNumber: custNumberArray,
          custNumberCode: custNumberCodeArray
        })
      }
    })
  },
  custNumberPicker: function (e) {
    var that = this
    //改变index值，通过setData()方法重绘界面
    var currentcustNumberIndex = e.detail.value
    var currentcustNumberCode = e.currentTarget.dataset.councode[currentcustNumberIndex] //当前区代表的Code,当做查询级联街道的parentid
    var cust = this.data;
    var custNum = cust.custNumber[currentcustNumberIndex];
    that.setData({
      custNumberIndex: currentcustNumberIndex,
      custNumberr: custNum,
    })
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