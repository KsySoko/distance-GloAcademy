const menuBtn = document.querySelector('.m-menu');
// задаем кнопку menuBtn(сщздав новую переменную)-имя кнопки = нунжно найти в документе по селектору

const menu = document.querySelector('.menu-sidebar');
// для того чтобы при клике на эту кнопку появлялся класс .active (тоесть отображался скрытый .menu-sidebar)

menuBtn.addEventListener('click', function(){
		// при клике на menuBtn отслеживаем события (addEventlistener - прослушиватель событий) при клике чтоб выполнилась определенная анонимная функция
		menu.classList.toggle('active');
		// функция чтобы menu поменяла свой класс При помощи свойства classList мы обращаемся ко всем классам которые есть у блока const menu (т.е. у .menu-sidebar) и если там есть класс active, то функция toggle его уберет, еслт нет то она его добавит. это как выключатель-при заходе в комнату, если свет уже включен то нажав на выключатель мы его выключим и наоборот - так работает toggle=вкл/выкл
});

const shareBtn = document.querySelector('.share-button');
const menuShare = document.querySelector('.popover-menu')
shareBtn.addEventListener('click', function() {
	menuShare.classList.toggle('active');

})






// ----------------вывод в консоль----------------
// menuBtn.addEventlistener('click', function() {
// 	console.log('Нажатие на кнопку')
// })
// ----------------вывод в консоль----------------
