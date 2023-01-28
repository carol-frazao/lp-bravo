const posicaoInicial = (section) => $(section).position().top;

$(document).scroll(function () {
  const topo = $(document).scrollTop(); // obtem a quantidade de scroll no momento

  if (posicaoInicial("#inicio") + 100 < topo) {
    $(".back-to-top").css("display", "block");
  } else {
    $(".back-to-top").css("display", "none");
  }
});
const scrollar = (section) => {
  var target_offset = $(section).offset();
  var target_top = target_offset.top;
  $("html, body").animate({ scrollTop: target_top - 100}, 0);
};

const scrollMore = (section) => {
  const target_offset = $(section).offset();
  const target_top = target_offset.top;
  $("html, body").animate({ scrollTop: target_top - 50}, 0);
};