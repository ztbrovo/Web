HTML, CSS �� Bootstrap 

1.Bootstarp��class���ԣ�text-primary�ϻ���ɫ text-center���� well�Ӿ��ϵ���ȸ� disabled����ѡ
2.��Ҫ����������һĿ��ʱ��<div>�ܺ���
3.������ÿһ��class���Զ�����CSS�ģ���ʱ����һЩclassֻ��Ϊ�˷������jQuery��ѡ����ЩԪ�ء�
4.���˿��Ը�Ԫ������class���ԣ������Լ�id���ԡ�ÿһ��ָ��Ԫ�ص�id����Ψһ�ģ�������ÿ��ҳ���ж�ֻ��ʹ��һ�Ρ�
5.jQuery���  $��ʼ��ͨ��ѡ������ѡ��һ��Ԫ�صģ�Ȼ�����Ԫ����Щ�ı䡣�Ѵ���д��document ready function.   eg:  $("button").addClass("animated bounce");
6.����class����Ҳ����id��������ȡԪ�أ�����CSSһ������id������ǰ��#
7.3��ѡ����$("button")��classѡ����$(".btn")��idѡ����$("#target")
8.jQuery��addClass��Ԫ�����class��removeClassȥ��Ԫ���е�class.
9.����ͨ��jQuery���ı�HTMLԪ�ص�CSS��ʽ  .css
  eg:  $("#target1").css("color","blue");   ��css���﷨��ͬ�������Ŷ���
10.   .prop����
11.jQuery�����ɸı�Ԫ�ؿ�ʼ��Ǻͽ������֮����ı��������������HTML��ǩ�����ֵ�Ԫ�أ���Ԫ��֮ǰ�����ݶ��ᱻ�������������滻������textֻ���޸��ı���
  eg: $(h3").html("<em>jQuery Playground</em>")
12.   .remove �Ƴ�htmlԪ��
      .appendTo ��ѡ�е�Ԫ�ؼӵ�����Ԫ����
      .clone    ����
      .clone().appendTo����ճ��   ���õķ�����Ϊ������function chaining
      .parent   �������ָ��Ԫ�صĸ�Ԫ��
               eg:$��"#target-well"��.parent().css("background-color","blue")
      .children  �������ָ��Ԫ�ص���Ԫ��
13.jQuery��CSSѡ������ѡȡԪ�أ�.target:nth-child(n)��CSSѡ��������������˳�򣨴�1��ʼ��ѡ��Ŀ��Ԫ�ص�������Ԫ�ء�����Ϊ����$(".target:odd").addClass(xxx);��jQuery��  �������Ǵ�0��ʼ�ġ�����Ϊż����even
14.$("body").addClass
