function plusOne(number, callback) {
  if (number >= 7) {
    callback("Number too big");
    return;
  }
  setTimeout(function () {
    callback(null,number + 1);
  }, 2000);
}

plusOne(5, function (err, valor) {
  if (err) return console.log(err);
  console.log(valor);
  plusOne(valor, function (err, valor2) {
    if (err) return console.log(err);
    console.log(valor2);

    plusOne(valor2, function (err, valor3) {
        if (err) return console.log(err);
      console.log(valor3);
    });
  });
});
