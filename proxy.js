export default {
    async fetch(hostname, request, fp, outHeaders) {
        
        let url = request.url.substr(8); 
        url = url.substr(url.indexOf('/') + 7);
        
        let fr = (await fetch(url, fp));

        let outCt = fr.headers.get('content-type');

        if (outCt && outCt != "") {
            outHeaders.set("content-type", outCt);
        }

        return new Response(fr.body, {
            status: fr.status,
            statusText: fr.statusText,
            headers: outHeaders
        })
    }
  };