import { HttpStatus } from '../utils';
import { ApiError, type ErrorDetailsDescriptor } from './apiError';

export class ForbiddenError extends ApiError {
    _statusCode = HttpStatus.FORBIDDEN;
    _message: string;
    _details = null;

    constructor(message: string) {
        super(message);
        this._message = message;

        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }

    get statusCode(): number {
        return this._statusCode;
    }

    get message(): string {
        return this._message;
    }

    get details(): ErrorDetailsDescriptor {
        return this._details;
    }
}
