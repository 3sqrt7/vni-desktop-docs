const marked = require("marked");

export default function () {
    return {
        name: "md2vue",
        transform(src: String, id: String) {
            if (id.endsWith(".md")) {
                return {
                    code: `
                        import { h, defineComponent } from "vue";
                        const _sfc_md = defineComponent({
                            name: "Markdown",
                        });
                        const _sfc_render = () => {
                            return h("div", {
                                innerHTML: ${JSON.stringify(marked.parse(src))}, 
                            });
                        };
                        _sfc_md.render = _sfc_render;
                        export default _sfc_md;
                    `,
                    map: null
                };
            }
        }
    };
};