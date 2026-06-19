var YaGamesLoader;(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};(()=>{if(void 0!==e){var r=e.u,o=e.e,n={},t={};e.u=function(e){return r(e)+(n.hasOwnProperty(e)?"?"+n[e]:"")},e.e=function(n){return o(n).catch(function(o){var a=t.hasOwnProperty(n)?t[n]:3;if(a<1){var s=r(n);throw o.message="Loading chunk "+n+" failed after 3 retries.\n("+s+")",o.request=s,o}return new Promise(function(r){setTimeout(function(){t[n]=a-1,r(e.e(n))},0)})})}}})();var r={};e.r(r);var o,n=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,r,o)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,d=(e,r)=>{for(var o in r||(r={}))a.call(r,o)&&i(e,o,r[o]);if(t)for(var o of t(r))s.call(r,o)&&i(e,o,r[o]);return e};if(window===window.top||window.sdkLoaderWasInited){const e=window.sdkLoaderWasInited?"The SDK Loader was loaded more than once":"SDK initialization outside of frame";console.warn(e)}else{let e,r,n,t;window.sdkLoaderWasInited=!0;let a=!1,s=!1,i=!1;window.isSdkLoader=!0,window.YaGames={init:o=>{var d;return s?null==(d=window.YaGames)?void 0:d.init(o):i?Promise.reject(v):t?(console.warn("YaGames was initialized"),t):(t=new Promise((t,s)=>{e=t,r=s,n=o,a=!0}),t)}};const c={type:"unknown",isMobile:()=>!1,isTablet:()=>!1,isDesktop:()=>!1,isTV:()=>!1},l=(e,r={})=>{var o,n;window.parent.postMessage({source:"YandexGamesSDK",messageId:`${Date.now()}-${Math.random()}`,type:"error",data:{block:"ErrorCounter/common: sdk-loader",error:{message:`[SDK LOADER]: ${e}`},additional:d(d(d({},r),(null==(o=r.error)?void 0:o.message)?{originalMessage:null==(n=r.error)?void 0:n.message}:{}),r.source?{originalSource:r.source}:{}),level:"error",source:"sdk-loader",type:"error"}},"*")};Object.defineProperty(window.YaGames,"deviceInfo",{get:()=>(l("accessing deviceInfo in YaGames"),c)});const u=e=>{const r=document.querySelectorAll(`script[src="${e}"]`);for(let e of Array.from(r))e.remove()},m=/^(https|yandexgames):\/\/[^\/][^.][\w.\/\-]+\/sdk\/v2(\?|$)/,w=/(^|yandex\.net)\/sdk\/(v\d+|_)\/v2(\.[0-9a-f]*)?\.js/,f="url sdk not valid",v="load sdk file error",p=3,g=(o,t)=>{const d=document.createElement("script");d.src=o,d.onload=()=>{var o;s=!0,a&&(null==(o=window.YaGames)||o.init(n).then(r=>{e(r)}).catch(e=>{l("Error while init sdk",{error:e}),r(e)}))},d.onerror=(e,n,s,d,c)=>{u(o),t>0?g(o,--t):(i=!0,l(v,{event:e,error:c,source:n}),a&&r(v))},(document.head||document.documentElement).append(d)},h=(e,o="")=>{if(e&&(m.test(e)||w.test(e))){const r=new URL(e,location.origin);o&&r.searchParams.set("dvh",o),g(r.toString(),p)}else i=!0,a&&r(f),l(f)},y=new URLSearchParams(location.search).get("sdk");y?h(y):(o=function*(){return new Promise((e,r)=>{const o=`${Date.now()}-${Math.random()}`,n=setTimeout(()=>{r(new Error("Get external iframe timeout"))},500);window.addEventListener("message",function r(t){const a=function(e){try{return JSON.parse(e)}catch(e){return null}}(t.data);a&&a.messageId===o&&(window.removeEventListener("message",r),clearTimeout(n),e(a.payload))}),window.parent.postMessage(JSON.stringify({source:"YandexGamesSDK",actionName:"GET_IFRAME_ORIGIN_SRC",channel:"EARLY_SDK_EVENT",messageId:o}),"*")})},new Promise((e,r)=>{var n=e=>{try{a(o.next(e))}catch(e){r(e)}},t=e=>{try{a(o.throw(e))}catch(e){r(e)}},a=r=>r.done?e(r.value):Promise.resolve(r.value).then(n,t);a((o=o.apply(null,null)).next())})).then(e=>{const r=new URL(e),o=r.searchParams,n=o.get("sdk"),t=o.get("dvh")||"";if(!n){const e=new URLSearchParams(r.search).get("sdk");return void h(e)}h(n,t)}).catch(e=>{l("Error while get iframe src",{error:e}),console.error("SDK initialization failed",e)})}YaGamesLoader=r})();

const hideFullScreenButton = "";
        const buildUrl = "Build";
        const loaderUrl = buildUrl + "/sdsd.loader.js";
        const config = {
            dataUrl: buildUrl + "/sdsd.data.unityweb",
            frameworkUrl: buildUrl + "/sdsd.framework.js.unityweb",
            codeUrl: buildUrl + "/sdsd.wasm.unityweb",
        streamingAssetsUrl: "StreamingAssets",
            companyName: "DefaultCompany",
            productName: "Roblox Shooter",
            productVersion: "0.1"
        };

        const container = document.querySelector("#unity-container");
        const canvas = document.querySelector("#unity-canvas");
        const loadingCover = document.querySelector("#loading-cover");
        const progressBarEmpty = document.querySelector("#unity-progress-bar-empty");
        const progressBarFull = document.querySelector("#unity-progress-bar-full");
        const spinner = document.querySelector('.spinner');

        const canFullscreen = (function () {
            for (const key of [
                'exitFullscreen',
                'webkitExitFullscreen',
                'webkitCancelFullScreen',
                'mozCancelFullScreen',
                'msExitFullscreen',
            ]) {
                if (key in document) {
                    return true;
                }
            }
            return false;
        }());

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            container.className = "unity-mobile";
            
        }

        // The background image when loading the game. When building a build, the code changes depending on the project settings.
        
        loadingCover.style.display = "";

        let StartUnityInstance;
        let ygGameInstance = null;
        let ysdk = null;
        let initYSDK = false;
        let initGame = false;
        let syncInit = false;
        let isVisibility = true;
        let isPausedGame = false;
        const NO_DATA = 'no data';

        document.addEventListener('contextmenu', event => event.preventDefault());
        document.addEventListener('visibilitychange', () => SetVisibility(!document.hidden));
        document.addEventListener('blur', () => SetVisibility(false));
        document.addEventListener('focus', () => SetVisibility(false));

        window.addEventListener('pointerdown', () => {
            FocusGame();
            SetVisibility(true);
        });

        document.addEventListener('click', () => {
          const canvas = document.getElementById('canvas');
          if (canvas && canvas.requestPointerLock) {
            canvas.requestPointerLock({ unadjustedMovement: true });
          }
        });

        function InstallBlurFocusBlocker() {
            if (!('onblur' in document)) return;
            if (window.blurFocusHandlersInstalled) return;

            window.addEventListener('blur', function () {
                let blockerButton = document.createElement('button');
                blockerButton.style.position = 'fixed';
                blockerButton.style.top = '0';
                blockerButton.style.left = '0';
                blockerButton.style.width = '100%';
                blockerButton.style.height = '100%';
                blockerButton.style.zIndex = '9999';
                blockerButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                blockerButton.style.border = 'none';
                blockerButton.style.cursor = 'default';

                document.body.appendChild(blockerButton);

                function removeBlocker() {
                    if (blockerButton && blockerButton.parentNode) {
                        blockerButton.parentNode.removeChild(blockerButton);
                    }
                    window.removeEventListener('focus', removeBlocker);
                }

                window.addEventListener('focus', removeBlocker);
            });

            window.blurFocusHandlersInstalled = true;
        }

        function FocusGame() {
            canvas.focus();
        }

        function SetVisibility(visibility) {
            if (ysdk !== null && initGame === true && isVisibility !== visibility) {
                isVisibility = visibility;
                if (!visibility) {
                    YG2Instance('SetFocusWindowGame', 'false');
                }
                else {
                    YG2Instance('SetFocusWindowGame', 'true');
                }
            }
        }

        const PauseCallback = () => {
            isPausedGame = true;
            YG2Instance('SetPauseGame', 'true');
        };

        const ResumeCallback = () => {
            isPausedGame = false;
            YG2Instance('SetPauseGame', 'false');
        };

        function StartUnityInstance_IfUnloaded() {
            if (spinner.style.display !== "none")
                StartUnityInstance();
        }

        function IsLocalHost() {
            try {
                if (window.top !== window) {
                    return false;
                }

                const host = window.location.hostname;
                if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".local")) {
                    LogStyledMessage("Local Host");
                    return true;
                }
            } 
            catch (error) {
                console.error("Error checking the local host:", error);
                return false;
            }
        }

        function YG2Instance(method) {
            if (ygGameInstance == null)
                return;

            if (!initGame) {
                setTimeout(function () {
                    if (ygGameInstance)
                        ygGameInstance.SendMessage('YG2Instance', method);
                }, 100);
            }
            else {
                ygGameInstance.SendMessage('YG2Instance', method);
            }
                
        }
        function YG2Instance(method, arg) {
            if (ygGameInstance == null)
                return;

            if (!initGame) {
                setTimeout(function () {
                    ygGameInstance.SendMessage('YG2Instance', method, arg);
                }, 100);
            }
            else {
                ygGameInstance.SendMessage('YG2Instance', method, arg);
            }
        }

        function LogStyledMessage(message, style) {
            console.log('%c' + message, style);
        }
        function LogStyledMessage(message) {
            console.log('%c' + message, 'color: #FFDF73; background-color: #454545');
        }

        async function InitYSDK() {
            return;
        }

        function InitGame() {
            initGame = true;

            setTimeout(function () {
                if (isPausedGame == true)
                    YG2Instance('SetPauseGame', 'true');
            }, 100);

            // Additional start modules
        }

        // Additional script modules
LogStyledMessage('PluginYG2 v2.005  build: 28');

var cloudSaves = NO_DATA;

function SaveCloud(jsonData, flush) {
    if (player == null) {
        console.error('CRASH Save Cloud: ', 'Didnt have time to load');
        return;
    }
    try {
        player.setData({
            saves: [jsonData],
        }, flush);
    } catch (e) {
        console.error('CRASH Save Cloud: ', e.message);
    }
}

function LoadCloud() {
    return new Promise((resolve) => {
        if (ysdk == null) {
            Final(NO_DATA);
            return;
        }
        try {
            player.getData(["saves"]).then(data => {
                if (data.saves) {
                    Final(JSON.stringify(data.saves));
                } else {
                    Final(NO_DATA);
                }
            }).catch(() => {
                console.error('Load Cloud Error!');
                Final(NO_DATA);
            });
        }
        catch (e) {
            console.error('CRASH Load saves Cloud: ', e.message);
            Final(NO_DATA);
        }

        function Final(res) {
            cloudSaves = res;
            YG2Instance('SetLoadSaves', res);
            resolve(res);
        }
    });
}


function StickyAdActivity(show) {
    try {
        ysdk.adv.getBannerAdvStatus().then(({ stickyAdvIsShowing, reason }) => {
            if (stickyAdvIsShowing) {
                if (!show) {
                    ysdk.adv.hideBannerAdv();
                }
            }
            else if (reason) {
                LogStyledMessage('StickyAdv are not shown. Reason:', reason);
            }
            else if (show) {
                ysdk.adv.showBannerAdv();
            }
        })
    } catch (e) {
        console.error('CRASH StickyAdv activity: ', e.message);
    }
}


function RewardedAdvShow(id) {
    try {
        ysdk.adv.showRewardedVideo(
            {
                callbacks:
                {
                    onOpen: () => {
                        LogStyledMessage('Opened Rewarded Adv');
                        YG2Instance('OpenRewardedAdv');
                    },
                    onClose: () => {
                        LogStyledMessage('Closed Rewarded Adv');
                        YG2Instance('CloseRewardedAdv');
                        FocusGame();
                    },
                    onRewarded: () => {
                        YG2Instance('RewardAdv', id);
                    },
                    onError: (err) => {
                        console.error('Error Rewarded Adv', err);
                        YG2Instance('ErrorRewardedAdv');
                    }
                }
            });
    } catch (err) {
        console.error('CRASH Rewarded Adv Show: ', err.message);
    }
}


function SetLeaderboard(name, score, extraData) {
    if (!ysdk) return;

    try {
        ysdk.leaderboards.setScore(name, score, extraData);
    } catch (e) {
        console.error('CRASH Set Leaderboard: ', e.message);
    }
}

function GetLeaderboard(nameLB, quantityTop, quantityAround, photoSize, auth) {
    if (!ysdk) return;

    var jsonEntries = {
        technoName: '',
        isDefault: false,
        isInvertSortOrder: false,
        decimalOffset: 0,
        type: ''
    };

    ysdk.leaderboards.getDescription(nameLB)
        .then(res => {
            jsonEntries.technoName = nameLB;
            jsonEntries.isDefault = res.default;
            jsonEntries.isInvertSortOrder = res.description.invert_sort_order;
            jsonEntries.decimalOffset = res.description.score_format.options.decimal_offset;
            jsonEntries.type = res.description.type;

            return ysdk.leaderboards.getEntries(nameLB, {
                quantityTop: quantityTop,
                includeUser: auth,
                quantityAround: quantityAround
            });
        })
        .then(res => {
            let jsonPlayers = EntriesLB(res, photoSize);
            let combinedJson = { ...jsonEntries, ...jsonPlayers };

            YG2Instance('LeaderboardEntries', JSON.stringify(combinedJson));
        })
        .catch(err => {
            if (err.code === 'LEADERBOARD_PLAYER_NOT_PRESENT')
               LogStyledMessage('Leaderboard player not present');
            console.error(err);
        });
}

function EntriesLB(res, photoSize) {
    let LbdEntriesText = '';
    let plCount = res.entries.length;

    let ranks = new Array(plCount);
    let photos = new Array(plCount);
    let names = new Array(plCount);
    let scores = new Array(plCount);
    let uniqueIDs = new Array(plCount);
    let extraDataArray = new Array(plCount);

    for (i = 0; i < plCount; i++) {
        ranks[i] = res.entries[i].rank;
        scores[i] = res.entries[i].score;
        uniqueIDs[i] = res.entries[i].player.uniqueID;
        photos[i] = res.entries[i].player.getAvatarSrc(photoSize);

        if (res.entries[i].extraData == "" || res.entries[i].extraData == null)
            extraDataArray[i] = NO_DATA;
        else
            extraDataArray[i] = res.entries[i].extraData;

        if (res.entries[i].player.scopePermissions.public_name !== "allow")
            names[i] = "anonymous";
        else
            names[i] = res.entries[i].player.publicName;

        LbdEntriesText += ranks[i] + '. ' + names[i] + ": " + scores[i] + '\n';
    }

    if (plCount === 0) {
        LbdEntriesText = 'no data';
    }

    let jsonPlayers = {
        "entries": LbdEntriesText,
        "ranks": ranks,
        "photos": photos,
        "names": names,
        "scores": scores,
        "uniqueIDs": uniqueIDs,
        "extraDataArray": extraDataArray
    };

    return jsonPlayers;
}


let nowFullAdOpen = false;

function InterAdvShow() {
    try {
        if (ysdk == null){
            LogStyledMessage('Cancel InterAdvShow: SDK is not initialized');
            return;
        }
        if (nowFullAdOpen == true){
            LogStyledMessage('Cancel InterAdvShow: The advertisement is already open');
            return;
        }

        ysdk.adv.showFullscreenAdv({
            callbacks: {
                onOpen: () => {
                    LogStyledMessage('Open Interstitial Adv');
                    nowFullAdOpen = true;
                    if (initGame === true) {
                        YG2Instance('OpenInterAdv');
                    }
                },
                onClose: (wasShown) => {
                    LogStyledMessage('Close Interstitial Adv');
                    nowFullAdOpen = false;
                    if (initGame === true) {
                        if (wasShown) {
                            YG2Instance('CloseInterAdv', 'true');
                        }
                            else {
                            YG2Instance('CloseInterAdv', 'false');
                        }
                    }
                    FocusGame();
                },
                onError: (error) => {
                    console.error('Error Interstitial Adv', error);
                    nowFullAdOpen = false;
                    YG2Instance('ErrorInterAdv');
                    FocusGame();
                }
            }
        });
    }
    catch (e) {
        console.error('CRASH Interstitial Adv Show: ', e.message);
    }
}

var playerData = NO_DATA;
let player = null;

async function InitPlayer() {
    return new Promise(async (resolve) => {
        try {
            if (!ysdk)
                return Final(NotAuthorized(false));

            player = await ysdk.getPlayer();

            if (!player.isAuthorized())
                return Final(NotAuthorized());

            const authJson = {
                "playerAuth": "resolved",
                "playerName": player.getName(),
                "playerId": player.getUniqueID(),
                "playerPhoto": player.getPhoto('medium'),
                "payingStatus": player.getPayingStatus()
            };

            return Final(JSON.stringify(authJson));
        } catch (e) {
            console.error('CRASH init Player: ', e.message);
            return Final(NotAuthorized(false));
        }

        function Final(res) {
            playerData = res;
            YG2Instance('SetAuth', res);
            resolve(res);
        }
    });
}


function NotAuthorized(isInitSDK = true) {
    let authJson = {
        "playerAuth": "rejected",
        "playerName": "unauthorized",
        "playerId": isInitSDK ? player.getUniqueID() : "unauthorized",
        "playerPhoto": "no data",
        "payingStatus": "unknown"
    };
    return JSON.stringify(authJson);
}

function OpenAuthDialog() {
    if (ysdk !== null) {
        try {
            ysdk.auth.openAuthDialog().then(() => {
                InitPlayer()
                    .then(() => {
                        YG2Instance('LoggedIn');
                    });
            });
        }
        catch (e) {
            LogStyledMessage('CRASH Open Auth Dialog: ', e.message);
        }
    }
}