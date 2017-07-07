/**
 * Created by hehuizhong on 2017/6/17.
 */
var vm = new Vue({
    data: {
        canvas: null,
        filter: null,
        lineCenterPoint:null,
        productId: '',
        googdsId: '',
        isSublimation: ''
    },
    created () {
        debugger
        this.init();
    },
    method: {
        addImage1 (imageUrl, imageName) {
            fabric.Image.fromURL(imageUrl, function(image) {

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
                imgMap[imageName] = image;
            });
        },
        init () {
            addImage1('./static/img/left.png','LEFT');
            addImage1('./static/img/right.png','RIGHT');
            addImage1('./static/img/body.png','BODY');
            var line = new fabric.Line([ 0, 0,0, 600], {
                left: 300,
                top: 0,
                stroke: '#000',
                hasBorders: false,
                hasControls: false,
                selectable: false
            });
            lineCenterPoint = line.getCenterPoint();
            canvas.add(line);
        }
    }
})