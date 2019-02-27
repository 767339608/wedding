let inp = document.getElementsByClassName("box-1")[0].getElementsByTagName("input")

let hb = document.getElementsByClassName("h5-1")[0]
inp[0].onblur = function () {
  if (w1.test(inp[0].value)) {
    hb.innerHTML = "用户名正确";
    hb.style.color = "rgb(153, 153,153)";
    hb.style.opacity = "1"
  } else {
    hb.innerHTML = "用户名错误请重新输入";
    hb.style.opacity = "1";
    hb.style.color = "red"
  }
}
inp[1].onblur = function () {
  if (w2.test(inp[1].value)) {
    $(".box-5").css("opacity", "1").css("color", "gray").text("密码可用");
  } else {
    $(".box-5").css("opacity", "1").css("color", "red")
    $(".box-5").text("密码不可用");
  }
}
inp[0].onfocus = function () {
  hb.style.opacity = "0"
}
inp[1].onfocus = function () {
  $(".box-5").css("opacity", "0")
}
var w1 = /^\w{3,12}$/;
var w2 = /^[a-zA-Z0-9]{4,10}$/;

// 登录
$(".denglu").click(function () {
  console.log($(".denglu").val())
  $.ajax({
    url: 'http://101.132.40.198:8181/login',
    type: 'post',
    data: {
      username: $("#username").val(),
      password: $("#password").val(),
    },
    success: function (data) {
      console.log(JSON.parse(data));
      console.log(1);
      if (JSON.parse(data).status == "200") {
        alert("登录成功");
        location.href = ('index.html')
      }
      if (JSON.parse(data).status == "400") {
        alert("登录失败");
      }
    },
    error: function (error, Msgerror) {
      console.log(Msgerror);
      alert("网络连接失败，请重试!")
      console.log(2);
    }
  })
})

// 注册
$(".zhuche").click(function () {
  if (!($("#username").val() == "" || $("#password").val() == "")) {
    if (w1.test(inp[0].value) && w2.test(inp[1].value)) {
      $.ajax({
        url: 'http://101.132.40.198:8181/register',
        type: 'post',
        data: {
          username: $("#username").val(),
          password: $("#password").val(),
          iphone: "26877528",
          email: "1304040249@qq.com",
          user: "射手座"
        },
        success: function (data) {
          console.log(JSON.parse(data));
          console.log(1);
          if (JSON.parse(data).status == "103") {
            alert("已经注册,请登录");
          }
          if (JSON.parse(data).status == "200") {
            alert("注册成功!");
          }
        },
        error: function (error, Msgerror) {
          console.log(Msgerror);
          console.log(2);
        }
      })
    }
  }
})
  // }