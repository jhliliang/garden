// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        itemP: {
      
            default: null,        // The default value will be used only when the component attaching
      
            type: cc.Prefab, // optional, default is typeof default
        },
      
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.onCrops();
     },

    start () {

    },

    // update (dt) {},


    //加载农作物
    onCrops(){
        let bg=cc.find("FarmBg",this.node);
        let item=cc.instantiate(this.itemP);

        let itemBox=cc.find("FarmBg/mapNew/item1",this.node);
        let itemPos=itemBox.getPosition();
        let pos=itemBox.getNodeToWorldTransformAR(itemPos);
       
        item.setPosition(pos.x,pos.y);
        bg.addChild(item);
       
    }

});
