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
function box_highlight(j){
    let b;
    document.querySelector('.img-container2').style.background = 
    "linear-gradient( " 
    + 'rgb(155, 250, 250)'
    + ", " 
    + 'rgb(171, 206, 226)'
    + ")";
    b=document.querySelectorAll('.img-item1');
    for(let i=0; i< b.length;i++)
  {
    b[i].style.background = 'transparent';
  }
    b[j].style.background = 
    "linear-gradient( " 
    + 'rgb(155, 250, 250)'
    + ", " 
    + 'rgb(171, 206, 226)'
    + ")";
    b[j].style.borderRadius= '10px 10px 0px 0px'
  
  if(j==0)
  {
    document.querySelector('.box1').style.backgroundImage = "url('https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Maldives-1581454743.jpg')";
    document.querySelector('.box2').style.backgroundImage = "url('https://d3d5bpai12ti8.cloudfront.net/wp-content/uploads/20191107183004/Bangkok-Thailand.jpg')";
    document.querySelector('.box3').style.backgroundImage = "url('https://tse4.mm.bing.net/th/id/OIP.UNlHw6ViyC7jvWPQGCthYwHaF1?pid=ImgDet&rs=1')";
    document.querySelector('.box4').style.backgroundImage = "url('https://tse1.mm.bing.net/th/id/OIP.WJek-Cha-QdWb5_RmYUZxgHaEq?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')";
  }
  else if(j==1)
  {
    document.querySelector('.box1').style.backgroundImage = "url('https://tse4.mm.bing.net/th/id/OIP.r4iEjrR9CBi5dFlArMb-IgHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7')";
    document.querySelector('.box2').style.backgroundImage = "url('https://tse1.mm.bing.net/th/id/OIP.i48WvzSJmkExXE1oveYnXAHaE8?pid=ImgDet&rs=1')";
    document.querySelector('.box3').style.backgroundImage = "url('https://tse3.mm.bing.net/th/id/OIP.ivG2S_2VpBqg7Ov8g80-lAHaE7?pid=ImgDet&rs=1')";
    document.querySelector('.box4').style.backgroundImage = "url('https://tse2.mm.bing.net/th/id/OIP.wikZiMZpXeaD5SzkH8Qz9QHaEV?pid=ImgDet&w=1024&h=600&rs=1')";
  }
  else if(j==3)
  {
    document.querySelector('.box1').style.backgroundImage = "url('https://tse2.mm.bing.net/th/id/OIP.gFj5xruPhKhVqoJ-pfGZfgHaET?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')";
    document.querySelector('.box2').style.backgroundImage = "url('https://www.re-thinkingthefuture.com/wp-content/uploads/2022/04/A6580-Top-15-Tall-Buildings-in-Delhi-Image-1-1024x536.jpg')";
    document.querySelector('.box3').style.backgroundImage = "url('https://tse4.mm.bing.net/th/id/OIP.lrtB_SgtEmw2g4NwRiZVhAHaEo?w=290&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7')";
    document.querySelector('.box4').style.backgroundImage = "url('https://tse2.mm.bing.net/th/id/OIP.wikZiMZpXeaD5SzkH8Qz9QHaEV?pid=ImgDet&w=1024&h=600&rs=1')";
  }
  else
  {
    document.querySelector('.box1').style.backgroundImage = "url('https://tse4.mm.bing.net/th/id/OIP.Vw_vKZfJU4isUlpLLuCZuQHaE8?pid=ImgDet&rs=1')";
    document.querySelector('.box2').style.backgroundImage = "url('https://tse1.mm.bing.net/th/id/OIP.i48WvzSJmkExXE1oveYnXAHaE8?pid=ImgDet&rs=1')";
    document.querySelector('.box3').style.backgroundImage = "url('https://tse3.mm.bing.net/th/id/OIP.ivG2S_2VpBqg7Ov8g80-lAHaE7?pid=ImgDet&rs=1')";
    document.querySelector('.box4').style.backgroundImage = "url('https://tse2.mm.bing.net/th/id/OIP.wikZiMZpXeaD5SzkH8Qz9QHaEV?pid=ImgDet&w=1024&h=600&rs=1')";
  }
  
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
  
    
    document.querySelector('.menuBar-container').style.filter ="blur(" + a + ")";
    document.querySelector('.img-container1').style.filter ="blur(" + a + ")";
    document.querySelector('.img-container2').style.filter ="blur(" + a + ")";
    document.querySelector('.animation-container').style.filter ="blur(" + a + ")";
    document.querySelector('.settings-container').style.filter ="blur(" + a + ")";
    document.querySelector('.about-container').style.filter ="blur(" + a + ")";
}
function login_open(){
  let a = '5px';
  document.querySelector('._3d').style.display = 'block' ;
  blur2(a);
}
function login_close(){
  let a = '0px';
  document.querySelector('._3d').style.display = 'none' ;
  blur2(a);
}
function moveLogin(){      
  document.querySelector('._3d').style.transform = "rotateY(" + "360deg)" + " translate(" + "0px" + ")" ;
}
function movesignin(){
  document.querySelector('._3d').style.transform = "rotateY(" + "180deg)" + " translate(" + "-400px" + ")" ;
}

