(()=>{"use strict";function e(e,t,n){const a=document.createElement("a");return a.textContent=e,a.href=t,n&&(a.target="_blank"),a}function t(e){return document.createTextNode(e)}function n(e,t){const n=document.createElement("li");return n.setAttribute("id",t),n.appendChild(e),n}function a(e,t,n){const a=document.createElement("div");a.classList.add("menu-item");const c=document.createElement("p");c.classList.add("text-clr-primary"),c.classList.add("fs-medium"),c.classList.add("fw-600"),c.textContent=e;const d=document.createElement("p");d.textContent=t;const i=document.createElement("p");return i.textContent=n,a.appendChild(c),a.appendChild(d),a.appendChild(i),a}function c(e){!function(){const e=Array.from(document.querySelectorAll("li"));for(let t=0;t<e.length;t++)if(e[t].classList.contains("active")){e[t].classList.remove("active");break}}(),e.classList.add("active")}function d(){document.querySelector("main").textContent=""}function i(){const e=document.querySelector("main"),t=document.createElement("div");t.classList.add("main-content-div"),t.classList.add("bgc-dark");const n=document.createElement("h2");n.textContent="Welcome to Superb Restuarant!",n.classList.add("text-center");const a=document.createElement("p");a.textContent="The Superb Restaurant is best restaurant in existence. When You try our meals, no other food will be ever needed again. Check out our Menu and order via phone number visible in Contact tab.",t.appendChild(n),t.appendChild(a),e.appendChild(t),c(document.querySelector("#home"))}(function(){const a=document.querySelector(".content"),c=document.createElement("div");c.classList.add("main");const d=document.createElement("main");c.appendChild(d),c.appendChild(function(){const n=document.createElement("footer");n.classList.add("bgc-dark"),n.classList.add("text-center");const a=document.createElement("p"),c=document.createElement("p");return a.appendChild(t("Page made by ")),a.appendChild(e("rafallyczek","https://github.com/rafallyczek",!0)),a.appendChild(t(" while working with ")),a.appendChild(e("The Odin Project","https://www.theodinproject.com/",!0)),c.appendChild(e("Photo","https://unsplash.com/photos/MQUqbmszGGM",!0)),c.appendChild(t(" by ")),c.appendChild(e("Ivan Torres","https://unsplash.com/@iavnt",!0)),c.appendChild(t(" at ")),c.appendChild(e("Unsplash","https://unsplash.com/",!0)),n.appendChild(c),n.appendChild(a),n}()),a.appendChild(function(){const e=document.createElement("header");e.classList.add("bgc-dark");const a=document.createElement("h1");a.classList.add("fs-large"),a.textContent="Superb Restaurant",e.appendChild(a);const c=document.createElement("ul");return c.classList.add("nav"),c.appendChild(n(t("Home"),"home")),c.appendChild(n(t("Menu"),"menu")),c.appendChild(n(t("Contact"),"contact")),e.appendChild(c),e}()),a.appendChild(c)})(),i();const o=document.querySelector("#home"),s=document.querySelector("#menu"),l=document.querySelector("#contact");o.addEventListener("click",(()=>{o.classList.contains("active")||(d(),i())})),s.addEventListener("click",(()=>{s.classList.contains("active")||(d(),function(){const e=document.querySelector("main"),t=document.createElement("div");t.classList.add("main-content-div"),t.classList.add("bgc-dark");const n=document.createElement("h2");n.textContent="Menu",n.classList.add("text-center"),t.appendChild(n),t.appendChild(a("French fries","Deep-fried potatoes with addition of salt or ketchup (client's choice).","Price: 5$")),t.appendChild(a("Garlic bread","Baguette topped with garlic and butter.","Price: 5$")),t.appendChild(a("Pizza Margherita","Pizza made with tomatoe sauce, mozarella cheese, basil and olive oil.","Price: 15$")),t.appendChild(a("Spaghetti Bolognese","Spaghetti pasta with Bolognese sauce.","Price: 15$")),t.appendChild(a("Pierogi","Dumplings filled with mix of mashed potatoes, fried onions and farmer cheese.","Price: 10$")),t.appendChild(a("Pancakes","Sweet and fluffy pancakes with fruits and whipped cream.","Price: 10$")),e.appendChild(t),c(document.querySelector("#menu"))}())})),l.addEventListener("click",(()=>{l.classList.contains("active")||(d(),function(){const e=document.querySelector("main"),t=document.createElement("div");t.classList.add("main-content-div"),t.classList.add("bgc-dark");const n=document.createElement("h2");n.textContent="Contact information",n.classList.add("text-center");const a=document.createElement("p");a.textContent="Phone number: 123-456-789";const d=document.createElement("p");d.textContent="Email: superb@restaurant.com";const i=document.createElement("p");i.textContent="Address: 123 Delicious St, Pizza Town",t.appendChild(n),t.appendChild(a),t.appendChild(d),t.appendChild(i),e.appendChild(t),c(document.querySelector("#contact"))}())}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQkQsRUFBZTFCLFlBQVl5QyxHQUMzQmYsRUFBZTFCLFlBQVkwQyxHQUMzQmhCLEVBQWUxQixZQUFZMkMsR0FFM0JsQixFQUFLekIsWUFBWTBCLEdBRWpCZixFQURnQnBCLFNBQVNnQyxjQUFjLFlBRTNDLENGRUlxQixHQUNGLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy91dGlsaXR5LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh5cGVybGluayh0ZXh0LCBocmVmLCB0YXJnZXQpIHtcbiAgY29uc3QgaHlwZXJsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGh5cGVybGluay50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGh5cGVybGluay5ocmVmID0gaHJlZjtcbiAgaWYgKHRhcmdldCkgaHlwZXJsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIHJldHVybiBoeXBlcmxpbms7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZSh0ZXh0KSB7XG4gIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG4gIHJldHVybiB0ZXh0Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKGVsZW1lbnQsIGlkKSB7XG4gIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gbGlzdEl0ZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2Upe1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cbiAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcInRleHQtY2xyLXByaW1hcnlcIik7XG4gIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJmcy1tZWRpdW1cIik7XG4gIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJmdy02MDBcIik7XG4gIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcblxuICByZXR1cm4gbWVudUl0ZW07XG59XG5cbi8vU2V0cyB0YWIgYXMgYWN0aXZlXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVUYWIodGFiKSB7XG4gIF9kZWFjdGl2YXRlVGFicygpO1xuICB0YWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLy9SZW1vdmVzIGFjdGl2ZSBjbGFzcyBmcm9tIGFjdGl2ZSB0YWJcbmZ1bmN0aW9uIF9kZWFjdGl2YXRlVGFicygpIHtcbiAgY29uc3QgdGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpXCIpKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRhYnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICB0YWJzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlSHlwZXJsaW5rLCBjcmVhdGVUZXh0Tm9kZSwgY3JlYXRlTGlzdEl0ZW0gfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbi8vRmlsbHMgLmNvbnRlbnQgZGl2XG5leHBvcnQgZnVuY3Rpb24gY29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG59XG5cbi8vQ3JlYXRlcyBoZWFkZXJcbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJiZ2MtZGFya1wiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImZzLWxhcmdlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiU3VwZXJiIFJlc3RhdXJhbnRcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIG5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVMaXN0SXRlbShjcmVhdGVUZXh0Tm9kZShcIkhvbWVcIiksIFwiaG9tZVwiKSk7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdEl0ZW0oY3JlYXRlVGV4dE5vZGUoXCJNZW51XCIpLCBcIm1lbnVcIikpO1xuICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RJdGVtKGNyZWF0ZVRleHROb2RlKFwiQ29udGFjdFwiKSwgXCJjb250YWN0XCIpKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuLy9DcmVhdGVzIGZvb3RlclxuZnVuY3Rpb24gZm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImJnYy1kYXJrXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcInRleHQtY2VudGVyXCIpO1xuXG4gIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIC8vUGFyYWdyYXBoIHdpdGggcGFnZSBhdXRob3IgaW5mb3JtYXRpb25cbiAgYXV0aG9yLmFwcGVuZENoaWxkKGNyZWF0ZVRleHROb2RlKFwiUGFnZSBtYWRlIGJ5IFwiKSk7XG4gIGF1dGhvci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVIeXBlcmxpbmsoXCJyYWZhbGx5Y3pla1wiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9yYWZhbGx5Y3pla1wiLCB0cnVlKVxuICApO1xuICBhdXRob3IuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dE5vZGUoXCIgd2hpbGUgd29ya2luZyB3aXRoIFwiKSk7XG4gIGF1dGhvci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVIeXBlcmxpbmsoXCJUaGUgT2RpbiBQcm9qZWN0XCIsIFwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiLCB0cnVlKVxuICApO1xuXG4gIC8vUGFyYWdyYXBoIHdpdGggcGhvdG8gaW5mb3JtYXRpb25cbiAgcGhvdG8uYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlSHlwZXJsaW5rKFwiUGhvdG9cIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvTVFVcWJtc3pHR01cIiwgdHJ1ZSlcbiAgKTtcbiAgcGhvdG8uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dE5vZGUoXCIgYnkgXCIpKTtcbiAgcGhvdG8uYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlSHlwZXJsaW5rKFwiSXZhbiBUb3JyZXNcIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AaWF2bnRcIiwgdHJ1ZSlcbiAgKTtcbiAgcGhvdG8uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dE5vZGUoXCIgYXQgXCIpKTtcbiAgcGhvdG8uYXBwZW5kQ2hpbGQoY3JlYXRlSHlwZXJsaW5rKFwiVW5zcGxhc2hcIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9cIiwgdHJ1ZSkpO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwaG90byk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChhdXRob3IpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbi8vQ2xlYXJzIGNvbnRlbnQgb2YgbWFpblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKCl7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG59IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBhY3RpdmF0ZVRhYiB9IGZyb20gXCIuLi9zY3JpcHRzL3V0aWxpdHkuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBjb25zdCBtYWluQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtZGl2XCIpO1xuICBtYWluQ29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwiYmdjLWRhcmtcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIFN1cGVyYiBSZXN0dWFyYW50IVwiO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC1jZW50ZXJcIik7XG5cbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtZXNzYWdlLnRleHRDb250ZW50ID1cbiAgICBcIlRoZSBTdXBlcmIgUmVzdGF1cmFudCBpcyBiZXN0IHJlc3RhdXJhbnQgaW4gZXhpc3RlbmNlLiBXaGVuIFlvdSB0cnkgb3VyIG1lYWxzLCBubyBvdGhlciBmb29kIHdpbGwgYmUgZXZlciBuZWVkZWQgYWdhaW4uIENoZWNrIG91dCBvdXIgTWVudSBhbmQgb3JkZXIgdmlhIHBob25lIG51bWJlciB2aXNpYmxlIGluIENvbnRhY3QgdGFiLlwiO1xuXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGVudERpdik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG4gIGFjdGl2YXRlVGFiKGhvbWUpO1xufVxuIiwiaW1wb3J0IHsgY29udGVudCwgY2xlYXIgfSBmcm9tIFwiLi9zY3JpcHRzL2xheW91dC5qc1wiO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL3BhZ2VzL2hvbWUuanNcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9wYWdlcy9tZW51LmpzXCI7XG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vcGFnZXMvY29udGFjdC5qc1wiO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb250ZW50KCk7XG4gIGhvbWUoKTtcbn1cblxuaW5pdCgpO1xuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIik7XG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYoIWhvbWVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcbiAgICBjbGVhcigpO1xuICAgIGhvbWUoKTtcbiAgfVxufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYoIW1lbnVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcbiAgICBjbGVhcigpO1xuICAgIG1lbnUoKTtcbiAgfVxufSk7XG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYoIWNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcbiAgICBjbGVhcigpO1xuICAgIGNvbnRhY3QoKTtcbiAgfSBcbn0pOyIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgYWN0aXZhdGVUYWIsIGNyZWF0ZU1lbnVJdGVtIH0gZnJvbSBcIi4uL3NjcmlwdHMvdXRpbGl0eS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVudSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LWRpdlwiKTtcbiAgICBtYWluQ29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwiYmdjLWRhcmtcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNlbnRlclwiKTtcblxuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkZyZW5jaCBmcmllc1wiLCBcIkRlZXAtZnJpZWQgcG90YXRvZXMgd2l0aCBhZGRpdGlvbiBvZiBzYWx0IG9yIGtldGNodXAgKGNsaWVudCdzIGNob2ljZSkuXCIsIFwiUHJpY2U6IDUkXCIpKTtcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkdhcmxpYyBicmVhZFwiLCBcIkJhZ3VldHRlIHRvcHBlZCB3aXRoIGdhcmxpYyBhbmQgYnV0dGVyLlwiLCBcIlByaWNlOiA1JFwiKSk7XG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJQaXp6YSBNYXJnaGVyaXRhXCIsIFwiUGl6emEgbWFkZSB3aXRoIHRvbWF0b2Ugc2F1Y2UsIG1vemFyZWxsYSBjaGVlc2UsIGJhc2lsIGFuZCBvbGl2ZSBvaWwuXCIsIFwiUHJpY2U6IDE1JFwiKSk7XG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJTcGFnaGV0dGkgQm9sb2duZXNlXCIsIFwiU3BhZ2hldHRpIHBhc3RhIHdpdGggQm9sb2duZXNlIHNhdWNlLlwiLCBcIlByaWNlOiAxNSRcIikpO1xuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiUGllcm9naVwiLCBcIkR1bXBsaW5ncyBmaWxsZWQgd2l0aCBtaXggb2YgbWFzaGVkIHBvdGF0b2VzLCBmcmllZCBvbmlvbnMgYW5kIGZhcm1lciBjaGVlc2UuXCIsIFwiUHJpY2U6IDEwJFwiKSk7XG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJQYW5jYWtlc1wiLCBcIlN3ZWV0IGFuZCBmbHVmZnkgcGFuY2FrZXMgd2l0aCBmcnVpdHMgYW5kIHdoaXBwZWQgY3JlYW0uXCIsIFwiUHJpY2U6IDEwJFwiKSk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50RGl2KTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xuICAgIGFjdGl2YXRlVGFiKG1lbnUpO1xufSIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgYWN0aXZhdGVUYWIgfSBmcm9tIFwiLi4vc2NyaXB0cy91dGlsaXR5LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWN0KCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Db250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtZGl2XCIpO1xuICAgIG1haW5Db250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJiZ2MtZGFya1wiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0IGluZm9ybWF0aW9uXCI7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRleHQtY2VudGVyXCIpO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9IFwiUGhvbmUgbnVtYmVyOiAxMjMtNDU2LTc4OVwiXG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gXCJFbWFpbDogc3VwZXJiQHJlc3RhdXJhbnQuY29tXCI7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiQWRkcmVzczogMTIzIERlbGljaW91cyBTdCwgUGl6emEgVG93blwiO1xuXG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50RGl2KTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuICAgIGFjdGl2YXRlVGFiKGNvbnRhY3QpO1xufSJdLCJuYW1lcyI6WyJjcmVhdGVIeXBlcmxpbmsiLCJ0ZXh0IiwiaHJlZiIsInRhcmdldCIsImh5cGVybGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjcmVhdGVMaXN0SXRlbSIsImVsZW1lbnQiLCJpZCIsImxpc3RJdGVtIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVNZW51SXRlbSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwibWVudUl0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJpdGVtTmFtZSIsIml0ZW1EZXNjcmlwdGlvbiIsIml0ZW1QcmljZSIsImFjdGl2YXRlVGFiIiwidGFiIiwidGFicyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiY29udGFpbnMiLCJyZW1vdmUiLCJfZGVhY3RpdmF0ZVRhYnMiLCJjbGVhciIsInF1ZXJ5U2VsZWN0b3IiLCJob21lIiwibWFpbiIsIm1haW5Db250ZW50RGl2IiwidGl0bGUiLCJtZXNzYWdlIiwiY29udGVudCIsIm1haW5Db250YWluZXIiLCJmb290ZXIiLCJhdXRob3IiLCJwaG90byIsImhlYWRlciIsIm5hdmlnYXRpb24iLCJob21lQnV0dG9uIiwibWVudUJ1dHRvbiIsImNvbnRhY3RCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwibWVudSIsInBob25lTnVtYmVyIiwiZW1haWwiLCJhZGRyZXNzIiwiY29udGFjdCJdLCJzb3VyY2VSb290IjoiIn0=