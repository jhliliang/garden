// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        tmplID: 0,
        itemID: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    initItem: function (tmplID, itemID) {
        this.tmplID = tmplID;
        this.itemID = itemID;
        this.label.string =  this.tmplID + ' Item#' + this.itemID;
    },

    // update (dt) {},
});
