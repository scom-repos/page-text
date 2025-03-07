import {Styles} from '@ijstech/components';
import { IFontSettings } from './global/index';

const Theme = Styles.Theme.ThemeVars;

export const containerStyles = Styles.style({
    $nest: {
        'i-panel.container': {
            width: Theme.layout.container.width,
            maxWidth: Theme.layout.container.maxWidth,
            overflow: Theme.layout.container.overflow,
            textAlign: (Theme.layout.container.textAlign as any),
            margin: '0 auto'
        }
    }
});

export const getMarkdownStyles = (config: IFontSettings) => {
    const cssRules = {
        'h1': {},
        'h2': {},
        'h3': {},
        'h4': {},
        'h5': {},
        'h6': {},
        'p': {},
        'a': {
            color: 'unset'
        },
        '.toastui-editor-contents': {}
    };

    const {
        color,
        fontSize,
        textAlign,
        backgroundColor,
        padding,
        margin,
        width,
        maxWidth,
    } = config;

    if (textAlign) {
        cssRules['.toastui-editor-contents']['textAlign'] = textAlign;
    }

    if (maxWidth) {
        cssRules['.toastui-editor-contents']['maxWidth'] = maxWidth;
    }

    if (width) {
        cssRules['.toastui-editor-contents']['width'] = width;
    }

    if (backgroundColor) {
        cssRules['.toastui-editor-contents']['backgroundColor'] = backgroundColor;
    }

    if (fontSize) {
        setValue(cssRules, 'fontSize', fontSize);
    }

    if (color) {
        cssRules['.toastui-editor-contents']['color'] = color;
    }

    if (padding?.top) {
        cssRules['.toastui-editor-contents']['paddingTop'] = padding.top;
    }
    if (padding?.bottom) {
        cssRules['.toastui-editor-contents']['paddingBottom'] = padding.bottom;
    }
    if (padding?.left) {
        cssRules['.toastui-editor-contents']['paddingLeft'] = padding.left;
    }
    if (padding?.right) {
        cssRules['.toastui-editor-contents']['paddingRight'] = padding.right;
    }

    if (margin?.top) {
        setValue(cssRules, 'marginTop', margin.top);
    }
    if (margin?.bottom) {
        setValue(cssRules, 'marginBottom', margin.bottom);
    }
    if (margin?.left) {
        setValue(cssRules, 'marginLeft', margin.left);
    }
    if (margin?.right) {
        setValue(cssRules, 'marginRight', margin.right);
    }

    const customStyle = Styles.style({
        $nest: cssRules
    });

    return customStyle;
}

function setValue(cssRules: any, key: string, value: string) {
    cssRules['h1'][key] = value;
    cssRules['h2'][key] = value;
    cssRules['h3'][key] = value;
    cssRules['h4'][key] = value;
    cssRules['h5'][key] = value;
    cssRules['h6'][key] = value;
    cssRules['p'][key] = value;
}