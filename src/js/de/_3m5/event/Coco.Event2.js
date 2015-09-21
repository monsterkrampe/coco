/**
 * Class: Coco.Event
 *
 * Description:
 * This class is the base class for all Coco.Events.
 *
 * @author: andreas.wiedenfeld@3m5.de on 21.09.2015.
 */
var Coco;
(function (Coco) {
    var Event = (function () {
        function Event(type, $data) {
            this.$name = 'Coco.Event';
            this._type = type;
            this._data = $data;
        }
        Object.defineProperty(Event.prototype, "type", {
            /**
             * Function: get type
             *
             * Descriptions:
             * returns the type of this event
             *
             * @return {String}
             */
            get: function () {
                return this._type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event.prototype, "data", {
            /**
             * Function: get data
             *
             * Description:
             * returns the data object of this event
             *
             * @return {Object}
             */
            get: function () {
                return this._data;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "INITIALIZED", {
            //available types are:
            /**
             * Event: INITIALIZED
             * Called in <Coco> when Coco is initialized.
             */
            get: function () {
                return 'coco:initialized';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "ADD", {
            /**
             * Event: ADD
             * Called in <Coco.Collection> when a new <Coco.Model> has been added.
             */
            get: function () {
                return 'coco:add';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "AUTHORIZATION_FAILED", {
            /**
             * Event: AUTHORIZATION_FAILED
             * Called in <Coco.BaseRestService> if http status 401 was received
             */
            get: function () {
                return 'coco:authorization_failed';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "CHANGE", {
            /**
             * Event: CHANGE
             * Called in <Coco.Model> if the attributes changed.
             */
            get: function () {
                return 'coco:change';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "CHANGE_KEY", {
            /**
             * Event: CHANGE_KEY
             * Called in <Coco.Model> if a specified attribute changed. (Built like CHANGE_KEY + 'key').
             */
            get: function () {
                return 'coco:change:';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "DESTROY", {
            /**
             * Event: DESTROY
             * Called in <Coco.Model>, <Coco.Collection> and <Coco.View> before instance gets destroyed.
             */
            get: function () {
                return 'coco:destroy';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "INTERNAL_SERVER_ERROR", {
            /**
             * Event: INTERNAL_SERVER_ERROR
             * Called in <Coco.BaseRestService> if http status 500 was received
             */
            get: function () {
                return 'coco:internal_server_error';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "INVALID", {
            /**
             * Event: INVALID
             * Called in <Coco.Model> if the validation of the model failed.
             */
            get: function () {
                return 'coco:invalid';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "REMOVE", {
            /**
             * Event: REMOVE
             * Called in <Coco.Collection> if a <Coco.Model> instance has been removed from the collection.
             */
            get: function () {
                return 'coco:remove';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "RENDER", {
            /**
             * Event: RENDER
             * Called in <Coco.View> when the DOM has been refreshed.
             */
            get: function () {
                return 'coco:render';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "RESET", {
            /**
             * Event: RESET
             * Called in <Coco.Collection> when the collection has been reset.
             */
            get: function () {
                return 'coco:reset';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "REST_SERVER_ERROR", {
            /**
             * Event: REST_SERVER_ERROR
             * Called in <Coco.Collection> when the collection has been reset.
             */
            get: function () {
                return 'coco:rest-server-error';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "SORTED", {
            /**
             * Event: SORTED
             * Called in <Coco.Collection> when the collection has been sorted.
             */
            get: function () {
                return 'coco:sorted';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event, "VALID", {
            /**
             * Event: VALID
             * Called in <Coco.Model> when the validation of the model passed.
             */
            get: function () {
                return 'coco:valid';
            },
            enumerable: true,
            configurable: true
        });
        return Event;
    })();
    Coco.Event = Event;
})(Coco || (Coco = {}));