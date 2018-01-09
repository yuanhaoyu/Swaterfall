class Swaterfall{
    constructor (config) {
        this._version = 0.02;
        this._index = 0;
        this._allIndex = 0;
        this.data = [];
        this.boxLists = config.boxs;
        this.template = config.template;    
    }
    _combine() {
        if (this._index >= this._allIndex) {
            this._index --;
            return false;
        } else {
            let img = new Image();
            img.src = this.data[this._index].src;
            img.onload = () => {
                setTimeout(() => {
                    let minDom = this._getMinFromDoms(this.boxLists);
                    minDom.appendChild(this._createElement(this.template, this.data[this._index]));
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
    _createElement(template, data) {
        let temp = document.createElement('div');
        temp.innerHTML = template(data);
        return temp.children[0];
        // remember children childNode diff
    }
    add(data) {
        this.data = this.data.concat(data);
        this._allIndex = this._allIndex + data.length;
        this._index ++;
        this._combine();
    }
}