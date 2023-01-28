const posicaoInicial = (section) => $(section).position().top;

const scrollar = (section) => {
  const target_offset = $(section).offset();
  const target_top = target_offset.top;
  $("html, body").animate({ scrollTop: target_top - 60}, 0);
};

$(document).scroll(function () {
  const topo = $(document).scrollTop(); // obtem a quantidade de scroll no momento

  if (posicaoInicial("#inicio") + 100 < topo) {
    $(".back-to-top").css("display", "block");
  } else {
    $(".back-to-top").css("display", "none");
  }
});