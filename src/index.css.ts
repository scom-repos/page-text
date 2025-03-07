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
        '.toastui-editor-contents': {},
        'hr': {}
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
        borderColor,
        borderWidth,
        textTransform,
        borderHeight,
        borderMargin
    } = config;

    if (textAlign) {
        cssRules['.toastui-editor-contents']['textAlign'] = textAlign;
    }

    if (maxWidth) {
        cssRules['.toastui-editor-contents']['maxWidth'] = getValue(maxWidth);
    }

    if (width) {
        cssRules['.toastui-editor-contents']['width'] = getValue(width);
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
        cssRules['.toastui-editor-contents']['paddingTop'] = getValue(padding.top);
    }
    if (padding?.bottom) {
        cssRules['.toastui-editor-contents']['paddingBottom'] = getValue(padding.bottom);
    }
    if (padding?.left) {
        cssRules['.toastui-editor-contents']['paddingLeft'] = getValue(padding.left);
    }
    if (padding?.right) {
        cssRules['.toastui-editor-contents']['paddingRight'] = getValue(padding.right);
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

    if (textTransform) {
        setValue(cssRules, 'textTransform', textTransform);
    }

    if (borderColor) {
        cssRules['hr']['backgroundColor'] = borderColor;
        cssRules['hr']['borderColor'] = 'transparent';
    }
    if (borderWidth !== undefined) {
        cssRules['hr']['width'] = getValue(borderWidth);
    }
    if (borderHeight !== undefined) {
        cssRules['hr']['height'] = getValue(borderHeight);
    }
    if (borderMargin?.top) {
        cssRules['hr']['marginTop'] = getValue(borderMargin.top);
    }
    if (borderMargin?.bottom) {
        cssRules['hr']['marginBottom'] = getValue(borderMargin.bottom);
    }
    if (borderMargin?.left) {
        cssRules['hr']['marginLeft'] = getValue(borderMargin.left);
    }
    if (borderMargin?.right) {
        cssRules['hr']['marginRight'] = getValue(borderMargin.right);
    }

    const customStyle = Styles.style({
        $nest: cssRules
    });

    return customStyle;
}

function getValue(value: string | number) {
   return  typeof value === 'number' ? `${value}px` : value
}

function setValue(cssRules: any, key: string, value: string|number) {
    value = getValue(value);
    cssRules['h1'][key] = value;
    cssRules['h2'][key] = value;
    cssRules['h3'][key] = value;
    cssRules['h4'][key] = value;
    cssRules['h5'][key] = value;
    cssRules['h6'][key] = value;
    cssRules['p'][key] = value;
}