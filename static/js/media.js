  let ul = '<ul>';
  for (let i = 1; i < 13; i++) {
    ul += '<li>' + i + '</li>'
  }
  ul += '</ul>'
  $('.date-pop-up li').html(ul)
  let delclick = 0
  let delchoosearr = new Set();
  let mediaclick = false;
  $('#del').click(function () {
    if (delclick == 0) {
      $('.media li img').attr('src', '../static/images/medianochoose.jpg')
      $(this).attr({ 'data-toggle': "", 'data-target': "" })
      mediaclick = true;
      delclick = 1;
    } else {
      delclick = 0;
      $(this).attr({ 'data-toggle': "modal", 'data-target': "#myModal" })
      $('.media li img').attr('src', '../static/images/media.jpg')
    }
  })
  // on ready in del
  $('#readydel').click(function () {
    //del
    console.log(delchoosearr)
    for (let item of delchoosearr) {
      $('.media li').eq(item).remove();
    }
    //clear set
    delchoosearr = new Set();
  })
  $('.media').click(function (ev) {
    if (mediaclick) {
      if (ev.target.nodeName == 'IMG') {
        if ($(ev.target).attr('src') != '../static/images/mediachoose.jpg') {
          $(ev.target).attr('src', '../static/images/mediachoose.jpg')
          delchoosearr.add($(ev.target).parent().index());
        } else {
          $(ev.target).attr('src', '../static/images/medianochoose.jpg')
          delchoosearr.delete($(ev.target).parent().index())
        }
      }
    }

  })
  function onKeyDown(ev) {
    let html = '';
    if (ev.code == 'Enter') {
      for (let i = 0; i < $('.media li span').length; i++) {
        if ($('.media li span')[i].innerText.indexOf($('#sreach').val()) != -1) {
          html += '<li>' + $($('.media li span')[i]).parent().html() + '</li>';
        }
      }
      $('.media').empty();
      $('.media').html(html);
    }
  }
  // 搜索
  $('#select').click(function () {
    let html = '';
    for (let i = 0; i < $('.media li span').length; i++) {
      if ($('.media li span')[i].innerText.indexOf($('#sreach').val()) != -1) {
        html += '<li>' + $($('.media li span')[i]).parent().html() + '</li>';
      }
    }
    $('.media').empty();
    $('.media').html(html);
  })
  // 日期选择器
  $('.time-choose').click(function (ev) {
    if (ev.target.id == 'date') {
      $(ev.target).parent()
    }
  })
  $('.date-pop-up>li').click(function (ev) {
    console.log($(ev.scrolltop))
    $('.date-pop-up').mousedown(function (ev) {
      console.log(ev)
    })
  })
