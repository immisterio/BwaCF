import sjs from './s.js';
import proxy from './proxy.js';
import PornHub from './phub.js';
import BongaCams from './bgs.js';

export default {
    async fetch(request, _env) {

        let reqHeaders = new Headers(request.headers),
            outHeaders = new Headers({
                "Access-Control-Allow-Origin": reqHeaders.get('Origin') || reqHeaders.get('Referer') || "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": reqHeaders.get('Access-Control-Allow-Headers') || "Accept, Authorization, Cache-Control, Content-Type, DNT, If-Modified-Since, Keep-Alive, Origin, User-Agent, X-Requested-With, Token, x-access-token"
            });

        let fp = {
            method: request.method,
            headers: {}
        }

        const allowHeaders = ['connection', 'accept-encoding'];
        for (let h of reqHeaders.entries()) {
            const key = h[0],
                value = h[1];
            if (allowHeaders.includes(key.toLowerCase())) {
                fp.headers[key] = value;
            }
        }

        fp.headers['Accept-Language'] = 'ru-RU,ru;q=0.9,en-US;q=0.6,en;q=0.5';
        fp.headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36';

        const uri = new URL(request.url);
        let hostname = 'https://' + uri.hostname;
        let init = { host: hostname, proxy: `${hostname}/proxy/`, rsize: `${hostname}/rsize/` }

        if (uri.pathname.startsWith('/proxy/')) {
            return proxy.fetch(hostname, request, fp, outHeaders);
        }
        else if (uri.pathname.startsWith('/s.js')) {
            return sjs.plain(hostname, outHeaders);
        } 
        else if (uri.pathname.startsWith('/phub')) {
            return new PornHub().fetch(init, request, fp, outHeaders);
        }
		else if (uri.pathname.startsWith('/bgs')) {
            return new BongaCams().fetch(init, request, fp, outHeaders);
        }
        else if (uri.pathname.startsWith('/sisi')) 
        {
            outHeaders.set("content-type", 'application/json; charset=utf-8');

            return new Response(JSON.stringify({
                title: "Дрочильня",
                channels: [
                    {
                        "title": "pornhub.com",
                        "playlist_url": `${hostname}/phub`
                    },
					{
                        "title": "bongacams.com",
                        "playlist_url": `${hostname}/bgs`
                    }
                ]
            }), { headers: outHeaders });
        }

        return new Response('api work', { headers: outHeaders });
    }
}