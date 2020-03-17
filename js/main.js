let progressInt = +($("#pb").text()).split("%", 1);
/** я решил использовать в качестве отслеживания прогресс-бара
текст внутри него. Заодно наглядно видно, сколько сейчас %
Можно было использовать отдельную переменную, но по мне так нагляднее :)
progressInt - перевод текста внутри прогресс-бара в int **/ 
let updatedProgress = 0;

//Перевод int-значения прогресс бара в str и добавление знака %
function progressToText() {
	return progressInt.toString() + "%";
	
}
//Меняем лейбл прогресс-бара на обновленное значение
function changeProgressText() {
	$("#pb").text(progressToText())
}
// +1%
function plusOne() {
	if (progressInt < 100) {
		progressInt++;
		$("#pb").width(progressToText());
		changeProgressText();
	}else{
	alert("Progress-bar is full!")}
}
//+3%
function plusThree() {
	if ((progressInt+3) <= 100) {progressInt += 3;
		$("#pb").width(progressToText());
		changeProgressText();
	}else{
		alert("Progress-bar is full!")}

}
//+7%
function plusSeven() {
	if ((progressInt+7) <= 100) {progressInt += 7;
		$("#pb").width(progressToText());
		changeProgressText();
	}else{
		alert("Progress-bar is full!")}

}
//сбрасываем значение прогрессбара
function reset() {
	progressInt = 0;
	$("#pb").width(progressToText());
	changeProgressText();
}
//обработка событий, тычем по кнопкам

	$("#btn1").click(plusOne);
	$("#btn3").click(plusThree);
	$("#btn7").click(plusSeven);

$("#reset").click(reset);

