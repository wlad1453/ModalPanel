/** Модуль модальных окон (шаблоны видов окон находятся в папке templates, а стили в файле modal.css)
@module Site3dModal
*/

/*  @class Site3dModal Класс модального окна
    @constructor
*/
class Site3dModal
{
  constructor()
  {
    window.onload=function()
    {
    const d = document.createElement('div');
      d.className ="div_modal";
      d.id = "div_modal";
      d.innerHTML = "User's text in 'div'<br>second line<br>third line";
      document.body.appendChild(d);
      // console.log( "appendChild div" );
    
    var btnY = document.createElement('button');
      btnY.className = 'btnYes + btn';
      btnY.id = "btnY";
      d.appendChild(btnY);
    var bY = document.getElementById("btnY");
      bY.innerHTML='YES';

    var bY = document.getElementById("btnY");
      bY.innerHTML='Yes';
      bY.onmouseenter = function() {bY.style.background = '#11ff28';};
      bY.onmouseout = function() {bY.style.background = '#33fe77';}; //79, 252, 131
      bY.onclick = function(){
        console.log( "Yes clicked" );
        document.body.removeChild(d);        
        };

    var btnN = document.createElement('button');
      btnN.className ='btnNo + btn';
      btnN.id = "btnN";
      d.appendChild(btnN);

    var bN = document.getElementById("btnN");
      bN.innerHTML='No';
      bN.onmouseenter = function() {
        bN.style.background = '#fc4848';
        //bN.style.width = '39%';
      };
    bN.onmouseout = function() {
        bN.style.background = '#fc8888';
        //bN.style.width = '35%';
      };
    bN.onclick = function(){
        console.log( "No clicked" );
        document.body.removeChild(d); 
        // alert( "NO clicked" );
          
      };
    /*
    var btnOk = document.createElement('button');
        btnOk.className = 'btnOk + btn';
        btnOk.id = "btnOk";
        d.appendChild(btnOk);

        var bOk = document.getElementById("btnOk");
        bOk.innerHTML='OK';    
        bOk.onmouseenter = function()   {bOk.style.background = '#11ff28';};
        bOk.onmouseout = function()     {bOk.style.background = '#33fe77';}; //79, 252, 131
        bOk.onclick = function(){
            console.log( "Ok clicked" );
            alert( "Ok clicked" );
            yes = setTimeout(closeEl, 500);
            };*/

    } // Windows.onload
  } // Constructor

  closeEl() {
    
    const el = document.getElementById("div_modal");
    document.body.removeChild(el);
    
    console.log( "closeEl running");
  }

  /**
  @method show  Метод показывает модальное окно и возвращает выбор пользователя (для переопределения в дочерних классах)
  @async
  @param     {string} content    Текстовое содержимое окна
  @return    {string}            Выбор пользователя
  */
  
  static async show(content)
  {
  }

  /**
  Метод скрывает модальное окно
  @method hide
  */

  hide()  {
    setTimeout(this.closeEl, 2000);  
  }
} // class

/** Класс модального окна с кнопкой OK
@class Site3dAlert
@extends Site3dModal
@constructor
*/

class Site3dAlert extends Site3dModal
{
  constructor()
  {
    super();
    // Some stuff relating to OK button
  }

  /**
  Метод показывает модальное окно и возвращает выбор пользователя
  @method show
  @static
  @async
  @param     {string} content    Текстовое содержимое окна
  @return    {string}            Выбор пользователя
  */
  static async show(content)
  {
    // Метод создает объект окна, вызывает метод show, ждет и запоминает выбор пользователя, удаляет объект и возвращает выбор пользователя
    // В промисе возвратить выбор пользователя в виде строки - "ok")
  }

  async show(content)
  {
    // Своя реализация (в промисе возвратить выбор пользователя в виде строки - "ok")
    // ВФ: В принципе можно возвращать Да, Нет, ОК и не переопределять этот метод.
  }

  hide()
  {
    // Своя реализация, если требуется (иначе удалить переопределение)
  }
}

/**
Класс модального окна с кнопкой Да, Нет
@class Site3dConfirm
@extends Site3dModal
@constructor
*/
class Site3dConfirm extends Site3dModal
{
  constructor()
  {
    super();
    // constructor of Y-N button
  }

  /**  Метод показывает модальное окно и возвращает выбор пользователя
  @method show
  @static
  @async
  @param     {string} content    Текстовое содержимое окна
  @return    {string}            Выбор пользователя
  */
  static async show(content)
  {
    // Метод создает объект окна, вызывает метод show, ждет и запоминает выбор пользователя, удаляет объект и возвращает выбор пользователя
    // В промисе возвратить выбор пользователя в виде строки - "yes" или "no")
  }

  async show(content)
  {
    // Своя реализация (в промисе возвратить выбор пользователя в виде строки - "yes" или "no")
  }

  hide()
  {
    // Своя реализация, если требуется (иначе удалить переопределение)
  }
}

// Примеры вызовов

const alert = new Site3dAlert('');
// await alert.show('Текст сообщения', () => {/* Действие по нажатию кнопки ОК*/});

const confirm = new Site3dConfirm('');
/* const confirmResult1 = await confirm.show(
  'Текст вопроса',
  () => { Действие по нажатию кнопки Да, в том числе возможен вызов другого диалогового окна},
  () => { Действие по нажатию кнопки Нет, в том числе возможен вызов другого диалогового окна});
if (confirmResult1 === 'yes')
{
}
else if (confirmResult1 === 'no')
{
} */

// await Site3dAlert.show('Текст сообщения', () => {/* Действие по нажатию кнопки ОК*/});
/* await Site3dConfirm.show
  (
    'Текст вопроса',
  //  () => { Действие по нажатию кнопки Да, в том числе возможен вызов другого диалогового окна},
  //  () => { Действие по нажатию кнопки Нет, в том числе возможен вызов другого диалогового окна}
  ); */