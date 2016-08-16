(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spPnpJs = (typeof window !== "undefined" ? window['$pnp'] : typeof global !== "undefined" ? global['$pnp'] : null);

var _spPnpJs2 = _interopRequireDefault(_spPnpJs);

var _moment = (typeof window !== "undefined" ? window['moment'] : typeof global !== "undefined" ? global['moment'] : null);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShowAnnouncements = function () {
    function ShowAnnouncements() {
        _classCallCheck(this, ShowAnnouncements);
    }

    _createClass(ShowAnnouncements, [{
        key: "deriveClass",


        /*
         * Derive the class to apply to the nnotification LI wrapper
         */
        value: function deriveClass(announcementLevel) {
            if (announcementLevel.indexOf("Low") > -1) {
                return "bannerAnnouncementLow";
            } else if (announcementLevel.indexOf("Medium") > -1) {
                return "bannerAnnouncementMedium";
            } else if (announcementLevel.indexOf("High") > -1) {
                return "bannerAnnouncementHigh";
            }
            return "";
        }

        /*
         * Derive the icon to display for the nnotification
         */

    }, {
        key: "deriveIcon",
        value: function deriveIcon(announcementLevel) {
            var iconName = "";
            if (announcementLevel.indexOf("Low") > -1) {
                iconName = "ms-Icon--star";
            } else if (announcementLevel.indexOf("Medium") > -1) {
                iconName = "ms-Icon--infoCircle";
            } else if (announcementLevel.indexOf("High") > -1) {
                iconName = "ms-Icon--alert";
            }
            return "<i class=\"ms-Icon " + iconName + "\" aria-hidden=\"true\"></i>";
        }

        /*
         * Helper to log informaiton to the console safely
         */

    }, {
        key: "logToConsole",
        value: function logToConsole(msg) {
            if (window.console) {
                try {
                    console.log(msg);
                } catch (e) {}
            }
        }

        /*
         * Get and display the current announcements.
         * Assumes that the 
         */

    }, {
        key: "getAndDisplay",
        value: function getAndDisplay(listDisplayName) {
            var _this = this;

            try {
                //Note - this is a fix for NZ timezone!!
                var currentDay = (0, _moment2.default)().subtract(18, "h"),
                    isodate = currentDay.toISOString();
                _spPnpJs2.default.sp.web.lists.getByTitle(listDisplayName).items.select(["Title", "AnnouncementLevel", "Body"]).filter("Expires ge datetime'" + isodate + "'").orderBy("AnnouncementLevel", true).get().then(function (data) {
                    if (data && data.length > 0) {
                        console.log(JSON.stringify(data));
                        var announcementsHtml = data.map(function (item) {
                            var className = _this.deriveClass(item.AnnouncementLevel),
                                icon = _this.deriveIcon(item.AnnouncementLevel);
                            return "<li class=\"" + className + "\">" + icon + "<div class=\"announcementBannerTitle\">" + item.Title + "</div><div class=\"announcementBannerBody\">" + item.Body + "</div></li>";
                        });
                        document.getElementById("customContent").innerHTML = "<ul>" + [].concat(_toConsumableArray(announcementsHtml)).join("") + "</ul>";
                    }
                }).catch(function (error) {
                    _this.logToConsole("1 - Error attempting to get list items from '" + listDisplayName + "': " + error.message);
                });
            } catch (e) {
                _spPnpJs2.default.sp.web.lists.getByTitle(listDisplayName).get().then(function (list) {
                    _this.logToConsole("2 - Error getting items from list '" + list.Title + "': " + e.message);
                }).catch(function (error) {
                    _this.logToConsole("3 - Could not find list named '" + listDisplayName + "': " + error.message);
                });
            }
        }
    }]);

    return ShowAnnouncements;
}();

exports.default = ShowAnnouncements;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
"use strict";

var _ShowAnnouncements = require("./ShowAnnouncements");

var _ShowAnnouncements2 = _interopRequireDefault(_ShowAnnouncements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    var announcements = new _ShowAnnouncements2.default();
    announcements.getAndDisplay("Announcements");
};

},{"./ShowAnnouncements":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcFxcc3JjXFxhcHBcXFNob3dBbm5vdW5jZW1lbnRzLmpzIiwic3JjXFxhcHBcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUIsaUI7Ozs7Ozs7OztBQUVqQjs7O29DQUdZLGlCLEVBQW1CO0FBQzNCLGdCQUFJLGtCQUFrQixPQUFsQixDQUEwQixLQUExQixJQUFtQyxDQUFDLENBQXhDLEVBQTJDO0FBQUUsdUJBQU8sdUJBQVA7QUFBaUMsYUFBOUUsTUFDSyxJQUFJLGtCQUFrQixPQUFsQixDQUEwQixRQUExQixJQUFzQyxDQUFDLENBQTNDLEVBQThDO0FBQUUsdUJBQU8sMEJBQVA7QUFBb0MsYUFBcEYsTUFDQSxJQUFJLGtCQUFrQixPQUFsQixDQUEwQixNQUExQixJQUFvQyxDQUFDLENBQXpDLEVBQTRDO0FBQUUsdUJBQU8sd0JBQVA7QUFBa0M7QUFDckYsbUJBQU8sRUFBUDtBQUNIOztBQUVEOzs7Ozs7bUNBR1csaUIsRUFBbUI7QUFDMUIsZ0JBQUksV0FBVyxFQUFmO0FBQ0EsZ0JBQUksa0JBQWtCLE9BQWxCLENBQTBCLEtBQTFCLElBQW1DLENBQUMsQ0FBeEMsRUFBMkM7QUFBRSwyQkFBVyxlQUFYO0FBQTZCLGFBQTFFLE1BQ0ssSUFBSSxrQkFBa0IsT0FBbEIsQ0FBMEIsUUFBMUIsSUFBc0MsQ0FBQyxDQUEzQyxFQUE4QztBQUFFLDJCQUFXLHFCQUFYO0FBQW1DLGFBQW5GLE1BQ0EsSUFBSSxrQkFBa0IsT0FBbEIsQ0FBMEIsTUFBMUIsSUFBb0MsQ0FBQyxDQUF6QyxFQUE0QztBQUFFLDJCQUFXLGdCQUFYO0FBQThCO0FBQ2pGLG1CQUFPLHdCQUF3QixRQUF4QixHQUFtQyw4QkFBMUM7QUFDSDs7QUFFRDs7Ozs7O3FDQUdhLEcsRUFBSztBQUNwQixnQkFBSSxPQUFPLE9BQVgsRUFBb0I7QUFDbkIsb0JBQUk7QUFBRSw0QkFBUSxHQUFSLENBQVksR0FBWjtBQUFtQixpQkFBekIsQ0FDQSxPQUFNLENBQU4sRUFBUyxDQUFHO0FBQ1o7QUFDRTs7QUFFRDs7Ozs7OztzQ0FJYyxlLEVBQWlCO0FBQUE7O0FBQzNCLGdCQUFJO0FBQ0E7QUFDQSxvQkFBTSxhQUFhLHdCQUFTLFFBQVQsQ0FBa0IsRUFBbEIsRUFBc0IsR0FBdEIsQ0FBbkI7QUFBQSxvQkFBK0MsVUFBVSxXQUFXLFdBQVgsRUFBekQ7QUFDQSxrQ0FBSyxFQUFMLENBQVEsR0FBUixDQUFZLEtBQVosQ0FBa0IsVUFBbEIsQ0FBNkIsZUFBN0IsRUFBOEMsS0FBOUMsQ0FBb0QsTUFBcEQsQ0FBMkQsQ0FBQyxPQUFELEVBQVMsbUJBQVQsRUFBNkIsTUFBN0IsQ0FBM0QsRUFBaUcsTUFBakcsQ0FBd0cseUJBQXlCLE9BQXpCLEdBQW1DLEdBQTNJLEVBQWdKLE9BQWhKLENBQXdKLG1CQUF4SixFQUE2SyxJQUE3SyxFQUFtTCxHQUFuTCxHQUNJLElBREosQ0FDUyxVQUFDLElBQUQsRUFBVTtBQUNYLHdCQUFJLFFBQVEsS0FBSyxNQUFMLEdBQWMsQ0FBMUIsRUFBNEI7QUFDeEIsZ0NBQVEsR0FBUixDQUFZLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBWjtBQUNBLDRCQUFJLG9CQUFvQixLQUFLLEdBQUwsQ0FBUyxVQUFDLElBQUQsRUFBVTtBQUN2QyxnQ0FBTSxZQUFZLE1BQUssV0FBTCxDQUFpQixLQUFLLGlCQUF0QixDQUFsQjtBQUFBLGdDQUNJLE9BQU8sTUFBSyxVQUFMLENBQWdCLEtBQUssaUJBQXJCLENBRFg7QUFFQSxvREFBcUIsU0FBckIsV0FBbUMsSUFBbkMsK0NBQStFLEtBQUssS0FBcEYsb0RBQXNJLEtBQUssSUFBM0k7QUFDSCx5QkFKdUIsQ0FBeEI7QUFLQSxpQ0FBUyxjQUFULENBQXdCLGVBQXhCLEVBQXlDLFNBQXpDLEdBQXFELFNBQVMsNkJBQUksaUJBQUosR0FBdUIsSUFBdkIsQ0FBNEIsRUFBNUIsQ0FBVCxHQUEyQyxPQUFoRztBQUNIO0FBQ0osaUJBWEwsRUFZSyxLQVpMLENBWVcsVUFBQyxLQUFELEVBQVc7QUFDZCwwQkFBSyxZQUFMLG1EQUFrRSxlQUFsRSxXQUF1RixNQUFNLE9BQTdGO0FBQ0gsaUJBZEw7QUFlSCxhQWxCRCxDQWtCRSxPQUFPLENBQVAsRUFBVTtBQUNSLGtDQUFLLEVBQUwsQ0FBUSxHQUFSLENBQVksS0FBWixDQUFrQixVQUFsQixDQUE2QixlQUE3QixFQUE4QyxHQUE5QyxHQUNLLElBREwsQ0FDVSxVQUFDLElBQUQsRUFBVTtBQUNaLDBCQUFLLFlBQUwseUNBQXdELEtBQUssS0FBN0QsV0FBd0UsRUFBRSxPQUExRTtBQUNILGlCQUhMLEVBSUssS0FKTCxDQUlXLFVBQUMsS0FBRCxFQUFXO0FBQ2QsMEJBQUssWUFBTCxxQ0FBb0QsZUFBcEQsV0FBeUUsTUFBTSxPQUEvRTtBQUNILGlCQU5MO0FBT0g7QUFDSjs7Ozs7O2tCQWpFZ0IsaUI7Ozs7Ozs7QUNIckI7Ozs7OztBQUVBLE9BQU8sTUFBUCxHQUFnQixZQUFNO0FBQ2xCLFFBQU0sZ0JBQWdCLGlDQUF0QjtBQUNBLGtCQUFjLGFBQWQsQ0FBNEIsZUFBNUI7QUFDSCxDQUhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAkcG5wIGZyb20gXCJzcC1wbnAtanNcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93QW5ub3VuY2VtZW50cyB7XHJcblxyXG4gICAgLypcclxuICAgICAqIERlcml2ZSB0aGUgY2xhc3MgdG8gYXBwbHkgdG8gdGhlIG5ub3RpZmljYXRpb24gTEkgd3JhcHBlclxyXG4gICAgICovXHJcbiAgICBkZXJpdmVDbGFzcyhhbm5vdW5jZW1lbnRMZXZlbCkge1xyXG4gICAgICAgIGlmIChhbm5vdW5jZW1lbnRMZXZlbC5pbmRleE9mKFwiTG93XCIpID4gLTEpIHsgcmV0dXJuIFwiYmFubmVyQW5ub3VuY2VtZW50TG93XCI7IH1cclxuICAgICAgICBlbHNlIGlmIChhbm5vdW5jZW1lbnRMZXZlbC5pbmRleE9mKFwiTWVkaXVtXCIpID4gLTEpIHsgcmV0dXJuIFwiYmFubmVyQW5ub3VuY2VtZW50TWVkaXVtXCI7IH1cclxuICAgICAgICBlbHNlIGlmIChhbm5vdW5jZW1lbnRMZXZlbC5pbmRleE9mKFwiSGlnaFwiKSA+IC0xKSB7IHJldHVybiBcImJhbm5lckFubm91bmNlbWVudEhpZ2hcIjsgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBEZXJpdmUgdGhlIGljb24gdG8gZGlzcGxheSBmb3IgdGhlIG5ub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgZGVyaXZlSWNvbihhbm5vdW5jZW1lbnRMZXZlbCkge1xyXG4gICAgICAgIGxldCBpY29uTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGFubm91bmNlbWVudExldmVsLmluZGV4T2YoXCJMb3dcIikgPiAtMSkgeyBpY29uTmFtZSA9IFwibXMtSWNvbi0tc3RhclwiOyB9XHJcbiAgICAgICAgZWxzZSBpZiAoYW5ub3VuY2VtZW50TGV2ZWwuaW5kZXhPZihcIk1lZGl1bVwiKSA+IC0xKSB7IGljb25OYW1lID0gXCJtcy1JY29uLS1pbmZvQ2lyY2xlXCI7IH1cclxuICAgICAgICBlbHNlIGlmIChhbm5vdW5jZW1lbnRMZXZlbC5pbmRleE9mKFwiSGlnaFwiKSA+IC0xKSB7IGljb25OYW1lID0gXCJtcy1JY29uLS1hbGVydFwiOyB9XHJcbiAgICAgICAgcmV0dXJuIFwiPGkgY2xhc3M9XFxcIm1zLUljb24gXCIgKyBpY29uTmFtZSArIFwiXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlwiO1xyXG4gICAgfVxyXG5cdFxyXG4gICAgLypcclxuICAgICAqIEhlbHBlciB0byBsb2cgaW5mb3JtYWl0b24gdG8gdGhlIGNvbnNvbGUgc2FmZWx5XHJcbiAgICAgKi9cclxuICAgIGxvZ1RvQ29uc29sZShtc2cpIHtcclxuXHRcdGlmICh3aW5kb3cuY29uc29sZSkge1xyXG5cdFx0XHR0cnkgeyBjb25zb2xlLmxvZyhtc2cpOyB9XHJcblx0XHRcdGNhdGNoKGUpIHsgfVxyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBHZXQgYW5kIGRpc3BsYXkgdGhlIGN1cnJlbnQgYW5ub3VuY2VtZW50cy5cclxuICAgICAqIEFzc3VtZXMgdGhhdCB0aGUgXHJcbiAgICAgKi9cclxuICAgIGdldEFuZERpc3BsYXkobGlzdERpc3BsYXlOYW1lKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy9Ob3RlIC0gdGhpcyBpcyBhIGZpeCBmb3IgTlogdGltZXpvbmUhIVxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF5ID0gbW9tZW50KCkuc3VidHJhY3QoMTgsIFwiaFwiKSwgaXNvZGF0ZSA9IGN1cnJlbnREYXkudG9JU09TdHJpbmcoKTtcclxuICAgICAgICAgICAgJHBucC5zcC53ZWIubGlzdHMuZ2V0QnlUaXRsZShsaXN0RGlzcGxheU5hbWUpLml0ZW1zLnNlbGVjdChbXCJUaXRsZVwiLFwiQW5ub3VuY2VtZW50TGV2ZWxcIixcIkJvZHlcIl0pLmZpbHRlcihcIkV4cGlyZXMgZ2UgZGF0ZXRpbWUnXCIgKyBpc29kYXRlICsgXCInXCIpLm9yZGVyQnkoXCJBbm5vdW5jZW1lbnRMZXZlbFwiLCB0cnVlKS5nZXQoKS5cclxuICAgICAgICAgICAgICAgIHRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbm5vdW5jZW1lbnRzSHRtbCA9IGRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRlcml2ZUNsYXNzKGl0ZW0uQW5ub3VuY2VtZW50TGV2ZWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPSB0aGlzLmRlcml2ZUljb24oaXRlbS5Bbm5vdW5jZW1lbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxsaSBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7aWNvbn08ZGl2IGNsYXNzPVwiYW5ub3VuY2VtZW50QmFubmVyVGl0bGVcIj4ke2l0ZW0uVGl0bGV9PC9kaXY+PGRpdiBjbGFzcz1cImFubm91bmNlbWVudEJhbm5lckJvZHlcIj4ke2l0ZW0uQm9keX08L2Rpdj48L2xpPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tQ29udGVudFwiKS5pbm5lckhUTUwgPSBcIjx1bD5cIiArIFsuLi5hbm5vdW5jZW1lbnRzSHRtbF0uam9pbihcIlwiKSArIFwiPC91bD5cIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ1RvQ29uc29sZShgMSAtIEVycm9yIGF0dGVtcHRpbmcgdG8gZ2V0IGxpc3QgaXRlbXMgZnJvbSAnJHtsaXN0RGlzcGxheU5hbWV9JzogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAkcG5wLnNwLndlYi5saXN0cy5nZXRCeVRpdGxlKGxpc3REaXNwbGF5TmFtZSkuZ2V0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKChsaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dUb0NvbnNvbGUoYDIgLSBFcnJvciBnZXR0aW5nIGl0ZW1zIGZyb20gbGlzdCAnJHtsaXN0LlRpdGxlfSc6ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ1RvQ29uc29sZShgMyAtIENvdWxkIG5vdCBmaW5kIGxpc3QgbmFtZWQgJyR7bGlzdERpc3BsYXlOYW1lfSc6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFNob3dBbm5vdW5jZW1lbnRzIGZyb20gXCIuL1Nob3dBbm5vdW5jZW1lbnRzXCJcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhbm5vdW5jZW1lbnRzID0gbmV3IFNob3dBbm5vdW5jZW1lbnRzKCk7XHJcbiAgICBhbm5vdW5jZW1lbnRzLmdldEFuZERpc3BsYXkoXCJBbm5vdW5jZW1lbnRzXCIpO1xyXG59O1xyXG4iXX0=
