

function Renderer() {

this.main = $("<div id='main' style='height:450px; width: 300px; display: block;'</div>");
$("body").append(this.main);
$('div#main').css({"background-color": "silver", "margin": "0 auto", "border-radius": "10px", "border": "2px solid black"});

this.display = $('<div id="display"> </div>');
$('div#main').append(this.display);

$("div#display").css({"height": "20%", "width": "280px", "border-radius": "10px", "border": "3px inset grey", "margin": "0 auto", "background": "#fff", "margin-top": "10px"});


this.container = $('<div id="container" style="width: 280px; height: 65%; margin: 0 auto; border: 3px inset grey; border-radius: 10px; margin-top: 25px"></div>');
$("div#main").append(this.container);
$("div#container").css({"display": "flex", "flex-wrap": "wrap", "justify-content": "space-between", "align-content": "space-between"});

 this.ac = $('<button id="buttonAc" class="ac difWidth btn clear">AC</button>');
 $("div#container").append(this.ac);
 this.deleteBtn = $('<button id="buttonDel" class="btn sameStyle del">delete</button>');
 $("div#container").append(this.deleteBtn);

 this.divideBtn = $('<button id="buttonDivide" class="btn sameStyle operation" style="border-radius: 0 10px 0 0">/</button>');
 $("div#container").append(this.divideBtn);

 

this.seven = $('<button id="seven" class="btn sameStyle num">7</button>');
$("div#container").append(this.seven);
this.eight = $('<button id="eight" class="btn sameStyle num">8</button>');
$("div#container").append(this.eight);
this.nine = $('<button id="nine" class="btn sameStyle num">9</button>');
$("div#container").append(this.nine);
this.multiply = $('<button id="multiply" class="btn sameStyle operation">*</button>');
$("div#container").append(this.multiply);

this.four = $('<button id="four" class="btn sameStyle num">4</button>');
$("div#container").append(this.four);
this.five = $('<button id="five" class="btn sameStyle num">5</button>');
$("div#container").append(this.five);
this.six = $('<button id="six" class="btn sameStyle num">6</button>');
$("div#container").append(this.six);
this.minus = $('<button id="minus" class="btn sameStyle operation">-</button>');
$("div#container").append(this.minus);

this.one = $('<button id="one" class="btn sameStyle num">1</button>');
$("div#container").append(this.one);
this.two = $('<button id="two" class="btn sameStyle num">2</button>');
$("div#container").append(this.two);
this.three = $('<button id="three" class="btn sameStyle num">3</button>');
$("div#container").append(this.three);
this.plus = $('<button id="plus" class="btn sameStyle operation">+</button>');
$("div#container").append(this.plus);

this.zero = $('<button id="zero" class="btn num" style="border-radius: 0 0 0 10px">0</button>');
 $("div#container").append(this.zero);
 this.decimal = $('<button id="decimal" class="btn sameStyle decimal">.</button>');
 $("div#container").append(this.decimal);

 this.equals = $('<button id="equals" class="btn sameStyle equals" style="border-radius: 0 0 10px 0">=</button>');
 $("div#container").append(this.equals);


$("button.btn").css({"height": "calc(100%/5 - 0.5px)", "border": "2px outset grey", "font-size": "20px"});
 $("button#buttonAc").css({"border-radius": "10px 0 0 0", "width": "calc(100%/2 - 0.5px)"});
 $("button#zero").css({"width": "calc(100%/2 - 0.5px)"});

 $("button.sameStyle").css({"width": "calc(100%/4 - 0.5px)"});
}
