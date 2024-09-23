export interface AppStore {
    sidebar: {
        opened: boolean;
        withoutAnimation: boolean;
        hide: boolean;
    };
    device: Device;
    size: Size;
    lang: Lang;
}

export type Size = 'default' | 'small' | 'large';
export type Device = 'mobile' | 'desktop';
export type Lang = 'zh-cn' | 'en';
