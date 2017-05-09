// @flow

module.exports.Utils = {

    styleToCss(style:Object): string {
        let cssStr = "";

        if(style) {
            

            if(style.color) {
                cssStr += `color:${style.color};`;
            }

            if(style['background-color']) {
                cssStr += `background-color:${style['background-color']};`;
            }

            if(style.bold) {
                cssStr += 'font-weight:bold;';
            }

            if(style.italic) {
                cssStr += 'font-style:italic;';
            }

            if(style.size) {
                cssStr += `font-size:${this.sizeToPx(style.size)}px;`;
            }

        }

        return cssStr;
    },
    
    sizeToPx(size: string) : number {
        switch(size) {
            case 'small':
                return 11;
            case 'medium':
                return 13;
            case 'large':
                return 17;
            default:
                return 13;
        }
    }

}