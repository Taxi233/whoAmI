// import request from '@/utils/request'
import useUserStore from '@/store/modules/user.ts'

declare const window: any
declare const navigator: any
export default {
  saveFile(url: string, fileName: string) {

    fetch(useUserStore().prefix + url).then(response => response.blob())  //通过.then方法链，将响应对象转换为Blob数据（文件的二进制数据）。
      .then(blob => { //再次使用.then方法链，处理获取到的Blob数据。
        if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveOrOpenBlob(blob, fileName)
        } else {
          const link = document.createElement('a') //使用document.createElement创建一个<a>节点。
          link.href = URL.createObjectURL(blob)  //通过URL.createObjectURL方法，将Blob数据转换成URL对象，然后将该URL赋值给link的href属性。这一步相当于生成了一个临时URL，供下载使用。
          link.download = fileName // 替换为你要保存的文件名和扩展名(设置用户下载文件时使用的文件名和扩展名)
          link.click()   //调用click方法模拟用户点击链接，从而触发浏览器的文件下载行为。
          URL.revokeObjectURL(link.href) // 释放URL对象资源(使用URL.revokeObjectURL方法释放之前创建的URL对象资源，避免内存泄漏)
        }
      })
  }
}



