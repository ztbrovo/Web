HTML, CSS 和 Bootstrap 

1.Bootstarp的class属性：text-primary上基础色 text-center居中 well视觉上的深度感 disabled不可选
2.需要所有内容这一目的时，<div>很合适
3.并不是每一个class属性都是用CSS的，有时创建一些class只是为了方便地在jQuery中选中这些元素。
4.除了可以给元素增加class属性，还可以加id属性。每一个指定元素的id都是唯一的，并且在每个页面中都只能使用一次。
5.jQuery语句  $开始，通过选择器来选择一个元素的，然后操作元素做些改变。把代码写在document ready function.   eg:  $("button").addClass("animated bounce");
6.除了class属性也可用id属性来获取元素，就像CSS一样，在id的名字前加#
7.3种选择器$("button")、class选择器$(".btn")、id选择器$("#target")
8.jQuery的addClass给元素添加class，removeClass去掉元素中的class.
9.可以通过jQuery来改变HTML元素的CSS样式  .css
  eg:  $("#target1").css("color","blue");   与css的语法不同，有引号逗号
10.   .prop（）
11.jQuery不仅可改变元素开始标记和结束标记之间的文本，甚至可以添加HTML标签和文字到元素，而元素之前的内容都会被方法的内容所替换掉。而text只能修改文本。
  eg: $(h3").html("<em>jQuery Playground</em>")
12.   .remove 移除html元素
      .appendTo 将选中的元素加到其它元素中
      .clone    拷贝
      .clone().appendTo拷贝粘贴   合用的方法称为方法链function chaining
      .parent   允许访问指定元素的父元素
               eg:$（"#target-well"）.parent().css("background-color","blue")
      .children  允许访问指定元素的子元素
13.jQuery用CSS选择器来选取元素，.target:nth-child(n)，CSS选择器允许按照索引顺序（从1开始）选择目标元素的所有子元素。索引为奇数$(".target:odd").addClass(xxx);而jQuery里  的索引是从0开始的。索引为偶数：even
14.$("body").addClass
