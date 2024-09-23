import { FormType } from '@/typings/common';
import { FormInstance } from 'element-plus';
import { Ref, ref, watchEffect } from 'vue';
/**
 * @description 弹窗开关
 */
export const useDialogSwitch = (
    oldForm?: Ref<any>,
    openCallback?: () => void,
    closeCallback?: () => void
) => {
    const type = ref<FormType>();
    const title = ref('新增');
    const visible = ref(false);

    watchEffect(() => {
        let name = '新增';
        switch (type.value) {
            case FormType.ADD:
                name = '新增';
                break;
            case FormType.Edit:
                name = '修改';
                break;
            case FormType.VIEW:
                name = '查看';
                break;
        }
        title.value = name;
    });

    const open = (newType: FormType = FormType.ADD, newForm?: any) => {
        // 打开弹窗的时候 是否改变type 去改变title
        if (newType) {
            type.value = newType;
        }
        // 编辑的时候传入数据回显
        if (oldForm && newForm) {
            oldForm.value = { ...newForm };
        }
        visible.value = true;
        openCallback && openCallback();
    };
    const close = () => {
        visible.value = false;
        closeCallback && closeCallback();
    };
    return {
        visible,
        type,
        title,
        open,
        close,
    };
};

/**
 * @description 表单的提交校验及重置
 */
export const useFormValidateAndReset = () => {
    /**
     * @description 提交表单验证
     * @param {(FormInstance | undefined)} formEl
     * @param {() => void} successCallback
     * @param {() => void} [failCallback]
     * @return {*}
     */
    const submitForm = async (
        formEl: FormInstance | undefined,
        successCallback: () => void,
        failCallback?: () => void
    ) => {
        if (!formEl) return;
        await formEl.validate((valid, fields) => {
            if (valid) {
                successCallback();
            } else {
                failCallback && failCallback();
            }
        });
    };

    /**
     * @description 重置表单
     * @param {(FormInstance | undefined)} formEl
     * @return {*}
     */
    const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        formEl.resetFields();
    };
    return {
        submitForm,
        resetForm,
    };
};
