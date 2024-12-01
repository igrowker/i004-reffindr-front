import { TenantRoles } from "@/constants/tenant-constants";
import { create } from "zustand";


interface State {
    tenantRole: TenantRoles;
    toggleTenantRole: () => void;
}

export const useTenantStore = create<State>((set, get) => ({
    tenantRole: TenantRoles.incomming,
    toggleTenantRole: () => {
        const actualRole = get().tenantRole == TenantRoles.incomming ? TenantRoles.outgoing : TenantRoles.incomming
        set({tenantRole: actualRole })
    }

}))
