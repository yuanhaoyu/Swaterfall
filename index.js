class Swaterfall{
    constructor (data, config) {
        this._index = 0;
        this.data = data;
        this.boxLists = config.boxs;
        this.templates = config.templates;
    }
    _combine() {
        if (this._index >= this.data.length) {
            return false;
        } else {
            let img = new Image();
            img.src = this.data[this._index].src;
            img.onload = () => {
                setTimeout(() => {
                    let minDom = this._getMinFromDoms(this.boxLists);
                    minDom.appendChild(this.templates[this._index]);
                    this._index ++;
                    return this._combine();
                }, 0)
            }
        }
    }
    _getMinFromDoms(doms) {
        let min = doms[0];
        for (let i = 1; i < doms.length; i++) {
            if (doms[i].clientHeight < doms[i - 1].clientHeight) {
                min = doms[i];
            }
        }
        return min;
    }
    init() {
        this._combine();
    }
    add(data, templates) {
        this.templates = templates;        
        this.data = data;
        this._index = 0;
        this._combine();
    }
}