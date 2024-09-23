/**
 * @description 格式化日期的格式
 */
export enum DateTimeFormat {
    YEAR = 'YYYY',
    MONTH = 'YYYY-MM',
    DATE = 'YYYY-MM-DD',
    DATETIME = 'YYYY-MM-DD HH:mm:ss',
}
/**
 * @description 列表的列
 */
export interface TableColumn {
    prop: string;
    label: string;
    width?: string;
    template?: TableColumnTemplate | string;
}

export type TableColumnTemplate = 'date' | 'progress';

/**
 * @description 表单类型
 */
export enum FormType {
    ADD = 'add',
    Edit = 'edit',
    VIEW = 'view',
}

/**
 * @description 下拉类型
 */
export interface OptionType {
    label: string;
    value: string | number;
}

/**
 * @description Search组件的配置项
 */
export interface SearchComponentConfig {
    label: string;
    prop: string;
    type: SearchComponentConfigType;
    placeholder?: string;
    option?: OptionType[];
    timeResult?: [string, string];
}
type SearchComponentConfigType = 'select' | 'input' | 'year' | 'monthrange' | 'daterange' | 'datetimerange';

/**
 * @description 文件上传列表类型
 */
export interface FileList {
    name: string;
    url: string;
}
