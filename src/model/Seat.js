/**
 * API do Futebolcard
 * Futebolcard manipulation API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDoFutebolcard) {
      root.ApiDoFutebolcard = {};
    }
    root.ApiDoFutebolcard.Seat = factory(root.ApiDoFutebolcard.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Seat model module.
   * @module model/Seat
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Seat</code>.
   * @alias module:model/Seat
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Seat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Seat} obj Optional instance to populate.
   * @return {module:model/Seat} The populated <code>Seat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ticketId')) {
        obj['ticketId'] = ApiClient.convertToType(data['ticketId'], 'String');
      }
      if (data.hasOwnProperty('ticketStatus')) {
        obj['ticketStatus'] = ApiClient.convertToType(data['ticketStatus'], 'String');
      }
      if (data.hasOwnProperty('ownerId')) {
        obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
      }
      if (data.hasOwnProperty('seatNumber')) {
        obj['seatNumber'] = ApiClient.convertToType(data['seatNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ticketId
   */
  exports.prototype['ticketId'] = undefined;
  /**
   * @member {String} ticketStatus
   */
  exports.prototype['ticketStatus'] = undefined;
  /**
   * @member {String} ownerId
   */
  exports.prototype['ownerId'] = undefined;
  /**
   * @member {String} seatNumber
   */
  exports.prototype['seatNumber'] = undefined;



  return exports;
}));

