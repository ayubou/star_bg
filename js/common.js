let starBg = new Vue({
    el: '#starBg',
    data(){
        return {
            setCount:40,
            setArray:[]
        }
    },
    methods: {

        fixArray(){

            function createStar(){
                const sec3Width = document.getElementById('starBg').clientWidth;
                const sec3Height = document.getElementById('starBg').clientHeight;

                let makeLeftPosition = Math.floor(Math.random() * sec3Width);
                let checkWidth = sec3Width-80;
                if(makeLeftPosition >= checkWidth){
                    makeLeftPosition = makeLeftPosition-80;
                }
                let makeTopPosition = Math.floor(Math.random() * sec3Height);
                let checkHeight = sec3Height-85;
                if(makeTopPosition >= checkHeight){
                    makeTopPosition = makeTopPosition-85;
                }
                let makeLeftPositionpx = makeLeftPosition + 'px';
                let makeTopPositionpx = makeTopPosition + 'px';
                let makeImg = './svg/star.svg';

                return [makeLeftPositionpx,makeTopPositionpx,makeImg];
            }

            setTimeout(function () {

                for (let i = 0; i < this.setCount; i++) {
                    let createStarArray = createStar();
                    this.setArray.push([createStarArray[0],createStarArray[1],createStarArray[2]]);
                }

                setInterval(function() {
                    for (let i = 0; i < this.setCount; i++) {
                        let createStarArray = createStar();
                        this.setArray.splice(i, 1, [createStarArray[0],createStarArray[1],createStarArray[2]]);
                    }
                }.bind(this), 4000)

            }.bind(this), 1000)

        }
    },
    mounted(){
        this.fixArray()
    }
})