import { User } from "@prisma/client";
import { ProfileDTO } from "./profile-dto";

export const getProfileDTOMapper = (user: User):ProfileDTO => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
    };
}