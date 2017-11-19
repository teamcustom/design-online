/**
 * Created by hehuizhong on 2017/7/22.
 */
Vue.component('op-board', {
  template: '<div ref="canvasAbs">'+
              '<canvas id="opCanvas" :width="width" :height="height">(Your browser doesn\'t support canvas)</canvas>'+
            '</div>',
  props:{
    rect: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      opCanvas: null,
      width:0,
      height:0,
      rectObj:{},
      //居中线对象
      lineCenterPoint:null
    }
  },
  created () {
    this.rectObj.x = this.rect[0].x;
    this.rectObj.y = this.rect[0].y;
    this.rectObj.width = this.rect[1].x-this.rect[0].x;
    this.rectObj.height = this.rect[2].y-this.rect[0].y;
    this.width = this.rectObj.width;
    this.height = this.rectObj.height;
    this.$nextTick(() => {
      //操作框定位
      this.$refs['canvasAbs'].style.left = this.rectObj.x+15+"px";
      this.$refs['canvasAbs'].style.top = this.rectObj.y+"px";
      this.$refs['canvasAbs'].style.position = "absolute";
      this.$refs['canvasAbs'].style.border = "1px dotted black";
      this.opCanvas = new fabric.Canvas('opCanvas');
      //中线
      var line = new fabric.Line([0, 0, 0, this.rectObj.height], {
        left: this.rectObj.width/2,
        top: 0,
        stroke: '#000',
        hasBorders: false,
        hasControls: false,
        selectable: false
      });
      this.lineCenterPoint = line.getCenterPoint();
      this.opCanvas.add(line);
    })
  },
  methods: {
      getActiveProp: function (name) {
        var object = this.opCanvas.getActiveObject();
        if (!object) return '';

        return object[name] || '';
      },

       setActiveProp: function (name, value) {
        var object = this.opCanvas.getActiveObject();
        if (!object) return;
        object.set(name, value).setCoords();
        this.opCanvas.renderAll();
      },

     setActiveStyle: function (styleName, value, object) {
      object = object || this.opCanvas.getActiveObject();
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
       this.opCanvas.renderAll();
    },
    applyFilter: function (index, filter) {
      var obj = this.opCanvas.getActiveObject();
      obj.filters[index] = filter;
      obj.applyFilters();
      this.opCanvas.renderAll();
    },
    addText: function (text) {
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
      this.opCanvas.add(textSample);
    },
    addImage: function (imageUrl, callBack) {
      var self = this;
      fabric.Image.fromURL(imageUrl, function (img) {
        img.scale(0.5).set({
          centeredRotation: true,
          left: 50,
          top: 50
        });
        var iii = self.opCanvas.add(img);
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
                    onChange: self.opCanvas.renderAll.bind(self.opCanvas)
                  });
                }
              }, 100)
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
        if (callBack) {
          callBack(img)
        }
      });
    },
    add:function (object) {
      this.opCanvas.add(object);
    },
    remove:function (object) {
      this.opCanvas.remove(object);
    },
    renderAll:function () {
      this.opCanvas.renderAll();
    },
    dispose:function () {
      this.opCanvas.dispose();
    },
    toSVG:function () {
      return this.opCanvas.toSVG();
    },
    toJson:function () {
      return JSON.stringify(this.opCanvas);
    },
    clear:function () {
      if( this.opCanvas) {
        this.opCanvas.clear()
      }
    }
  }
})