<script>
function cleanRichTextFromWordPaste (input, id) {
        var stripingString = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g;
        var output = input.replace(stringStripper, ' ');
        var StripingComment = new RegExp('<!--(.*?)-->', 'g');
        var output = output.replace(commentSripper, '');
        var StrippingTag = new RegExp('<(/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>', 'gi');
        output = output.replace(tagStripper, '');
        var badTags = ['style', 'script', 'applet', 'embed', 'noframes', 'noscript'];

        for (var i = 0; i < badTags.length; i++) {
            tagStripper = new RegExp('<' + badTags[i] + '.*?' + badTags[i] + '(.*?)>', 'gi');
            output = output.replace(tagStripper, '');
        }
        var badAttributes = ['style', 'start'];
        for (var i = 0; i < badAttributes.length; i++) {
            var attributeStripper = new RegExp(' ' + badAttributes[i] + '="(.*?)"', 'gi');
            output = output.replace(attributeStripper, '');
        }
        $(id).summernote("code", output);
    }
</script>
