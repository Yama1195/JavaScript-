// 50までカウントする
let a = 0;
for (a = 0; a < 51; a++){

  // 10カウント毎にコンソールに出力
  if (a == 10){
    console.log('今' + a + '回ループしました。');
  }
  if (a == 20){
    console.log('今' + a + '回ループしました。');
  }
  if (a == 30){
    console.log('今' + a + '回ループしました。');
  }
  if (a == 40){
    console.log('今' + a + '回ループしました。');
  }
  if (a == 50){
    console.log('今' + a + '回ループしました。');
  }

  // 4で割れる数をコンソールに出力
  if (a % 4 == 0){
    console.log('4で割れる数です。' + a);
  }

  // 50回になった時にアラート
  if (a == 50){
    alert('50回カウントが終わりました。');
  }
}