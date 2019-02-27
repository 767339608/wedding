function first () {

  $('main').load('vip/vip.html');
}
function three () {
  $('main').load('item/item.html');
}
function two () {
  $('main').load('order/order.html');
}
function font () {
  $('main').load('media.html');
}
$('ul').click(function (ev) {
  if (ev.target.nodeName == 'A') {
    $('.box-1 a').attr('class', '');
    ev.target.className = 'li1';
  }
})