// ==UserScript==
// @name         BilibiliPlus
// @namespace    http://tampermonkey.net/
// @version      2026-05-17
// @description  B站视频全屏
// @author       menghuidream
// @match        https://www.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        GM_setValue
// @grant        GM_getValue
// @updateURL    https://raw.githubusercontent.com/menghuidream/Tampermonkey/master/BilibiliPlus.user.js
// @downloadURL  https://raw.githubusercontent.com/menghuidream/Tampermonkey/master/BilibiliPlus.user.js
// ==/UserScript==

(function() {
    'use strict';
    if (GM_getValue("status_video_size", 2) == 2)
    {
        GM_setValue("status_video_size", 1);
        console.log("已初始化status");
    }

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

        function openButtonSwitch(){
            fullScreenButton.style.width = 'auto';
            fullScreenButtonUp.style.width = 'auto';
        }

        function closeButtonSwitch(){
            fullScreenButton.style.width = '100%';
            fullScreenButtonUp.style.width = '100%';
        }

        function addButton(){
            let settingVideoSize = document.createElement('div');//新增屏幕填充按钮
            settingVideoSize.className = 'bpx-player-ctrl-setting-videosize bui bui-switch';
            settingVideoSize.style.cssText = '-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:32px;line-height:32px;width:100%;';
            settingVideoSize.innerHTML = '<div class="bui-area"><input class="bui-switch-input" type="checkbox" aria-label="屏幕填充"><label class="bui-switch-label"><span class="bui-switch-name">屏幕填充</span><span class="bui-switch-body"><span class="bui-switch-dot"><span></span></span></span></label></div>';
            settingAutoPlay.insertAdjacentElement('afterend', settingVideoSize);//添加到自动播放后面

            status = GM_getValue("status_video_size", 2);
            if (status==1){//全屏
                // status=0;
                console.log(GM_getValue("status_video_size", 2));
                
            }
            else if(status==0){//恢复
                // status=1;
                var checkBox = document.querySelector('.bpx-player-ctrl-setting-videosize .bui-switch-input');
                checkBox.checked = true;
                console.log(GM_getValue("status_video_size", 2));
                openButtonSwitch();
            }
            else{
                console.log("error!!!");
            }

            settingVideoSize.addEventListener('click', () => {//添加监听按钮
                status = GM_getValue("status_video_size", 2);
                if (status==1){//全屏
                    // status=0;
                    GM_setValue("status_video_size", 0);
                    console.log(GM_getValue("status_video_size", 2));
                    openButtonSwitch();
                }
                else if(status==0){//恢复
                    // status=1;
                    GM_setValue("status_video_size", 1);
                    console.log(GM_getValue("status_video_size", 2));
                    closeButtonSwitch();
                }
                else{
                    console.log("error!!!");
                }
            });
        }
        addButton();

        
    }, 3000);

})();
