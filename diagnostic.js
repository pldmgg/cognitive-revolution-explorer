// Wait for page to be fully loaded
setTimeout(function() {
    console.log("=== Executing diagnostic script ===");
    
    var result = (function(){
        var dc=document.querySelector('.detail-overlay.active .detail-content');
        var ov=document.querySelector('.detail-overlay.active');
        var cl=ov?ov.closest('.zone-clip'):null;
        var zn=ov?ov.closest('.zone'):null;
        var r={};
        if(dc){
            var b=dc.getBoundingClientRect();
            var s=getComputedStyle(dc);
            r.dc={
                top:Math.round(b.top),
                bot:Math.round(b.bottom),
                h:Math.round(b.height),
                sh:dc.scrollHeight,
                ch:dc.clientHeight,
                st:dc.scrollTop,
                ov:s.overflowY,
                pt:s.paddingTop,
                ht:s.height
            };
        }
        if(ov){
            var ob=ov.getBoundingClientRect();
            r.ov={
                top:Math.round(ob.top),
                bot:Math.round(ob.bottom),
                h:Math.round(ob.height),
                ovf:getComputedStyle(ov).overflow
            };
        }
        if(cl){
            var cb=cl.getBoundingClientRect();
            r.cl={
                top:Math.round(cb.top),
                bot:Math.round(cb.bottom),
                h:Math.round(cb.height),
                ovf:getComputedStyle(cl).overflow
            };
        }
        if(zn){
            var zb=zn.getBoundingClientRect();
            r.zn={
                top:Math.round(zb.top),
                bot:Math.round(zb.bottom),
                h:Math.round(zb.height)
            };
        }
        r.vp=window.innerHeight;
        return r;
    })();
    
    document.title = JSON.stringify(result);
    console.log("=== Title set to:", document.title);
    
    // Also create a visible div with the result
    var resultDiv = document.createElement('div');
    resultDiv.id = 'diagnostic-result';
    resultDiv.style.cssText = 'position:fixed;top:10px;right:10px;background:black;color:lime;padding:20px;z-index:99999;max-width:400px;font-family:monospace;font-size:12px;border:2px solid lime;overflow:auto;max-height:90vh;';
    resultDiv.innerHTML = '<strong>DIAGNOSTIC DATA:</strong><br><pre>' + JSON.stringify(result, null, 2) + '</pre>';
    document.body.appendChild(resultDiv);
    
}, 1000);
