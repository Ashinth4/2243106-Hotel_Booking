function exit_all(){
    search_end();
    setting_Exit();
  }
  function blur1(a){
      document.querySelector('._3d').style.filter ="blur(" + a + ")";
      document.querySelector('.menuBar-container').style.filter ="blur(" + a + ")";
      document.querySelector('.img-container1').style.filter ="blur(" + a + ")";
      document.querySelector('.img-container2').style.filter ="blur(" + a + ")";
      document.querySelector('.animation-container').style.filter ="blur(" + a + ")";
      document.querySelector('.settings-container').style.filter ="blur(" + a + ")";
      document.querySelector('.about-container').style.filter ="blur(" + a + ")";
  }
  function search(){
    let a='2px';
    document.querySelector('.search-container').style.display = 'grid';
      blur1(a);
  }
  function search_end(){
    let a='0px';
    document.querySelector('.search-container').style.display = 'none';
      blur1(a);
  }
  
  function theme1(){
    document.body.style.background = 
    "linear-gradient( " 
    + 'white'
    + ", " 
    + '#8b8787'
    + ")";
  }
  function theme2(){
    document.body.style.background = 
    "linear-gradient( " 
    + 'rgba(99, 237, 214, 0.877)'
    + ", " 
    + 'rgb(145, 248, 248)'
    + ", "
    +'rgb(255, 255, 0)'
    + ")";
  }
  function open_setting(){
    setTimeout(setting,5000);
    document.querySelector('.menuBar-item-buttons-setting').style.backgroundImage = "url(" + './settings.gif' + ")";
    document.querySelector('.menuBar-item-buttons-setting').style.backgroundSize = "50px 50px";
    document.querySelector('.menuBar-item-buttons-setting').style.backgroundColor= "transparent";
    
  }
  function setting(){
    document.querySelector('#settings').style.display='none';
    document.querySelector('.settings-container').style.display='grid';
    
  }
  function setting_Exit(){
    document.querySelector('.settings-container').style.display='none';
    document.querySelector('#settings').style.display='block';
  }
  function blur2(a){
    
    document.querySelector('.search-container').style.filter = "blur(" + a + ")";
    document.querySelector('.menuBar-container').style.filter ="blur(" + a + ")";
    document.querySelector('.settings-container').style.filter ="blur(" + a + ")";
    document.querySelector('.content-container').style.filter ="blur(" + a + ")";
    document.querySelector(' .room-container').style.filter ="blur(" + a + ")";
    document.querySelector('.booking').style.filter ="blur(" + a + ")";
  }
  function login_open(){
    let a = '5px';
    document.querySelector('._3d2').style.filter ="blur(" + a + ")";
    document.querySelector('._3d').style.display = 'block' ;
    blur2(a);
  }
  function login_close(){
    let a = '0px';
    document.querySelector('._3d2').style.filter ="none";
    document.querySelector('._3d').style.display = 'none' ;
    blur2(a);
  }
  function moveLogin(){      
    document.querySelector('._3d').style.transform = "rotateY(" + "360deg)" + " translate(" + "0px" + ")" ;
  }
  function movesignin(){
    document.querySelector('._3d').style.transform = "rotateY(" + "180deg)" + " translate(" + "-400px" + ")" ;
  }
 
  
  function move_pic_3d(){
      for(let i=0;i<1000;i=i+90)
      {
          setTimeout(function(){document.documentElement.style.setProperty('--i', x + 'deg');},18000);
      }
  }