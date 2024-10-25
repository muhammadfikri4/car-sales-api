export const MESSAGES = {
  CREATED: {
    USER: {
      ACCOUNT: "User created successfully",
      INITIAL: "Initial user created successfully",
    },
    ROLE: "Role created successfully",
    DEPARTMENT: "Department created successfully",
    BUDGET: "Budget created successfully",
    TRANSACTION: "Transaction created successfully",
  },
  ERROR: {
    NOT_FOUND: {
      USER: {
        ACCOUNT: "User not found",
        FCM: "FCM Token not found",
        FCM_USER: "FCM User not found",
      },
      ANGKATAN: {
        ID: "Angkatan ID not found",
        NAME: "Angkatan not found",
      },
      ROLE: "Role not found",
      DEPARTMENT: "Department not found",
      ROUTE: "Route not found, check again your endpoint",
    },
    ALREADY: {
      GLOBAL: {
        EMAIL: "Email is already exist",
        NIDN: "NIDN is already exist",
        NIM: "NIM is already exist",
      },
      USER: "User already exist",
      ROLE: "Role is already exist",
      DEPARTMENT: "Department is already exist",
      BUDGET_PENDING:
        "You have a budget that is still pending, please complete it first.",
      BUDGET: "You have submitted a budget for this year.",
    },
    INVALID: {
      GLOBAL: {
        EMAIL: "Email is invalid",
      },
      USER: {
        PASSWORD: "Password is wrong",
        PASSWORD_LENGTH: "Password must be at least 8 characters",
      },
      ID: "ID is invalid",
      ROLE_ADMIN: "Admin can't register in this app",
      TOKEN: "Token is invalid",
      INITIAL: "Initial can only be run 1 time",
      CODE: "Code is invalid",
      REQUEST_BUDGET: "Only role managers can submit budgets",
      FAILED_REQUEST: "Failed to create budget",
      IMAGE_SIZE: "Image size must be less than 5mb",
      TYPE_FILE: "File type must be png, jpg or jpeg",
    },
    UNAUTHORIZED: {
      AUTH: "If you are not logged in, please log in first",
      FORBIDDEN: "You are not Authorized",
      EXPIRED: "Token Expired, please log in again",
      RECOGNIZED: "Token not recognized",
      ADMIN: "Admin can't access this app",
    },
    REQUIRED: {
      EMAIL: "Email is required",
      PASSWORD: "Password is required",
      NAME: "Name is required",
      MERK: "Merk is required",
      CAR_CODE: "Car Code is required",
      COLOR: "Color is required",
      YEAR: "Year is required",
      PRICE: "Price is required",
      CAR_NAME: "Car Name is required",
      DESCRIPTION: "Description is required",
      FAKTUR_NUMBER: "Faktur Number is required",
      BUYER_NAME: "Buyer Name is required",
      BUYER_ADDRESS: "Buyer Address is required",
      BUYER_CODE: "Buyer Code is required",
      BUYER_JOB: "Buyer Job is required",
      BUYER_PHONE_NUMBER: "Buyer Phone Number is required",
      STRING: "Field must be a string",
    },
    FORBIDDEN: {
      ROLE: "Role can't be access this feature",
    },
    RELATION: {
      ANGKATAN: "Angkatan cannot be deleted because it has a relationship",
    },
    SERVER_ERROR: {
      INTERNAL_SERVER_ERROR: "Internal server error",
    },
  },
  SUCCESS: {
    USER: {
      GET: "Success to get user",
      UPDATE: "Success to update user",
      DELETE: "Success to delete user",
      LOGIN: "Success to login",
      LOGOUT: "Success to logout",
      PASSWORD: "Success to change password",
    },
    PROFILE: {
      GET: "Success to get profile",
    },
    DEPARTMENT: {
      GET: "Success to get department",
      CREATE: "Success to create department",
      UPDATE: "Success to update department",
      DELETE: "Success to delete department",
    },
    AUTH: {
      SIGN_IN: "Success to sign in",
    },
    TRANSACTION: {
      GET: "Success to get transaction",
    }
  },
};
