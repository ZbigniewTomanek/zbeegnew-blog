---
title: "VC Red Pill"
date: 2023-11-22T16:50:36+01:00
draft: false
author: Zbigniew Tomanek
---

<iframe src="/html/simulation.html" style="width: 100%; border: none;" id="myIframe"></iframe>
<script>
    var iframe = document.getElementById('myIframe');
    function resizeIframe() {
        try {
            var contentHeight = iframe.contentWindow.document.body.scrollHeight;
            iframe.style.height = contentHeight + 'px';
        } catch (e) {
            console.error("Error resizing iframe: ", e);
        }
    }
    iframe.onload = resizeIframe;
</script>
