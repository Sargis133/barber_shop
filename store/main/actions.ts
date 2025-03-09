export default {
    A_CHANGE_LAYOUT_STATE(context, payload: boolean) {
        context.commit("M_CHANGE_LAYOUT_STATE", payload)
    }
}