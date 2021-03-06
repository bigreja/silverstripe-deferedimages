(function(window) {
    // script thanks to: https://varvy.com/pagespeed/defer-images.html
    function imagedefer() {
        var imgDefer = document.getElementsByTagName('img');
        for (var i=0; i<imgDefer.length; i++) {
            if(imgDefer[i].getAttribute('data-src')) {
                imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
            }
            if(imgDefer[i].getAttribute('data-srcset')) {
                imgDefer[i].setAttribute('srcset',imgDefer[i].getAttribute('data-srcset'));
            }
        }

        var imgDefer = document.getElementsByTagName('source');
        for (var i=0; i<imgDefer.length; i++) {
            if(imgDefer[i].getAttribute('data-src')) {
                imgDefer[i].setAttribute('src',imgDe1fer[i].getAttribute('data-src'));
            }
            if(imgDefer[i].getAttribute('data-srcset')) {
                imgDefer[i].setAttribute('srcset',imgDefer[i].getAttribute('data-srcset'));
            }
        }

        if (typeof picturefill === "function") {
            picturefill({
                reevaluate: true
            });
        }
    }
    
    if (window.addEventListener) {
        window.addEventListener('load', imagedefer, false);
    } else if (window.attachEvent) {
        // Microsoft
        window.attachEvent('onload', imagedefer);
    }
}(window));