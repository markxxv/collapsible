"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Collapsible=function(){function n(e,t){_classCallCheck(this,n),this.container=this.queryContainer(e),this.threshold=t,this.items=this.container.querySelectorAll("li"),this.itemsDimensions=this.getItemsDimensions()}return _createClass(n,[{key:"queryContainer",value:function(e){var t=document.querySelector(e);if(!t)throw new Error('Collapsible: No element find using "'+e+'" selector');return t}},{key:"getItemsDimensions",value:function(){for(var e=[],t=0;t<this.items.length;t++){var n=this.items[t].getBoundingClientRect().width;e.push(n)}return e}},{key:"getAmountOfItemsToCollapse",value:function(){for(var e={amount:0,width:0},t=document.body.offsetWidth,n=0;n<this.items.length;n++){var i=this.itemsDimensions[n];if(e.width+=i,t-e.width<this.threshold)break;e.amount++}return this.items.length-e.amount}},{key:"collapse",value:function(){var e=this.container.querySelector(".collapsible-menu"),t=e.querySelector(".collapsible-dropdown").querySelectorAll("li"),n=this.getAmountOfItemsToCollapse();e.classList.remove("hide"),0===n&&e.classList.add("hide");for(var i=0;i<this.items.length;i++){var s=this.items[i],a=t[i];s.classList.remove("hide"),a.classList.add("hide")}for(var l=0;l<n;l++){var r=t.length-l-1,o=this.items[r],c=t[r];o.classList.add("hide"),c.classList.remove("hide")}}},{key:"inject",value:function(){var e=document.createElement("li");e.classList.add("collapsible-menu");var t=document.createElement("ul");t.classList.add("dropdown-menu","collapsible-dropdown-list");var n=document.createElement("span");n.classList.add("fas","fa-bars");var i=document.createElement("div");i.classList.add("dropdown","collapsible-dropdown");var s=document.createElement("button");s.classList.add("btn","dropdown-toggle","collapsible-toggle"),s.addEventListener("click",function(e){e.preventDefault(),i.classList.toggle("open")});var a=!0,l=!1,r=void 0;try{for(var o,c=this.items[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var d=o.value.cloneNode(!0);d.classList.add("hide"),t.append(d)}}catch(e){l=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(l)throw r}}s.append(n),i.append(s),i.append(t),e.append(i),this.container.append(e)}},{key:"render",value:function(){this.inject(),this.collapse(),new ResizeSensor(this.container.parentElement,this.collapse.bind(this))}}]),n}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxhcHNpYmxlLmpzIl0sIm5hbWVzIjpbIkNvbGxhcHNpYmxlIiwic2VsZWN0b3IiLCJ0aHJlc2hvbGQiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiY29udGFpbmVyIiwicXVlcnlDb250YWluZXIiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpdGVtc0RpbWVuc2lvbnMiLCJnZXRJdGVtc0RpbWVuc2lvbnMiLCJkb2N1bWVudCIsIkVycm9yIiwiaSIsImxlbmd0aCIsIndpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGltZW5zaW9ucyIsInB1c2giLCJpdGVtIiwiYW1vdW50IiwiaXRlbVdpZHRoIiwicmVuZGVyYWJsZSIsInBhZ2VXaWR0aCIsInF1ZXJ5U2VsZWN0b3IiLCJkcm9wZG93bkl0ZW1zIiwibWVudSIsImFtb3VudE9mSXRlbXNUb0NvbGxhcHNlIiwiZ2V0QW1vdW50T2ZJdGVtc1RvQ29sbGFwc2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjbG9uZSIsImluZGV4IiwiYWRkIiwiZHJvcGRvd25MaXN0IiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJkcm9wZG93biIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlIiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiIsIl9kaWRJdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJ1bmRlZmluZWQiLCJfc3RlcCIsInZhbHVlIiwiZXJyIiwiX2l0ZXJhdG9yIiwicmV0dXJuIiwiYXBwZW5kIiwiaW5qZWN0IiwiUmVzaXplU2Vuc29yIiwicGFyZW50RWxlbWVudCIsImNvbGxhcHNlIiwiYmluZCJdLCJtYXBwaW5ncyI6InVaQU1NQSx1QkFDRixTQUFBQSxFQUFZQyxFQUFVQyxHQUFXQyxnQkFBQUMsS0FBQUosR0FQckNJLEtBQUFDLFVBQUFELEtBQUFFLGVBQUFMLEdBU1FHLEtBQUtGLFVBQVlBLEVBRWpCRSxLQUFLRyxNQUFRSCxLQUFLQyxVQUFVRyxpQkFBaUIsTUFDN0NKLEtBQUtLLGdCQUFrQkwsS0FBS00saUZBRGZULEdBQ2IsSUFBS1EsRUFBTEUsU0FBNEJELGNBQUFBLEdBR2hDLElBQUFMLEVBV1EsTUFBTSxJQUFJTyxNQUFNLHVDQUF5Q1gsRUFBVyxjQUd4RSxPQUFPSSwrQ0FKUCxJQUZBLElBQU1BLEVBQVlNLEdBRWJOLEVBQUwsRUFBZ0JRLEVBQUFULEtBQUFHLE1BQUFPLE9BQUFELElBQUEsQ0FDWixJQUNIRSxFQURtQlgsS0FBQUcsTUFBQU0sR0FDbkJHLHdCQUFBRCxNQUVERSxFQUFBQyxLQUFBSCxHQWlCQSxPQUFPRSx1REFGTixJQUpHLElBQU1FLEVBQWFaLENBQUxhLE9BQWQsRUFBQUwsTUFBQSxHQUNNQSxFQUFhQyxTQUFBQSxLQUFBQSxZQUd0QkgsRUFBQSxFQUFBQSxFQUFBVCxLQUFBRyxNQUFBTyxPQUFBRCxJQUFBLENBZ0JHLElBQU1RLEVBQVlqQixLQUFLSyxnQkFBZ0JJLEdBWC9DLEdBSElTLEVBQUFQLE9BQUFNLEVBR0pFLEVBQUFELEVBQUFQLE1BQUFYLEtBQUFGLFVBZVksTUFFSm9CLEVBQVdGLFNBR2YsT0FBT2hCLEtBQUtHLE1BQU1PLE9BQVNRLEVBQVdGLDBDQWJ0QyxJQUFNRSxFQUFVbEIsS0FBR0MsVUFBQW1CLGNBQUEscUJBQWtCQyxFQUFsQkMsRUFBQUYsY0FBQSx5QkFBb0JoQixpQkFBQSxNQUF2Q21CLEVBQUF2QixLQUFBd0IsNkJBR0FGLEVBQUtHLFVBQVlDLE9BQUcsUUFFaEIsSUFBQVIsR0FFQUksRUFBS0gsVUFBWUQsSUFBQUEsUUFNckIsSUFBTyxJQUFBVCxFQUFLTixFQUFNTyxFQUFBQSxLQUFTUSxNQUFBQSxPQUFXRixJQUF0QyxDQUNILElBQUFELEVBQUFmLEtBQUFHLE1BQUFNLEdBa0Jha0IsRUFBUU4sRUFBY1osR0FFNUJNLEVBQUtVLFVBQVVDLE9BbEJaLFFBQ0RKLEVBQU9HLFVBQUt4QixJQUFVbUIsUUFHNUIsSUFBTUcsSUFBQUEsRUFBQUEsRUFBQUEsRUFBQUEsRUFBK0JDLElBQUFBLENBbUJqQyxJQUFNSSxFQUFRUCxFQUFjWCxPQUFTRCxFQUFJLEVBaEJ4Q2dCLEVBQVVDLEtBQU92QixNQUF0QnlCLEdBa0JVRCxFQUFRTixFQUFjTyxHQWYxQmIsRUFBQ1UsVUFBY0ksSUFBQSxRQUdyQkYsRUFBQUYsVUFBQUMsT0FBQSwwQ0FTQSxJQUFLSixFQUFMZixTQUFvQmdCLGNBQUFBLE1BQ2hCRCxFQUFNTSxVQUFRUCxJQUFBQSxvQkFFZCxJQUFNTSxFQUFRTixTQUFjTyxjQUE1QixNQWlCSkUsRUFBYUwsVUFBVUksSUFBSSxnQkFBaUIsNkJBRTVDLElBQU1FLEVBQU94QixTQUFTeUIsY0FBYyxRQWhCaENMLEVBQUFBLFVBQU1GLElBQVVDLE1BQU8sV0FFOUIsSUFBQU8sRUFBQTFCLFNBQUF5QixjQUFBLE9BRURDLEVBQUFSLFVBQUFJLElBQUEsV0FBQSx3QkFrQkksSUFBTUssRUFBUzNCLFNBQVN5QixjQUFjLFVBQ3RDRSxFQUFPVCxVQUFVSSxJQUFJLE1BQU8sa0JBQW1CLHNCQUcvQ0ssRUFBT0MsaUJBQWlCLFFBQVMsU0FBQ0MsR0FDOUJBLEVBQUdDLGlCQUNISixFQUFTUixVQW5CUmEsT0FBQSxVQUFBLElBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxPQUFBQyxFQUFBLElBS0xaLElBQUFBLElBQUFBLEVBQUFBLEVBQWFMLEtBQWJ0QixNQUFBMkIsT0FBQUEsY0FBQUEsR0FBQUEsRUFBQUEsRUFBQUEsUUFBQUEsTUFBQUEsR0FBQUEsRUFBMkIsQ0FBQSxJQUVkdkIsRUFGY29DLEVBQUFDLE1BRUxaLFdBQWMsR0FHOUJDLEVBQVFSLFVBQUdsQixJQUFTeUIsUUFDMUJDLEVBQW1CSixPQUFJRixJQVhsQixNQUFBa0IsR0FBQUwsR0FBQSxFQUFBQyxFQUFBSSxFQUFBLFFBQUEsSUFBQU4sR0FBQSxNQUFBTyxFQUFBQyxRQUFBRCxFQUFBQyxTQUFBLFFBQUEsR0FBQVAsRUFBQSxNQUFBQyxHQThCTFAsRUFBT2MsT0FBT2pCLEdBYmRHLEVBQU9DLE9BQUFBLEdBQ0hDLEVBQUdDLE9BQUFBLEdBRFBmLEVBS0EwQixPQUFBZixHQWFBakMsS0FBS0MsVUFBVStDLE9BQU8xQixvQ0FYbEJ0QixLQUFBaUQsU0FFQXRCLEtBQUFBLFdBRUgsSUFBQXVCLGFBQUFsRCxLQUFBQyxVQUFBa0QsY0FBQW5ELEtBQUFvRCxTQUFBQyxLQUFBckQiLCJmaWxlIjoiY29sbGFwc2libGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbGxhcHNlIG5hdmJhciBpdGVtcyBkeW5hbWljYWxseSwgd2hlbiB0aGVyZSBpc24ndCBlbm91Z2ggc3BhY2Ugb24gdGhlIHNjcmVlbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgVGhlIHNlbGVjdG9yIGZvciB0aGUgaXRlbXMnIGNvbnRhaW5lclxuICogQHBhcmFtIHtOdW1iZXJ9IHRocmVzaG9sZCBUaGUgbWluaW11bSBhdmFpbGFibGUgc3BhY2UgaW4gdGhlIGNvbnRhaW5lclxuICovXG5jbGFzcyBDb2xsYXBzaWJsZSB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHRocmVzaG9sZCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMucXVlcnlDb250YWluZXIoc2VsZWN0b3IpO1xuICAgICAgICB0aGlzLnRocmVzaG9sZCA9IHRocmVzaG9sZDtcblxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICAgICAgdGhpcy5pdGVtc0RpbWVuc2lvbnMgPSB0aGlzLmdldEl0ZW1zRGltZW5zaW9ucygpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHaXZlbiB0aGUgc2VsZWN0b3IsIHF1ZXJ5IHRoZSBpdGVtcycgY29udGFpbmVyLlxuICAgICAqIElmIGl0IGlzIHVucmVhY2hhYmxlLCBhbiBleGNlcHRpb24gaXMgdGhyb3dlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAgICAgKiBAcmV0dXJucyB7Kn0gVGhlIGl0ZW1zJyBjb250YWluZXIgZWxlbWVudFxuICAgICAqL1xuICAgIHF1ZXJ5Q29udGFpbmVyKHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIFxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb2xsYXBzaWJsZTogTm8gZWxlbWVudCBmaW5kIHVzaW5nIFwiJyArIHNlbGVjdG9yICsgJ1wiIHNlbGVjdG9yJyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgaW5pdGlhbCBkaW1lbnNpb25zIGZvciBlYWNoIGl0ZW0sIGluIG9yZGVyIHRvIGFwcHJveGltYXRlXG4gICAgICogdGhlIHNwYWNlIG5lY2Vzc2FyeSB0byByZW5kZXIgdGhlbSBhbGwuXG4gICAgICovXG4gICAgZ2V0SXRlbXNEaW1lbnNpb25zKCkge1xuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gW107XG4gICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSAgPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIFxuICAgICAgICAgICAgZGltZW5zaW9ucy5wdXNoKHdpZHRoKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gZGltZW5zaW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGF2YWlsYWJsZSBzcGFjZSBiYXNlZCBvbiB0aGUgcGFnZSB3aWR0aCwgYW5kIHJldHVyblxuICAgICAqIHRoZSBhbW91bnQgb2YgaXRlbXMgd2UgbXVzdCBjb2xsYXBzZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBBbW91bnQgb2YgaXRlbXMgdG8gY29sbGFwc2VcbiAgICAgKi9cbiAgICBnZXRBbW91bnRPZkl0ZW1zVG9Db2xsYXBzZSgpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyYWJsZSA9IHsgYW1vdW50OiAwLCB3aWR0aDogMCB9O1xuICAgICAgICBjb25zdCBwYWdlV2lkdGggPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbVdpZHRoID0gdGhpcy5pdGVtc0RpbWVuc2lvbnNbaV07XG4gICAgICAgICAgICByZW5kZXJhYmxlLndpZHRoICs9IGl0ZW1XaWR0aDtcblxuICAgICAgICAgICAgaWYgKChwYWdlV2lkdGggLSByZW5kZXJhYmxlLndpZHRoKSA8IHRoaXMudGhyZXNob2xkKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICByZW5kZXJhYmxlLmFtb3VudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoIC0gcmVuZGVyYWJsZS5hbW91bnQ7XG4gICAgfVxuXG4gICAgY29sbGFwc2UoKSB7XG4gICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29sbGFwc2libGUtbWVudScpO1xuICAgICAgICBjb25zdCBkcm9wZG93biA9IG1lbnUucXVlcnlTZWxlY3RvcignLmNvbGxhcHNpYmxlLWRyb3Bkb3duJyk7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duSXRlbXMgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgICAgICBjb25zdCBhbW91bnRPZkl0ZW1zVG9Db2xsYXBzZSA9IHRoaXMuZ2V0QW1vdW50T2ZJdGVtc1RvQ29sbGFwc2UoKTtcblxuICAgICAgICAvLyBEZWZhdWx0IGNhc2Ugb24gbGFyZ2Ugc2NyZWVucyBhbmQgd2hlbiB0aGVyZSBpcyBlbm91Z2ggc3BhY2VcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoYW1vdW50T2ZJdGVtc1RvQ29sbGFwc2UgPT09IDApIHtcbiAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsZWFyIHRoZSBzdGF0ZSBmb3IgZWFjaCBpdGVtOiBib3RoIGluIHRoZSBvcmlnaW5hbCBsaXN0IGFuZCBpbiB0aGUgY29sbGFwc2VkIG9uZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0ICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBkcm9wZG93bkl0ZW1zW2ldO1xuXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGNsb25lLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50T2ZJdGVtc1RvQ29sbGFwc2U7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBkcm9wZG93bkl0ZW1zLmxlbmd0aCAtIGkgLSAxO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBkcm9wZG93bkl0ZW1zW2luZGV4XTtcblxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgdGhlIGNvbGxhcHNlZCBtZW51IHdoaWNoIHdpbGwgY29udGFpbiB0aGUgZXhjZWVkaW5nIGl0ZW1zLlxuICAgICAqIFRoZSBkZWZhdWx0IGNvbnRlbnQgaXMgbWVhbnQgdG8gYWN0IGxpa2UgYSBwbGFjZWhvbGRlci5cbiAgICAgKiBZb3Ugc2hvdWxkIGN1c3RvbWl6ZSB0aGlzIG1ldGhvZCBiYXNlZCBvbiB5b3VyIG5lZWRzLlxuICAgICAqL1xuICAgIGluamVjdCgpIHtcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2libGUtbWVudScpO1xuXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGRyb3Bkb3duTGlzdC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1tZW51JywgJ2NvbGxhcHNpYmxlLWRyb3Bkb3duLWxpc3QnKTtcblxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1iYXJzJyk7XG5cbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nLCAnY29sbGFwc2libGUtZHJvcGRvd24nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2Ryb3Bkb3duLXRvZ2dsZScsICdjb2xsYXBzaWJsZS10b2dnbGUnKTtcblxuICAgICAgICAvLyBBdHRhY2ggZXZlbnQgdG8gdG9nZ2xlIGRyb3Bkb3duIG1lbnUsIHdpdGhvdXQgdXNpbmcgZGVmYXVsdCBCb290c3RyYXAgalF1ZXJ5LWJhc2VkIHNjcmlwdFxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvcHkgaXRlbXMgZnJvbSB0aGUgb3JpZ2luYWwgbmF2YmFyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBkcm9wZG93bkxpc3QuYXBwZW5kKGNsb25lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5hcHBlbmQoaWNvbik7XG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZChidXR0b24pO1xuICAgICAgICBkcm9wZG93bi5hcHBlbmQoZHJvcGRvd25MaXN0KTtcblxuICAgICAgICBtZW51LmFwcGVuZChkcm9wZG93bik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChtZW51KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoZSByZXNpemUgc2Vuc29yIGFuZCBhc3NpZ24gaXQgdGhlIHJpZ2h0IGNhbGxiYWNrLFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIGNvZGUgdG8gY29sbGFwc2UgZXhjZWVkaW5nIGl0ZW1zIHdoZW4gbmVjZXNzYXJ5LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5pbmplY3QoKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuXG4gICAgICAgIG5ldyBSZXNpemVTZW5zb3IodGhpcy5jb250YWluZXIucGFyZW50RWxlbWVudCwgdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG4iXX0=