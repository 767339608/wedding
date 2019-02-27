$(document).ready(function () {
  $(".prop_div").on("click", "a", function (ev) {
    $(".prop_div").hide().next().show();
    let time = $(this).parents("tr").find("div:first").text();
    // console.log(time);
    let name = $(this).parents("tr").find("div").eq(1).text();
    // console.log(name);
    let num = $(this).parents("tr").find("div").eq(2).text();
    // console.log(num);
    let money = $(this).parents("tr").find("div").eq(3).text();
    // console.log(money);
    let all_money = $(this).parents("tr").find("div").eq(4).text();
    // console.log(all_money);
    let surplus = $(this).parents("tr").find("div").eq(5).text();
    index = $(this).parents("tr").attr("data-index");
    // console.log(index);
    $(".buy_time").val(time);
    $(".buy_prop").val(name);
    $(".buy_num").val(num);
    $(".buy_one_money").val(money);
    $(".buy_all_money").val(all_money);
    $(".buy_surplus").val(surplus);

    index1 = $(this).parents("tbody tr").index();

    $(".modify").on("click", function () {
      $(".prop_div").show().next().hide();
      // console.log($("tbody:eq(2)").children().eq(index));
      //赋值给第几个tr
      let trNum = $("tbody:eq(2)").children().eq(index);
      trNum.find("div:first").text($(".buy_time").val());
      trNum.find("div").eq(1).text($(".buy_prop").val());
      trNum.find("div").eq(2).text($(".buy_num").val());
      trNum.find("div").eq(3).text($(".buy_one_money").val());
      trNum.find("div").eq(4).text($(".buy_all_money").val());
      trNum.find("div").eq(5).text($(".buy_surplus").val());
      // console.log(trNum);
    })

    $(".delete").on("click", function () {
      $(".delete").off("click");
      $("tbody").eq(2).find("tr").eq(index1).remove();
      $(".prop_div").show().next().hide();
    })
  })
})