export const errorMessages = {
    SERVER_ERROR: {
        status: 500,
        message: "Something went wrong, please try again later",
        success: false
    },
    AUTH_ERROR: {
        status: 401,
        message: "Unauthorized",
        success: false
    },
    USER_EXISTS: {
        status: 409,
        message: "User already exists",
        success: false
    },
    BAD_REQUEST: {
        status: 400,
        message: "Bad request",
        success: false
    },
    INVALID_DOMAIN: {
        status: 400,
        message: "Invalid domain",
        success: false
    },
    DOMAIN_NOT_FOUND: {
        status: 404,
        message: "Domain not found",
        success: false
    },
    DOMAIN_ALREADY_EXISTS: {
        status: 409,
        message: "Domain already exists",
        success: false
    },
    CHAT_NOT_FOUND: {
        status: 404,
        message: "Chat not found",
        success: false
    },
    CUSTOMER_ALREADY_EXISTS: {
        status: 409,
        message: "Customer already exists",
        success: false
    },
    CHATBOT_NOT_FOUND: {
        status: 404,
        message: "Chatbot not found",
        success: false
    },
    DOMAIN_LIMIT_REACHED: {
        status: 400,
        message: "Domain limit reached! please pick a plan to continue.",
        success: false
    }
}