# vue-waterfall-simple

> A Vue component to waterfall

## Demo

Wating...

## Installation

```shell
npm install --save vue-waterfall-simple
```

## Usage

Vue-waterfall-simple is a [UMD](https://github.com/umdjs/umd) module, which can be used as a module in both CommonJS and AMD modular environments. When in non-modular environment, `Waterfall` will be registered as a global variable.

### Import

#### ES6

```js
/* in xxx.vue */

import Waterfall from 'vue-waterfall-simple'

/*
 * or use ES5 code (vue-waterfall.min.js) :
 * import { Waterfall, WaterfallSlot } from 'vue-waterfall'
 */

export default {
  ...
  components: {
    Waterfall
  },
  ...
}
```

### HTML structure

```html
<waterfall 
  :originData="imgList" 
  :containerWidth="1200" 
  :columnWidth="276"
  :gapHeight="20" 
  :gapWidth="30" 
  >
  <template slot-scope="props">
    <div data-wf>
      <img :src="props.images">
      <h3>动漫图片{{ props.label }}漫画壁纸美图下载</h3>
      <div class="intro">
        <span>{{ props.userIdInfo.nickname }}</span>
      </div>
    </div>
  </template>
</waterfall>
```

## Options

Wating...

## License

Released under the [MIT](LICENSE) License.