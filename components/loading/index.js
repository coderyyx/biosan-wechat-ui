

const loadingController = {
    $bs_loading_hide:function(options){
        let { duration,timer} = this.data.bs_loading;
        let _timer = setTimeout(()=>{
            //清除当前定时器
            clearTimeout(_timer);
            let {timer} = this.data.bs_loading;
            if(timer)
                clearTimeout(timer);
            this.setData({
                'bs_loading.show':false,
                'bs_loading.timer':null
            })
        },duration);
    },
    $bs_loading_show:function(options = {}){
        let _optipns = Object.assign({},{
            type:'bsl',
            image:"",
            slip:"",
            zIndex:1000,
            timer:null,
            duration:2000
        },options);

        this.setData({
            bs_loading:{
                ..._optipns
            }
        });
        //延迟显示loading
        let timer = setTimeout(()=>{
            this.setData({
                'bs_loading.show':true,
                'bs_loading.timer':timer
            })
        },500);
        
        //hide
        this.$bs_loading_hide();
    }

}

export {
    loadingController
}

