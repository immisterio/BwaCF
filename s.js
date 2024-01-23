export default {
  async plain(hostname, outHeaders) {

      let js = atob('KGZ1bmN0aW9uICgpIHsKICAgICd1c2Ugc3RyaWN0JzsKCiAgICB2YXIgRGVmaW5lZCA9IHsKICAgICAgdXNlX2FwaTogJ3NjZicsCiAgICAgIGxvY2FsaG9zdDogJ2h0dHBzOi8vYndhLmxhbXBhYy53b3JrZXJzLmRldi9zaXNpJywKICAgICAgdmlwX3NpdGU6ICcnLAogICAgICBmcmFtZXdvcms6ICcnCiAgICB9OwoKICAgIHZhciBuZXR3b3JrID0gbmV3IExhbXBhLlJlZ3Vlc3QoKTsKICAgIHZhciBwcmV2aWV3X3RpbWVyLCBwcmV2aWV3X3ZpZGVvOwoKICAgIGZ1bmN0aW9uIHNvdXJjZVRpdGxlKHRpdGxlKSB7CiAgICAgIHJldHVybiBMYW1wYS5VdGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIodGl0bGUuc3BsaXQoJy4nKVswXSk7CiAgICB9CgogICAgZnVuY3Rpb24gbW9kYWwoKSB7CiAgICB9CgogICAgZnVuY3Rpb24gcXVhbGl0eURlZmF1bHQocXVhbGl0eXMpIHsKICAgICAgdmFyIHByZWZlcmFibHkgPSBMYW1wYS5TdG9yYWdlLmdldCgndmlkZW9fcXVhbGl0eV9kZWZhdWx0JywgJzEwODAnKSArICdwJzsKICAgICAgdmFyIHVybDsKCiAgICAgIGlmIChxdWFsaXR5cykgewogICAgICAgIGZvciAodmFyIHEgaW4gcXVhbGl0eXMpIHsKICAgICAgICAgIGlmIChxLmluZGV4T2YocHJlZmVyYWJseSkgPT0gMCkgdXJsID0gcXVhbGl0eXNbcV07CiAgICAgICAgfQoKICAgICAgICBpZiAoIXVybCkgdXJsID0gcXVhbGl0eXNbTGFtcGEuQXJyYXlzLmdldEtleXMocXVhbGl0eXMpWzBdXTsKICAgICAgfQoKICAgICAgcmV0dXJuIHVybDsKICAgIH0KCiAgICBmdW5jdGlvbiBwbGF5KGVsZW1lbnQpIHsKICAgICAgdmFyIGNvbnRyb2xsZXJfZW5hYmxlZCA9IExhbXBhLkNvbnRyb2xsZXIuZW5hYmxlZCgpLm5hbWU7CgoKICAgICAgaWYgKGVsZW1lbnQuanNvbikgewogICAgICAgIExhbXBhLkxvYWRpbmcuc3RhcnQoZnVuY3Rpb24gKCkgewogICAgICAgICAgbmV0d29yay5jbGVhcigpOwogICAgICAgICAgTGFtcGEuTG9hZGluZy5zdG9wKCk7CiAgICAgICAgfSk7CiAgICAgICAgQXBpLmFjY291bnQoZWxlbWVudC52aWRlbyk7CiAgICAgICAgQXBpLnF1YWxpdHlzKGVsZW1lbnQudmlkZW8sIGZ1bmN0aW9uIChkYXRhKSB7CiAgICAgICAgICB2YXIgcXVhbGl0eXMgPSBkYXRhLnF1YWxpdHlzIHx8IGRhdGE7CiAgICAgICAgICB2YXIgcmVjb21lbmRzID0gZGF0YS5yZWNvbWVuZHMgfHwgW107CiAgICAgICAgICBMYW1wYS5Mb2FkaW5nLnN0b3AoKTsKCiAgICAgICAgICBmb3IgKHZhciBpIGluIHF1YWxpdHlzKSB7CiAgICAgICAgICAgIHF1YWxpdHlzW2ldID0gQXBpLmFjY291bnQocXVhbGl0eXNbaV0sIHRydWUpOwogICAgICAgICAgfQoKICAgICAgICAgIHZhciB2aWRlbyA9IHsKICAgICAgICAgICAgdGl0bGU6IGVsZW1lbnQubmFtZSwKICAgICAgICAgICAgdXJsOiBBcGkuYWNjb3VudChxdWFsaXR5RGVmYXVsdChxdWFsaXR5cyksIHRydWUpLAogICAgICAgICAgICB1cmxfcmVzZXJ2ZTogZGF0YS5xdWFsaXR5c19wcm94eSA/IEFwaS5hY2NvdW50KHF1YWxpdHlEZWZhdWx0KGRhdGEucXVhbGl0eXNfcHJveHkpLCB0cnVlKSA6IGZhbHNlLAogICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5cwogICAgICAgICAgfTsKICAgICAgICAgIExhbXBhLlBsYXllci5wbGF5KHZpZGVvKTsKCiAgICAgICAgICBpZiAocmVjb21lbmRzLmxlbmd0aCkgewogICAgICAgICAgICByZWNvbWVuZHMuZm9yRWFjaChmdW5jdGlvbiAoYSkgewogICAgICAgICAgICAgIGEudGl0bGUgPSBMYW1wYS5VdGlscy5zaG9ydFRleHQoYS5uYW1lLCA1MCk7CiAgICAgICAgICAgICAgYS5pY29uID0gJzxpbWcgY2xhc3M9InNpemUteW91dHViZSIgc3JjPSInICsgYS5waWN0dXJlICsgJyIgLz4nOwogICAgICAgICAgICAgIGEudGVtcGxhdGUgPSAnc2VsZWN0Ym94X2ljb24nOwoKICAgICAgICAgICAgICBhLnVybCA9IGZ1bmN0aW9uIChjYWxsKSB7CiAgICAgICAgICAgICAgICBpZiAoYS5qc29uKSB7CiAgICAgICAgICAgICAgICAgIEFwaS5xdWFsaXR5cyhhLnZpZGVvLCBmdW5jdGlvbiAoZGF0YSkgewogICAgICAgICAgICAgICAgICAgIGEucXVhbGl0eSA9IGRhdGEucXVhbGl0eXM7CiAgICAgICAgICAgICAgICAgICAgYS51cmwgPSBBcGkuYWNjb3VudChxdWFsaXR5RGVmYXVsdChkYXRhLnF1YWxpdHlzKSwgdHJ1ZSk7CiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucXVhbGl0eXNfcHJveHkpIGEudXJsX3Jlc2VydmUgPSBBcGkuYWNjb3VudChxdWFsaXR5RGVmYXVsdChkYXRhLnF1YWxpdHlzX3Byb3h5KSwgdHJ1ZSk7CiAgICAgICAgICAgICAgICAgICAgY2FsbCgpOwogICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgIGEudXJsID0gYS52aWRlbzsKICAgICAgICAgICAgICAgICAgY2FsbCgpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0pOwogICAgICAgICAgICBMYW1wYS5QbGF5ZXIucGxheWxpc3QocmVjb21lbmRzKTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIExhbXBhLlBsYXllci5wbGF5bGlzdChbdmlkZW9dKTsKICAgICAgICAgIH0KCiAgICAgICAgICBMYW1wYS5QbGF5ZXIuY2FsbGJhY2soZnVuY3Rpb24gKCkgewogICAgICAgICAgICBMYW1wYS5Db250cm9sbGVyLnRvZ2dsZShjb250cm9sbGVyX2VuYWJsZWQpOwogICAgICAgICAgfSk7CiAgICAgICAgfSwgZnVuY3Rpb24gKCkgewogICAgICAgICAgTGFtcGEuTm90eS5zaG93KExhbXBhLkxhbmcudHJhbnNsYXRlKCd0b3JyZW50X3BhcnNlcl9ub2ZpbGVzJykpOwogICAgICAgIH0pOwogICAgICB9IGVsc2UgewogICAgICAgIGlmIChlbGVtZW50LnF1YWxpdHlzKSB7CiAgICAgICAgICBmb3IgKHZhciBpIGluIGVsZW1lbnQucXVhbGl0eXMpIHsKICAgICAgICAgICAgZWxlbWVudC5xdWFsaXR5c1tpXSA9IEFwaS5hY2NvdW50KGVsZW1lbnQucXVhbGl0eXNbaV0sIHRydWUpOwogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgdmFyIHZpZGVvID0gewogICAgICAgICAgdGl0bGU6IGVsZW1lbnQubmFtZSwKICAgICAgICAgIHVybDogQXBpLmFjY291bnQocXVhbGl0eURlZmF1bHQoZWxlbWVudC5xdWFsaXR5cykgfHwgZWxlbWVudC52aWRlbywgdHJ1ZSksCiAgICAgICAgICB1cmxfcmVzZXJ2ZTogQXBpLmFjY291bnQocXVhbGl0eURlZmF1bHQoZWxlbWVudC5xdWFsaXR5c19wcm94eSkgfHwgZWxlbWVudC52aWRlb19yZXNlcnZlIHx8ICcnLCB0cnVlKSwKICAgICAgICAgIHF1YWxpdHk6IGVsZW1lbnQucXVhbGl0eXMKICAgICAgICB9OwogICAgICAgIExhbXBhLlBsYXllci5wbGF5KHZpZGVvKTsKICAgICAgICBMYW1wYS5QbGF5ZXIucGxheWxpc3QoW3ZpZGVvXSk7CiAgICAgICAgTGFtcGEuUGxheWVyLmNhbGxiYWNrKGZ1bmN0aW9uICgpIHsKICAgICAgICAgIExhbXBhLkNvbnRyb2xsZXIudG9nZ2xlKGNvbnRyb2xsZXJfZW5hYmxlZCk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBmaXhDYXJkcyhqc29uKSB7CiAgICAgIGpzb24uZm9yRWFjaChmdW5jdGlvbiAobSkgewogICAgICAgIG0uYmFja2dyb3VuZF9pbWFnZSA9IG0ucGljdHVyZTsKICAgICAgICBtLnBvc3RlciA9IG0ucGljdHVyZTsKICAgICAgICBtLmltZyA9IG0ucGljdHVyZTsKICAgICAgICBtLm5hbWUgPSBMYW1wYS5VdGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIobS5uYW1lKS5yZXBsYWNlKC9cJiguKj8pOy9nLCAnJyk7CiAgICAgIH0pOwogICAgfQoKICAgIGZ1bmN0aW9uIGhpZGVQcmV2aWV3KCkgewogICAgICBjbGVhclRpbWVvdXQocHJldmlld190aW1lcik7CgogICAgICBpZiAocHJldmlld192aWRlbykgewogICAgICAgIHByZXZpZXdfdmlkZW8uZmluZCgndmlkZW8nKS5wYXVzZSgpOwogICAgICAgIHByZXZpZXdfdmlkZW8uYWRkQ2xhc3MoJ2hpZGUnKTsKICAgICAgICBwcmV2aWV3X3ZpZGVvID0gZmFsc2U7CiAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBwcmV2aWV3KHRhcmdldCwgZWxlbWVudCkgewogICAgICBoaWRlUHJldmlldygpOwogICAgICBwcmV2aWV3X3RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7CiAgICAgICAgaWYgKCFlbGVtZW50LnByZXZpZXcgfHwgIUxhbXBhLlN0b3JhZ2UuZmllbGQoJ3Npc2lfcHJldmlldycpKSByZXR1cm47CiAgICAgICAgdmFyIHZpZGVvID0gdGFyZ2V0LmZpbmQoJ3ZpZGVvJyk7CiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRhcmdldC5maW5kKCcuc2lzaS12aWRlby1wcmV2aWV3Jyk7CgogICAgICAgIGlmICghdmlkZW8pIHsKICAgICAgICAgIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTsKICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKCdzaXNpLXZpZGVvLXByZXZpZXcnKTsKICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7CiAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7CiAgICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnOwogICAgICAgICAgY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnMCc7CiAgICAgICAgICBjb250YWluZXIuc3R5bGUudG9wID0gJzAnOwogICAgICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7CiAgICAgICAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzFlbSc7CiAgICAgICAgICB2aWRlby5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7CiAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJzsKICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICcxMDAlJzsKICAgICAgICAgIHZpZGVvLnN0eWxlLmxlZnQgPSAnMCc7CiAgICAgICAgICB2aWRlby5zdHlsZS50b3AgPSAnMCc7CiAgICAgICAgICB2aWRlby5zdHlsZS5vYmplY3RGaXQgPSAnY292ZXInOwogICAgICAgICAgY29udGFpbmVyLmFwcGVuZCh2aWRlbyk7CiAgICAgICAgICB0YXJnZXQuZmluZCgnLmNhcmRfX3ZpZXcnKS5hcHBlbmQoY29udGFpbmVyKTsKICAgICAgICAgIHZpZGVvLnNyYyA9IGVsZW1lbnQucHJldmlldzsgLy8gJ2h0dHBzOi8vdGh1bWItdjQueGhjZG4uY29tL2Evb2cwejI1Q3RhVElaWGd6a1Y3cUo4US8wMjMvNDYzLzA5NC81MjZ4Mjk4LjQ0LnQud2VibScKCiAgICAgICAgICB2aWRlby5sb2FkKCk7CiAgICAgICAgfQoKICAgICAgICBwcmV2aWV3X3ZpZGVvID0gY29udGFpbmVyOwogICAgICAgIHZpZGVvLnBsYXkoKTsKICAgICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2hpZGUnKTsKICAgICAgfSwgMTUwMCk7CiAgICB9CgogICAgZnVuY3Rpb24gZml4TGlzdChsaXN0KSB7CiAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoYSkgewogICAgICAgIGlmICghYS5xdWFsaXR5ICYmIGEudGltZSkgYS5xdWFsaXR5ID0gYS50aW1lOwogICAgICB9KTsKICAgICAgcmV0dXJuIGxpc3Q7CiAgICB9CgogICAgZnVuY3Rpb24gbWVudSQyKHRhcmdldCwgY2FyZF9kYXRhKSB7CiAgICAgIGlmICghY2FyZF9kYXRhLmJvb2ttYXJrKSByZXR1cm47CiAgICAgIExhbXBhLlNlbGVjdC5zaG93KHsKICAgICAgICB0aXRsZTogJ9Cc0LXQvdGOJywKICAgICAgICBpdGVtczogW3sKICAgICAgICAgIHRpdGxlOiAhY2FyZF9kYXRhLmJvb2ttYXJrLnVpZCA/ICfQkiDQt9Cw0LrQu9Cw0LTQutC4JyA6ICfQo9C00LDQu9C40YLRjCDQuNC3INC30LDQutC70LDQtNC+0LonCiAgICAgICAgfV0sCiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KCkgewogICAgICAgICAgQXBpLmJvb2ttYXJrKGNhcmRfZGF0YSwgIWNhcmRfZGF0YS5ib29rbWFyay51aWQsIGZ1bmN0aW9uIChzdGF0dXMpIHsKICAgICAgICAgICAgTGFtcGEuTm90eS5zaG93KCfQo9GB0L/QtdGI0L3QvicpOwogICAgICAgICAgfSk7CiAgICAgICAgICBMYW1wYS5Db250cm9sbGVyLnRvZ2dsZSgnY29udGVudCcpOwogICAgICAgIH0sCiAgICAgICAgb25CYWNrOiBmdW5jdGlvbiBvbkJhY2soKSB7CiAgICAgICAgICBMYW1wYS5Db250cm9sbGVyLnRvZ2dsZSgnY29udGVudCcpOwogICAgICAgIH0KICAgICAgfSk7CiAgICB9CgogICAgdmFyIFV0aWxzID0gewogICAgICBzb3VyY2VUaXRsZTogc291cmNlVGl0bGUsCiAgICAgIHBsYXk6IHBsYXksCiAgICAgIGZpeENhcmRzOiBmaXhDYXJkcywKICAgICAgcHJldmlldzogcHJldmlldywKICAgICAgaGlkZVByZXZpZXc6IGhpZGVQcmV2aWV3LAogICAgICBmaXhMaXN0OiBmaXhMaXN0LAogICAgICBtZW51OiBtZW51JDIKICAgIH07CgogICAgdmFyIG1lbnUkMTsKCgogICAgdmFyIG1lbnU7CgogICAgZnVuY3Rpb24gQXBpSHR0cCgpIHsKICAgICAgdmFyIF90aGlzID0gdGhpczsKCiAgICAgIHZhciBuZXR3b3JrID0gbmV3IExhbXBhLlJlZ3Vlc3QoKTsKCiAgICAgIHRoaXMubWVudSA9IGZ1bmN0aW9uIChzdWNjZXNzLCBlcnJvcikgewogICAgICAgIGlmIChtZW51KSByZXR1cm4gc3VjY2VzcyhtZW51KTsKICAgICAgICBuZXR3b3JrLnNpbGVudCh0aGlzLmFjY291bnQoRGVmaW5lZC5sb2NhbGhvc3QpLCBmdW5jdGlvbiAoZGF0YSkgewogICAgICAgICAgaWYgKGRhdGEuY2hhbm5lbHMpIHsKICAgICAgICAgICAgbWVudSA9IGRhdGEuY2hhbm5lbHM7CiAgICAgICAgICAgIHN1Y2Nlc3MobWVudSk7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBlcnJvcihkYXRhLm1zZyk7CiAgICAgICAgICB9CiAgICAgICAgfSwgZXJyb3IpOwogICAgICB9OwoKICAgICAgdGhpcy52aWV3ID0gZnVuY3Rpb24gKHBhcmFtcywgc3VjY2VzcywgZXJyb3IpIHsKICAgICAgICB2YXIgdSA9IExhbXBhLlV0aWxzLmFkZFVybENvbXBvbmVudChwYXJhbXMudXJsLCAncGc9JyArIChwYXJhbXMucGFnZSB8fCAxKSk7CiAgICAgICAgbmV0d29yay5zaWxlbnQodGhpcy5hY2NvdW50KHUpLCBmdW5jdGlvbiAoanNvbikgewogICAgICAgICAgaWYgKGpzb24ubGlzdCkgewogICAgICAgICAgICBqc29uLnJlc3VsdHMgPSBVdGlscy5maXhMaXN0KGpzb24ubGlzdCk7CiAgICAgICAgICAgIGpzb24uY29sbGVjdGlvbiA9IHRydWU7CiAgICAgICAgICAgIGpzb24udG90YWxfcGFnZXMgPSBqc29uLnRvdGFsX3BhZ2VzIHx8IDMwOwogICAgICAgICAgICBVdGlscy5maXhDYXJkcyhqc29uLnJlc3VsdHMpOwogICAgICAgICAgICBkZWxldGUganNvbi5saXN0OwogICAgICAgICAgICBzdWNjZXNzKGpzb24pOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgZXJyb3IoKTsKICAgICAgICAgIH0KICAgICAgICB9LCBlcnJvcik7CiAgICAgIH07CgogICAgICB0aGlzLmJvb2ttYXJrID0gZnVuY3Rpb24gKGVsZW1lbnQsIGFkZCwgY2FsbCkgewogICAgICAgIHZhciB1ID0gRGVmaW5lZC5sb2NhbGhvc3QgKyAnL2Jvb2ttYXJrLycgKyAoYWRkID8gJ2FkZCcgOiAncmVtb3ZlP3VpZD0nICsgZWxlbWVudC5ib29rbWFyay51aWQpOwogICAgICAgIG5ldHdvcmsuc2lsZW50KHRoaXMuYWNjb3VudCh1KSwgZnVuY3Rpb24gKGUpIHsKICAgICAgICAgIGNhbGwodHJ1ZSk7CiAgICAgICAgfSwgZnVuY3Rpb24gKCkgewogICAgICAgICAgY2FsbChmYWxzZSk7CiAgICAgICAgfSwgSlNPTi5zdHJpbmdpZnkoZWxlbWVudCksIHsKICAgICAgICAgIGhlYWRlcnM6IHsKICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICB9OwoKICAgICAgdGhpcy5hY2NvdW50ID0gZnVuY3Rpb24gKHUpIHsKICAgICAgICByZXR1cm4gdTsKICAgICAgfTsKCiAgICAgIHRoaXMucGxheWxpc3QgPSBmdW5jdGlvbiAoYWRkX3VybF9xdWVyeSwgb25jb21wbGl0ZSwgZXJyb3IpIHsKICAgICAgICB2YXIgbG9hZCA9IGZ1bmN0aW9uIGxvYWQoKSB7CiAgICAgICAgICB2YXIgc3RhdHVzID0gbmV3IExhbXBhLlN0YXR1cyhtZW51Lmxlbmd0aCk7CgogICAgICAgICAgc3RhdHVzLm9uQ29tcGxpdGUgPSBmdW5jdGlvbiAoZGF0YSkgewogICAgICAgICAgICB2YXIgaXRlbXMgPSBbXTsKICAgICAgICAgICAgbWVudS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7CiAgICAgICAgICAgICAgaWYgKGRhdGFbbS5wbGF5bGlzdF91cmxdICYmIGRhdGFbbS5wbGF5bGlzdF91cmxdLnJlc3VsdHMubGVuZ3RoKSBpdGVtcy5wdXNoKGRhdGFbbS5wbGF5bGlzdF91cmxdKTsKICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGgpIG9uY29tcGxpdGUoaXRlbXMpO2Vsc2UgZXJyb3IoKTsKICAgICAgICAgIH07CgogICAgICAgICAgbWVudS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7CiAgICAgICAgICAgIG5ldHdvcmsuc2lsZW50KF90aGlzLmFjY291bnQobS5wbGF5bGlzdF91cmwgKyBhZGRfdXJsX3F1ZXJ5KSwgZnVuY3Rpb24gKGpzb24pIHsKICAgICAgICAgICAgICBpZiAoanNvbi5saXN0KSB7CiAgICAgICAgICAgICAgICBqc29uLnRpdGxlID0gVXRpbHMuc291cmNlVGl0bGUobS50aXRsZSk7CiAgICAgICAgICAgICAgICBqc29uLnJlc3VsdHMgPSBVdGlscy5maXhMaXN0KGpzb24ubGlzdCk7CiAgICAgICAgICAgICAgICBqc29uLnVybCA9IG0ucGxheWxpc3RfdXJsOwogICAgICAgICAgICAgICAganNvbi5jb2xsZWN0aW9uID0gdHJ1ZTsKICAgICAgICAgICAgICAgIGpzb24ubGluZV90eXBlID0gJ25vbmUnOwogICAgICAgICAgICAgICAganNvbi5jYXJkX2V2ZW50cyA9IHsKICAgICAgICAgICAgICAgICAgb25NZW51OiBVdGlscy5tZW51LAogICAgICAgICAgICAgICAgICBvbkVudGVyOiBmdW5jdGlvbiBvbkVudGVyKGNhcmQsIGVsZW1lbnQpIHsKICAgICAgICAgICAgICAgICAgICBVdGlscy5oaWRlUHJldmlldygpOwogICAgICAgICAgICAgICAgICAgIFV0aWxzLnBsYXkoZWxlbWVudCk7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICBVdGlscy5maXhDYXJkcyhqc29uLnJlc3VsdHMpOwogICAgICAgICAgICAgICAgZGVsZXRlIGpzb24ubGlzdDsKICAgICAgICAgICAgICAgIHN0YXR1cy5hcHBlbmQobS5wbGF5bGlzdF91cmwsIGpzb24pOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBzdGF0dXMuZXJyb3IoKTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0sIHN0YXR1cy5lcnJvci5iaW5kKHN0YXR1cykpOwogICAgICAgICAgfSk7CiAgICAgICAgfTsKCiAgICAgICAgaWYgKG1lbnUpIGxvYWQoKTtlbHNlIHsKICAgICAgICAgIF90aGlzLm1lbnUobG9hZCwgZXJyb3IpOwogICAgICAgIH0KICAgICAgfTsKCiAgICAgIHRoaXMubWFpbiA9IGZ1bmN0aW9uIChwYXJhbXMsIG9uY29tcGxpdGUsIGVycm9yKSB7CiAgICAgICAgdGhpcy5wbGF5bGlzdCgnJywgb25jb21wbGl0ZSwgZXJyb3IpOwogICAgICB9OwoKICAgICAgdGhpcy5zZWFyY2ggPSBmdW5jdGlvbiAocGFyYW1zLCBvbmNvbXBsaXRlLCBlcnJvcikgewogICAgICAgIHRoaXMucGxheWxpc3QoJz9zZWFyY2g9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXMucXVlcnkpLCBvbmNvbXBsaXRlLCBlcnJvcik7CiAgICAgIH07CgogICAgICB0aGlzLnF1YWxpdHlzID0gZnVuY3Rpb24gKHZpZGVvX3VybCwgb25jb21wbGl0ZSwgZXJyb3IpIHsKICAgICAgICBuZXR3b3JrLnNpbGVudCh0aGlzLmFjY291bnQodmlkZW9fdXJsICsgJyZqc29uPXRydWUnKSwgb25jb21wbGl0ZSwgZXJyb3IpOwogICAgICB9OwoKICAgICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uICgpIHsKICAgICAgICBuZXR3b3JrLmNsZWFyKCk7CiAgICAgIH07CiAgICB9CgogICAgdmFyIEFwaUh0dHAkMSA9IG5ldyBBcGlIdHRwKCk7CgogICAgdmFyIEFwaSA9IEFwaUh0dHAkMTsKCiAgICBmdW5jdGlvbiBTaXNpKG9iamVjdCkgewogICAgICB2YXIgY29tcCA9IG5ldyBMYW1wYS5JbnRlcmFjdGlvbk1haW4ob2JqZWN0KTsKCiAgICAgIGNvbXAuY3JlYXRlID0gZnVuY3Rpb24gKCkgewogICAgICAgIHRoaXMuYWN0aXZpdHkubG9hZGVyKHRydWUpOwogICAgICAgIEFwaS5tYWluKG9iamVjdCwgdGhpcy5idWlsZC5iaW5kKHRoaXMpLCB0aGlzLmVtcHR5LmJpbmQodGhpcykpOwogICAgICAgIHJldHVybiB0aGlzLnJlbmRlcigpOwogICAgICB9OwoKICAgICAgY29tcC5lbXB0eSA9IGZ1bmN0aW9uIChlcikgewogICAgICAgIHZhciBfdGhpcyA9IHRoaXM7CgogICAgICAgIHZhciBlbXB0eSA9IG5ldyBMYW1wYS5FbXB0eSh7CiAgICAgICAgICBkZXNjcjogdHlwZW9mIGVyID09ICdzdHJpbmcnID8gZXIgOiBMYW1wYS5MYW5nLnRyYW5zbGF0ZSgnZW1wdHlfdGV4dF90d28nKQogICAgICAgIH0pOwogICAgICAgIExhbXBhLkFjdGl2aXR5LmFsbCgpLmZvckVhY2goZnVuY3Rpb24gKGFjdGl2ZSkgewogICAgICAgICAgaWYgKF90aGlzLmFjdGl2aXR5ID09IGFjdGl2ZS5hY3Rpdml0eSkgYWN0aXZlLmFjdGl2aXR5LnJlbmRlcigpLmZpbmQoJy5hY3Rpdml0eV9fYm9keSA+IGRpdicpWzBdLmFwcGVuZENoaWxkKGVtcHR5LnJlbmRlcih0cnVlKSk7CiAgICAgICAgfSk7CiAgICAgICAgdGhpcy5zdGFydCA9IGVtcHR5LnN0YXJ0OwogICAgICAgIHRoaXMuYWN0aXZpdHkubG9hZGVyKGZhbHNlKTsKICAgICAgICB0aGlzLmFjdGl2aXR5LnRvZ2dsZSgpOwogICAgICB9OwoKICAgICAgY29tcC5vbk1vcmUgPSBmdW5jdGlvbiAoZGF0YSkgewogICAgICAgIExhbXBhLkFjdGl2aXR5LnB1c2goewogICAgICAgICAgdXJsOiBkYXRhLnVybCwKICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLAogICAgICAgICAgY29tcG9uZW50OiAnc2lzaV92aWV3XycgKyBEZWZpbmVkLnVzZV9hcGksCiAgICAgICAgICBwYWdlOiAyCiAgICAgICAgfSk7CiAgICAgIH07CgogICAgICBjb21wLm9uQXBwZW5kID0gZnVuY3Rpb24gKGxpbmUsIGVsZW1lbnQpIHsKICAgICAgICBsaW5lLm9uQXBwZW5kID0gZnVuY3Rpb24gKGNhcmQpIHsKICAgICAgICAgIHZhciBvcmlnRm9jdXMgPSBjYXJkLm9uRm9jdXM7CgogICAgICAgICAgY2FyZC5vbkZvY3VzID0gZnVuY3Rpb24gKHRhcmdldCwgY2FyZF9kYXRhKSB7CiAgICAgICAgICAgIG9yaWdGb2N1cyh0YXJnZXQsIGNhcmRfZGF0YSk7CiAgICAgICAgICAgIFV0aWxzLnByZXZpZXcodGFyZ2V0LCBjYXJkX2RhdGEpOwogICAgICAgICAgfTsKICAgICAgICB9OwogICAgICB9OwoKICAgICAgcmV0dXJuIGNvbXA7CiAgICB9CgogICAgZnVuY3Rpb24gVmlldyhvYmplY3QpIHsKICAgICAgdmFyIGNvbXAgPSBuZXcgTGFtcGEuSW50ZXJhY3Rpb25DYXRlZ29yeShvYmplY3QpOwogICAgICB2YXIgbWVudTsKCiAgICAgIGNvbXAuY3JlYXRlID0gZnVuY3Rpb24gKCkgewogICAgICAgIHZhciBfdGhpcyA9IHRoaXM7CgogICAgICAgIHRoaXMuYWN0aXZpdHkubG9hZGVyKHRydWUpOwogICAgICAgIEFwaS52aWV3KG9iamVjdCwgZnVuY3Rpb24gKGRhdGEpIHsKICAgICAgICAgIG1lbnUgPSBkYXRhLm1lbnU7CgogICAgICAgICAgaWYgKG1lbnUpIHsKICAgICAgICAgICAgbWVudS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7CiAgICAgICAgICAgICAgdmFyIHNwbCA9IG0udGl0bGUuc3BsaXQoJzonKTsKICAgICAgICAgICAgICBtLnRpdGxlID0gc3BsWzBdLnRyaW0oKTsKICAgICAgICAgICAgICBpZiAoc3BsWzFdKSBtLnN1YnRpdGxlID0gTGFtcGEuVXRpbHMuY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHNwbFsxXS50cmltKCkucmVwbGFjZSgvYWxsL2ksICfQm9GO0LHQvtC5JykpOwoKICAgICAgICAgICAgICBpZiAobS5zdWJtZW51KSB7CiAgICAgICAgICAgICAgICBtLnN1Ym1lbnUuZm9yRWFjaChmdW5jdGlvbiAocykgewogICAgICAgICAgICAgICAgICBzLnRpdGxlID0gTGFtcGEuVXRpbHMuY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHMudGl0bGUudHJpbSgpLnJlcGxhY2UoL2FsbC9pLCAn0JvRjtCx0L7QuScpKTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSk7CiAgICAgICAgICB9CgogICAgICAgICAgX3RoaXMuYnVpbGQoZGF0YSk7CgogICAgICAgICAgaWYgKCFkYXRhLnJlc3VsdHMubGVuZ3RoICYmIG9iamVjdC51cmwuaW5kZXhPZignL2Jvb2ttYXJrcycpKSB7CiAgICAgICAgICAgIExhbXBhLk5vdHkuc2hvdygn0KPQtNC10YDQttC40LLQsNC50YLQtSDQntCaINC90LAg0LLQuNC00LXQviDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0LIg0LfQsNC60LvQsNC00LrQuC4nLCB7CiAgICAgICAgICAgICAgdGltZTogMTAwMDAKICAgICAgICAgICAgfSk7CiAgICAgICAgICB9CiAgICAgICAgfSwgdGhpcy5lbXB0eS5iaW5kKHRoaXMpKTsKICAgICAgfTsKCiAgICAgIGNvbXAubmV4dFBhZ2VSZXVlc3QgPSBmdW5jdGlvbiAob2JqZWN0LCByZXNvbHZlLCByZWplY3QpIHsKICAgICAgICBBcGkudmlldyhvYmplY3QsIHJlc29sdmUuYmluZCh0aGlzKSwgcmVqZWN0LmJpbmQodGhpcykpOwogICAgICB9OwoKICAgICAgY29tcC5jYXJkUmVuZGVyID0gZnVuY3Rpb24gKG9iamVjdCwgZWxlbWVudCwgY2FyZCkgewogICAgICAgIGNhcmQub25NZW51ID0gZnVuY3Rpb24gKHRhcmdldCwgY2FyZF9kYXRhKSB7CiAgICAgICAgICBpZiAoIWNhcmRfZGF0YS5ib29rbWFyaykgcmV0dXJuOwogICAgICAgICAgTGFtcGEuU2VsZWN0LnNob3coewogICAgICAgICAgICB0aXRsZTogJ9Cc0LXQvdGOJywKICAgICAgICAgICAgaXRlbXM6IFt7CiAgICAgICAgICAgICAgdGl0bGU6ICFjYXJkX2RhdGEuYm9va21hcmsudWlkID8gJ9CSINC30LDQutC70LDQtNC60LgnIDogJ9Cj0LTQsNC70LjRgtGMINC40Lcg0LfQsNC60LvQsNC00L7QuicKICAgICAgICAgICAgfV0sCiAgICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdCgpIHsKICAgICAgICAgICAgICBBcGkuYm9va21hcmsoY2FyZF9kYXRhLCAhY2FyZF9kYXRhLmJvb2ttYXJrLnVpZCwgZnVuY3Rpb24gKHN0YXR1cykgewogICAgICAgICAgICAgICAgTGFtcGEuTm90eS5zaG93KCfQo9GB0L/QtdGI0L3QvicpOwogICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgIExhbXBhLkNvbnRyb2xsZXIudG9nZ2xlKCdjb250ZW50Jyk7CiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIG9uQmFjazogZnVuY3Rpb24gb25CYWNrKCkgewogICAgICAgICAgICAgIExhbXBhLkNvbnRyb2xsZXIudG9nZ2xlKCdjb250ZW50Jyk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0pOwogICAgICAgIH07CgogICAgICAgIGNhcmQub25FbnRlciA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgIFV0aWxzLmhpZGVQcmV2aWV3KCk7CiAgICAgICAgICBVdGlscy5wbGF5KGVsZW1lbnQpOwogICAgICAgIH07CgogICAgICAgIHZhciBvcmlnRm9jdXMgPSBjYXJkLm9uRm9jdXM7CgogICAgICAgIGNhcmQub25Gb2N1cyA9IGZ1bmN0aW9uICh0YXJnZXQsIGNhcmRfZGF0YSkgewogICAgICAgICAgb3JpZ0ZvY3VzKHRhcmdldCwgY2FyZF9kYXRhKTsKICAgICAgICAgIFV0aWxzLnByZXZpZXcodGFyZ2V0LCBlbGVtZW50KTsKICAgICAgICB9OwogICAgICB9OwoKICAgICAgY29tcC5maWx0ZXIgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgaWYgKG1lbnUpIHsKICAgICAgICAgIHZhciBpdGVtcyA9IG1lbnUuZmlsdGVyKGZ1bmN0aW9uIChtKSB7CiAgICAgICAgICAgIHJldHVybiAhbS5zZWFyY2hfb247CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciBzZWFyY2ggPSBtZW51LmZpbmQoZnVuY3Rpb24gKG0pIHsKICAgICAgICAgICAgcmV0dXJuIG0uc2VhcmNoX29uOwogICAgICAgICAgfSk7CiAgICAgICAgICBpZiAoIXNlYXJjaCkgc2VhcmNoID0gb2JqZWN0LnNlYXJjaF9zdGFydDsKICAgICAgICAgIGlmICghaXRlbXMubGVuZ3RoICYmICFzZWFyY2gpIHJldHVybjsKCQkgIAoJCSAgaWYgKHNlYXJjaCkKCQkgIHsKCQkJICBMYW1wYS5BcnJheXMuaW5zZXJ0KGl0ZW1zLCAwLCB7CgkJCQl0aXRsZTogJ9Cd0LDQudGC0LgnLAoJCQkJb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KCkgewoJCQkJICBMYW1wYS5JbnB1dC5lZGl0KHsKCQkJCQl0aXRsZTogJ9Cf0L7QuNGB0LonLAoJCQkJCXZhbHVlOiAnJywKCQkJCQlmcmVlOiB0cnVlLAoJCQkJCW5vc2F2ZTogdHJ1ZQoJCQkJICB9LCBmdW5jdGlvbiAodmFsdWUpIHsKCQkJCQlMYW1wYS5Db250cm9sbGVyLnRvZ2dsZSgnY29udGVudCcpOwoKCQkJCQlpZiAodmFsdWUpIHsKCQkJCQkgIExhbXBhLkFjdGl2aXR5LnB1c2goewoJCQkJCQl1cmw6IHNlYXJjaC5wbGF5bGlzdF91cmwgKyAnP3NlYXJjaD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSwKCQkJCQkJdGl0bGU6ICfQn9C+0LjRgdC6IC0gJyArIHZhbHVlLAoJCQkJCQljb21wb25lbnQ6ICdzaXNpX3ZpZXdfJyArIERlZmluZWQudXNlX2FwaSwKCQkJCQkJc2VhcmNoX3N0YXJ0OiBzZWFyY2gsCgkJCQkJCXBhZ2U6IDEKCQkJCQkgIH0pOwoJCQkJCX0KCQkJCSAgfSk7CgkJCQl9CgkJCSAgfSk7CgkJICB9CgkJICAKICAgICAgICAgIExhbXBhLlNlbGVjdC5zaG93KHsKICAgICAgICAgICAgdGl0bGU6ICfQpNC40LvRjNGC0YAnLAogICAgICAgICAgICBpdGVtczogaXRlbXMsCiAgICAgICAgICAgIG9uQmFjazogZnVuY3Rpb24gb25CYWNrKCkgewogICAgICAgICAgICAgIExhbXBhLkNvbnRyb2xsZXIudG9nZ2xlKCdjb250ZW50Jyk7CiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChhKSB7CiAgICAgICAgICAgICAgbWVudS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7CiAgICAgICAgICAgICAgICBtLnNlbGVjdGVkID0gbSA9PSBhID8gdHJ1ZSA6IGZhbHNlOwogICAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgICBpZiAoYS5zdWJtZW51KSB7CiAgICAgICAgICAgICAgICBMYW1wYS5TZWxlY3Quc2hvdyh7CiAgICAgICAgICAgICAgICAgIHRpdGxlOiBhLnRpdGxlLAogICAgICAgICAgICAgICAgICBpdGVtczogYS5zdWJtZW51LAogICAgICAgICAgICAgICAgICBvbkJhY2s6IGZ1bmN0aW9uIG9uQmFjaygpIHsKICAgICAgICAgICAgICAgICAgICBjb21wLmZpbHRlcigpOwogICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoYikgewogICAgICAgICAgICAgICAgICAgIExhbXBhLkFjdGl2aXR5LnB1c2goewogICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG9iamVjdC50aXRsZSwKICAgICAgICAgICAgICAgICAgICAgIHVybDogYi5wbGF5bGlzdF91cmwsCiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdzaXNpX3ZpZXdfJyArIERlZmluZWQudXNlX2FwaSwKICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IDEKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGNvbXAuZmlsdGVyKCk7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICB9KTsKICAgICAgICB9CiAgICAgIH07CgogICAgICBjb21wLm9uUmlnaHQgPSBjb21wLmZpbHRlci5iaW5kKGNvbXApOwogICAgICByZXR1cm4gY29tcDsKICAgIH0KCiAgICBmdW5jdGlvbiBzdGFydFBsdWdpbigpIHsKICAgICAgd2luZG93WydwbHVnaW5fc2NmXycgKyBEZWZpbmVkLnVzZV9hcGkgKyAnX3JlYWR5J10gPSB0cnVlOwogICAgICB2YXIgdW5pY19pZCA9IExhbXBhLlN0b3JhZ2UuZ2V0KCdzaXNpX3VuaWNfaWQnLCAnJyk7CgogICAgICBpZiAoIXVuaWNfaWQpIHsKICAgICAgICB1bmljX2lkID0gTGFtcGEuVXRpbHMudWlkKDgpLnRvTG93ZXJDYXNlKCk7CiAgICAgICAgTGFtcGEuU3RvcmFnZS5zZXQoJ3Npc2lfdW5pY19pZCcsIHVuaWNfaWQpOwogICAgICB9CgogICAgICBMYW1wYS5Db21wb25lbnQuYWRkKCdzaXNpXycgKyBEZWZpbmVkLnVzZV9hcGksIFNpc2kpOwogICAgICBMYW1wYS5Db21wb25lbnQuYWRkKCdzaXNpX3ZpZXdfJyArIERlZmluZWQudXNlX2FwaSwgVmlldyk7IC8vTGFtcGEuU2VhcmNoLmFkZFNvdXJjZShTZWFyY2gpCgogICAgICBmdW5jdGlvbiBhZGRGaWx0ZXIoKSB7CiAgICAgICAgdmFyIGFjdGl2aTsKICAgICAgICB2YXIgdGltZXI7CiAgICAgICAgdmFyIGJ1dHRvbiA9ICQoIjxkaXYgY2xhc3M9XCJoZWFkX19hY3Rpb24gaGVhZF9fc2V0dGluZ3Mgc2VsZWN0b3JcIj5cbiAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMzZcIiB2aWV3Qm94PVwiMCAwIDM4IDM2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEuNVwiIHk9XCIxLjVcIiB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzNcIiByeD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjNcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgPHJlY3QgeD1cIjdcIiB5PVwiOFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIzXCIgcng9XCIxLjVcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI3XCIgeT1cIjE2XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjNcIiByeD1cIjEuNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgPHJlY3QgeD1cIjdcIiB5PVwiMjVcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiM1wiIHJ4PVwiMS41XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjwvcmVjdD5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTMuNVwiIGN5PVwiMTcuNVwiIHI9XCIzLjVcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjIzLjVcIiBjeT1cIjI2LjVcIiByPVwiMy41XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIyMS41XCIgY3k9XCI5LjVcIiByPVwiMy41XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjwvY2lyY2xlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PiIpOwogICAgICAgIGJ1dHRvbi5oaWRlKCkub24oJ2hvdmVyOmVudGVyJywgZnVuY3Rpb24gKCkgewogICAgICAgICAgaWYgKGFjdGl2aSkgewogICAgICAgICAgICBhY3RpdmkuYWN0aXZpdHkuY29tcG9uZW50KCkuZmlsdGVyKCk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgICAgJCgnLmhlYWQgLm9wZW4tLXNlYXJjaCcpLmFmdGVyKGJ1dHRvbik7CiAgICAgICAgTGFtcGEuTGlzdGVuZXIuZm9sbG93KCdhY3Rpdml0eScsIGZ1bmN0aW9uIChlKSB7CiAgICAgICAgICBpZiAoZS50eXBlID09ICdzdGFydCcpIGFjdGl2aSA9IGUub2JqZWN0OwogICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTsKICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgIGlmIChhY3RpdmkpIHsKICAgICAgICAgICAgICBpZiAoYWN0aXZpLmNvbXBvbmVudCAhPT0gJ3Npc2lfdmlld18nICsgRGVmaW5lZC51c2VfYXBpKSB7CiAgICAgICAgICAgICAgICBidXR0b24uaGlkZSgpOwogICAgICAgICAgICAgICAgYWN0aXZpID0gZmFsc2U7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICB9LCAxMDAwKTsKCiAgICAgICAgICBpZiAoZS50eXBlID09ICdzdGFydCcgJiYgZS5jb21wb25lbnQgPT0gJ3Npc2lfdmlld18nICsgRGVmaW5lZC51c2VfYXBpKSB7CiAgICAgICAgICAgIGJ1dHRvbi5zaG93KCk7CiAgICAgICAgICAgIGFjdGl2aSA9IGUub2JqZWN0OwogICAgICAgICAgfQogICAgICAgIH0pOwogICAgICB9CgogICAgICBmdW5jdGlvbiBhZGRTZXR0aW5ncygpIHsKICAgICAgICBpZiAod2luZG93LnNpc2lfYWRkX3BhcmFtX3JlYWR5KSByZXR1cm47CiAgICAgICAgd2luZG93LnNpc2lfYWRkX3BhcmFtX3JlYWR5ID0gdHJ1ZTsKICAgICAgICBMYW1wYS5TZXR0aW5nc0FwaS5hZGRDb21wb25lbnQoewogICAgICAgICAgY29tcG9uZW50OiAnc2lzaScsCiAgICAgICAgICBuYW1lOiAn0JrQu9GD0LHQvdC40YfQutCwJywKICAgICAgICAgIGljb246ICI8c3ZnIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjQzXCIgdmlld0JveD1cIjAgMCAyMDAgMjQzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xODcuNzE0IDEzMC43MjdDMjA2Ljg2MiA5MC4xNTE1IDE1OC45OTEgNjQuMjAxOSAxMDAuOTgzIDY0LjIwMTlDNDIuOTc1OSA2NC4yMDE5IC00LjMzMDQ0IDkxLjU2NjkgMTAuODc1IDEzMC43MjdDMjYuMDgwNSAxNjkuODg4IDYzLjI1MDEgMjM1LjQ2OSAxMDAuOTgzIDIzNC45OTdDMTM4LjcxNiAyMzQuNTI2IDE2OC41NjYgMTcxLjMwMyAxODcuNzE0IDEzMC43MjdaXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMTVcIi8+PHBhdGggZD1cIk0xMDIuMTEgNjIuMzE0NkMxMDkuOTk1IDM5LjY2NzcgMTI3LjQ2IDI4LjgxNiAxNjkuNjkyIDI0LjA5NzlDMTcyLjUxNCA1Ni4xODExIDEzNS4zMzggNjQuMjAxOCAxMDIuMTEgNjIuMzE0NlpcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIxNVwiLz48cGF0aCBkPVwiTTkwLjg0NjcgNjIuNzg2M0M5MC4yMjg1IDM0LjUxNzggNjYuMDY2NyAyNS4wNDE5IDMxLjcxMjcgMzMuMDYzQzI4Ljg5MDQgNjUuMTQ2MSA2OC44ODI2IDYyLjc4NjMgOTAuODQ2NyA2Mi43ODYzWlwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjE1XCIvPjxwYXRoIGQ9XCJNMTAwLjQyMSA1OC41NDAyQzExNS42MjcgMzkuNjY3NyAxMjcuNDQ3IDEzLjcxODEgODUuMjE0OSA5QzgyLjM5MjYgNDEuMDgzMiA4My41MjU4IDM1LjQyMTQgMTAwLjQyMSA1OC41NDAyWlwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjE1XCIvPjxyZWN0IHg9XCIzOS4wMzQxXCIgeT1cIjk4LjY0NFwiIHdpZHRoPVwiMTkuMTQ4MVwiIGhlaWdodD1cIjMwLjE5NTlcIiByeD1cIjkuNTc0MDdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjxyZWN0IHg9XCI5MC44NDY3XCIgeT1cIjkyLjAzODhcIiB3aWR0aD1cIjE5LjE0ODFcIiBoZWlnaHQ9XCIzMC4xOTU5XCIgcng9XCI5LjU3NDA3XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cmVjdCB4PVwiMTQwLjQwN1wiIHk9XCI5OC42NDRcIiB3aWR0aD1cIjE5LjE0ODFcIiBoZWlnaHQ9XCIzMC4xOTU5XCIgcng9XCI5LjU3NDA3XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cmVjdCB4PVwiMTE2Ljc1M1wiIHk9XCIxMzkuMjJcIiB3aWR0aD1cIjE5LjE0ODFcIiBoZWlnaHQ9XCIzMC4xOTU5XCIgcng9XCI5LjU3NDA3XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cmVjdCB4PVwiNjQuOTQwNFwiIHk9XCIxMzkuMjJcIiB3aWR0aD1cIjE5LjE0ODFcIiBoZWlnaHQ9XCIzMC4xOTU5XCIgcng9XCI5LjU3NDA3XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cmVjdCB4PVwiOTMuMDk5NFwiIHk9XCIxNzYuMDIxXCIgd2lkdGg9XCIxOS4xNDgxXCIgaGVpZ2h0PVwiMzAuMTk1OVwiIHJ4PVwiOS41NzQwN1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PC9zdmc+IgogICAgICAgIH0pOwogICAgICAgIExhbXBhLlNldHRpbmdzQXBpLmFkZFBhcmFtKHsKICAgICAgICAgIGNvbXBvbmVudDogJ3Npc2knLAogICAgICAgICAgcGFyYW06IHsKICAgICAgICAgICAgbmFtZTogJ3Npc2lfcHJldmlldycsCiAgICAgICAgICAgIHR5cGU6ICd0cmlnZ2VyJywKICAgICAgICAgICAgdmFsdWVzOiAnJywKICAgICAgICAgICAgImRlZmF1bHQiOiBmYWxzZQogICAgICAgICAgfSwKICAgICAgICAgIGZpZWxkOiB7CiAgICAgICAgICAgIG5hbWU6ICfQn9GA0LXQtNC/0YDQvtGB0LzQvtGC0YAnLAogICAgICAgICAgICBkZXNjcmlwdGlvbjogJ9Cf0L7QutCw0LfRi9Cy0LDRgtGMINC/0YDQtdC00L/RgNC+0YHQvNC+0YLRgCDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC1INC90LAg0LrQsNGA0YLQvtGH0LrRgycKICAgICAgICAgIH0sCiAgICAgICAgICBvblJlbmRlcjogZnVuY3Rpb24gb25SZW5kZXIoaXRlbSkge30KICAgICAgICB9KTsKICAgICAgfQoKICAgICAgZnVuY3Rpb24gYWRkKCkgewogICAgICAgIHZhciBidXR0b24gPSAkKCI8bGkgY2xhc3M9XCJtZW51X19pdGVtIHNlbGVjdG9yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudV9faWNvXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjI0M1wiIHZpZXdCb3g9XCIwIDAgMjAwIDI0M1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTg3LjcxNCAxMzAuNzI3QzIwNi44NjIgOTAuMTUxNSAxNTguOTkxIDY0LjIwMTkgMTAwLjk4MyA2NC4yMDE5QzQyLjk3NTkgNjQuMjAxOSAtNC4zMzA0NCA5MS41NjY5IDEwLjg3NSAxMzAuNzI3QzI2LjA4MDUgMTY5Ljg4OCA2My4yNTAxIDIzNS40NjkgMTAwLjk4MyAyMzQuOTk3QzEzOC43MTYgMjM0LjUyNiAxNjguNTY2IDE3MS4zMDMgMTg3LjcxNCAxMzAuNzI3WlwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjE1XCIvPjxwYXRoIGQ9XCJNMTAyLjExIDYyLjMxNDZDMTA5Ljk5NSAzOS42Njc3IDEyNy40NiAyOC44MTYgMTY5LjY5MiAyNC4wOTc5QzE3Mi41MTQgNTYuMTgxMSAxMzUuMzM4IDY0LjIwMTggMTAyLjExIDYyLjMxNDZaXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMTVcIi8+PHBhdGggZD1cIk05MC44NDY3IDYyLjc4NjNDOTAuMjI4NSAzNC41MTc4IDY2LjA2NjcgMjUuMDQxOSAzMS43MTI3IDMzLjA2M0MyOC44OTA0IDY1LjE0NjEgNjguODgyNiA2Mi43ODYzIDkwLjg0NjcgNjIuNzg2M1pcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIxNVwiLz48cGF0aCBkPVwiTTEwMC40MjEgNTguNTQwMkMxMTUuNjI3IDM5LjY2NzcgMTI3LjQ0NyAxMy43MTgxIDg1LjIxNDkgOUM4Mi4zOTI2IDQxLjA4MzIgODMuNTI1OCAzNS40MjE0IDEwMC40MjEgNTguNTQwMlpcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIxNVwiLz48cmVjdCB4PVwiMzkuMDM0MVwiIHk9XCI5OC42NDRcIiB3aWR0aD1cIjE5LjE0ODFcIiBoZWlnaHQ9XCIzMC4xOTU5XCIgcng9XCI5LjU3NDA3XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48cmVjdCB4PVwiOTAuODQ2N1wiIHk9XCI5Mi4wMzg4XCIgd2lkdGg9XCIxOS4xNDgxXCIgaGVpZ2h0PVwiMzAuMTk1OVwiIHJ4PVwiOS41NzQwN1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PHJlY3QgeD1cIjE0MC40MDdcIiB5PVwiOTguNjQ0XCIgd2lkdGg9XCIxOS4xNDgxXCIgaGVpZ2h0PVwiMzAuMTk1OVwiIHJ4PVwiOS41NzQwN1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PHJlY3QgeD1cIjExNi43NTNcIiB5PVwiMTM5LjIyXCIgd2lkdGg9XCIxOS4xNDgxXCIgaGVpZ2h0PVwiMzAuMTk1OVwiIHJ4PVwiOS41NzQwN1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PHJlY3QgeD1cIjY0Ljk0MDRcIiB5PVwiMTM5LjIyXCIgd2lkdGg9XCIxOS4xNDgxXCIgaGVpZ2h0PVwiMzAuMTk1OVwiIHJ4PVwiOS41NzQwN1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PHJlY3QgeD1cIjkzLjA5OTRcIiB5PVwiMTc2LjAyMVwiIHdpZHRoPVwiMTkuMTQ4MVwiIGhlaWdodD1cIjMwLjE5NTlcIiByeD1cIjkuNTc0MDdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudV9fdGV4dFwiPtCa0LvRg9Cx0L3QuNGH0LrQsDwvZGl2PlxuICAgICAgICA8L2xpPiIpOwoKICAgICAgICBpZiAodHJ1ZSkgewogICAgICAgICAgdmFyIHB3ID0gJCgnPGRpdj5jZjwvZGl2PicpOwogICAgICAgICAgcHcuY3NzKHsKICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsCiAgICAgICAgICAgIHJpZ2h0OiAnLTAuNmVtJywKICAgICAgICAgICAgYm90dG9tOiAnLTAuNGVtJywKICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsCiAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsCiAgICAgICAgICAgIHBhZGRpbmc6ICcwLjJlbSAwLjRlbScsCiAgICAgICAgICAgIGZvbnRTaXplOiAnMC41ZW0nLAogICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjVlbScsCiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCwKICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScKICAgICAgICAgIH0pOwogICAgICAgICAgYnV0dG9uLmZpbmQoJy5tZW51X19pY28nKS5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJykuYXBwZW5kKHB3KTsKICAgICAgICB9CgogICAgICAgIGJ1dHRvbi5vbignaG92ZXI6ZW50ZXInLCBmdW5jdGlvbiAoKSB7CiAgICAgICAgICBBcGkubWVudShmdW5jdGlvbiAoZGF0YSkgewogICAgICAgICAgICAvLyBsZXQgaXRlbXMgPSBbewogICAgICAgICAgICAvLyAgICAgdGl0bGU6ICfQktGB0LUnCiAgICAgICAgICAgIC8vIH1dCiAgICAgICAgICAgIHZhciBpdGVtcyA9IFtdOwoKICAgICAgICAgICAgaXRlbXMucHVzaCh7CiAgICAgICAgICAgICAgdGl0bGU6ICfQktGB0LUnCiAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7CiAgICAgICAgICAgICAgYS50aXRsZSA9IFV0aWxzLnNvdXJjZVRpdGxlKGEudGl0bGUpOwogICAgICAgICAgICB9KTsKICAgICAgICAgICAgaXRlbXMgPSBpdGVtcy5jb25jYXQoZGF0YSk7CiAgICAgICAgICAgIExhbXBhLlNlbGVjdC5zaG93KHsKICAgICAgICAgICAgICB0aXRsZTogJ9Ch0LDQudGC0YsnLAogICAgICAgICAgICAgIGl0ZW1zOiBpdGVtcywKICAgICAgICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoYSkgewogICAgICAgICAgICAgICAgaWYgKGEucGxheWxpc3RfdXJsKSB7CiAgICAgICAgICAgICAgICAgIExhbXBhLkFjdGl2aXR5LnB1c2goewogICAgICAgICAgICAgICAgICAgIHVybDogYS5wbGF5bGlzdF91cmwsCiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGEudGl0bGUsCiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiAnc2lzaV92aWV3XycgKyBEZWZpbmVkLnVzZV9hcGksCiAgICAgICAgICAgICAgICAgICAgcGFnZTogMQogICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgIExhbXBhLkFjdGl2aXR5LnB1c2goewogICAgICAgICAgICAgICAgICAgIHVybDogJycsCiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQmtC70YPQsdC90LjRh9C60LAnLAogICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ3Npc2lfJyArIERlZmluZWQudXNlX2FwaSwKICAgICAgICAgICAgICAgICAgICBwYWdlOiAxCiAgICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgb25CYWNrOiBmdW5jdGlvbiBvbkJhY2soKSB7CiAgICAgICAgICAgICAgICBMYW1wYS5Db250cm9sbGVyLnRvZ2dsZSgnbWVudScpOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSk7CiAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7fSk7CiAgICAgICAgfSk7CiAgICAgICAgJCgnLm1lbnUgLm1lbnVfX2xpc3QnKS5lcSgwKS5hcHBlbmQoYnV0dG9uKTsKICAgICAgICBhZGRGaWx0ZXIoKTsKICAgICAgICBhZGRTZXR0aW5ncygpOwogICAgICB9CgogICAgICBpZiAod2luZG93LmFwcHJlYWR5KSBhZGQoKTtlbHNlIHsKICAgICAgICBMYW1wYS5MaXN0ZW5lci5mb2xsb3coJ2FwcCcsIGZ1bmN0aW9uIChlKSB7CiAgICAgICAgICBpZiAoZS50eXBlID09ICdyZWFkeScpIGFkZCgpOwogICAgICAgIH0pOwogICAgICB9CiAgICB9CgogICAgaWYgKCF3aW5kb3dbJ3BsdWdpbl9zY2ZfJyArIERlZmluZWQudXNlX2FwaSArICdfcmVhZHknXSkgewogICAgICBzdGFydFBsdWdpbigpOwogICAgICAvKgogICAgICBpZihEZWZpbmVkLnVzZV9hcGkgPT0gJ3B3YScpewogICAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKQogICAgICAgICAgICAgIHMub25sb2FkID0gZnVuY3Rpb24oKXsKICAgICAgICAgICAgICAgICAgQmxhem9yLnN0YXJ0KHsKICAgICAgICAgICAgICAgICAgICAgIGxvYWRCb290UmVzb3VyY2U6IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBkZWZhdWx0VXJpLCBpbnRlZ3JpdHkpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGVmaW5lZC5mcmFtZXdvcmsrJy9fZnJhbWV3b3JrLycgKyBuYW1lCiAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgICAgICAgc3RhcnRQbHVnaW4oKQogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIHMuc2V0QXR0cmlidXRlKCdhdXRvc3RhcnQnLCAnZmFsc2UnKQogICAgICAgICAgICAgIHMuc2V0QXR0cmlidXRlKCdzcmMnLCBEZWZpbmVkLmZyYW1ld29yaysnL19mcmFtZXdvcmsvYmxhem9yLndlYmFzc2VtYmx5LmpzJykKICAgICAgICAgIAogICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocykKICAgICAgfQogICAgICBlbHNlIHN0YXJ0UGx1Z2luKCkKICAgICAgKi8KICAgIH0KCn0pKCk7');

      js = js.replace("{localhost}", hostname+'/sisi');

      const ui = new Uint8Array(js.length)
        for (let i = 0; i < js.length; ++i) {
          ui[i] = js.charCodeAt(i)
      }

      outHeaders.set("content-type", 'application/javascript; charset=utf-8');

      return new Response(new TextDecoder("utf-8").decode(ui), {headers: outHeaders}); 
  }
};