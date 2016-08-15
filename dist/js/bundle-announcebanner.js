(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spPnpJs = (typeof window !== "undefined" ? window['$pnp'] : typeof global !== "undefined" ? global['$pnp'] : null);

var _spPnpJs2 = _interopRequireDefault(_spPnpJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShowAnnouncements = function () {
    function ShowAnnouncements() {
        _classCallCheck(this, ShowAnnouncements);
    }

    _createClass(ShowAnnouncements, [{
        key: "getAndDisplay",
        value: function getAndDisplay() {

            function deriveClass(announcementLevel) {
                if (announcementLevel.indexOf("Low") > -1) {
                    return "bannerAnnouncementLow";
                } else if (announcementLevel.indexOf("Medium") > -1) {
                    return "bannerAnnouncementMedium";
                } else if (announcementLevel.indexOf("High") > -1) {
                    return "bannerAnnouncementHigh";
                }
                return "";
            }
            function deriveIcon(announcementLevel) {
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

            //Get the data from the announcement list
            _spPnpJs2.default.sp.web.lists.getByTitle("Announcements").items.select(["Title", "AnnouncementLevel", "Body"]).orderBy("AnnouncementLevel", true).get().then(function (data) {
                if (data && data.length > 0) {
                    console.log(JSON.stringify(data));
                    var announcementsHtml = data.map(function (item) {
                        var icon = deriveIcon(item.AnnouncementLevel);
                        return "<li class=\"" + deriveClass(item.AnnouncementLevel) + "\">" + icon + "<div class=\"announcementBannerTitle\">" + item.Title + "</div><div class=\"announcementBannerBody\">" + item.Body + "</div></li>";
                    });
                    document.getElementById("customContent").innerHTML = "<ul>" + [].concat(_toConsumableArray(announcementsHtml)).join("") + "</ul>";
                }
            });
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

console.log("out");
window.onload = function () {
    console.log("in");
    var announcements = new _ShowAnnouncements2.default();
    announcements.getAndDisplay();
};

},{"./ShowAnnouncements":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcFxcc3JjXFxhcHBcXFNob3dBbm5vdW5jZW1lbnRzLmpzIiwic3JjXFxhcHBcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0lBRXFCLGlCO0FBQ2pCLGlDQUFjO0FBQUE7QUFFYjs7Ozt3Q0FFZTs7QUFFWixxQkFBUyxXQUFULENBQXFCLGlCQUFyQixFQUF3QztBQUNwQyxvQkFBSSxrQkFBa0IsT0FBbEIsQ0FBMEIsS0FBMUIsSUFBbUMsQ0FBQyxDQUF4QyxFQUEyQztBQUFFLDJCQUFPLHVCQUFQO0FBQWlDLGlCQUE5RSxNQUNLLElBQUksa0JBQWtCLE9BQWxCLENBQTBCLFFBQTFCLElBQXNDLENBQUMsQ0FBM0MsRUFBOEM7QUFBRSwyQkFBTywwQkFBUDtBQUFvQyxpQkFBcEYsTUFDQSxJQUFJLGtCQUFrQixPQUFsQixDQUEwQixNQUExQixJQUFvQyxDQUFDLENBQXpDLEVBQTRDO0FBQUUsMkJBQU8sd0JBQVA7QUFBa0M7QUFDckYsdUJBQU8sRUFBUDtBQUNIO0FBQ0QscUJBQVMsVUFBVCxDQUFvQixpQkFBcEIsRUFBdUM7QUFDbkMsb0JBQUksV0FBVyxFQUFmO0FBQ0Esb0JBQUksa0JBQWtCLE9BQWxCLENBQTBCLEtBQTFCLElBQW1DLENBQUMsQ0FBeEMsRUFBMkM7QUFBRSwrQkFBVyxlQUFYO0FBQTZCLGlCQUExRSxNQUNLLElBQUksa0JBQWtCLE9BQWxCLENBQTBCLFFBQTFCLElBQXNDLENBQUMsQ0FBM0MsRUFBOEM7QUFBRSwrQkFBVyxxQkFBWDtBQUFtQyxpQkFBbkYsTUFDQSxJQUFJLGtCQUFrQixPQUFsQixDQUEwQixNQUExQixJQUFvQyxDQUFDLENBQXpDLEVBQTRDO0FBQUUsK0JBQVcsZ0JBQVg7QUFBOEI7QUFDakYsdUJBQU8sd0JBQXdCLFFBQXhCLEdBQW1DLDhCQUExQztBQUNIOztBQUVEO0FBQ0EsOEJBQUssRUFBTCxDQUFRLEdBQVIsQ0FBWSxLQUFaLENBQWtCLFVBQWxCLENBQTZCLGVBQTdCLEVBQThDLEtBQTlDLENBQW9ELE1BQXBELENBQTJELENBQUMsT0FBRCxFQUFTLG1CQUFULEVBQTZCLE1BQTdCLENBQTNELEVBQWlHLE9BQWpHLENBQXlHLG1CQUF6RyxFQUE4SCxJQUE5SCxFQUFvSSxHQUFwSSxHQUEwSSxJQUExSSxDQUErSSxVQUFTLElBQVQsRUFBZTtBQUMxSixvQkFBSSxRQUFRLEtBQUssTUFBTCxHQUFjLENBQTFCLEVBQTRCO0FBQ3hCLDRCQUFRLEdBQVIsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQVo7QUFDQSx3QkFBSSxvQkFBb0IsS0FBSyxHQUFMLENBQVMsVUFBQyxJQUFELEVBQVU7QUFDdkMsNEJBQUksT0FBTyxXQUFXLEtBQUssaUJBQWhCLENBQVg7QUFDQSxnREFBcUIsWUFBWSxLQUFLLGlCQUFqQixDQUFyQixXQUE2RCxJQUE3RCwrQ0FBeUcsS0FBSyxLQUE5RyxvREFBZ0ssS0FBSyxJQUFySztBQUNILHFCQUh1QixDQUF4QjtBQUlBLDZCQUFTLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUMsU0FBekMsR0FBcUQsU0FBUyw2QkFBSSxpQkFBSixHQUF1QixJQUF2QixDQUE0QixFQUE1QixDQUFULEdBQTJDLE9BQWhHO0FBQ0g7QUFDSixhQVREO0FBV0g7Ozs7OztrQkFqQ2dCLGlCOzs7Ozs7O0FDRnJCOzs7Ozs7QUFFQSxRQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsT0FBTyxNQUFQLEdBQWdCLFlBQU07QUFDbEIsWUFBUSxHQUFSLENBQVksSUFBWjtBQUNBLFFBQU0sZ0JBQWdCLGlDQUF0QjtBQUNBLGtCQUFjLGFBQWQ7QUFDSCxDQUpEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAkcG5wIGZyb20gXCJzcC1wbnAtanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dBbm5vdW5jZW1lbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmREaXNwbGF5KCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBkZXJpdmVDbGFzcyhhbm5vdW5jZW1lbnRMZXZlbCkge1xyXG4gICAgICAgICAgICBpZiAoYW5ub3VuY2VtZW50TGV2ZWwuaW5kZXhPZihcIkxvd1wiKSA+IC0xKSB7IHJldHVybiBcImJhbm5lckFubm91bmNlbWVudExvd1wiOyB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFubm91bmNlbWVudExldmVsLmluZGV4T2YoXCJNZWRpdW1cIikgPiAtMSkgeyByZXR1cm4gXCJiYW5uZXJBbm5vdW5jZW1lbnRNZWRpdW1cIjsgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhbm5vdW5jZW1lbnRMZXZlbC5pbmRleE9mKFwiSGlnaFwiKSA+IC0xKSB7IHJldHVybiBcImJhbm5lckFubm91bmNlbWVudEhpZ2hcIjsgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGVyaXZlSWNvbihhbm5vdW5jZW1lbnRMZXZlbCkge1xyXG4gICAgICAgICAgICBsZXQgaWNvbk5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoYW5ub3VuY2VtZW50TGV2ZWwuaW5kZXhPZihcIkxvd1wiKSA+IC0xKSB7IGljb25OYW1lID0gXCJtcy1JY29uLS1zdGFyXCI7IH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYW5ub3VuY2VtZW50TGV2ZWwuaW5kZXhPZihcIk1lZGl1bVwiKSA+IC0xKSB7IGljb25OYW1lID0gXCJtcy1JY29uLS1pbmZvQ2lyY2xlXCI7IH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYW5ub3VuY2VtZW50TGV2ZWwuaW5kZXhPZihcIkhpZ2hcIikgPiAtMSkgeyBpY29uTmFtZSA9IFwibXMtSWNvbi0tYWxlcnRcIjsgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aSBjbGFzcz1cXFwibXMtSWNvbiBcIiArIGljb25OYW1lICsgXCJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0dldCB0aGUgZGF0YSBmcm9tIHRoZSBhbm5vdW5jZW1lbnQgbGlzdFxyXG4gICAgICAgICRwbnAuc3Aud2ViLmxpc3RzLmdldEJ5VGl0bGUoXCJBbm5vdW5jZW1lbnRzXCIpLml0ZW1zLnNlbGVjdChbXCJUaXRsZVwiLFwiQW5ub3VuY2VtZW50TGV2ZWxcIixcIkJvZHlcIl0pLm9yZGVyQnkoXCJBbm5vdW5jZW1lbnRMZXZlbFwiLCB0cnVlKS5nZXQoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGxldCBhbm5vdW5jZW1lbnRzSHRtbCA9IGRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGljb24gPSBkZXJpdmVJY29uKGl0ZW0uQW5ub3VuY2VtZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwiJHtkZXJpdmVDbGFzcyhpdGVtLkFubm91bmNlbWVudExldmVsKX1cIj4ke2ljb259PGRpdiBjbGFzcz1cImFubm91bmNlbWVudEJhbm5lclRpdGxlXCI+JHtpdGVtLlRpdGxlfTwvZGl2PjxkaXYgY2xhc3M9XCJhbm5vdW5jZW1lbnRCYW5uZXJCb2R5XCI+JHtpdGVtLkJvZHl9PC9kaXY+PC9saT5gXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tQ29udGVudFwiKS5pbm5lckhUTUwgPSBcIjx1bD5cIiArIFsuLi5hbm5vdW5jZW1lbnRzSHRtbF0uam9pbihcIlwiKSArIFwiPC91bD5cIjsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFNob3dBbm5vdW5jZW1lbnRzIGZyb20gXCIuL1Nob3dBbm5vdW5jZW1lbnRzXCJcclxuXHJcbmNvbnNvbGUubG9nKFwib3V0XCIpO1xyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpblwiKTtcclxuICAgIGNvbnN0IGFubm91bmNlbWVudHMgPSBuZXcgU2hvd0Fubm91bmNlbWVudHMoKTtcclxuICAgIGFubm91bmNlbWVudHMuZ2V0QW5kRGlzcGxheSgpO1xyXG59O1xyXG4iXX0=
