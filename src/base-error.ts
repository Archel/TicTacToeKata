class BaseError {
    constructor() {
        Error.apply(this, arguments);
    }
}

export default BaseError;
