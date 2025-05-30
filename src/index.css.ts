import {Styles} from '@ijstech/components';
import { IFontSettings } from './interface';

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
        '.toastui-editor-contents': {
            $nest: {
                'h1': {
                    lineHeight: 'initial'
                },
                'h2': {
                    lineHeight: 'initial'
                },
                'h3': {
                    lineHeight: 'initial'
                },
                'h4': {
                    lineHeight: 'initial'
                },
                'h5': {
                    lineHeight: 'initial'
                },
                'h6': {
                    lineHeight: 'initial'
                },
                'p': {
                    lineHeight: 'initial'
                },
                'a': {
                    color: 'unset',
                    lineHeight: 'initial'
                },
                "ul": {},
                'hr': {
                    "margin": "16px auto"
                }
            }
        }
    };

    const {
        font,
        textAlign,
        background,
        padding,
        margin,
        width,
        maxWidth,
        borderWidth,
        borderColor,
        borderHeight,
        borderMargin,
        lineHeight
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

    if (background?.color) {
        cssRules['.toastui-editor-contents']['backgroundColor'] = background.color;
    }

    if (font?.size) {
        setValue(cssRules, 'fontSize', font.size);
    }

    if (font?.color) {
        cssRules['.toastui-editor-contents']['color'] = font?.color;
    }

    if (font?.transform) {
        setValue(cssRules, 'textTransform', font.transform);
    }

    if (lineHeight !== undefined) {
        setValue(cssRules, 'lineHeight', lineHeight);
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

    if (borderColor) {
       cssRules['.toastui-editor-contents']['$nest']['hr']['backgroundColor'] = borderColor;
       cssRules['.toastui-editor-contents']['$nest']['hr']['borderColor'] = 'transparent';
    }
    if (borderWidth !== undefined) {
       cssRules['.toastui-editor-contents']['$nest']['hr']['width'] = getValue(borderWidth);
    }
    if (borderHeight !== undefined) {
       cssRules['.toastui-editor-contents']['$nest']['hr']['height'] = getValue(borderHeight);
    }
    if (borderMargin?.top) {
       cssRules['.toastui-editor-contents']['$nest']['hr']['marginTop'] = getValue(borderMargin.top);
    }
    if (borderMargin?.bottom) {
       cssRules['.toastui-editor-contents']['$nest']['hr']['marginBottom'] = getValue(borderMargin.bottom);
    }
    if (borderMargin?.left) {
       cssRules['.toastui-editor-contents']['$nest']['hr']['marginLeft'] = getValue(borderMargin.left);
    }
    if (borderMargin?.right) {
       cssRules['.toastui-editor-contents']['$nest']['hr']['marginRight'] = getValue(borderMargin.right);
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
    cssRules['.toastui-editor-contents']['$nest']['h1'][key] = value;
    cssRules['.toastui-editor-contents']['$nest']['h2'][key] = value;
    cssRules['.toastui-editor-contents']['$nest']['h3'][key] = value;
    cssRules['.toastui-editor-contents']['$nest']['h4'][key] = value;
    cssRules['.toastui-editor-contents']['$nest']['h5'][key] = value;
    cssRules['.toastui-editor-contents']['$nest']['h6'][key] = value;
    cssRules['.toastui-editor-contents']['$nest']['p'][key] = value;
    cssRules['.toastui-editor-contents']['$nest']['ul'][key] = value;
}

export const customListStyles = Styles.style({
    $nest: {
        '.toastui-editor-contents ul, .toastui-editor-contents menu, .toastui-editor-contents ol, .toastui-editor-contents dir': {
            marginTop: "0px",
            paddingLeft: "0px"
        },
        '.toastui-editor-contents ul > li::before': {
            display: 'none'
        },
        '.toastui-editor-contents a': {
            textDecoration: 'none'
        },
        '.toastui-editor-contents a:hover': {
            color: Theme.colors.primary.main
        }
    }
});

export const customEditorStyle = Styles.style({
    $nest: {
        '.toastui-editor-contents': {
            cursor: 'text'
        }
    }
});