/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * OCSP responder status
 */
export enum OcspStatus {
    SUCCESS = 'SUCCESS',
    ERROR_CODE_OCSP_CONNECTION_ERROR = 'ERROR_CODE_OCSP_CONNECTION_ERROR',
    ERROR_CODE_OCSP_FAILED = 'ERROR_CODE_OCSP_FAILED',
    ERROR_CODE_OCSP_RESPONSE_INVALID = 'ERROR_CODE_OCSP_RESPONSE_INVALID',
    ERROR_CODE_OCSP_UNINITIALIZED = 'ERROR_CODE_OCSP_UNINITIALIZED',
    ERROR_CODE_OCSP_RESPONSE_UNVERIFIED = 'ERROR_CODE_OCSP_RESPONSE_UNVERIFIED',
    UNKNOWN = 'UNKNOWN',
}