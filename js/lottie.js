const test = lottie.loadAnimation({
  container: document.getElementById('lottie'), // アニメーションをさせたいdivなどhtml要素ににつけた名前
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../data.json' // 自分が書き出したjsonファイルの名前と場所（パス）を記述
});
console.log(test);