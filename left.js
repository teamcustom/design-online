/**
 * Created by hehuizhong on 2017/7/22.
 */
Vue.component('left', {
  template: '#left-template',
  props:{
    data: Object,
    staticData: Object
  },
  data () {
    return {
      filter: null,
      //step 1
      productId: '',
      googdsId: '',
      googdsSize: '',
      isFabric: '',
      //step2
      partSelected: '',
      partOptions: this.data.data.partOptions,
      partOrnamentValue:'',
      partColorValue:'',
      //sublimation
      sublimations:this.data.data.sublimation,
      //step3
      //step3 font
      fontJson: this.staticData.data.fontProp,
      customText:'',
      fontFamily:'',
      textAlign:'',
      textBgColor:'',
      fontSize:'22',
      lineHeight:'',
      charSpacing:'',
      fontStyle:'',
      //step3 image
      artImgs:this.data.data.artImg,
      imgSelect:'',
      clipSelect:'',
      colorImg: '',
      crafts: '',
      customImgWidth: '',
      customImgHeight: '',
      customImgAngle: '',
      palette:[],
      paletteColor:[],
      custImgs:this.data.data.custImg,
      numNumberState:0,
      numNameState:0,
      numSizeState:1,
      numberObj:{}
    }
  },
  created () {
    this.filter = fabric.Image.filters
  },
  computed: {
    basePrice: function () {
      var price = 0;
      for (var i = this.partOptions.length - 1; i >= 0; i--) {
        price += this.partOptions[i].price;
      };
      return price;
    },
    partPrice: function () {
      var price = 0;
      var imgsCount = this.partOptions.length;
      for (var i = 0;i< this.partOptions.length;i++){
        if(this.partOptions[i].value === this.partSelected){
          for (var j = 0;j< this.partOptions[i].color.length;j++){
            if(this.partOptions[i].color[j].value === this.partColorValue) {
              price += this.partOptions[i].color[j].price;
            }
          }
          for (var k = 0;k< this.partOptions[i].ornament.length;k++){
            if(this.partOptions[i].ornament[k].value === this.partOrnamentValue) {
              price += this.partOptions[i].ornament[k].price;
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
    changeProduct: function () {
      this.productId = 111;
      console.log(this.productId);
    },
    changeColor: function () {
      this.googdsId = 222;
      console.log(this.googdsId);
    },
    changeSize: function () {
      this.googdsSize = 333;
      console.log(this.googdsSize);
    },

    addImage: function (imageUrl) {
      this.$parent.$refs.opBoard.addImage(imageUrl)
    },
    addText: function () {
      this.$parent.$refs.opBoard.addText(this.customText)
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
        this.$parent.$refs.opBoard.add(textName);
      }if(this.numNameState==='1'){
        this.$parent.$refs.opBoard.add(textNumber);
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
        _this.$parent.$refs.opBoard.addImage(e.target.result,_this.getPalette);
      };
      reader.readAsDataURL(file);
    },
    getPalette: function(image) {
      //取色
      var colorThief = new ColorThief();
      this.palette = colorThief.getPalette(image._element, 8);
      for (var i = 0;i<this.palette.length; i++) {
        this.paletteColor.push( 'rgb('+this.palette[i][0]+', '+this.palette[i][1]+', '+this.palette[i][2]+');');
      }
    },
    removeWhite: function () {
      this.$parent.$refs.opBoard.applyFilter(2,  new this.filter.RemoveColor({
        color: "#ffffff",
        distance: 0.50
      }));
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
      this.$parent.$refs.opBoard.renderAll();
    },
    sublimationPatternChange: function (e) {
      var patterns = [];
      var part = $(e.target).attr('data-role');
      var selectVal = e.target.value;
      var price = 0;
      var allPrice = 0;
      var allSublimationPriceSpan = $(e.target).parent().parent().find('[data-role="all-sublimation"]');
      var sublimationsPriceSpan = $(e.target).parent().parent().find('[data-role="sublimation"]');
      var sublimationPriceSpan = $(e.target).parent().find('[data-role="sublimation"]');
      var patternPriceSpan = $(e.target).parent().find('[data-role="pattern"]');
      var colorPrice = $(e.target).parent().find('[data-role="color"]').text()||0;
      for(var i=0;i<this.sublimations.length;i++){
        if(this.sublimations[i].value===part){
          patterns = this.sublimations[i].patterns;
          break;
        }
      }
      for(var i=0;i<patterns.length;i++){
        if(patterns[i].value===selectVal){
          price = patterns[i].price;
          patternPriceSpan.text(price);
          sublimationPriceSpan.text(parseInt(colorPrice)+price);
          //this.$parent.$refs.bgBoard.loadPattern(patterns[i].url,part);
          var imageElement = document.createElement('img');
          imageElement.src = patterns[i].url;
          var fImage = new fabric.Image(imageElement);
          this.$parent.$refs.bgBoard.applyFilter(20, new this.filter.BlendImage({
              image: fImage,
              mode:"mask"
            }),part);
          break;
        }
      }
      for(var i=0;i<sublimationsPriceSpan.length;i++){
        if($(sublimationsPriceSpan[i]).text() && parseInt($(sublimationsPriceSpan[i]).text())){
          allPrice += parseInt($(sublimationsPriceSpan[i]).text());
        }
      }
      allSublimationPriceSpan.text(allPrice)
    },
    sublimationColorChange: function (e) {
      var colors = [];
      var part = $(e.target).attr('data-role');
      var selectVal = e.target.value;
      var price = 0;
      var allPrice = 0;
      var allSublimationPriceSpan = $(e.target).parent().parent().find('[data-role="all-sublimation"]');
      var sublimationsPriceSpan = $(e.target).parent().parent().find('[data-role="sublimation"]');
      var sublimationPriceSpan = $(e.target).parent().find('[data-role="sublimation"]');
      var colorPriceSpan = $(e.target).parent().find('[data-role="color"]');
      var patternPrice = $(e.target).parent().find('[data-role="pattern"]').text()||0;
      for(var i=0;i<this.sublimations.length;i++){
        if(this.sublimations[i].value===part){
          colors = this.sublimations[i].colors;
          break;
        }
      }
      for(var i=0;i<colors.length;i++){
        if(colors[i].value===selectVal){
          price = colors[i].price;
          colorPriceSpan.text(price);
          sublimationPriceSpan.text(parseInt(patternPrice)+price);
          this.$parent.$refs.bgBoard.loadPattern(colors[i].url,part);
          this.$parent.$refs.bgBoard.applyFilter(16,new this.filter.BlendColor({
            color: selectVal,
            mode: "tint",
            alpha: 0.5
          }),part);
          break;
        }
      }
      for(var i=0;i<sublimationsPriceSpan.length;i++){
        if($(sublimationsPriceSpan[i]).text() && parseInt($(sublimationsPriceSpan[i]).text())){
          allPrice += parseInt($(sublimationsPriceSpan[i]).text());
        }
      }
      allSublimationPriceSpan.text(allPrice)
    }
  },
  watch:{
    "partColorValue":function (curVal,oldVal){
      this.$parent.$refs.bgBoard.applyFilter(16,new this.filter.BlendColor({
        color: curVal,
        mode: "tint",
        alpha: 0.5
      }),this.partSelected);
    },
    "customText":function (curVal,oldVal){
      this.$parent.$refs.opBoard.setActiveProp('text', curVal);
    },
    "fontFamily":function (curVal,oldVal){
      this.$parent.$refs.opBoard.setActiveProp('fontFamily', curVal.toLowerCase());
    },
    "textAlign":function (curVal,oldVal){
      this.$parent.$refs.opBoard.setActiveProp('textAlign', curVal.toLowerCase());
    },
    "textBgColor":function (curVal,oldVal){
      this.$parent.$refs.opBoard.setActiveProp('textBackgroundColor', curVal);
    },
    "fontSize":function (curVal,oldVal){
      this.$parent.$refs.opBoard.setActiveStyle('fontSize', parseInt(curVal, 10));
    },
    "lineHeight":function (curVal,oldVal){
      this.$parent.$refs.opBoard.setActiveStyle('lineHeight', parseFloat(curVal, 10));
    },
    "charSpacing":function (curVal,oldVal){
      this.$parent.$refs.opBoard.setActiveStyle('charSpacing', curVal);
    },
    "fontStyle":function (curVal,oldVal){
      this.$parent.$refs.opBoard.setActiveStyle('fontWeight', curVal);
    },
    "customImgWidth":function (curVal,oldVal){
      this.$parent.$refs.opBoard.setActiveStyle('width', curVal);
    },
    "customImgHeight":function (curVal,oldVal){
      this.$parent.$refs.opBoard.setActiveStyle('height', curVal);
    },
    "customImgAngle":function (curVal,oldVal){
      this.$parent.$refs.opBoard.setActiveStyle('angle', curVal);
    },
    "numSizeState":function (curVal,oldVal){
      this.setActiveStyleNum(curVal);
    },
    "numNumberState":function (curVal,oldVal){
      if(this.numberObj.number) {
        if(curVal==="0"){
          this.$parent.$refs.opBoard.remove(this.numberObj.number);
        }else if(curVal==="1"){
          this.$parent.$refs.opBoard.add(this.numberObj.number);
        }
      }
    },
    "numNameState":function (curVal,oldVal){
      if(this.numberObj.name) {
        if(curVal==="0"){
          this.$parent.$refs.opBoard.remove(this.numberObj.name);
        }else if(curVal==="1"){
          this.$parent.$refs.opBoard.add(this.numberObj.name);
        }
      }
    }
  }
})