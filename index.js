var staticJson = {
  "data": {
    "fontProp": {
      "fontFamily": [
        {
          "text": "Arial",
          "value": "arial"
        },
        {
          "text": "Helvetica",
          "value": "helvetica"
        },
        {
          "text": "Myriad Pro",
          "value": "myriad pro"
        },
        {
          "text": "Delicious",
          "value": "delicious"
        },
        {
          "text": "Verdana",
          "value": "verdana"
        },
        {
          "text": "Georgia",
          "value": "georgia"
        },
        {
          "text": "Courier",
          "value": "courier"
        },
        {
          "text": "Comic Sans MS",
          "value": "comic sans ms"
        },
        {
          "text": "Impact",
          "value": "impact"
        },
        {
          "text": "Monaco",
          "value": "monaco"
        },
        {
          "text": "Optima",
          "value": "optima"
        },
        {
          "text": "Hoefler Text",
          "value": "hoefler text"
        },
        {
          "text": "Plaster",
          "value": "plaster"
        },
        {
          "text": "Engagement",
          "value": "engagement"
        }
      ],
      textAlign:[
        {
          "text": "Left",
          "value": "Left"
        },
        {
          "text": "Center",
          "value": "Center"
        },
        {
          "text": "Right",
          "value": "Right"
        },
        {
          "text": "Justify",
          "value": "Justify"
        }
      ],
      fontStyle:[
        {
          "text": "Bold",
          "value": "Bold"
        },
        {
          "text": "Italic",
          "value": "Italic"
        },
        {
          "text": "Underline",
          "value": "Underline"
        },
        {
          "text": "Linethrough",
          "value": "Linethrough"
        },
        {
          "text": "Overline",
          "value": "Overline"
        }
      ]
    },
    "imageProp":{
      "crafts": [
        {"text": "embroidery",   "value": "embroidery" ,"price":12},
        {"text": "screen printing",  "value": "screen printing","price":13},
        {"text": "3d printing","value": "3d printing","price":14}
      ]
    }
  }
};
var json = {
  "data": {
  }
};

var xxxjson = {
  "front": {
    "partOptions": [//部件的数据
      {
        "text": "LEFT",
        "value": "A",
        "url":"./static/img/right.png",
        "price":21,
        "color": [//部件颜色和价格
          {"text": "Green",   "value": "#00f900" ,"price":12},
          {"text": "Dark",  "value": "#000000","price":13},
          {"text": "Yellow","value": "#FFFF00","price":14}
        ],
        "ornament": [//附件样式和价格
          {"text": "ornament--1","value": "ornament1" ,"price":12},
          {"text": "ornament--2","value": "ornament2","price":13},
          {"text": "ornament--3","value": "ornament3","price":14}
        ]

      },
      {
        "text": "RIGHT",
        "value": "B",
        "url":"./static/img/left.png",
        "price":22,
        "color": [
          {"text": "Green",   "value": "#00f900","price":12},
          {"text": "Dark",  "value": "#000000","price":13},
          {"text": "Yellow","value": "#FFFF00","price":14}
        ],
        "ornament": [
          {"text": "ornament--1","value": "ornament1","price":12},
          {"text": "ornament--2","value": "ornament2","price":13},
          {"text": "ornament--3","value": "ornament3","price":14}
        ]
      },
      {
        "text": "BODY",
        "value": "C",
        "url":"./static/img/body.png",
        "price":22,
        "color": [
          {"text": "Green",   "value": "#00f900","price":12},
          {"text": "Dark",  "value": "#000000","price":13},
          {"text": "Yellow","value": "#FFFF00","price":14}
        ],
        "ornament": [
          {"text": "ornament--1","value": "ornament1","price":12},
          {"text": "ornament--2","value": "ornament2","price":13},
          {"text": "ornament--3","value": "ornament3","price":14}
        ]
      }
    ],
    "artImg":[//可选择的系统log
      {
        "name":"Shapes/Symbols",
        "value":[
          {
            "name":"Shapes1",
            "url":"./static/img/Peace.jpg",
            "price":"12"
          }
        ]
      },
      {
        "name":"Sports/Games",
        "value":[]
      },
      {
        "name":"Letters/Numbers",
        "value":[]
      },
      {
        "name":"Animals",
        "value":[]
      },
      {
        "name":"Emojis",
        "value":[]
      },
      {
        "name":"Mascots",
        "value":[]
      },
      {
        "name":"Nature",
        "value":[]
      }
    ],
    "custImg":[//可选择的系统log
      {
        "name":"Shapes1",
        "url":"./static/img/Peace.jpg",
        "price":"12"
      }
    ],
    "rect":[
      {x: 150, y: 100},
      {x: 440, y: 100},
      {x: 150, y: 500},
      {x: 440, y: 500}]
  },
  "left": {
    "partOptions": [//部件的数据
      {
        "text": "LEFT",
        "value": "A",
        "url":"./static/img/right.png",
        "price":21,
        "color": [//部件颜色和价格
          {"text": "Green",   "value": "#00f900" ,"price":12},
          {"text": "Dark",  "value": "#000000","price":13},
          {"text": "Yellow","value": "#FFFF00","price":14}
        ],
        "ornament": [//附件样式和价格
          {"text": "ornament--1","value": "ornament1" ,"price":12},
          {"text": "ornament--2","value": "ornament2","price":13},
          {"text": "ornament--3","value": "ornament3","price":14}
        ]

      },
      {
        "text": "RIGHT",
        "value": "B",
        "url":"./static/img/left.png",
        "price":22,
        "color": [
          {"text": "Green",   "value": "#00f900","price":12},
          {"text": "Dark",  "value": "#000000","price":13},
          {"text": "Yellow","value": "#FFFF00","price":14}
        ],
        "ornament": [
          {"text": "ornament--1","value": "ornament1","price":12},
          {"text": "ornament--2","value": "ornament2","price":13},
          {"text": "ornament--3","value": "ornament3","price":14}
        ]
      }
    ],
    "artImg":[//可选择的系统log
      {
        "name":"Shapes/Symbols",
        "value":[
          {
            "name":"Shapes1",
            "url":"./static/img/Peace.jpg",
            "price":"12"
          }
        ]
      },
      {
        "name":"Sports/Games",
        "value":[]
      },
      {
        "name":"Letters/Numbers",
        "value":[]
      },
      {
        "name":"Animals",
        "value":[]
      },
      {
        "name":"Emojis",
        "value":[]
      },
      {
        "name":"Mascots",
        "value":[]
      },
      {
        "name":"Nature",
        "value":[]
      }
    ],
    "custImg":[//可选择的系统log
      {
        "name":"Shapes1",
        "url":"./static/img/Peace.jpg",
        "price":"12"
      }
    ],
    "rect":[
      {x: 50, y: 50},
      {x: 140, y: 50},
      {x: 50, y: 200},
      {x: 140, y: 200}]
  },
  "right": {
    "partOptions": [//部件的数据
      {
        "text": "LEFT",
        "value": "A",
        "url":"./static/img/right.png",
        "price":21,
        "color": [//部件颜色和价格
          {"text": "Green",   "value": "#00f900" ,"price":12},
          {"text": "Dark",  "value": "#000000","price":13},
          {"text": "Yellow","value": "#FFFF00","price":14}
        ],
        "ornament": [//附件样式和价格
          {"text": "ornament--1","value": "ornament1" ,"price":12},
          {"text": "ornament--2","value": "ornament2","price":13},
          {"text": "ornament--3","value": "ornament3","price":14}
        ]

      },
      {
        "text": "RIGHT",
        "value": "B",
        "url":"./static/img/left.png",
        "price":22,
        "color": [
          {"text": "Green",   "value": "#00f900","price":12},
          {"text": "Dark",  "value": "#000000","price":13},
          {"text": "Yellow","value": "#FFFF00","price":14}
        ],
        "ornament": [
          {"text": "ornament--1","value": "ornament1","price":12},
          {"text": "ornament--2","value": "ornament2","price":13},
          {"text": "ornament--3","value": "ornament3","price":14}
        ]
      },
      {
        "text": "BODY",
        "value": "C",
        "url":"./static/img/body.png",
        "price":22,
        "color": [
          {"text": "Green",   "value": "#00f900","price":12},
          {"text": "Dark",  "value": "#000000","price":13},
          {"text": "Yellow","value": "#FFFF00","price":14}
        ],
        "ornament": [
          {"text": "ornament--1","value": "ornament1","price":12},
          {"text": "ornament--2","value": "ornament2","price":13},
          {"text": "ornament--3","value": "ornament3","price":14}
        ]
      }
    ],
    "artImg":[//可选择的系统log
      {
        "name":"Shapes/Symbols",
        "value":[
          {
            "name":"Shapes1",
            "url":"./static/img/Peace.jpg",
            "price":"12"
          }
        ]
      },
      {
        "name":"Sports/Games",
        "value":[]
      },
      {
        "name":"Letters/Numbers",
        "value":[]
      },
      {
        "name":"Animals",
        "value":[]
      },
      {
        "name":"Emojis",
        "value":[]
      },
      {
        "name":"Mascots",
        "value":[]
      },
      {
        "name":"Nature",
        "value":[]
      }
    ],
    "custImg":[//可选择的系统log
      {
        "name":"Shapes1",
        "url":"./static/img/Peace.jpg",
        "price":"12"
      }
    ],
    "rect":[
      {x: 150, y: 100},
      {x: 440, y: 100},
      {x: 150, y: 500},
      {x: 440, y: 500}]
  },
  "back": {
    "partOptions": [//部件的数据
      {
        "text": "LEFT",
        "value": "A",
        "url":"./static/img/right.png",
        "price":21,
        "color": [//部件颜色和价格
          {"text": "Green",   "value": "#00f900" ,"price":12},
          {"text": "Dark",  "value": "#000000","price":13},
          {"text": "Yellow","value": "#FFFF00","price":14}
        ],
        "ornament": [//附件样式和价格
          {"text": "ornament--1","value": "ornament1" ,"price":12},
          {"text": "ornament--2","value": "ornament2","price":13},
          {"text": "ornament--3","value": "ornament3","price":14}
        ]

      },
      {
        "text": "RIGHT",
        "value": "B",
        "url":"./static/img/left.png",
        "price":22,
        "color": [
          {"text": "Green",   "value": "#00f900","price":12},
          {"text": "Dark",  "value": "#000000","price":13},
          {"text": "Yellow","value": "#FFFF00","price":14}
        ],
        "ornament": [
          {"text": "ornament--1","value": "ornament1","price":12},
          {"text": "ornament--2","value": "ornament2","price":13},
          {"text": "ornament--3","value": "ornament3","price":14}
        ]
      },
      {
        "text": "BODY",
        "value": "C",
        "url":"./static/img/body.png",
        "price":22,
        "color": [
          {"text": "Green",   "value": "#00f900","price":12},
          {"text": "Dark",  "value": "#000000","price":13},
          {"text": "Yellow","value": "#FFFF00","price":14}
        ],
        "ornament": [
          {"text": "ornament--1","value": "ornament1","price":12},
          {"text": "ornament--2","value": "ornament2","price":13},
          {"text": "ornament--3","value": "ornament3","price":14}
        ]
      }
    ],
    "artImg":[//可选择的系统log
      {
        "name":"Shapes/Symbols",
        "value":[
          {
            "name":"Shapes1",
            "url":"./static/img/Peace.jpg",
            "price":"12"
          }
        ]
      },
      {
        "name":"Sports/Games",
        "value":[]
      },
      {
        "name":"Letters/Numbers",
        "value":[]
      },
      {
        "name":"Animals",
        "value":[]
      },
      {
        "name":"Emojis",
        "value":[]
      },
      {
        "name":"Mascots",
        "value":[]
      },
      {
        "name":"Nature",
        "value":[]
      }
    ],
    "custImg":[//可选择的系统log
      {
        "name":"Shapes1",
        "url":"./static/img/Peace.jpg",
        "price":"12"
      }
    ],
    "rect":[
      {x: 150, y: 100},
      {x: 440, y: 100},
      {x: 150, y: 500},
      {x: 440, y: 500}]
  }
};
// var canvas = new fabric.Canvas('canvas');
// var canvas1 = null;
// var filter = fabric.Image.filters;
//var $ = function(id){return document.getElementById(id)};


function save() {
  console.log(JSON.stringify(canvas1));
  console.log(canvas1.toSVG());
}
function share() {
  console.log(JSON.stringify(canvas1));
}
function note() {
}

function getActiveProp(name) {
  var object = canvas1.getActiveObject();
  if (!object) return '';

  return object[name] || '';
}

function setActiveProp(name, value) {
  var object = canvas1.getActiveObject();
  if (!object) return;
  object.set(name, value).setCoords();
  canvas1.renderAll();
}

function setActiveStyle(styleName, value, object) {
  object = object || canvas1.getActiveObject();
  if (!object) return;

  if (object.setSelectionStyles && object.isEditing) {
    var style = { };
    style[styleName] = value;
    object.setSelectionStyles(style);
    object.setCoords();
  }
  else {
    object.set(styleName, value);
  }

  object.setCoords();
  canvas1.renderAll();
};

var vm = new Vue({
  el: '#main',
  data: {
    lineCenterPoint: null,
    imgMap: [],
    productId: '',
    googdsId: '',
    isFabric: '',
    partSelected: '',
    partOptions: json.data.partOptions,
    imgsCount:-1,

    customText:'',
    fontJson:staticJson.data.fontProp,
    fontFamily:'',
    textAlign:'',
    textBgColor:'',
    fontSize:'22',
    lineHeight:'',
    charSpacing:'',
    fontStyle:'',

    imgSelect:'',
    clipSelect:'',
    crafts: '',
    customImgWidth: '',
    customImgHeight: '',
    customImgAngle: '',
    colorImg: '',
    palette:[],
    paletteColor:[],

    basePrice:0,
    partOrnamentValue:'',
    partColorValue:'',
    rectObj:{},
    numNumberState:0,
    numNameState:0,
    numSizeState:1,
    numberObj:{}


  },
  created: function () {
    view('front');
    this.init();
  },
  computed: {
    partPrice: function () {
      var price = 0;
      imgsCount = json.data.partOptions.length;
      for (var i = 0;i< json.data.partOptions.length;i++){
        if(json.data.partOptions[i].value === this.partSelected){
          for (var j = 0;j< json.data.partOptions[i].color.length;j++){
            if(json.data.partOptions[i].color[j].value === this.partColorValue) {
              price += json.data.partOptions[i].color[j].price;
            }
          }
          for (var k = 0;k< json.data.partOptions[i].ornament.length;k++){
            if(json.data.partOptions[i].ornament[k].value === this.partOrnamentValue) {
              price += json.data.partOptions[i].ornament[k].price;
            }
          }
        }
      }
      return price;
    },
    textPrice:function () {
      var price = 0;
      if(this.customText !== '') {
        price = 10;
      }
      return price;
    },
    imagePrice:function () {
      var price = 0;
      if(this.imgSelect === '1') {
        price = 10;
      }else if(this.imgSelect === '2') {
        price = 10;
      }else if(this.imgSelect === '3') {
        price = 10;
      }
      return price;
    }
  },
  methods: {
    init: function () {
      this.basePrice = 0;
      this.imgsCount = json.data.partOptions.length;
      for (var i = json.data.partOptions.length - 1; i >= 0; i--) {
        this.addImage1(json.data.partOptions[i].url, json.data.partOptions[i].name,json.data.partOptions[i].value);
        this.basePrice += json.data.partOptions[i].price;
      };
      this.rectObj.x = json.data.rect[0].x;
      this.rectObj.y = json.data.rect[0].y;
      this.rectObj.width = json.data.rect[1].x-json.data.rect[0].x;
      this.rectObj.height = json.data.rect[2].y-json.data.rect[0].y;
      document.getElementById('canvasAbs').style.left = this.rectObj.x+15+"px";
      document.getElementById('canvasAbs').style.top = this.rectObj.y+"px";
      document.getElementById('canvas1').width = this.rectObj.width;
      document.getElementById('canvas1').height = this.rectObj.height;
      canvas1 = new fabric.Canvas('canvas1');
    },
    addImage1: function (imageUrl, imageName,value) {
      var _this = this;
      fabric.Image.fromURL(imageUrl, function (image) {

        image.set({
          left: 0,
          top: 0,
          hasBorders: false,
          hasControls: false,
          selectable: false
        })
          .scale(1)
          .setCoords();

        canvas.add(image);
        _this.imgsCount--;
        _this.imgMap[value] = image;
      });
    },
    addImage2: function (imageUrl) {
      var self = this;
      fabric.Image.fromURL(imageUrl, function (img) {
        img.scale(0.5).set({
          centeredRotation: true,
          left: 150,
          top: 150
        });
        var iii = canvas1.add(img);
        iii.setActiveObject(img);
        var isEnter = false;
        var target = null;
        iii.on({
          'mouse:down': function (e) {
            isEnter = true;
            if (e.target) {
              target = e.target;
            }
            console.log('mouse down');
          },
          'mouse:move': function (e) {
            if (isEnter && target) {
              setTimeout(function moveToCenter() {
                var targetCenterPoint = target.getCenterPoint();
                console.log(targetCenterPoint.x + '-----' + targetCenterPoint.y);
                var xDeviation = targetCenterPoint.x - self.lineCenterPoint.x;
                var yDeviation = targetCenterPoint.y - self.lineCenterPoint.y;
                if (Math.abs(xDeviation) < 10 && Math.abs(xDeviation) != 0) {
                  var pos = '';
                  if (xDeviation < 0) {
                    pos = '+=' + Math.abs(xDeviation);
                  } else if (xDeviation > 0) {
                    pos = '-=' + Math.abs(xDeviation);
                  }
                  target.animate('left', pos, {
                    duration: 100,
                    onChange: canvas1.renderAll.bind(canvas1)
                  });
                }
                  /*target.animate('left', '+=100', {
                   duration: 100,
                   onChange: canvas1.renderAll.bind(canvas1)
                   });*/
              }, 100)
              //                        moveToCenter(target);
            }
          },
          'mouse:up': function (e) {
            console.log('mouse up');
            isEnter = false;
          },
          'mouse:enter': function (e) {
            console.log('mouse enter');
          },
          'mouse:out': function (e) {
            console.log('mouse out');
          }
        });

        //取色
        var colorThief = new ColorThief();
        self.palette = colorThief.getPalette(document.querySelector('#colorImg'), 8);
        for (var i = 0;i<self.palette.length; i++) {
          self.paletteColor.push( 'rgb('+self.palette[i][0]+', '+self.palette[i][1]+', '+self.palette[i][2]+');');
        }
      });
    },
    addImage: function (imageUrl) {
      var self = this;
      fabric.Image.fromURL(imageUrl, function (img) {
        img.scale(0.5).set({
          centeredRotation: true,
          left: 50,
          top: 50
        });
        var iii = canvas1.add(img);
        iii.setActiveObject(img);
        var isEnter = false;
        var target = null;
        iii.on({
          'mouse:down': function (e) {
            isEnter = true;
            if (e.target) {
              target = e.target;
            }
            console.log('mouse down');
          },
          'mouse:move': function (e) {
            if (isEnter && target) {
              setTimeout(function moveToCenter() {
                var targetCenterPoint = target.getCenterPoint();
                console.log(targetCenterPoint.x + '-----' + targetCenterPoint.y);
                var xDeviation = targetCenterPoint.x - self.lineCenterPoint.x;
                var yDeviation = targetCenterPoint.y - self.lineCenterPoint.y;
                if (Math.abs(xDeviation) < 10 && Math.abs(xDeviation) != 0) {
                  var pos = '';
                  if (xDeviation < 0) {
                    pos = '+=' + Math.abs(xDeviation);
                  } else if (xDeviation > 0) {
                    pos = '-=' + Math.abs(xDeviation);
                  }
                  target.animate('left', pos, {
                    duration: 100,
                    onChange: canvas1.renderAll.bind(canvas1)
                  });
                }
                  /*target.animate('left', '+=100', {
                   duration: 100,
                   onChange: canvas1.renderAll.bind(canvas1)
                   });*/
              }, 100)
              //                        moveToCenter(target);
            }
          },
          'mouse:up': function (e) {
            console.log('mouse up');
            isEnter = false;
          },
          'mouse:enter': function (e) {
            console.log('mouse enter');
          },
          'mouse:out': function (e) {
            console.log('mouse out');
          }
        });
      });
    },
    addText: function () {
      var text = this.customText;

      var textSample = new fabric.Text(text, {
        left: 100,
        top: 50,
        fontFamily: 'helvetica',
        fill: '#000',
        scaleX: 0.5,
        scaleY: 0.5,
        fontWeight: '',
        originX: 'left',
        fontSize: '64',
        hasRotatingPoint: true,
        centerTransform: true
      });
      canvas1.add(textSample);
    },
    addNumber: function (){
      // group
      var textName = new fabric.Text('Name', {
        top: 50,
        fill: '#333',
        fontFamily: 'Helvetica',
        fontSize: 80,
        textAlign:'Center'
      });
      var textNumber = new fabric.Text('00', {
        top: 150,
        fill: '#333',
        fontFamily: 'Helvetica',
        fontSize: 150,
        textAlign:'Center'
      });
      this.numberObj.name = textName;
      this.numberObj.number = textNumber;
      if(this.numNumberState==='1'){
        canvas1.add(textName);
      }if(this.numNameState==='1'){
        canvas1.add(textNumber);
      }
    },
    imgPreview: function (e) {
      var _this = this;
      if (window.FileReader) {
        var reader = new FileReader();
      } else {
        alert("Error");
      }
      var file =  e.target.files[0];
      var imageType = /^image\//;
      if (!imageType.test(file.type)) {
        alert("error");
        return;
      }
      reader.onload = function (e) {
          /*
           var img = document.getElementById("preview");
           img.src = e.target.result;*/
        _this.addImage2(e.target.result, e.target.result);
        _this.colorImg = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    applyFilter: function (index, filter) {
      var obj = canvas1.getActiveObject();
      obj.filters[index] = filter;
      obj.applyFilters(canvas1.renderAll.bind(canvas1));
    },
    applyFilter1: function (index, filter) {
      var obj =  this.imgMap[this.partSelected]
      obj.filters[index] = filter;
      var timeStart = +new Date();
      obj.applyFilters();
      var timeEnd = +new Date();
      var dimString = canvas. _objects[0].width + ' x ' + canvas. _objects[0].height;
      canvas.renderAll();

    },
    applyFilter2: function(index, filter) {
      var obj = canvas1.getActiveObject();
      obj.filters[index] = filter;
      obj.applyFilters();
      canvas1.renderAll();
    },
    removeWhite: function () {
      this.applyFilter2(2,  new filter.RemoveColor({
        color: "#ffffff",
        distance: 0.50
      }));
    },
    moveToCenter: function (target) {

      var targetCenterPoint = target.getCenterPoint();
      console.log(targetCenterPoint.x + '-----' + targetCenterPoint.y);
      var xDeviation = targetCenterPoint.x - this.lineCenterPoint.x;
      var yDeviation = targetCenterPoint.y - this.lineCenterPoint.y;
      if (Math.abs(xDeviation) < 10 && Math.abs(xDeviation) != 0) {
        var pos = '';
        if (xDeviation < 0) {
          pos = '+=' + Math.abs(xDeviation);
        } else if (xDeviation > 0) {
          pos = '-=' + Math.abs(xDeviation);
        }
        target.animate('left', pos, {
          duration: 100,
          onChange: canvas1.renderAll.bind(canvas1)
        });
      }
        /*target.animate('left', '+=100', {
         duration: 100,
         onChange: canvas1.renderAll.bind(canvas1)
         });*/
    },
    changeProduct: function () {
      this.productId = 111;
    },
    changeColor: function () {
      this.googdsId = 222;
    },
    collapseOneNext: function () {
      $('[href="#collapseTwo"]').first().trigger("click");
    },
    setActiveStyleNum: function(value) {
      if(this.numberObj.name) {
        if(value==="1"){//big
          this.numberObj.name.set("fontSize", '80');
        }else if(value==="2"){//small
          this.numberObj.name.set("fontSize", '40');
        }
      }
      if(this.numberObj.number){
        if(value==="1"){//big
          this.numberObj.number.set("fontSize", '150');
        }else if(value==="2"){//small
          this.numberObj.number.set("fontSize", '75');
        }
      }
      canvas1.renderAll();
    }
  },
  watch:{
    "customText":function (curVal,oldVal){
      setActiveProp('text', curVal);
    },
    "partColorValue":function (curVal,oldVal){
      setActiveProp('fontFamily', curVal.toLowerCase());
      this.applyFilter1(16,new filter.BlendColor({
        color: curVal,
        mode: "tint",
        alpha: 0.5
      }));
    },
    "fontFamily":function (curVal,oldVal){
      setActiveProp('fontFamily', curVal.toLowerCase());
    },
    "textAlign":function (curVal,oldVal){
      setActiveProp('textAlign', curVal.toLowerCase());
    },
    "textBgColor":function (curVal,oldVal){
      setActiveProp('textBackgroundColor', curVal);
    },
    "fontSize":function (curVal,oldVal){
      setActiveStyle('fontSize', parseInt(curVal, 10));
    },
    "lineHeight":function (curVal,oldVal){
      setActiveStyle('lineHeight', parseFloat(curVal, 10));
    },
    "charSpacing":function (curVal,oldVal){
      setActiveStyle('charSpacing', curVal);
    },
    "fontStyle":function (curVal,oldVal){
      setActiveStyle('fontWeight', curVal);
    },
    "customImgWidth":function (curVal,oldVal){
      setActiveStyle('width', curVal);
    },
    "customImgHeight":function (curVal,oldVal){
      setActiveStyle('height', curVal);
    },
    "customImgAngle":function (curVal,oldVal){
      setActiveStyle('angle', curVal);
    },
    "imgsCount":function (curVal,oldVal){
      if(curVal ===0){
        //居中线
        var line = new fabric.Line([0, 0, 0, 400], {
          left: 145,
          top: 0,
          stroke: '#000',
          hasBorders: false,
          hasControls: false,
          selectable: false
        });
        this.lineCenterPoint = line.getCenterPoint();
        canvas1.add(line);
        //canvas1.setOverlayImage('./static/img/a.png', canvas1.renderAll.bind(canvas1));
      }
    },
    "numSizeState":function (curVal,oldVal){
      this.setActiveStyleNum(curVal);
    },
    "numNumberState":function (curVal,oldVal){
      if(this.numberObj.number) {
        if(curVal==="0"){
          canvas1.remove(this.numberObj.number);
        }else if(curVal==="1"){
          canvas1.add(this.numberObj.number);
        }
      }
    },
    "numNameState":function (curVal,oldVal){
      if(this.numberObj.name) {
        if(curVal==="0"){
          canvas1.remove(this.numberObj.name);
        }else if(curVal==="1"){
          canvas1.add(this.numberObj.name);
        }
      }
    }
  }
})


function view(value) {
  json.data = xxxjson[value];
  if(vm){
    canvas.clear()
    canvas1.dispose()
    vm.init();
  }
}