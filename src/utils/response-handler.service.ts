import { Injectable, HttpException } from '@nestjs/common';
/**
 * Class representing the helper methods
 * @class HelperMethods
 * @description methods used everywhere in the codebase
 */
@Injectable()
export class ResponseService {
  /**
   * A method used to send server errors
   * @param {object} res - HTTP response object
   * @param {String} message - The error message you want to set.
   * @returns {object} res - The HTTP response object
   */
  async serverError(res, message) {
    return res.status(500).json({
      success: false,
      data: message || 'Internal server error',
    });
  }

  /**
   * A method used to send client-side errors
   * @param {object} res - HTTP response object
   * @param {String} message - The error message you want to set.
   * @param {number} status = Status code of the client error
   * @returns {object} res - The HTTP response object
   */
  async clientError(res, message, status = 400) {
    return res.status(status).json({
      success: false,
      data: message,
    });
  }

  /**
   * A method used to confirm that a request was successful
   * @param {object} res - HTTP response object
   * @param {object} payload - data we want to send to the front-end
   * @param {number} status = Status code of the successful request
   * @returns {object} res - HTTP response object
   */
  async requestSuccessful(res, payload, status = 200) {
    return res.status(status).json({ success: true, data: payload});
  }
}
