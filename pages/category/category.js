// pages/mybook/mybook.js
Page({

  /* 页面的初始数据 */
  data: {
    cateItems: [{
        cate_id: 1,
        cate_name: '分组1',
        children: [{
            child_id: 1,
            name: '农夫山泉',
            image: "cloud://manhua-6gzdgw9udfcf0adc.6d61-manhua-6gzdgw9udfcf0adc-1304709008/water.png"
          },
          {
            child_id: 2,
            name: '奥利奥',
            image: "cloud://manhua-6gzdgw9udfcf0adc.6d61-manhua-6gzdgw9udfcf0adc-1304709008/case.png"
          },
          {
            child_id: 3,
            name: '电脑',
            image: "cloud://manhua-6gzdgw9udfcf0adc.6d61-manhua-6gzdgw9udfcf0adc-1304709008/computer.png"
          },
        ]
      },
      {
        cate_id: 2,
        cate_name: '分组2',
        children: [{
            child_id: 1,
            name: '奥利奥',
            image: "cloud://manhua-6gzdgw9udfcf0adc.6d61-manhua-6gzdgw9udfcf0adc-1304709008/case.png"
          },
          {
            child_id: 2,
            name: '农夫山泉',
            image: "cloud://manhua-6gzdgw9udfcf0adc.6d61-manhua-6gzdgw9udfcf0adc-1304709008/water.png"
          },
          {
            child_id: 3,
            name: '电脑',
            image: "cloud://manhua-6gzdgw9udfcf0adc.6d61-manhua-6gzdgw9udfcf0adc-1304709008/computer.png"
          },
        ]
      },
      {
        cate_id: 3,
        cate_name: '分组3'
      },
      {
        cate_id: 4,
        cate_name: '分组4'
      },
      {
        cate_id: 5,
        cate_name: '分组5'
      },
      {
        cate_id: 6,
        cate_name: '分组6'
      },
      {
        cate_id: 7,
        cate_name: '分组7'
      },
      {
        cate_id: 8,
        cate_name: '分组8'
      },
      {
        cate_id: 9,
        cate_name: '分组9'
      },
      {
        cate_id: 10,
        cate_name: '分组10'
      },
      {
        cate_id: 11,
        cate_name: '分组11'
      },
      {
        cate_id: 12,
        cate_name: '分组12'
      },
      {
        cate_id: 13,
        cate_name: '分组13'
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = e.target.dataset.index;
    this.setData({
      curNav: id,
      curIndex: index
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