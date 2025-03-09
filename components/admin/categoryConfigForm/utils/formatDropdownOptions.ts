import type {I_CategoryDropdownOptions} from "~/components/admin/categoryConfigForm/models/interfaces";
import type {I_ApiTypeData} from "~/models/db/interfaces";

export const formatDropdownOptions = (data: I_ApiTypeData[]): I_CategoryDropdownOptions[] => {
    return data.map(item => {
        return {
            name: item.name,
            value: item.id
        }
    })
}