
const bsToastController = {
    $bs_toast_init:function(options){
        //init
        options = Object.assign({},{
            text:"",
            duration:2000,
            src:"",
            icon:"",
            zIndex:1000
        },options)
        return options;
    },
    $bs_toast_show:function(options = {}){
        let _optipns = this.$bs_toast_init(options);
        this.setData({
            bs_toast_Data:{
                show:true,
                ..._optipns
            }
        });
        this.$bs_toast_hide();
    },
    $bs_toast_hide:function(){
        let { duration } = this.data.bs_toast_Data;
        if(duration > 0 && duration !== Infinity) {
            let _timer = setTimeout(()=>{
                clearTimeout(_timer);
                this.setData({
                    'bs_toast_Data.show':false
                })
            },duration);
        }
    }

}

export {
    bsToastController
}

