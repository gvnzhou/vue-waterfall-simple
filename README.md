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

### ES6

```js
/* in xxx.vue */

import Waterfall from 'vue-waterfall-simple'

export default {
  ...
  components: {
    Waterfall
  },
  ...
}
```

### Browser

```js
<script src="path/to/vue/vue.js"></script>
<script src="path/to/vue-waterfall-simple.js"></script>
```

```js
new Vue({
  el: '#app',
  components: {
    vueWaterfallSimple
  }
})
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

<table>
  <thead>
    <tr>
      <th width="160">Name</th>
      <th width="160">Type</th>
      <th width="160">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>originData</td>
      <td><code>Array</code></td>
      <td>-</td>
      <td>Required. Data used to render the waterfall.</td>
    </tr>
    <tr>
      <td>containerWidth</td>
      <td><code>Number</code></td>
      <td>-</td>
      <td>Required.</td>
    </tr>
    <tr>
      <td>columnWidth</td>
      <td><code>Number</code></td>
      <td>-</td>
      <td>Required.</td>
    </tr>
    <tr>
      <td>gapHeight</td>
      <td><code>Number</code></td>
      <td><code>30</code></td>
      <td>The standard space (px) between row.</td>
    </tr>
    <tr>
      <td>gapWidth</td>
      <td><code>Number</code></td>
      <td><code>30</code></td>
      <td>The standard space (px) between column.</td>
    </tr>
  </tbody>
</table>


## License

Released under the [MIT](LICENSE) License.