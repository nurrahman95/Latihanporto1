// even saat link di klik
$(".page-scroll").on("click", function (e) {
  //ambil isi href
  var tujuan = $(this).attr("href");

  //tangkap elemen yang bersangkutan
  var elementTujuan = $(tujuan);

  $("body").animate(
    {
      scrollTop: elementTujuan.offset().top - 50,
    },
    1000
  );

  e.preventDefault();
});
