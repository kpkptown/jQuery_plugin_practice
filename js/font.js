$(function () {
    $('.title_animation').textillate({
        loop: true,	// ループ繰り返し
        minDisplayTime: 3000,	// アニメーションの間隔時間
        initialDelay: 0,	// アニメーション開始までの遅延時間
        autoStart: true,	// アニメーションの自動スタート

      // 開始時のアニメーション設定
      in: {
        // エフェクトの指定
        effect: 'flipInX',  
        // 遅延時間の指数
        delayScale: 1.5,  
        // 文字ごとの遅延時間
        delay: 50,  
        // true:アニメーションをすべての文字に同時適用
        sync: false, 
        // true:文字表示がランダムな順に表示される
        shuffle: false
      },  
  
      // 終了時のアニメーション設定
      out: {
        effect: 'bounce',  
        delayScale: 1.5,  
        delay: 50,  
        sync: false,  
        shuffle: false
      }
    });
});