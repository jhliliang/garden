
cc.Class({
    extends: cc.Component,

    properties: {
        Dialog:{
            default:null,
            type:cc.Node
        },
        scrollView: {
        	default: null,
        	type: cc.ScrollView
        },
        itemPrefab:{
            default:null,
            type:cc.Prefab
        },
        totalCount:0,
        spacing:0,
        pageIndex:1,
        pageSize:10,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.content=this.scrollView.content;
        this.initialize();
     },

    start () {

    },

    // update (dt) {},

    onShow(){
        this.Dialog.active=true;
    },

    onClose(){
        this.Dialog.active=false;
    },

    initialize(){
      
        this.content.height=this.totalCount*(this.itemPrefab.data.height+this.spacing)+this.spacing;
        for (let i = 0; i < 10; i++) {
           
            let item = cc.instantiate(this.itemPrefab);
    		this.content.addChild(item);
    		item.setPosition(0, -item.height * (0.5 + i) - this.spacing * (i + 1));
    		item.getComponent('Item').initItem(i, i);
        }
    }
});
