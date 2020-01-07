$(function () {
  // sitiesArr里面存放对象
  var sitiesArr = [];
  // 生成右侧城市字母
  $('.y-baz p').each(function (i, e) {
    // 创建li
    var li = $('<li></li>');
    // 添加自定义属性
    li.attr('data-href', $(e).attr("id"));
    // 小写转大写
    li.text($(e).attr("id").toUpperCase());
    // 给首个添加cur
    i == 0 ? li.addClass('cur') : '';
    // 把li追加到ul里面
    $('.y-raz ul').append(li);

    // 每循环一次sityClass都要初始化
    var sityClass = {};
    sityClass.key = $(e).attr("id");
    // 距离顶部的高度
    sityClass.distTop = $('#' + $(e).attr("id")).offset().top;

    // 往数组里面追加对象
    sitiesArr.push(sityClass);
  })
  // console.log(sitiesArr);

  // 当前城市类
  var currentCity = 'a';
  

  $(document).scroll(function () {
    var that = this;
    // 数组的遍历
    $.each(sitiesArr, function (i, obj) {
      // 替换城市类
      currentCity = obj.key; // a
      if ($(that).scrollTop() >= $('#' + currentCity).offset().top) {
        $('.y-raz ul li').each(function () {
          if ($(this).attr('data-href') == currentCity) {
            $(this).addClass('cur').siblings().removeClass('cur');
          }
        })
      } 
    })
  })

  /**
   * 右侧城市字母联动左侧城市 todo
   */
  // 鼠标滚动的距离
  // var mouseScrollTop = 0;
  // 城市下标
  // var cityIndex = 0;
  // // 点击右侧城市字母
  // $('.y-raz ul li').each(function(i, e){
  //   $(e).click(function(){
  //     cityIndex = i;
  //     // console.log(cityIndex);
  //     $(e).addClass('cur').siblings().removeClass('cur');
  //     // console.log(sitiesArr[cityIndex].distTop);
  //   })
  // })

  // function cityGanged(cityLetter, userAttr, className) {}
  // cityGanged('.y-baz p', 'data-href', 'cur');
})