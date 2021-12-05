

export const hostURL = 'https://wakaplug-service.herokuapp.com/api/v1';
export const API_KEY = 'WakaPlugKey';
export const AuthEndPoint = {
    login : {
        url : `${hostURL}/signIn`,
        method : `POST`
    },
    register : {
        url : `${hostURL}/signUp`,
        method : `POST`
    },
    verifyCode : {
        url : `${hostURL}/verifyCode`,
        method : `POST`
    },
    sendVerification : {
        url : `${hostURL}/sendVerification`,
        method : `POST`
    },
    sendResetPassword : {
        url : `${hostURL}/sendResetPasswordCodeLink`,
        method : `POST`
    },
    resetPassword : {
        url : `${hostURL}/resetPassword`,
        method : `POST`
    },
    resetPasswordUsingLink : {
        url : `${hostURL}/resetPasswordUsingLink`,
        method : `POST`
    },
    changePassword : {
        url : `${hostURL}/changePassword`,
        method : `POST`
    },
}