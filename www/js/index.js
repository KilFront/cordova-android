/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    console.log('device height:', screen.height);
    console.log('inner height:', window.innerHeight);
    
    DisplayCutout.setDisplayCutout(
        DisplayCutout.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES,
        function() {
          AndroidFullScreen.immersiveMode(() => {
            console.log('device height2:', screen.height);
            console.log('inner height2:', window.innerHeight);
            
            window.addEventListener('keyboardDidShow', (event) => {
                // Describe your logic which will be run each time when keyboard is about to be shown.
                console.log('keyboardHeight:', event.keyboardHeight);
                let top = document.getElementsByClassName('top')[0];
                top.style.top = event.keyboardHeight + 'px';
                let bottom = document.getElementsByClassName('bottom')[0];
                bottom.style.bottom = event.keyboardHeight + 'px';
            });

            /*
            NativeKeyboard.showMessenger({
                // onKeyboardWillShow: function (height) {
                //     console.log("keyboard will show, height is: " + height);
                //     appendMessage("keyboard will show, height is: " + height);
                // },
                onKeyboardDidShow: function (height) {
                    console.log("keyboard shows, height is: " + height);
                    // appendMessage("keyboard shows, height is: " + height);
                    let bottom = document.getElementsByClassName('bottom')[0];
                    bottom.style.bottom = height + 'px';
                },
                // onMessengerBarHeightChanged: function (height) {
                //     console.log("messenger bar height changed to: " + height);
                //     appendMessage("keyboard shows, height is: " + height);
                // },
            }) */
          }, err => {
            console.log('err');
          });
        console.log('full screen');
        
        },
        function(e) {
          console.error(e);
        }
      );
    
    document.getElementById('deviceready').classList.add('ready');
}
