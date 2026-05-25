// ==UserScript==
// @name         BilibiliPlus
// @namespace    http://tampermonkey.net/
// @version      2026-05-17
// @description  B站视频全屏
// @author       menghuidream
// @match        https://www.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @updateURL    https://raw.githubusercontent.com/menghuidream/Tampermonkey/master/BilibiliPlus.user.js
// @downloadURL  https://raw.githubusercontent.com/menghuidream/Tampermonkey/master/BilibiliPlus.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setTimeout(function() {
        var fullScreenButton = document.querySelector('.bpx-player-video-wrap video');
        var fullScreenButtonUp = document.querySelector('.bpx-player-video-wrap');
        fullScreenButtonUp.style.textAlign = "center";
        var status = 1;

        // const styleButton = document.querySelector("head > style:nth-child(34)");//样式
        // styleButton.innerHTML = styleButton.innerHTML.replace(
        //     ".bpx-player-ctrl-setting-autoplay,",
        //     ".bpx-player-ctrl-setting-autoplay,.bpx-player-ctrl-setting-videosize,"
        // );
        
        let settingAutoPlay = document.querySelector('.bpx-player-ctrl-setting-autoplay.bui.bui-switch');
        let panel = settingAutoPlay.closest('.bui-panel-wrap');
        // let panel = document.querySelector('.bui-panel-wrap');
        panel.style.height = '160px';//高度
        let item = settingAutoPlay.closest('.bui-panel-item');
        // let item = document.querySelector('.bui-panel-item');
        item.style.height = '160px';//高度

        let settingVideoSize = document.createElement('div');//新增屏幕填充按钮
        settingVideoSize.className = 'bpx-player-ctrl-setting-videosize bui bui-switch';
        settingVideoSize.style.cssText = '-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:32px;line-height:32px;width:100%;';
        settingVideoSize.innerHTML = '<div class="bui-area"><input class="bui-switch-input" type="checkbox" aria-label="屏幕填充"><label class="bui-switch-label"><span class="bui-switch-name">屏幕填充</span><span class="bui-switch-body"><span class="bui-switch-dot"><span></span></span></span></label></div>';
        settingAutoPlay.insertAdjacentElement('afterend', settingVideoSize);//添加到自动播放后面

        settingVideoSize.addEventListener('click', () => {//添加监听按钮
            if (status){//全屏
                status=0;
                fullScreenButton.style.width = 'auto';
                fullScreenButtonUp.style.width = 'auto';
            }
            else{//恢复
                status=1;
                fullScreenButton.style.width = '100%';
                fullScreenButtonUp.style.width = '100%';
            }
        });

        
    }, 3000);

})();
