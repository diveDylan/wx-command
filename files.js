var files = function(cwd) {
  var page = {
    js: `
    /**
     * ${cwd}.js
     */
    Page({
    
      /**
       * 页面的初始数据
       */
      data: {
    
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
    })`
  ,
  wxss: `/**${cwd}.wxss**/`,
  json: `
  /** 
   * ${cwd}.json
   * */
  {
    "usingComponents": {}
  }`,
  wxml: `<!--${cwd}.wxml-->
  <text>${cwd}</text>`
  }
  var components = {
    js: `
    /**
     * ${cwd}
     * /
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

    `,
   json: `
   /**
    * ${cwd}
    * /
   {
    "component": true,
    "usingComponents": {}
  }
   `,
   wxss: `
   /**
   * ${cwd}
   */
   `,
   wxml: `
   <!--${cwd}-->
<text>${cwd}</text>
`
  }
  return {
    page
  }
}
exports = module.exports = files
