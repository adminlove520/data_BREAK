import { B as h, a as y } from "./index.580700ee.js"; /* empty css                        */
import { n as A, o as $, g as n, l as p } from "./element-plus.7c0d76a0.js";
import { d as E, l as _, m as o, W as s, U as t, S as r, u as l, a5 as d, P as m, k as b, ad as B } from "./vue.b4a71da1.js";
import "./vue-router.f4f73926.js";
import "./vue-i18n.c3212566.js";
const P = { class: "aLogo" },
    k = ["src"],
    K = ["href"],
    V = ["href"],
    R = { class: "commit-new-provider" },
    N = { href: "https://github.com/adminlove520/data_BREAK/issues", target: "_blank" },
    C = E({ __name: "AbilityProvidersView", setup(D) { let u = Array();
            Object.keys(h.abilityProviders).forEach(e => { let a = {...h.abilityProviders[e], apKey: e };
                u.push(a) }); let f = () => window.innerHeight; return (e, v) => { const a = A,
                    g = $; return b(), _(m, null, [o("h3", null, s(e.$t("abilityProviders")), 1), t(g, { height: l(f)() - 50, data: l(u), border: "", stripe: "" }, { default: r(() => [t(a, { prop: "logo", width: "150", label: e.$t("logo") }, { default: r(i => [o("div", P, [o("img", { src: i.row.logo }, null, 8, k)])]), _: 1 }, 8, ["label"]), t(a, { prop: "title", width: "120", label: e.$t("title") }, { default: r(i => [o("a", { href: i.row.site, target: "_blank" }, [t(l(n), null, { default: r(() => [t(l(p))]), _: 1 }), d(s(i.row.apKey ? e.$t(`BREAK.abilityProviders.${i.row.apKey}.title`) : ""), 1)], 8, K)]), _: 1 }, 8, ["label"]), t(a, { prop: "abilities", label: e.$t("supportAbilities") }, { default: r(i => [(b(!0), _(m, null, B(i.row.abilities, (w, c) => (b(), _("span", { class: "provider-abilities", key: c }, [o("a", { href: w.url, target: "_blank" }, [t(l(n), null, { default: r(() => [t(l(p))]), _: 1 }), d(s(e.$t(`BREAK.avoidances.${c}.title`)), 1)], 8, V)]))), 128))]), _: 1 }, 8, ["label"]), t(a, { prop: "description", label: e.$t("description") }, { default: r(i => [d(s(i.row.apKey ? e.$t(`BREAK.abilityProviders.${i.row.apKey}.description`) : ""), 1)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["height", "data"]), o("div", R, [d(s(e.$t("commitNewProvider")) + ": ", 1), o("a", N, [t(l(n), null, { default: r(() => [t(l(p))]), _: 1 }), d("https://github.com/adminlove520/data_BREAK/issues ")])])], 64) } } });
const W = y(C, [
    ["__scopeId", "data-v-b0b8d1f6"]
]);
export { W as default };