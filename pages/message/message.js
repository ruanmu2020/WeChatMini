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
    product: '',//产品
    specModel: '',//规格型号
    price: '',// 单价
    multiArray: [[], [], []],//multiArray代表显示的[省,市,区]数组
    multiIndex: [0, 0, 0],//multiIndex代表滑动后定位的下标数组,从数据库获取数据后通过[0,0,0]得到初始化的multiArray
    //省市区start
    province: '',
    city: '',
    district: '',
    custNumber: '',
    provinceIndex: 0,
    cityIndex: 0,
    districtIndex: 0,
    custNumberIndex: 0,
    provinceCode: '',
    cityCode: '',
    districtCode: '',
    custNumberCode: '',
    //省市区end

    //是否发票随货
    // selectBill: false,
    // billPr: '请选择',
    // billProduct: [
    //   '是',
    //   '否',
    // ],
    // indexBill: 0,

    // //点击下拉框
    // bindShowMsgBill() {
    //   this.setData({
    //     selectBill: !this.data.selectBill
    //   })
    // },

    // //已选下拉框
    // mySelectBill(e) {
    //   var indexBill = e.currentTarget.dataset
    //   console.log("indexBill=" + indexBill)
    //   var name = e.currentTarget.dataset.name;
    //   this.setData({
    //     indexBill: indexBill,
    //     billPr: name,
    //     selectBill: !this.data.selectBill
    //   })
    // },
    //是否发票随货end

    //开票信息
    selectEmail: false,
    billEma: '以提供开票信息开票',
    billEmail: [
      '以采购单位名称和纳税识别号开票',
      '以提供开票信息开票',
    ],
    indexEmail: 0,
    //开票信息end
    

    //渠道(自营&推广)
    selectCanalsValue: false,
    canals: '自营',
    canalsValue: [
      '自营',
      '推广',
    ],
    indexCanalsValue: 0,
    //渠道(自营&推广)end
    
    //大区
    selectDistrictValue: false,
    region: '东区',
    districtValue: [
      '东区',
      '南区',
      '西区',
      '北区',
    ],
    indexDistrictValue: 0,
    //大区end

   
    qtyValue: '',
    cDCCGTValue: '',
    speReqValue: '',//特殊要求
    phoneValue: '',
    electrValue: '',
    mIValue: '',
    clerkPhoValue: '',
    dates: '',  //疾控常规收货时间
    billPr: '',  //是否发票随货
    contract: '',//合同是否随货
  },
  //开票信息
  //点击下拉框
  bindShowMsgEmail() {
    this.setData({
      selectEmail: !this.data.selectEmail
    })
  },
  //已选下拉框
  mySelectEmail(e) {
    var indexEmail = e.currentTarget.dataset
    console.log("indexEmail=" + indexEmail)
    var name = e.currentTarget.dataset.name;
    this.setData({
      indexEmail: indexEmail,
      billEma: name,
      selectEmail: !this.data.selectEmail
    })
  },
    //开票信息end

   //点击日期组件确定事件 
  checkboxDates: function (e) {
    this.setData({
      dates: e.detail.value
    })
  },
  
  getDatesValue: function (e) {
    this.setData({
      dates: e.detail.value
    })
  },
  //点击日期组件确定事件end

  //渠道(自营&推广)
  //点击下拉框
  bindShowMsgCanalsValue() {
    this.setData({
      selectCanalsValue: !this.data.selectCanalsValue
    })
  },
  //已选下拉框
  mySelectCanalsValue(e) {
    var indexCanalsValue = e.currentTarget.dataset
    var name = e.currentTarget.dataset.name;
    this.setData({
      indexCanalsValue: indexCanalsValue,
      canals: name,
      selectCanalsValue: !this.data.selectCanalsValue
    })
  },
    //渠道(自营&推广)end

  //大区
  //点击下拉框
  bindShowMsgDistrictValue() {
    this.setData({
      selectDistrictValue: !this.data.selectDistrictValue
    })
  },
  //已选下拉框
  mySelectDistrictValue(e) {
    var indexDistrictValue = e.currentTarget.dataset
    var name = e.currentTarget.dataset.name;
    this.setData({
      indexDistrictValue: indexDistrictValue,
      region: name,
      selectDistrictValue: !this.data.selectDistrictValue
    })
  },
    //大区end

  //点击特殊要求
  checkboxSpeReqValue: function (e) {
    this.setData({
      speReqValue: e.detail.value
    })
  },

  getSpeReqValue: function (e) {
    this.setData({
      speReqValue: e.detail.value
    })
  },
  //点击特殊要求end

  //点击是否发票随货
  checkboxBillPr: function (e) {
    this.setData({
      billPr: e.detail.value
    })
  },

  getBillPr: function (e) {
    this.setData({
      billPr: e.detail.value
    })
  },
  //点击是否发票随货end

  //点击合同是否随货
  checkboxContract: function (e) {
    this.setData({
      contract: e.detail.value
    })
  },

  getContract: function (e) {
    this.setData({
      contract: e.detail.value
    })
  },
  //点击合同是否随货end

  getContract: function (e) {
    this.setData({ contract: e.detail.value });
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
    this.setData({ canals: e.detail.value });
  },
  getDistrictValue: function (e) {
    this.setData({ region: e.detail.value });
  },
  saveNewAddress: function (e) {
    var that = this;
    let formValue = {
      values: JSON.stringify({
        contract: that.data.contract,
        dates: that.data.dates,
        province: that.data.provin,
        city: that.data.cityy,
        district: that.data.distri,
        fName: that.data.custNumberr,//fName:与后台实体类对应
        billEma: that.data.billEma,
        billPr: that.data.billPr,
        qtyValue: that.data.qtyValue,
        speReqValue: that.data.speReqValue,
        phoneValue: that.data.phoneValue,
        mIValue: that.data.mIValue,
        clerkPhoValue: that.data.clerkPhoValue,
        canalsValue: that.data.canals,
        districtValue: that.data.region,
        product: that.data.multiArray[0][that.data.multiIndex[0]],//获得产品名称
        specModel: that.data.multiArray[1][that.data.multiIndex[1]],//获得规格型号
        price: that.data.multiArray[2][that.data.multiIndex[2]]//获得单价
      })
    };
    if (that.data.clerkPhoValue.length == 0 ||that.data.phoneValue.length == 0 ||that.data.qtyValue.length == 0 ||that.data.provin.length == 0 || that.data.cityy.length == 0 || that.data.distri.length == 0 || that.data.custNumberr.length == 0 ||  that.data.multiArray[0][that.data.multiIndex[0]].length == 0 || that.data.multiArray[1][that.data.multiIndex[1]].length == 0 || that.data.multiArray[2][that.data.multiIndex[2]].length == 0 ) {
      wx.showToast({
        title: '提示：信息不能为空！',
        duration: 2000,
      })
    } else {
      wx.request({
        url: 'http://127.0.0.1:8080/b/massage',		//218.25.37.253   127.0.0.1		192.168.171.133:1433
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
    }
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCityStationPer();
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
      custNumberIndex: '',
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
              url: 'http://127.0.0.1:8080/c/custNumber?parentId=' + custNumberParentId, //127.0.0.1:8080
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
      custNumberIndex: '',
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

  /*****获取产品名称-规格型号-单价 */
  getCityStationPer: function () {
    let that = this
    that.setData({
      product: [
        '重组乙型肝炎疫苗(汉逊酵母)',
        '甲型肝炎灭火疫苗(人二倍体细胞)',
        '腮腺炎减毒活疫苗',
        'ACYMW135群脑膜炎球菌多糖疫苗',
        '冻干人用狂犬疫苗(Vero细胞)',
        '双价肾综合症出血热疫苗(Vero细胞)'
      ],//存放产品
      specModel: {
        '重组乙型肝炎疫苗(汉逊酵母)': ['10μg/0.5ml/瓶', '10μg/0.5ml/支', '20μg/0.5ml/瓶', '20μg/0.5ml/支'],
        '甲型肝炎灭火疫苗(人二倍体细胞)': ['320eu/0.5ml/瓶', '640eu/1ml/瓶', '320eu/0.5ml/支', '640eu/1ml/支'],
        '腮腺炎减毒活疫苗': ['0.5ml/瓶', '0.5ml/瓶(5瓶)'],
        'ACYMW135群脑膜炎球菌多糖疫苗': ['0.5ml/瓶'],
        '冻干人用狂犬疫苗(Vero细胞)': ['1.0ml/瓶(冻干)', '1.0ml*5瓶/人份'],
        '双价肾综合症出血热疫苗(Vero细胞)': ['1.0ml/瓶(双价)']
      },
      price: {
        '10μg/0.5ml/瓶': ['46', '46.5', '47', '70'],
        '10μg/0.5ml/支': ['68.4', '69', '70.9', '71', '85'],
        '20μg/0.5ml/瓶': ['70', '71.5', '72.5', '73', '95'],
        '20μg/0.5ml/支': ['84', '86', '88', '108'],
        '320eu/0.5ml/瓶': ['80', '81', '118'],
        '320eu/0.5ml/支': ['100', '101', '138'],
        '640eu/1ml/瓶': ['90', '96', '138'],
        '640eu/1ml/支': ['110', '158'],
        '0.5ml/瓶': ['58', '59', '78'],
        '0.5ml/瓶(5瓶)': ['39', '43', '44', '46', '58'],
        '0.5ml/瓶': ['80'],
        '1.0ml/瓶': ['72', '57', '60'],
        '1.0ml*5瓶/人份': ['50', '44', '47', '50.7', '51', '52', '53','60'],
        '1.0ml/瓶(10瓶/盒)': ['44','58']
      },
    })
    that.data.multiArray[0] = that.data.product;
    that.data.multiArray[1] = this.getArr(that.data.product[0], that.data.specModel);
    that.data.multiArray[2] = this.getArr(that.data.multiArray[1][0], that.data.price);
    that.setData({
      multiArray: that.data.multiArray
    })
  },
  /****列发生改变,通过滑动调用bindMultiPickerColumnChange方法得到新的数组下标数组，进而得到新的数据数组。 */
  bindMultiPickerColumnChange: function (e) {
    let that = this
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex,
      product: this.data.product,
      specModel: this.data.specModel,
      price: this.data.price
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        //第一列改变  设置第二列数据
        let arr = that.getArr(that.data.product[e.detail.value], that.data.specModel)
        data.multiArray[1] = arr
        that.setData({
          multiArray: data.multiArray
        })
        //从第二列中拿出第一项，设置第三组人员
        let arrColumn2 = that.getArr(arr[0], that.data.price)
        data.multiArray[2] = arrColumn2
        that.setData({
          multiArray: data.multiArray
        })
        break;
      case 1:
        //第二列改变 设置第三列数据
        let arr2 = that.getArr(data.multiArray[1][e.detail.value], that.data.price)
        data.multiArray[2] = arr2
        that.setData({
          multiArray: data.multiArray
        })
        break;
    }
  },
  getArr: function (value, arr) {
    for (let i in arr) {
      if (value == i) {
        return arr[i]
      }
    }

  },
  /****值发生改变  点击确定按钮*/
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
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
})