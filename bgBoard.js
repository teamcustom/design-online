/**
 * Created by hehuizhong on 2017/7/22.
 */
Vue.component('bg-board', {
  template: '<canvas id="bgCanvas" :width="width" :height="height"></canvas>',
  props:{
    width: {
      type: Number,
      default : 600
    },
    height: {
      type: Number,
      default : 600
    },
    imgUrls: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      bgCanvas: null,
      imgMap:[]
    }
  },
  created () {
    this.$nextTick(() => {
      this.bgCanvas = new fabric.Canvas('bgCanvas');
      for (var i = this.imgUrls.length - 1; i >= 0; i--) {
        this._addImage(this.imgUrls[i].url, this.imgUrls[i].name,this.imgUrls[i].value);
      };
    })
  },
  methods: {
    _addImage: function (imageUrl, imageName,value) {
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
        _this.bgCanvas.add(image);
        _this.imgMap[value] = image;
      });
    },
    // todo partSelected 可否解耦
    applyFilter: function (index, filter, partSelected) {
      var obj =  this.imgMap[partSelected]
      obj.filters[index] = filter;
      obj.applyFilters();
      this.bgCanvas.renderAll();

    },
    loadPattern: function (url,partSelected) {
      debugger
      var obj =  this.imgMap[partSelected];
      var _this = this;
      fabric.util.loadImage(url, function(img) {
        obj.set('fill', new fabric.Pattern({
          source: img,
          repeat: 'repeat'
        }));
        _this.bgCanvas.renderAll();
      });
    },
    toSVG:function () {
      return this.opCanvas.toSVG();
    },
    toJson:function () {
      return JSON.stringify(this.opCanvas);
    },
    clear:function () {
      if( this.bgCanvas) {
        this.bgCanvas.clear()
      }
    }
  }
})