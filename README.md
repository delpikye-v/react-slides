<div align="center">
    <h1>react-slides-z</h1>
    <br />
    <a href="https://codesandbox.io/s/qr5l64">LIVE EXAMPLE</a>
</div>

---

#### Description

+ React slides simple. (swipe and responsive)
+ Use [Swiper](https://www.npmjs.com/package/swiper) single. [Website](https://swiperjs.com).
+ Small paging.
---

#### Usage
```js
// require
npm install swiper --save

npm install react-slides-z --save
```

Import the module in the place you want to use:

```js

import 'swiper/css' // require

import ReactSlides from 'react-slides-z'
import 'react-slides-z/build/styles.css' // => to main
```

#### Snippet

##### `simple`

```js
    const [page, setPage] = React.useState(0)

    <ReactSlides
      listItems={[
        <div>abcd1</div>,
        <div>abcd2</div>,
        <div>abcd3</div>,
        <div>abcd4</div>,
      ]}

      // currentValue={page}
      // onSelectedValue={setPage}
    />

    <ReactSlides listItems={["1", "2", "3", "4"]} />

```

<br />


---

#### props
extend SwiperOptions. See file <b>d.ts</b>

<br />

#### RUN

<a href="https://codesandbox.io/s/qr5l64">LIVE EXAMPLE</a>

```js
npm install
```
```js
npm run dev
npm run start
```

### License

MIT
