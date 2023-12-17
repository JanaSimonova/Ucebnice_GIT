
import text from './text.js';

// CUSTOM CLASS EXTENSION FOR SHOWDOWN

var customClassExt = {
    type: 'output',
    filter: function (text) {
        return text
            // Add class for list (ol, ul)
            .replace(/<p>\[\.([a-z0-9A-Z\s]+)\]<\/p>[\n]?<(.+)>/g, `<$2 class="$1">`)

            // Add class for other blocks
            .replace(/<(.+)>\[\.([a-z0-9A-Z\s]+)\]/g, `<$1 class="$2">`)

            // Prevent class name with 2 dashes being replace by `<em>` tag
            .replace(/class="(.+)"/g, function (str) {
                if (str.indexOf("<em>") !== -1) {
                    return str.replace(/<[/]?em>/g, '_');
                }
                return str;
            });
    }
};


// ROZŠÍŘENÍ DO CONVERTORU showdown

var converter = new showdown.Converter(
    {
        strikethrough: true,
        tables: true,
        tasklists: true,
        ghCodeBlocks: true,
        emoji: true,
        customizedHeaderId: true,
        noHeaderId: true,
    }
);
converter.addExtension(customClassExt);

var html = converter.makeHtml(text);


// Přidá do určitého (main) elementu v HTML
let main = document.getElementById('learn-text')
main.innerHTML += html;

// Přidá na konec HTML
// document.body.innerHTML += html;