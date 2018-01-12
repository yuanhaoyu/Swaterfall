class Swaterfall{
    constructor (config) {
        this._version = 0.03;
        this._queue = [];
        this._data = [];
        this.boxLists = config.boxs;
        this.template = config.template;
        this.srcKey = config.srcKey ? config.srcKey : 'src';
        this.done = config.done ? config.done : () => {};
    }
    _done() {
        this._queue.shift();
        if (this._queue.length > 0) {
           this._data = this._queue[0];
           this._combine();
        }      
    }
    _combine(t) {
        var i = t ? t : 0;
        if (i >= this._data.length) {
            this._done();
            this.done();
            return false;
        } else {
            let img = new Image();
            if (this._data[i] && this._data[i][this.srcKey]) {
                img.src = this._data[i][this.srcKey];
                img.onload = () => {
                    setTimeout(() => {
                        let minDom = this._getMinFromDoms(this.boxLists);
                        minDom.appendChild(this._createElement(this.template, this._data[i]));
                        i ++;
                        return this._combine(i);
                    }, 0)
                }
            } else {
                i ++;
                return this._combine(i);
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
        this._index = 0;       
        if (this._queue.length === 0) {
            this._data = data;
            this._queue.push(data);
            this._combine();
        } else {          
            this._queue.push(data);
        }
    }
}