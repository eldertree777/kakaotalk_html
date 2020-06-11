# HTML-CSS
kakao_clone

repository 폴더
commit 수정
branch 마스터의 복사판

git 파일추적시스템
github
bitbucket

html
css

!doctype html
head
    meta
    title
body
    section
    div, span
    article
    header

CSS
 selector property

 selector (#id, .class, tag name) {
     property-name: value;
     property-name: value;
 }

 @방식 inline external
 <link rel="stylesheet" href="style.css">

 @content-padding-border-margin

@display: inline-block; /* block or inline or inline-block */
  block vs inline-block

 @position : fixed relative static absoulute

 @display: flex;
 justify-content:
 align-items:
 align-content:
 flex-direction:
 flex-wrap:
 
 @Selector
  input[required="required"]
  .box:nth-child(3n+2)
  .container > .box

@.box:hover
  active, visited, focus

@Transition
  transition:all .5s ease-in-out;

@transformation
  transform: rotate(1turn) scale(.5, .5);

@keyframes
  @keyframes scaleAndRotateSquare {
      0%{
        transform:none;
      }
      50%{
        transform: rotate(1turn) scale(.5, .5);
        color:white;
      }
      100%{
        transform: none;
        color:blue;
      }
////////
      from{

      }
      to{

      }
    }

@media
    @media screen and (min-width:320px) and (max-width:640px){
    body{
      background-color: blue;
    }
  }


Fontawesome

reset css
nomalize.css

googlefont

box-sizing: border-box;
 ㄴpadding추가해도 박스사이즈를 늘리지 말아줘

 stripe 그림자찾는 사이트
 subtle patterns
 ui gredient