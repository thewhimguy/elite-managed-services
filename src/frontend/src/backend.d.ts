import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    id: bigint;
    name: string;
    email: string;
    serviceInterest: ServiceInterest;
    message: string;
    phone: string;
}
export interface UserProfile {
    name: string;
}
export enum ServiceInterest {
    sezServices = "sezServices",
    gstRelated = "gstRelated",
    dgft = "dgft",
    stpi = "stpi",
    hundredPercentEOU = "hundredPercentEOU",
    incomeTaxReturn = "incomeTaxReturn",
    labourLawCompliances = "labourLawCompliances",
    general = "general",
    payrollServices = "payrollServices"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteEnquiry(id: bigint): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    listEnquiries(): Promise<Array<Enquiry>>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitEnquiry(name: string, email: string, phone: string, message: string, serviceInterest: ServiceInterest): Promise<void>;
}
