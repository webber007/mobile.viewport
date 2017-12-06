/**
 * @name : 移动端屏幕自动适配js
 * @author: 王 炜
 * @intro : 默认宽度750，如果你的psd宽度不是这个,请在引用该js前定义iwidth宽度
 */
;(function(window){
	var iwidth = (typeof(window.iwidth)=="undefined")?750:window.iwidth,phoneWidth = parseInt(window.screen.width),phoneScale = phoneWidth/iwidth,ua = navigator.userAgent;
	if (/Android (\d+\.\d+)/.test(ua) && parseFloat(RegExp.$1)<=2.3){
		document.write('<meta name="viewport" content="width='+iwidth+', target-densitydpi=device-dpi">');
	} else {
		document.write('<meta name="viewport" content="width='+iwidth+', minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
	}
})(window)