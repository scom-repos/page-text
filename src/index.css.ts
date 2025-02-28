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
        cssRules['h1']['fontSize'] = fontSize;
        cssRules['h2']['fontSize'] = fontSize;
        cssRules['h3']['fontSize'] = fontSize;
        cssRules['h4']['fontSize'] = fontSize;
        cssRules['h5']['fontSize'] = fontSize;
        cssRules['h6']['fontSize'] = fontSize;
        cssRules['p']['fontSize'] = fontSize;
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
        cssRules['.toastui-editor-contents']['marginTop'] = margin.top;
    }
    if (margin?.bottom) {
        cssRules['.toastui-editor-contents']['marginBottom'] = margin.bottom;
    }
    if (margin?.left) {
        cssRules['.toastui-editor-contents']['marginLeft'] = margin.left;
    }
    if (margin?.right) {
        cssRules['.toastui-editor-contents']['marginRight'] = margin.right;
    }

    const customStyle = Styles.style({
        $nest: cssRules
    });

    return customStyle;
}