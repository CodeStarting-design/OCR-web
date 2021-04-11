<template>
  <div class="intro" >
    <div class="textArea">
  <span class="content">  OCR：是指电子设备（例如扫描仪或数码相机）检查纸上打印的字符，通过检测暗、亮的模式确定其形状，然后用字符识别方法将形状翻译成计算机文字的过程；即，针对印刷体字符，采用光学的方式将纸质文档中的文字转换成为黑白点阵的图像文件，并通过识别软件将图像中的文字转换成文本格式，供文字处理软件进一步编辑加工的技术。如何除错或利用辅助信息提高识别正确率，是OCR最重要的课题，ICR（Intelligent Character Recognition）的名词也因此而产生。衡量一个OCR系统性能好坏的主要指标有：拒识率、误识率、识别速度、用户界面的友好性，产品的稳定性，易用性及可行性等。</span>
    </div>
  </div>
</template>
<script>
export default {
  name:"Introduction",
  data(){
   return {

   }
  }
}
</script>
<style scoped>
.intro{
  animation: animated-border 1.5s infinite;
  /* text-indent:2em;
  color: #898a8b;
  font-size: 18px;
  line-height: 30px; */
  /* display:inline-block; */
  height: 90%; 
  width:500px;
  margin-right: 50px;
  /* vertical-align: center; */
  float: left;
  margin-left: 100px;
  text-align: left;
  margin-top: 20px;
  /* border: 5px solid #009688;
  box-shadow:  0 0 0 7px #4b90f8;
  outline: dashed 3px #fff;
  border-radius: 2px; */
  text-indent:2em;
  background: 
  linear-gradient(to left, #02a6b5, #02a6b5) left top no-repeat,
	linear-gradient(to bottom, #02a6b5, #02a6b5) left top no-repeat,
	linear-gradient(to left, #02a6b5, #02a6b5) right top no-repeat,
	linear-gradient(to bottom, #02a6b5, #02a6b5) right top no-repeat,
	linear-gradient(to left, #02a6b5, #02a6b5) left bottom no-repeat,
	linear-gradient(to bottom, #02a6b5, #02a6b5) left bottom no-repeat,
	linear-gradient(to left, #02a6b5, #02a6b5) right bottom no-repeat,
	linear-gradient(to left, #02a6b5, #02a6b5) right bottom no-repeat;
	background-size: 3px 20px, 20px 3px, 3px 20px, 20px 3px;
  border:1px solid #BEBEBE;
  background-color: #FFFFF0;
}
.content{
  display: inline;
  text-indent:2em;
  color: #898a8b;
  font-size: 18px;
  line-height: 30px;
  text-align: left;
  text-align: left;
  margin-top: 5px;
  /* background: linear-gradient(90deg, grey 66%, transparent 0) repeat-x;
  background-size: 0.5em 1px;
  background-position: 0 1.5em;
  text-shadow: 0.05em 0 #fff, -0.05em 0 #fff; */
  border-bottom: dashed 1px rgb(66, 179, 245);
  padding-bottom: .1rem;
  /* font-style: ; */
}
.textArea{
  padding: 10px;
  margin-left: 5%;
  margin-top: 2%;
  width: 90%;
  height: 90%;
}
@keyframes animated-border {
  0% {
    box-shadow: 0000rgba(255,255,255,0.4);
  }
  100% {
     box-shadow: 00020pxrgba(255,255,255,0);
  }
}
/* @font-face{
			font-family: test;
			src:url('./方正胖头鱼简体.ttf');
		} */
</style>