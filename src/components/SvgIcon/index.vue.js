import { defineComponent, computed } from 'vue';
export default defineComponent({
    props: {
        iconClass: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        return {
            iconName: computed(() => `#icon-${props.iconClass}`),
            svgClass: computed(() => {
                if (props.className) {
                    return `svg-icon ${props.className}`;
                }
                return 'svg-icon';
            }),
        };
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ((__VLS_ctx.svgClass)) }, "aria-hidden": ("true"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.use)({ "xlink:href": ((__VLS_ctx.iconName)), fill: ((__VLS_ctx.color)), });
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
//# sourceMappingURL=index.vue.js.map