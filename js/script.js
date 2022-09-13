const output_svg = document.getElementById('color_list');

function csv_data(dataPath) {
	const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
	request.addEventListener('load', (event) => { // ロードさせ実行
		const response = event.target.responseText; // 受け取ったテキストを返す
		output_svg.innerHTML = response; // 表示
	});
	request.open('GET', dataPath, true); // csvのパスを指定
	request.send();
}
const dataArray = [];
function csv_array(data) {
	const dataArray = []; //配列を用意
	const dataString = data.split('\n'); //改行で分割
	for (let i = 0; i < dataString.length; i++) { //あるだけループ
		dataArray[i] = dataString[i].split(',');
	}
  dataArray.forEach((element) => { //配列の中身を表示
		insertElement += '<tr>';
		element.forEach((childElement) => {
			insertElement += `<td>${childElement}</td>`
		});
		insertElement += '</tr>';
	});
	output_csv.innerHTML = dataArray; //表示
	console.log(dataArray);
}

//csv_data('csv/test_question_data7.csv'); // csvのパス
function QText(url,i){
  const data=getCsv(url);
  console.log(data[1][i]);
  return data[1][i];
}
function QAnswer(url,i){
  const data=getCsv(url);
  return [2][i];
}
function QComment(url,i){
  const data=getCsv(url);
  return [3][i];
}

function getCsv(url){
  //CSVファイルを文字列で取得。
  var txt = new XMLHttpRequest();
  txt.open('get',url, false);
  txt.send();
  csvfile.onload=function(){

    //改行ごとに配列化
    var arr = txt.responseText.split('\n');

    //1次元配列を2次元配列に変換
    var res = [];
    for(var i = 0; i < arr.length; i++){
      //空白行が出てきた時点で終了
      if(arr[i] == '') break;

      //","ごとに配列化
      res[i] = arr[i].split(',');

      for(var i2 = 0; i2 < res[i].length; i2++){
        //数字の場合は「"」を削除
        if(res[i][i2].match(/\-?\d+(.\d+)?(e[\+\-]d+)?/)){
          res[i][i2] = parseFloat(res[i][i2].replace('"', ''));
        }
      }
    }

  }
 

  return res;
}