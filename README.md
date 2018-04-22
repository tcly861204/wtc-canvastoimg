# wtc-canvastoimg
canvas在线保存图片

1. 先安装依赖
> npm install wtc-canvastoimg

2. 在项目中导入
> import Canvastoimg from 'wtc-canvastoimg'

3. 调用类
```
/* 初始化类 */
const cvsimg = new Canvastoimg({
  width: 556,  //画布宽度
  height: 818,  //画布高度
  color: '#fff',  //画布背景色
  data:[
    {
      type: 'text',
      zIndex: 2,
      fontSize: 20,
      x: 152,
      y: 186,
      content: '江湖笑邀请你加入旅老板:',
      color: '#212121',
    },
    {
      type: 'text',
      zIndex: 3,
      fontSize: 12,
      x: 206,
      y: 503,
      content: '欢迎加入',
      color: '#fff',
    },
    {
      type: 'img',
      zIndex: 4,
      x: 200,
      y: 240,
      width: 150,
      height: 150,
      content: './dist/logo.png',
    },
    {
      type: 'img',
      zIndex: 1,
      x: 0,
      y: 0,
      width: 556,
      height: 818,
      content: './dist/time.png'
    },
  ]
});
cvsimg.down().then((canvas)=>{
  /* 获取到的是canvas对象 */
  console.log(canvas.toDataURL('image/jpg'););
});

```