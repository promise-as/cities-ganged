$(function () {
  // 城市字母的数组
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

    // 往数组里面追加对象
    sitiesArr.push($(e).attr("id"));
  })
  // console.log(sitiesArr);

  // 当前城市类
  var currentCity = 'a';
  $(document).scroll(function () {
    var that = this;
    // 数组的遍历
    $.each(sitiesArr, function (i, e) {
      // 替换城市类
      currentCity = e; // a
      if ($(that).scrollTop() >= $('#' + currentCity).offset().top) {
        $('.y-raz ul li').each(function () {
          if ($(this).attr('data-href') == currentCity) {
            $(this).addClass('cur').siblings().removeClass('cur');
          }
        })
      } 
    })
  })
})