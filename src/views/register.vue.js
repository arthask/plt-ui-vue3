/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { ElMessageBox } from 'element-plus';
import { getCodeImg, register } from '@/api/login';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const registerForm = ref({
    username: '',
    password: '',
    confirmPassword: '',
    code: '',
    uuid: '',
});
const equalToPassword = (rule, value, callback) => {
    if (registerForm.value.password !== value) {
        callback(new Error('两次输入的密码不一致'));
    }
    else {
        callback();
    }
};
const registerRules = {
    username: [
        { required: true, trigger: 'blur', message: '请输入您的账号' },
        { min: 2, max: 20, message: '用户账号长度必须介于 2 和 20 之间', trigger: 'blur' },
    ],
    password: [
        { required: true, trigger: 'blur', message: '请输入您的密码' },
        { min: 5, max: 20, message: '用户密码长度必须介于 5 和 20 之间', trigger: 'blur' },
    ],
    confirmPassword: [
        { required: true, trigger: 'blur', message: '请再次输入您的密码' },
        { required: true, validator: equalToPassword, trigger: 'blur' },
    ],
    code: [{ required: true, trigger: 'change', message: '请输入验证码' }],
};
const codeUrl = ref('');
const loading = ref(false);
const captchaEnabled = ref(true);
const registerRef = ref();
function handleRegister() {
    registerRef.value?.validate(valid => {
        if (valid) {
            loading.value = true;
            register(registerForm.value)
                .then(res => {
                const username = registerForm.value.username;
                ElMessageBox.alert("<font color='red'>恭喜你，您的账号 " + username + ' 注册成功！</font>', '系统提示', {
                    dangerouslyUseHTMLString: true,
                    type: 'success',
                })
                    .then(() => {
                    router.push('/login');
                })
                    .catch((e) => {
                    loading.value = true;
                    console.log(e);
                });
            })
                .catch(() => {
                loading.value = false;
                if (captchaEnabled.value) {
                    getCode();
                }
            });
        }
    });
}
function getCode() {
    getCodeImg().then((res) => {
        captchaEnabled.value = res.captchaEnabled === undefined ? true : res.captchaEnabled;
        if (captchaEnabled.value) {
            codeUrl.value = 'data:image/gif;base64,' + res.img;
            registerForm.value.uuid = res.uuid;
        }
    });
}
getCode();
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("register") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElForm;
    /** @type { [typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ref: ("registerRef"), model: ((__VLS_ctx.registerForm)), rules: ((__VLS_ctx.registerRules)), ...{ class: ("register-form") }, }));
    const __VLS_2 = __VLS_1({ ref: ("registerRef"), model: ((__VLS_ctx.registerForm)), rules: ((__VLS_ctx.registerRules)), ...{ class: ("register-form") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore navigation for `const registerRef = ref()`
    __VLS_ctx.registerRef;
    var __VLS_6 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("title") }, });
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ prop: ("username"), }));
    const __VLS_9 = __VLS_8({ prop: ("username"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ modelValue: ((__VLS_ctx.registerForm.username)), type: ("text"), size: ("large"), autoComplete: ("off"), placeholder: ("账号"), }));
    const __VLS_15 = __VLS_14({ modelValue: ((__VLS_ctx.registerForm.username)), type: ("text"), size: ("large"), autoComplete: ("off"), placeholder: ("账号"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { prefix: __VLS_thisSlot } = __VLS_nonNullable(__VLS_18.slots);
        const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.svgIcon, ] } */
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ iconClass: ("user"), ...{ class: ("el-input__icon input-icon") }, }));
        const __VLS_21 = __VLS_20({ iconClass: ("user"), ...{ class: ("el-input__icon input-icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    }
    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15);
    __VLS_nonNullable(__VLS_12.slots).default;
    const __VLS_12 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ prop: ("password"), }));
    const __VLS_27 = __VLS_26({ prop: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ 'onKeyup': {} }, modelValue: ((__VLS_ctx.registerForm.password)), type: ("password"), size: ("large"), autoComplete: ("off"), placeholder: ("密码"), }));
    const __VLS_33 = __VLS_32({ ...{ 'onKeyup': {} }, modelValue: ((__VLS_ctx.registerForm.password)), type: ("password"), size: ("large"), autoComplete: ("off"), placeholder: ("密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    let __VLS_37;
    const __VLS_38 = {
        onKeyup: (__VLS_ctx.handleRegister)
    };
    let __VLS_34;
    let __VLS_35;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { prefix: __VLS_thisSlot } = __VLS_nonNullable(__VLS_36.slots);
        const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.svgIcon, ] } */
        // @ts-ignore
        const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ iconClass: ("password"), ...{ class: ("el-input__icon input-icon") }, }));
        const __VLS_41 = __VLS_40({ iconClass: ("password"), ...{ class: ("el-input__icon input-icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    }
    const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
    __VLS_nonNullable(__VLS_30.slots).default;
    const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
    const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ prop: ("confirmPassword"), }));
    const __VLS_47 = __VLS_46({ prop: ("confirmPassword"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{ 'onKeyup': {} }, modelValue: ((__VLS_ctx.registerForm.confirmPassword)), type: ("password"), size: ("large"), autoComplete: ("off"), placeholder: ("确认密码"), }));
    const __VLS_53 = __VLS_52({ ...{ 'onKeyup': {} }, modelValue: ((__VLS_ctx.registerForm.confirmPassword)), type: ("password"), size: ("large"), autoComplete: ("off"), placeholder: ("确认密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    let __VLS_57;
    const __VLS_58 = {
        onKeyup: (__VLS_ctx.handleRegister)
    };
    let __VLS_54;
    let __VLS_55;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { prefix: __VLS_thisSlot } = __VLS_nonNullable(__VLS_56.slots);
        const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.svgIcon, ] } */
        // @ts-ignore
        const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ iconClass: ("password"), ...{ class: ("el-input__icon input-icon") }, }));
        const __VLS_61 = __VLS_60({ iconClass: ("password"), ...{ class: ("el-input__icon input-icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_60));
    }
    const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
    __VLS_nonNullable(__VLS_50.slots).default;
    const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
    if (__VLS_ctx.captchaEnabled) {
        const __VLS_65 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
        /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
        // @ts-ignore
        const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ prop: ("code"), }));
        const __VLS_67 = __VLS_66({ prop: ("code"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
        const __VLS_71 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
        /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */
        // @ts-ignore
        const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ ...{ 'onKeyup': {} }, size: ("large"), modelValue: ((__VLS_ctx.registerForm.code)), autoComplete: ("off"), placeholder: ("验证码"), ...{ style: ({}) }, }));
        const __VLS_73 = __VLS_72({ ...{ 'onKeyup': {} }, size: ("large"), modelValue: ((__VLS_ctx.registerForm.code)), autoComplete: ("off"), placeholder: ("验证码"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_72));
        let __VLS_77;
        const __VLS_78 = {
            onKeyup: (__VLS_ctx.handleRegister)
        };
        let __VLS_74;
        let __VLS_75;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { prefix: __VLS_thisSlot } = __VLS_nonNullable(__VLS_76.slots);
            const __VLS_79 = __VLS_resolvedLocalAndGlobalComponents.SvgIcon;
            /** @type { [typeof __VLS_components.SvgIcon, typeof __VLS_components.svgIcon, ] } */
            // @ts-ignore
            const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ iconClass: ("validCode"), ...{ class: ("el-input__icon input-icon") }, }));
            const __VLS_81 = __VLS_80({ iconClass: ("validCode"), ...{ class: ("el-input__icon input-icon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_80));
        }
        const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("register-code") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (__VLS_ctx.getCode) }, src: ((__VLS_ctx.codeUrl)), ...{ class: ("register-code-img") }, });
        __VLS_nonNullable(__VLS_70.slots).default;
        const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
    }
    const __VLS_85 = __VLS_resolvedLocalAndGlobalComponents.ElFormItem;
    /** @type { [typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ] } */
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{ style: ({}) }, }));
    const __VLS_87 = __VLS_86({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    const __VLS_91 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */
    // @ts-ignore
    const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.loading)), size: ("large"), type: ("primary"), ...{ style: ({}) }, }));
    const __VLS_93 = __VLS_92({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.loading)), size: ("large"), type: ("primary"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_92));
    let __VLS_97;
    const __VLS_98 = {
        onClick: (__VLS_ctx.handleRegister)
    };
    let __VLS_94;
    let __VLS_95;
    if (!__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_nonNullable(__VLS_96.slots).default;
    const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    const __VLS_99 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({ ...{ class: ("link-type") }, to: (('/login')), }));
    const __VLS_101 = __VLS_100({ ...{ class: ("link-type") }, to: (('/login')), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
    __VLS_nonNullable(__VLS_104.slots).default;
    const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_99, __VLS_101);
    __VLS_nonNullable(__VLS_90.slots).default;
    const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("el-register-footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_styleScopedClasses['register'];
    __VLS_styleScopedClasses['register-form'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['el-input__icon'];
    __VLS_styleScopedClasses['input-icon'];
    __VLS_styleScopedClasses['el-input__icon'];
    __VLS_styleScopedClasses['input-icon'];
    __VLS_styleScopedClasses['el-input__icon'];
    __VLS_styleScopedClasses['input-icon'];
    __VLS_styleScopedClasses['el-input__icon'];
    __VLS_styleScopedClasses['input-icon'];
    __VLS_styleScopedClasses['register-code'];
    __VLS_styleScopedClasses['register-code-img'];
    __VLS_styleScopedClasses['link-type'];
    __VLS_styleScopedClasses['el-register-footer'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "registerRef": __VLS_6,
    };
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            registerForm: registerForm,
            registerRules: registerRules,
            codeUrl: codeUrl,
            loading: loading,
            captchaEnabled: captchaEnabled,
            registerRef: registerRef,
            handleRegister: handleRegister,
            getCode: getCode,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=register.vue.js.map