export interface ProfileDTO {
    id: string
    name: string
    email: string
}

export interface ChangePasswordDTO {
    email: string
    newPassword: string
}