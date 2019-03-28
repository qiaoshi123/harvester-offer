//
let str = 'zfpx'
console.log(str.startsWith('z')); //true,以什么什么开头，返回布尔；
console.log(str.endsWith('x'));//true,以什么什么结尾，返回布尔；
console.log(str.includes('z'));//true,是否包含，返回布尔；indexOf('z')>-1
console.log(str.repeat(3))// zfpxzfpxzfpx ,重复多少次 ，返回一个新的字符串

let address1 = 'http://www.baidu.com'
let address2 = 'ftp://www.baidu.com'
if(address1.startsWith('http')){
    console.log('http网址')
}else if(address2.startsWith('ftp')){
    console.log('ftp服务')
}

let filename = 'avatar.jpg'
if(filename.endsWith('jpg') || filename.endsWith('png')){
    console.log('是一张图片')
}