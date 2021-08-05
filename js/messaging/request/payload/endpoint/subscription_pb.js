// source: messaging/request/payload/endpoint/subscription.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.agrirouter.request.payload.endpoint.Subscription', null, global);
goog.exportSymbol('proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agrirouter.request.payload.endpoint.Subscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agrirouter.request.payload.endpoint.Subscription.repeatedFields_, null);
};
goog.inherits(proto.agrirouter.request.payload.endpoint.Subscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agrirouter.request.payload.endpoint.Subscription.displayName = 'proto.agrirouter.request.payload.endpoint.Subscription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.repeatedFields_, null);
};
goog.inherits(proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.displayName = 'proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agrirouter.request.payload.endpoint.Subscription.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agrirouter.request.payload.endpoint.Subscription.prototype.toObject = function(opt_includeInstance) {
  return proto.agrirouter.request.payload.endpoint.Subscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agrirouter.request.payload.endpoint.Subscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agrirouter.request.payload.endpoint.Subscription.toObject = function(includeInstance, msg) {
  var f, obj = {
    technicalMessageTypesList: jspb.Message.toObjectList(msg.getTechnicalMessageTypesList(),
    proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agrirouter.request.payload.endpoint.Subscription}
 */
proto.agrirouter.request.payload.endpoint.Subscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agrirouter.request.payload.endpoint.Subscription;
  return proto.agrirouter.request.payload.endpoint.Subscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agrirouter.request.payload.endpoint.Subscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agrirouter.request.payload.endpoint.Subscription}
 */
proto.agrirouter.request.payload.endpoint.Subscription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem;
      reader.readMessage(value,proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.deserializeBinaryFromReader);
      msg.addTechnicalMessageTypes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agrirouter.request.payload.endpoint.Subscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agrirouter.request.payload.endpoint.Subscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agrirouter.request.payload.endpoint.Subscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agrirouter.request.payload.endpoint.Subscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTechnicalMessageTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.prototype.toObject = function(opt_includeInstance) {
  return proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    technicalMessageType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ddisList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    position: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem}
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem;
  return proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem}
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTechnicalMessageType(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDdis(values[i]);
      }
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTechnicalMessageType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDdisList();
  if (f.length > 0) {
    writer.writePackedUint32(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string technical_message_type = 1;
 * @return {string}
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.prototype.getTechnicalMessageType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} returns this
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.prototype.setTechnicalMessageType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated uint32 ddis = 2;
 * @return {!Array<number>}
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.prototype.getDdisList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} returns this
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.prototype.setDdisList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} returns this
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.prototype.addDdis = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} returns this
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.prototype.clearDdisList = function() {
  return this.setDdisList([]);
};


/**
 * optional bool position = 3;
 * @return {boolean}
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.prototype.getPosition = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} returns this
 */
proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.prototype.setPosition = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated MessageTypeSubscriptionItem technical_message_types = 1;
 * @return {!Array<!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem>}
 */
proto.agrirouter.request.payload.endpoint.Subscription.prototype.getTechnicalMessageTypesList = function() {
  return /** @type{!Array<!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem, 1));
};


/**
 * @param {!Array<!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem>} value
 * @return {!proto.agrirouter.request.payload.endpoint.Subscription} returns this
*/
proto.agrirouter.request.payload.endpoint.Subscription.prototype.setTechnicalMessageTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem}
 */
proto.agrirouter.request.payload.endpoint.Subscription.prototype.addTechnicalMessageTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agrirouter.request.payload.endpoint.Subscription} returns this
 */
proto.agrirouter.request.payload.endpoint.Subscription.prototype.clearTechnicalMessageTypesList = function() {
  return this.setTechnicalMessageTypesList([]);
};


goog.object.extend(exports, proto.agrirouter.request.payload.endpoint);
