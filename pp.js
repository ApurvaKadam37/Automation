<!doctype html>
<!--[if IE 7 ]><html
lang="en-US" xmlns:fb="http://ogp.me/ns/fb#" class="no-js ie7" dir='ltr'> <![endif]-->
<!--[if IE 8 ]><html
lang="en-US" xmlns:fb="http://ogp.me/ns/fb#" class="no-js ie8" dir='ltr'> <![endif]-->
<!--[if IE 9 ]><html
lang="en-US" xmlns:fb="http://ogp.me/ns/fb#" class="no-js ie9" dir='ltr'> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="en-US" xmlns:fb="http://ogp.me/ns/fb#" class="no-js adobe-dtm-enabled" dir='ltr'>
<!--<![endif]--><head> <script src="https://c.evidon.com/dg/dg.js" companyid="2523"></script> <link rel="preconnect" href="wa-na.unileversolutions.com"><meta charset="UTF-8"/> <script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var o=n[t]={exports:{}};e[t][0].call(o.exports,function(n){var o=e[t][1][n];return r(o||n)},o,o.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<t.length;o++)r(t[o]);return r}({1:[function(e,n,t){function r(){}function o(e,n,t){return function(){return i(e,[c.now()].concat(u(arguments)),n?null:this,t),n?void 0:this}}var i=e("handle"),a=e(3),u=e(4),f=e("ee").get("tracer"),c=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(e,n){s[n]=o(d+n,!0,"api")}),s.addPageAction=o(d+"addPageAction",!0),s.setCurrentRouteName=o(d+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,o="function"==typeof n;return i(l+"tracer",[c.now(),e,t],r),function(){if(f.emit((o?"":"no-")+"fn-start",[c.now(),r,o],t),o)try{return n.apply(this,arguments)}catch(e){throw f.emit("fn-err",[arguments,this,e],t),e}finally{f.emit("fn-end",[c.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=o(l+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),i("err",[e,c.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){if(!o)return!1;if(e!==o)return!1;if(!n)return!0;if(!i)return!1;for(var t=i.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var o=null,i=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var u=navigator.userAgent,f=u.match(a);f&&u.indexOf("Chrome")===-1&&u.indexOf("Chromium")===-1&&(o="Safari",i=f[1])}n.exports={agent:o,version:i,match:r}},{}],3:[function(e,n,t){function r(e,n){var t=[],r="",i=0;for(r in e)o.call(e,r)&&(t[i]=n(r,e[r]),i+=1);return t}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],4:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,o=t-n||0,i=Array(o<0?0:o);++r<o;)i[r]=e[n+r];return i}n.exports=r},{}],5:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function o(e){function n(e){return e&&e instanceof r?e:e?f(e,u,i):i()}function t(t,r,o,i){if(!d.aborted||i){e&&e(t,r,o);for(var a=n(o),u=v(t),f=u.length,c=0;c<f;c++)u[c].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function l(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return p[e]=p[e]||o(t)}function w(e,n){c(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var h={},y={},b={on:l,addEventListener:l,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:w,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u="nr@context",f=e("gos"),c=e(3),s={},p={},d=n.exports=o();d.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(o.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[n]=r,r}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){o.buffer([e],r),o.emit(e,n,t)}var o=e("ee").get("handle");n.exports=r,r.ee=o},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!E++){var e=x.info=NREUM.info,n=l.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();c(y,function(n,t){e[n]||(e[n]=t)}),f("mark",["onload",a()+x.offset],null,"api");var t=l.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function o(){"complete"===l.readyState&&i()}function i(){f("mark",["domContent",a()+x.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-x.offset}var u=(new Date).getTime(),f=e("handle"),c=e(3),s=e("ee"),p=e(2),d=window,l=d.document,m="addEventListener",v="attachEvent",g=d.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:g,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1130.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),x=n.exports={offset:u,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};e(1),l[m]?(l[m]("DOMContentLoaded",i,!1),d[m]("load",r,!1)):(l[v]("onreadystatechange",o),d[v]("onload",r)),f("mark",["firstbyte",u],null,"api");var E=0,O=e(5)},{}]},{},["loader"]);
;NREUM.loader_config={accountID:"1999784",trustKey:"93570",agentID:"147898224",licenseKey:"e4cdc4fe41",applicationID:"147913035"}
;NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"e4cdc4fe41",applicationID:"147913035",sa:1}</script> <title>#QtipsHacks</title><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="#QtipsHacks are here for all those extra creative solutions for all of life's little problems."><meta name="keywords" content=""><meta name="robots" content="noydir,noodp"/><meta property="og:url" content="https://www.qtips.com/qtipshacks/"/><meta property="og:title" content="Qtips Hacks"/><meta property="og:image" content="https://www.qtips.com/wp-content/uploads/sites/95/2017/12/logo.png"/><meta property="og:site_name" content="qtips"/><meta property="og:type" content="article"/><meta property="og:description" content="#QtipsHacks are here for all those extra creative solutions for all of life's little problems."/><link rel="apple-touch-icon" sizes="114x114" href="https://www.qtips.com/wp-content/uploads/sites/95/2017/12/x114.png,qx20440.pagespeed.ic.40YFjR5sMS.png"/><link rel="apple-touch-icon" sizes="114x114" href="https://www.qtips.com/wp-content/uploads/sites/95/2017/12/x72.png,qx20440.pagespeed.ic.uwm1Tift_D.png"/><link rel="apple-touch-icon" sizes="72x72" href="https://www.qtips.com/wp-content/uploads/sites/95/2017/12/x57.png,qx20440.pagespeed.ic.vZ0wriiFvq.png"/><link rel="shortcut icon" href="https://www.qtips.com/wp-content/uploads/sites/95/2017/12/xfavicon.png,qx20440.pagespeed.ic.WBHYNckDTU.png">
<!--[if lt IE 9]> <script src="https://www.qtips.com/wp-content/themes/bwslite_r1/js/libs/html5shiv.js?x20440"></script> <![endif]--> <script type="text/javascript">var genericFormServiceUrl = 'https://data.unileversolutions.com/v2/genericformservice/api/forms';
                                document.addEventListener('DOMContentLoaded', function() {
					
					function AddTypekit(){
						var config = {
							kitId: 'apo3tme'
						};
						var d = false;
						var tk = document.createElement('script');
						tk.src = '//use.typekit.net/' + config.kitId + '.js';
						tk.type = 'text/javascript';
						tk.async = 'true';
						tk.onload = tk.onreadystatechange = function () {
							var rs = this.readyState;
							if (d || rs && rs != 'complete' && rs != 'loaded')
								return;
							d = true;
							try {
								Typekit.load(config);
							} catch (e) {
							}
						};
						var s = document.getElementsByTagName('script')[0];
						s.parentNode.insertBefore(tk, s);
					}
					try{
						bwsliteLiberary.App.onWindowLoadTrigger(AddTypekit,[]);
					}catch(error){
						console.log('Header.php says:'+error)
					}
				})</script> <script>//UDM declaration for adobe analytics
       function isMobile() {
		var check = false;
		(function(a) {if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.		(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)		|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi		(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)		|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-|		|o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)		|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po		(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa		(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm		(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)		|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)		|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
		check = true;}})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
		}

		var channelVal;
		if (isMobile()) {
		channelVal = "Mobile Site";
		} else {
		channelVal = "Brand Site";
		}
		digitalData = {
			siteInfo : {
				channel : '',
				sitetype : 'Digital 2.0 Lite'
			},
			page : {
				pageInfo : {
					pageURL : "https://www.qtips.com/qtipshacks/"
				},
				category : {
					pageType : "Static Page"
				}
			},
			video : [],
			campaign: [],
			product : [],
			privacy : {
				accessCategories : [ {
					domains : []
				} ]
			},
			component : [],
			trackingInfo : {
					GID : '',
					"un" : "",
					tool : [ {
					ids : ""
					} ]
			},
			promotion : []
		}
		digitalData.siteInfo.channel = channelVal;
		digitalData.page.category.primaryCategory = channelVal;
		digitalData.trackingInfo = {};
		digitalData.trackingInfo.tool = [ {} ];
		digitalData.privacy = {};
		digitalData.page.attributes = {};
                digitalData.page.entity = {};
		digitalData.privacy.accessCategories = [ {} ];
		digitalData.privacy.accessCategories[0].domains = [];
		digitalData.event = [];
		digitalData.page.pageInfo.pageName = "#QtipsHacks"; //To be set on each page change
		digitalData.page.pageInfo.language = "en_US";
		                digitalData.page.category.subCategory1 = "QTIPSHACKS";
                		digitalData.page.attributes.contentType = "#QtipsHacks";
		digitalData.page.attributes.articleName = "";
		digitalData.page.attributes.brandCategory = 'Personal Care';
		digitalData.page.attributes.country = 'US';
		digitalData.page.attributes.globalBrand = 'Q-Tips';
		digitalData.page.attributes.localBrand = 'Q-Tips';
		//digitalData.user[n].profile[n].profileInfo.crmID = 'CRM ID'; //Optional
		digitalData.trackingInfo.tool[0].id = "UA-34147723-14,G-FWE2GDLEC1,G-K257S23T0D";
                //new
                digitalData.sitespeed = {};
                digitalData.sitespeed.applicationID ="147913035";
                digitalData.sitespeed.licenseKey = "e4cdc4fe41";
                digitalData.sitespeed.locale = "";
                digitalData.trackingInfo.tool[1] = {};
                digitalData.trackingInfo.tool[1].id = "unileverna-qtips-us,unileverna-global-allbrands";
                digitalData.siteInfo.internalDomain = "qtips.com"</script> <script>document.addEventListener('DOMContentLoaded', function(){
				   
				function loadAdobe(url){
					
                    var launch = document.createElement('script');
                    launch.src = url;
                    launch.type = 'text/javascript';
                    launch.async = 'true';                  
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(launch, s);
				}
				try{
				bwsliteLiberary.App.onWindowLoadTrigger(loadAdobe,['//assets.adobedtm.com/e6bd1902389a/633dd490ad68/launch-ec8b08881b01.min.js']);
				}catch(error){
					console.log('Header.php says:'+error)
				}
			});</script> <link rel='canonical' href='https://www.qtips.com/qtipshacks/'/><link rel='dns-prefetch' href='//s.w.org'/><link rel='stylesheet' id='smarlabel_style-css' href='https://www.qtips.com/wp-content/lib/extensions/smartlabel/css/custom.css?x20440&amp;ver=5.1.12' type='text/css' media='all'/><link rel='stylesheet' id='bootstrapcss-css' href='https://www.qtips.com/wp-content/themes/bwslite_r1/css/framework/bootstrap.min.css?x20440&amp;ver=5.1.12' type='text/css' media='all'/><link rel='stylesheet' id='bootstrap-responsive-css' href='https://www.qtips.com/wp-content/themes/bwslite_r1/css/framework/bootstrap-responsive.min.css?x20440&amp;ver=5.1.12' type='text/css' media='all'/><link rel='stylesheet' id='bwslite-css' href='https://www.qtips.com/wp-content/themes/bwslite_r1/css/custom/bwslite.min.css?x20440&amp;ver=5.1.12' type='text/css' media='all'/><link rel='stylesheet' id='style-css' href='https://www.qtips.com/wp-content/themes/www.qtips.com_theme/style.css?x20440&amp;ver=1484647360' type='text/css' media='all'/><link rel='stylesheet' id='wcag-css' href='https://www.qtips.com/wp-content/lib/extensions/wcag/css/wcag.css?x20440&amp;ver=5.1.12' type='text/css' media='all'/><link rel='stylesheet' id='custom-style-css' href='https://www.qtips.com/wp-content/themes/www.qtips.com_theme/custom.css?x20440&amp;ver=1678081076' type='text/css' media='all'/><link rel='stylesheet' id='wp-block-library-css' href='https://www.qtips.com/wp-includes/css/dist/block-library/style.min.css?x20440&amp;ver=5.1.12' type='text/css' media='all'/><link rel='stylesheet' id='mo_saml_admin_settings_style-css' href='https://www.qtips.com/wp-content/plugins/miniorange-saml-cloud/includes/css/jquery.ui.css?x20440&amp;ver=5.1.12' type='text/css' media='all'/> <script type="text/javascript" src="https://www.qtips.com/wp-content/cache/minify/95/4c42c.js?x20440"></script> <link rel='https://api.w.org/' href='https://www.qtips.com/wp-json/'/><link rel='shortlink' href='https://www.qtips.com/?p=3896'/><link rel="alternate" type="application/json+oembed" href="https://www.qtips.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.qtips.com%2Fqtipshacks%2F"/><link rel="alternate" type="text/xml+oembed" href="https://www.qtips.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.qtips.com%2Fqtipshacks%2F&#038;format=xml"/> <script type="application/ld+json">{"@context":"http:\/\/schema.org\/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https:\/\/www.qtips.com","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"https:\/\/www.qtips.com\/qtipshacks\/","name":"QTIPSHACKS"}}]}</script> <script>var is_epsilon_cookie_required = 1;
            var epsilon_cookie_name = 'unileverid';
            var epsilon_cookie_expiry = 180;            
            var epsilon_cookie_path = '';
            var epsilon_signup_post = '3896';
            //var source_cookie = _satellite.getVisitorId().getMarketingCloudVisitorID();
            var ajaxurl = "https://www.qtips.com/wp-admin/admin-ajax.php";</script> <script type='text/javascript'>(function (id) {
                function append(scriptid, url, async) {
                    var d = document, sn = 'script', f = d.getElementsByTagName(sn)[0];
                    if (!f) f = d.head;
                    var s = d.createElement(sn);
                    s.async = async;
                    s.id = scriptid;
                    s.src = url;
                    s.charset = 'utf-8';
                    f.parentNode.insertBefore(s, f);
                }

                function is2parttld(value) {
                    var tldindicators = ['co', 'com', 'info', 'web', 'info', 'gov', 'edu', 'biz', 'net', 'org'];
                    var countryindicators = ['uk', 'us', 'fr', 'es', 'de', 'at', 'au', 'ae', 'be', 'br', 'ca', 'ch', 'cn', 'co', 'cz', 'dk', 'eg', 'eu', 'fi', 'gb', 'gr', 'hk', 'hr', 'hu', 'ie', 'in', 'jp', 'mx', 'nl', 'no', 'nz', 'pl', 'ro', 'ru', 'se'];
                    return (tldindicators.indexOf(value) !== -1 || countryindicators.indexOf(value) !== -1);
                }

                function getRootDomain() {
                    var parts = window.location.hostname.split('.');
                    if (parts.length === 2) rootDomain = parts[0];
                    else if (parts.length > 2) {
                        // see if the next to last value is a common tld
                        var part = parts[parts.length - 2];
                        if (is2parttld(part)) {
                            rootDomain = parts[parts.length - 3]; // go back one more
                        }
                        else {
                            rootDomain = part;
                        }
                    }

                    return rootDomain;
                }

                window.evidon = {};
                window.evidon.id = id;
                window.evidon.test = false;  // set to true for non-production testing.
                //window.evidon.userid = '';

                var cdn = '//c.evidon.com/', rootDomain = getRootDomain(), noticecdn = cdn + 'sitenotice/';
                append('evidon-notice', noticecdn + 'evidon-sitenotice-tag.js', false);
                append('evidon-location', cdn + 'geo/country.js', true);
                append('evidon-themes', noticecdn + id + '/snthemes.js', true);
                if (rootDomain) append('evidon-settings', noticecdn + id + '/' + rootDomain + (window.evidon.test ? '/test' : '') + '/settings.js', true);

                window.evidon.priorConsentCallback = function (categories, vendors, cookies) {
                    // add the tags which need to wait for prior consent
                    // here.  This should be all your advertising tags and
                    // probably most of your social and tracking tags.
                    var handlers = {
                        categories: {},
                        vendors: {
                            '33across': 'handle33Across',
                            'addthis': 'handleAddThis',
                            'adform': 'handleAdform',
                            'adobe': 'handleAdobe',
                            'adobe-creative-cloud-typekit': 'handleAdobeCreativeCloud',
                            'adobe-marketing-cloud-analytics': 'handleAdobeExperienceCloudAnalytics',
                            'adobe-marketing-cloud-audience-manager': 'handleAdobeExperienceCloudAudienceManager',
                            'adobe-marketing-cloud-target': 'handleAdobeExperienceCloudTarget',
                            'akamai-technologies': 'handleAkamaiTechnologies',
                            'amazon-associates': 'handleAmazonAssociates',
                            'amazon-web-services': 'handleAmazonWebServices',
                            'amobee': 'handleAmobee',
                            'aol-advertising': 'handleAOLAdvertising',
                            'appnexus': 'handleAppNexus',
                            'apture': 'handleAptureGoogle',
                            'bazaarvoice': 'handleBazaarvoice',
                            'bombora': 'handleBombora',
                            'brightcove': 'handleBrightcove',
                            'cdnjs': 'handleCDNJS',
                            'decibel-insight': 'handleDecibelInsight',
                            'dotomi': 'handleDotomi',
                            'doubleclick': 'handleDoubleClick',
                            'doubleclick-bid-manager-formerly-invite-media': 'handleDoubleClickBidManagerformerlyInviteMedia',
                            'dstillery-formerly-media6degrees': 'handleDstilleryformerlyMedia6Degrees',
                            'Epsilon-Conversant': 'handleEpsilonConversant',
                            'evidon': 'handleEvidon',
                            'exelate': 'handleeXelate',
                            'eyeota': 'handleEyeota',
                            'facebook': 'handleFacebook',
                            'facebook-custom-audience': 'handleFacebookBusinessformerlyFacebookCustomAudience',
                            'facebook-connect': 'handleFacebookforDevelopersformerlyFacebookConnect',
                            'freewheel': 'handleFreeWheel',
                            'full-circle-studies': 'handleFullCircleStudies',
                            'gigya': 'handleGigya',
                            'google-ad-services': 'handleGoogleAdServices',
                            'google-adsense': 'handleGoogleAdSense',
                            'google-adwords': 'handleGoogleAdWords',
                            'google-analytics': 'handleGoogleAnalytics',
                            'googlefonts': 'handleGoogleFonts',
                            'google': 'handleGoogleInc',
                            'google-maps': 'handleGoogleMaps',
                            'google-tag-manager': 'handleGoogleTagManager',
                            'casale-media': 'handleIndexExchangeFormerlyCasaleMedia',
                            'iponweb': 'handleIPONWEB',
                            'jquery': 'handlejQuery',
                            'liveramp': 'handleLiveRamp',
                            'lotame': 'handleLotame',
                            'media-innovation-group': 'handleMediaInnovationGroup',
                            'medianet': 'handlemedianet',
                            'microsoft-advertising': 'handleMicrosoftAdvertising',
                            'aggregate-knowledge': 'handleNeustarMarketingFormerlyPlatformOne',
                            'new-relic': 'handleNewRelic',
                            'olapic': 'handleOlapic',
                            'optanon-cookie-law': 'handleOneTrust',
                            'openx': 'handleOpenX',
                            'bluekai': 'handleOracleDataCloud',
                            'pinterest': 'handlePinterest',
                            'placed': 'handlePlaced',
                            'price-spider': 'handlePriceSpider',
                            'pubmatic': 'handlePubMatic',
                            'pulsepoint-ad-exchange': 'handlePulsepointAdExchange',
                            'rubicon-project': 'handleRubiconProject',
                            'rythmone': 'handleRythmOne',
                            'salesforce': 'handleSalesforce',
                            'krux-digital': 'handleSalesforceDMPFormerlyKruxDigital',
                            'semasio': 'handleSemasio',
                            'sharethrough': 'handleSharethrough',
                            'simplifi': 'handleSimplifi',
                            'sizmek-formerly-mediamind': 'handleSizmek',
                            'snap-inc': 'handleSnapInc',
                            'spotxchange': 'handleSpotXchange',
                            'survata': 'handleSurvata',
                            'taboola': 'handleTaboola',
                            'tapad': 'handleTapad',
                            'the-trade-desk': 'handleTheTradeDesk',
                            'tremor-video': 'handleTremorVideo',
                            'triplelift': 'handleTripleLift',
                            'turnto-networks': 'handleTurnToNetworks',
                            'twitter': 'handleTwitter',
                            'unilever': 'handleUnilever',
                            'unileverfoodsolutions': 'handleUnileverFoodSolutions',
                            'unruly-media': 'handleUnruly',
                            'visualiq': 'handleVisualIQ',
                            'yahoo': 'handleYahoo',
                            'youtube': 'handleYouTube',
                            'zeotap': 'handleZeoTap',
                        }
                    };

                    for (var category in categories) {
                        if (!categories[category]) continue;
                        var handler = window.evidon[handlers.categories[category]];
                        if (typeof handler === 'function') handler();
                    }
                    for (var vendor in vendors) {
                        if (!vendors[vendor]) continue;
                        var handler = window.evidon[handlers.vendors[vendor]];
                        if (typeof handler === 'function') handler();
                    }
                }

                window.evidon.closeCallback = function () {
                    // this is executed if the user closed a UI element without either Accepting (providing consent)
                    // or Declining (declining to provide consent).
                }

                window.evidon.consentWithdrawnCallback = function () {
                    // this is exeucted if the user withdraws consent and elects to
                    // no longer allow technologies to run on the site.
                }

                window.evidon.consentDeclinedCallback = function () {
                    // this is executed if the user explicitly declines giving consent by
                    // using a Decline button
                }
            })(2523);</script> <script data-pagespeed-no-defer>//<![CDATA[
(function(){function f(a,b,d){if(a.addEventListener)a.addEventListener(b,d,!1);else if(a.attachEvent)a.attachEvent("on"+b,d);else{var c=a["on"+b];a["on"+b]=function(){d.call(this);c&&c.call(this)}}};window.pagespeed=window.pagespeed||{};var g=window.pagespeed;function k(a){this.g=[];this.f=0;this.h=!1;this.j=a;this.i=null;this.l=0;this.b=!1;this.a=0}function l(a,b){var d=b.getAttribute("data-pagespeed-lazy-position");if(d)return parseInt(d,0);var d=b.offsetTop,c=b.offsetParent;c&&(d+=l(a,c));d=Math.max(d,0);b.setAttribute("data-pagespeed-lazy-position",d);return d}
function m(a,b){var d,c,e;if(!a.b&&(0==b.offsetHeight||0==b.offsetWidth))return!1;a:if(b.currentStyle)c=b.currentStyle.position;else{if(document.defaultView&&document.defaultView.getComputedStyle&&(c=document.defaultView.getComputedStyle(b,null))){c=c.getPropertyValue("position");break a}c=b.style&&b.style.position?b.style.position:""}if("relative"==c)return!0;e=0;"number"==typeof window.pageYOffset?e=window.pageYOffset:document.body&&document.body.scrollTop?e=document.body.scrollTop:document.documentElement&&
document.documentElement.scrollTop&&(e=document.documentElement.scrollTop);d=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;c=e;e+=d;var h=b.getBoundingClientRect();h?(e=h.top-d,c=h.bottom):(h=l(a,b),d=h+b.offsetHeight,e=h-e,c=d-c);return e<=a.f&&0<=c+a.f}
k.prototype.m=function(a){p(a);var b=this;window.setTimeout(function(){var d=a.getAttribute("data-pagespeed-lazy-src");if(d)if((b.h||m(b,a))&&-1!=a.src.indexOf(b.j)){var c=a.parentNode,e=a.nextSibling;c&&c.removeChild(a);a.c&&(a.getAttribute=a.c);a.removeAttribute("onload");a.tagName&&"IMG"==a.tagName&&g.CriticalImages&&f(a,"load",function(){g.CriticalImages.checkImageForCriticality(this);b.b&&(b.a--,b.a||g.CriticalImages.checkCriticalImages())});a.removeAttribute("data-pagespeed-lazy-src");a.removeAttribute("data-pagespeed-lazy-replaced-functions");
c&&c.insertBefore(a,e);if(c=a.getAttribute("data-pagespeed-lazy-srcset"))a.srcset=c,a.removeAttribute("data-pagespeed-lazy-srcset");a.src=d}else b.g.push(a)},0)};k.prototype.loadIfVisibleAndMaybeBeacon=k.prototype.m;k.prototype.s=function(){this.h=!0;q(this)};k.prototype.loadAllImages=k.prototype.s;function q(a){var b=a.g,d=b.length;a.g=[];for(var c=0;c<d;++c)a.m(b[c])}function t(a,b){return a.a?null!=a.a(b):null!=a.getAttribute(b)}
k.prototype.u=function(){for(var a=document.getElementsByTagName("img"),b=0,d;d=a[b];b++)t(d,"data-pagespeed-lazy-src")&&p(d)};k.prototype.overrideAttributeFunctions=k.prototype.u;function p(a){t(a,"data-pagespeed-lazy-replaced-functions")||(a.c=a.getAttribute,a.getAttribute=function(a){"src"==a.toLowerCase()&&t(this,"data-pagespeed-lazy-src")&&(a="data-pagespeed-lazy-src");return this.c(a)},a.setAttribute("data-pagespeed-lazy-replaced-functions","1"))}
g.o=function(a,b){function d(){if(!(c.b&&a||c.i)){var b=200;200<(new Date).getTime()-c.l&&(b=0);c.i=window.setTimeout(function(){c.l=(new Date).getTime();q(c);c.i=null},b)}}var c=new k(b);g.lazyLoadImages=c;f(window,"load",function(){c.b=!0;c.h=a;c.f=200;if(g.CriticalImages){for(var b=0,d=document.getElementsByTagName("img"),r=0,n;n=d[r];r++)-1!=n.src.indexOf(c.j)&&t(n,"data-pagespeed-lazy-src")&&b++;c.a=b;c.a||g.CriticalImages.checkCriticalImages()}q(c)});b.indexOf("data")&&((new Image).src=b);f(window,
"scroll",d);f(window,"resize",d)};g.lazyLoadInit=g.o;})();

pagespeed.lazyLoadInit(false, "https://www.qtips.com/wp-content/1.gif");

//]]></script></head><body id="0" class="page-template-default page page-id-3896"> <script>(function() {
			function f(a, b, d) {
					if (a.addEventListener)
							a.addEventListener(b, d, !1);
					else if (a.attachEvent)
							a.attachEvent("on" + b, d);
					else {
							var c = a["on" + b];
							a["on" + b] = function() {
									d.call(this);
									c && c.call(this)
							}
					}
			}
			;window.pagespeed = window.pagespeed || {};
			var g = window.pagespeed;
			function k(a) {
					this.g = [];
					this.f = 0;
					this.h = !1;
					this.j = a;
					this.i = null;
					this.l = 0;
					this.b = !1;
					this.a = 0
			}
			function l(a, b) {
					var d = b.getAttribute("data-pagespeed-lazy-position");
					if (d)
							return parseInt(d, 0);
					var d = b.offsetTop
					  , c = b.offsetParent;
					c && (d += l(a, c));
					d = Math.max(d, 0);
					b.setAttribute("data-pagespeed-lazy-position", d);
					return d
			}
			function m(a, b) {
					var d, c, e;
					if (!a.b && (0 == b.offsetHeight || 0 == b.offsetWidth))
							return !1;
						
					if (0 == b.getBoundingClientRect().height && 0 == b.getBoundingClientRect().bottom)
							return !1;
					a: if (b.currentStyle)
							c = b.currentStyle.position;
					else {
							if (document.defaultView && document.defaultView.getComputedStyle && (c = document.defaultView.getComputedStyle(b, null))) {
									c = c.getPropertyValue("position");
									break a
							}
							c = b.style && b.style.position ? b.style.position : ""
					}
					/* if ("relative" == c)
							return !0; */
					e = 0;
					"number" == typeof window.pageYOffset ? e = window.pageYOffset : document.body && document.body.scrollTop ? e = document.body.scrollTop : document.documentElement && document.documentElement.scrollTop && (e = document.documentElement.scrollTop);
					d = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
					c = e;
					e += d;
					var h = b.getBoundingClientRect();
					h ? (e = h.top - d,
					c = h.bottom) : (h = l(a, b),
					d = h + b.offsetHeight,
					e = h - e,
					c = d - c);
					return e <= a.f && 0 <= c + a.f
			}
			k.prototype.m = function(a) {
					p(a);
					var b = this;
					window.setTimeout(function() {
							var d = a.getAttribute("data-pagespeed-lazy-src");
							if (d)
									if ((b.h || m(b, a)) && -1 != a.src.indexOf(b.j)) {
											var c = a.parentNode
											  , e = a.nextSibling;
											c && c.removeChild(a);
											a.c && (a.getAttribute = a.c);
											a.removeAttribute("onload");
											a.tagName && "IMG" == a.tagName && g.CriticalImages && f(a, "load", function() {
													g.CriticalImages.checkImageForCriticality(this);
													b.b && (b.a--,
													b.a || g.CriticalImages.checkCriticalImages())
											});
											a.removeAttribute("data-pagespeed-lazy-src");
											a.removeAttribute("data-pagespeed-lazy-replaced-functions");
											c && c.insertBefore(a, e);
											if (c = a.getAttribute("data-pagespeed-lazy-srcset"))
													a.srcset = c,
													a.removeAttribute("data-pagespeed-lazy-srcset");
											a.src = d
									} else
											b.g.push(a)
					}, 0)
			}
			;
			k.prototype.loadIfVisibleAndMaybeBeacon = k.prototype.m;
			k.prototype.s = function() {
					this.h = !0;
					q(this)
			}
			;
			k.prototype.loadAllImages = k.prototype.s;
			function q(a) {
					var b = a.g
					  , d = b.length;
					a.g = [];
					for (var c = 0; c < d; ++c)
							a.m(b[c])
			}
			function t(a, b) {
					return a.a ? null != a.a(b) : null != a.getAttribute(b)
			}
			k.prototype.u = function() {
					for (var a = document.getElementsByTagName("img"), b = 0, d; d = a[b]; b++)
							t(d, "data-pagespeed-lazy-src") && p(d)
			}
			;
			k.prototype.overrideAttributeFunctions = k.prototype.u;
			function p(a) {
					t(a, "data-pagespeed-lazy-replaced-functions") || (a.c = a.getAttribute,
					a.getAttribute = function(a) {
							"src" == a.toLowerCase() && t(this, "data-pagespeed-lazy-src") && (a = "data-pagespeed-lazy-src");
							return this.c(a)
					}
					,
					a.setAttribute("data-pagespeed-lazy-replaced-functions", "1"))
			}
			g.o = function(a, b) {
					function d() {
							if (!(c.b && a || c.i)) {
									var b = 200;
									200 < (new Date).getTime() - c.l && (b = 0);
									c.i = window.setTimeout(function() {
											c.l = (new Date).getTime();
											q(c);
											c.i = null
									}, b)
							}
					}
					var c = new k(b);
					g.lazyLoadImages = c;
					f(window, "load", function() {
							c.b = !0;
							c.h = a;
							c.f = 5;
							if (g.CriticalImages) {
									for (var b = 0, d = document.getElementsByTagName("img"), r = 0, n; n = d[r]; r++)
											-1 != n.src.indexOf(c.j) && t(n, "data-pagespeed-lazy-src") && b++;
									c.a = b;
									c.a || g.CriticalImages.checkCriticalImages()
							}
							q(c)
					});
					b.indexOf("data") && ((new Image).src = b);
					f(window, "scroll", d);
					f(window, "resize", d);
					f(window, "click", d);
					//slider event trigger event
					jQuery('document').ready(function(){
						if(jQuery('#time_interval').val()){
							jQuery('.carousel').each(function () {							 
								jQuery(this).on("slid",d); 	
							});
						};				
					});
				
			}
			;
			g.lazyLoadInit = g.o;
		}
		)();
		pagespeed.lazyLoadInit(false, "https://www.qtips.com/wp-content/1.gif");</script>
<a tabindex="1" class="skip-link screen-reader-text" href="#main">Skip to main content</a>
<header id="header" class="modern-header">
<section class="banner clearfix"><div class="container">
<a class="logo pull-left" data-ct-attr="Header_Logo_Click" data-ct-identifier="Header_Logo_Click" data-ct-category="Engagement" data-ct-action="Click To Action" data-ct-information="D2 Lite - Logo Click - https://www.qtips.com" href="https://www.qtips.com" title="qtips">
<img alt="Q-tips®" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2017/12/xlogo.png,qx20440.pagespeed.ic.qr5INK1J7W.png" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</a><div class='menuWrapper'><div class="social-icons pull-right social-button follow-icon">
<a aria-label='Open Link in New Window' DATA-CT-ACTION="Clicks to Social Platforms" DATA-CT-CATEGORY="Advocacy" DATA-CT-IDENTIFIER="Body - Facebook -https://www.facebook.com/qtips" DATA-CT-INFORMATION="Body - Facebook -https://www.facebook.com/qtips" class="social-facebook" href="https://www.facebook.com/qtips" title="facebook">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAMAAAA8w5+RAAAA6lBMVEX///87V507V50cPI0iQpE7V51nfLOxvNj///87V50AG3oAIn4RM4gUNooZOowaOowbPI0cPI0hQZAiQZAiQpElRJImRZMqSZUtS5YuTJYvTJcwTZcxTpgyUJk0UZk2U5o3U5s3VJs4VZw5VZw5Vpw6Vp07V508WJ09WJ49WZ4+WZ5AXKBBXKBCXaFDXqFLZaVNZqZXb6tYcKtacq1kerJnfLNxhbh3irt6jbx7jb2JmsSWpcqcqs6ir9GjsNGksdGksdKms9OotdSxvNi1v9q6xN3M0+XQ1+fU2unW3Ovy9Pnz9fn4+fv///8DTpnXAAAACnRSTlMAr7Hy8vLy8vLzU79KuAAAAL1JREFUGNOV0UcSglAQBNBv+ComDKhgFnUw55xz7vtfx40IFi60l69qaqamGfs5Nm6JjZE5aj6vEhET3lItRuKKLGskMK5bJSuNjpfLJqVyA0vRBQDcEjkTxgYAHveTUjBhaAcsM81WmUwYPgA9fzKtvbGhiN410PaJUk3TUenPxmdgPZ1NckUdA3O8co0VrLgNlq3jXflj0Qro+ES5/nHSHhhKRPQXClYUjCcbSMyul+BwezwuJ+ec27/29gTCvTn27IXQ+wAAAABJRU5ErkJggg==" alt="facebook icon">
</a>
<a aria-label='Open Link in New Window' DATA-CT-ACTION="Clicks to Social Platforms" DATA-CT-CATEGORY="Advocacy" DATA-CT-IDENTIFIER="Body - Follow on Twitter - https://www.twitter.com/qtips" DATA-CT-INFORMATION="Body - Follow on Twitter - https://www.twitter.com/qtips" class="social-twitter" href="https://www.twitter.com/qtips" title="twitter">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAXCAYAAAD6FjQuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAclJREFUeNq81kkoxFEcB3AzGYooO9nioIhSUrKEieTgxkTKxUGylZPkZA44ONjK3U0c5CCK5IDckJKtLFmyJTSWzPi++o74+495L39efWqaefP/vvebt4zJ5XL5/FfztU3e/ub7OdAGuRAE5zADvXDJPoFQAVNmvtEPaYpBjbAC1ZAAIZAK7bANtdAFD3y2w1Q1cROJFxeUDlcSQQWwJDmoUYbGmT/NKAo2WBpvbUQySJQylAPzN3Oa7hbD0tjBz8MDRMkyJMMiwMaSr4mwTXjUdBLT3oMOSNR89qLwu95BrLvkIuwZOnU6xkMPHMA8dEMlFMObQtjpx9Jn8iBXUj1YNF8QA7KSuzklw161D8rk6C2cpUwzS/Y7+rKpYRGSOCuj25Z2hGJx9P3RCbWgVw6x6pYNDnri0aVb+zxo5lZwGhA2xkDdsHBu6hMw4iqwfzv1NdNugWADgobg+KclLI6tZDj8ZdAZtMrsl2uee8Owy/tJtVlVNuc9y5kF64pBJbzLpMPCoIF7pEzhKsnnGer5bwHUQSEEQDRk8yqXbePQJHPpirAdKOf1rtKmYcDbbLRhq1TDshVBKaRo+jpglpfrHOyrrpx3AQYANNpg6zE9QhoAAAAASUVORK5CYII=" alt="twitter icon">
</a>
<a aria-label='Open Link in New Window' DATA-CT-ACTION="Clicks to Social Platforms" DATA-CT-CATEGORY="Advocacy" DATA-CT-IDENTIFIER="Body - Pinterest - https://www.pinterest.com/qtips" DATA-CT-INFORMATION="Body - Pinterest - https://www.pinterest.com/qtips" class="social-pinit" href="https://www.pinterest.com/qtips" title="pinit">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXCAMAAADJPRQhAAABfVBMVEUAAAD///////////////////////////////////////////////++ICa+ISe/Iii/Iym/JCrAJSvAJizAJy3AKC7BKS/BKi/BKzHCLDLDMDXDMTbEMznFOD3FOT/GPULHP0XHQEXIQUbJRkvJR0zKSE3KSU7LTFHLTVLMT1TMUVbNVFjPWV3PW2DQXGHQXmLRYWXRYmbSZGjSZWnTZ2vTaGzTaW3UbHDVcHPWcXXYeX3Ze3/ZfYDafoLagITbgoXbg4bchYnch4rdiYzdio3di47ejJDejZDej5Lgk5bglZjhl5rhmJvhmZvhmpzimp3inaDjnqHjn6HkoaTko6bmqKvmqqznra/or7Hor7LosLLosbPpsrTptLbptbfqtrjrubvrvL3twcPuxMXuxsjxz9Dy0tPy0tT02dr129z13N313d723+D24OH24eL34uP35OX35eX56er78fH89PT89vb99/f9+Pj9+fn9+vr++/v+/Pz+/f3//v7////enod2AAAADXRSTlMACQ0vQl+AqNrd8PT8YnwL+wAAAW9JREFUKM9tUmdbgjEMLCgv8EJV3HsjuBegOHErDoZ7bwUVBMWB4P120wLu+9C7Pm2SNhfGBDSKGllz2ppsLt+9qmjYJ/IMoT6ew2DYkJc7yDf5ivgXigOm/GyEaZz/xLRJRmkMK3Jb3j/n97prpA4YRC0lJFJZFh4h8BIsFQlvFMa0aq+QF0gdjw1NnAPXVeIZqpbp7kT4BmJWmceRxAFRQUzH9MskGlPJFl5iLSQ5BbQR+fXMOEA8g21eeYN1khWvWCQaMjKzuLEHNx8FrkS+MHZptZsZGoiP4OA+UCAhhB1a28DMdmIvZrkHGBa1E1jKxBgd8ka0xIlUNckOoDtTR78mUmyj3oe4UKe4K8i8TRcVwjLJL5Hu5GVBvPdk/6NV++UXy1J4SEcSeBvh2R4wJSwt6MJT3Wb8dquV5/pGvfaLzTzOvmzI9Jr88dDmEJ7f/ghP/cX85Ln2j6dyDgb3V/+ZAzk76U1Xe/P32fkAATFUebnmRaMAAAAASUVORK5CYII=" alt="Pin to Pinterest">
</a>
<a aria-label='Open Link in New Window' DATA-CT-ACTION="Clicks to Social Platforms" DATA-CT-CATEGORY="Advocacy" DATA-CT-IDENTIFIER="Body - Link To Instagram - https://www.instagram.com/qtips" DATA-CT-INFORMATION="Body - Link To Instagram - https://www.instagram.com/qtips" class="social-instagram" href="https://www.instagram.com/qtips" title="instagram">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAYAAADk3wSdAAAFbklEQVQ4y62VS2xcZxmGn/+cM7djj2c8xnZcu0kdxyWN4zB20qYhbpsKAYtGERULJC4qF6kqalewgiKxALGii0pUFMQaVQi1pZXKRREVUOEopYppIFEaO44dXzMz9sx45lz+KwtHAnXNJ33f6tOzePXqfYVzjv/3CADhZ7LnJyZefvQR/8L7n/xM3079y5xefYnQbpEJ+8mHWYKsh/M8tNTIVBFFKcIJjNV0OhHWUlveab/2zsK/vx/gCZ5+6NSll48Mz4Rfb9AY/xzR305zKBpg0O8iShWyPTmCXBY8Dy0VKk6wseTqzTX+dHUFGxaIO63e6vDw975wqnrYKw/2ffNUX3lmzBNUDod4XgahJYGvEYGHC0BZjTQK4yxOOKxwlMKA6xt1PlheY3GzwV55lPebEZXAfSnoz/pPZrUCV8DudWmxg+wa9lpdCpkOvh9CIEA4HAJnwWhDIAR+Ngu+4z7rMTZYxeW3ad1e6HhKKqO1Aivxihq/lEdSwCiHimLqyyvoZptSNkuPELTXN9hd3cAoRxbABLQrRa6nG8S7NcqFgvOdluePxHp2wiquhLd5cylPbWEU9fdXCNQWZ7/4DOLQUZbTCnu5YSaOn6BSLvHeu39m+/YtjFT0epLszhK92xts1WpSfHr66K8ee/Dwt9zIOCZX5EAoqNfrZJzjkdOz/P7yAn+cX2by3FfxCh4bl37HU7NjTB8cph2l9HiWqBNhtaaZJNxcXd8LTkxN8e0ffIdfv3MRuZPS7MSEpRzfePZ5Xvjui7z1xuuMnHma8SmfsNTD/F8a/OSl3/L8s8/xs1/8/GMOVXw4/x7B5sY6fX7AhSefoNbYJSz2Mz4xyU9//CPeeuN1Kg8cx0uXWPrgMhkpOFetcqPg88ovX+XowQO88OIPwWk6zR3ibou762sEzjnarSYHxyeZqs5A0Idq3+XNty9C4QDWttBNn+xaF7vbIRwbYO7hM6zducnF+Us8c3eN4tAIWku0TNEyxRMChHB02i0a29tAwkfXr7EXxYjAJ5PPYaRCN9qEyuPKu2+zdesW03OfxRR62VhdwaoEoyVapVgtCQCc0TirsNaAVvT1FikXC2zWFpHFEXQUsXjnQ7La0ozaxDql23YczBfAA6NTtExQSYTWKZ41BqUk1his0RijCTI+Z0+e2JfeCAig3l5nu71JrlKi3m3QWV3kgf4i3ShCYJBpF6UStFL7mlprsdbirCHudki1Zu7hKv9aXOHSlWsMVWcZGOojV8iTSsm1f1zmqeo0A8U8+XyGTmsHLWO0VmhjCBzcgxqs2Yf2lUt8YniQxz/1IIMDA2ypkOzQEbwcFLeWODZ7kp7AMTg8wOjoEK3dOkqmaCUxWhEYYzBKY7RCqwThCayf4cixh7h54wbdKKYcJ3Q2r2CNIR8IEDAxOcnc42dot5tImd6Dpmit8Bz4SkmMUmgpUTJBq5R8IcfcuceYGL8fjCTraXwk2qTMVI9y/sLnccKRJglaa4w2aCXRShIYbTJJHOEnEQiHEA5nDSDo6evl1KMnGR07QL3WwFjH0NAA9x0aI5vLYGSKdaCNJk0i4k6LpNsVwUcr65c3Vu585f4wj9GSXCEkCDIIzyPwHZXBfnKFLIMjQwgg7A0phCGecMg0QWuJTBOSboeo2Wan1uz1W1G8YOLka9MHR8qBD2gJVuF0ClYTeFDIBfSEeXoLOXKBh7AKncbIqIPstInbbeJWh+07d/nNH/56UdxLgqEnjk++enbm2PlKpZTxfB+Eh+ftrxAC2LeeMRZjDNZZtNIoZVDGUGu0uvP/vP7a1dtrz4mPxcxU3vfLzjm737EOwX9f3P/ce52JAyGEENKYbWAR4D80CwcN4IAv/gAAAABJRU5ErkJggg==" alt="instagram icon">
</a></div><a href="https://www.qtips.com/sign-up/" title="SIGN UP FOR EMAILS" class="sign-up" data-ct-category="Engagement" data-ct-action="SignUp Start" data-ct-information="https://www.qtips.com/sign-up/" data-ct-attr="SIGN UP-Home-Click">
SIGN UP FOR EMAILS </a></div></div>
</section>
<section class="navbar navbar-static-top">
<section class="navbar-inner">
<button id="left-nav-btn" data-target="#second" data-toggle="collapse" class="btn-navbar" type="button"></button>
<button data-target="#first" data-toggle="collapse" class="btn-navbar collapsed" type="button" data-ct-category="Engagement" data-ct-action="Click To Action" data-ct-information="Drawer Menu" data-ct-attr="ctDrawerMenu"></button><div class="container">
<nav id="first" class="nav-collapse" role="navigation"><div class="menu-header-navigation-container"><ul id="menu-header-navigation" class="nav"><li class="menu-item-206"><a title="Home" href="https://www.qtips.com" data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="top_nav-206" data-ct-information="Top Navigation-Home-https://www.qtips.com">Home</a></li><li class="menu-item-3652 product-nav"><a title="Products" href="https://www.qtips.com/product-category/all-products/" data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="top_nav-3652" data-ct-information="Top Navigation-Products-https://www.qtips.com/product-category/all-products/">Products</a></li><li class="menu-item-4447"><a href="https://www.qtips.com/where-to-buy/" data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="top_nav-4447" data-ct-information="Top Navigation-Where to Buy-https://www.qtips.com/where-to-buy/">Where to Buy</a></li><li class="menu-item-3998 active article-menu"><a title="#QTIPSHACKS" href="https://www.qtips.com/qtipshacks/" data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="top_nav-3998" data-ct-information="Top Navigation-#QTIPSHACKS-https://www.qtips.com/qtipshacks/">#QTIPSHACKS</a></li><li class="menu-item-3651 smartlabel-icon"><a title="SmartLabel" aria-label='Open Link in New Window' target="_blank" rel="nofollow" href="https://www.unileverusa.com/brands/smartlabel/" data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="top_nav-3651" data-ct-information="Top Navigation-SmartLabel-https://www.unileverusa.com/brands/smartlabel/">SmartLabel</a></li><li class="menu-item-3662 visible-phone smartlabelmobile"><a title="Smartlabel" href="http://onelink.to/79jxb3" data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="top_nav-3662" data-ct-information="Top Navigation-smartlabelMobile-http://onelink.to/79jxb3">smartlabelMobile</a></li><li class="menu-item-3663 visible-phone"><a title="SIGN UP FOR EMAILS" href="https://www.qtips.com/sign-up/" data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="top_nav-3663" data-ct-information="Top Navigation-SIGN UP FOR EMAILS-https://www.qtips.com/sign-up/">SIGN UP FOR EMAILS</a></li><li class="menu-item-4121 search-menu visible-phone"><a title="search" href="#" data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="top_nav-4121" data-ct-information="Top Navigation-search-#">search</a></li></ul></div><form class="navbar-form form-search pull-right" method="get" action="https://www.qtips.com/">
<input class="input-medium" title="Please fill out the field" type="text" id="s" autocomplete="off" name="s" placeholder="SEARCH">
<button class="btn-search" id="btn-search" type="submit" value="search" name="submit">search</button></form>
</nav></div>
</section>
</section>
</header>
<section id="breadcrumb" class="visible-desktop visible-tablet"><div class="container"><ul class="breadcrumb"><li role="listitem"><a data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="breadcrumb_item-home" data-ct-information="Breadcrumb-Home-https://www.qtips.com" href="https://www.qtips.com">Home</a> <span class="divider"> / </span></li><li role="listitem" class="active">QTIPSHACKS</li></ul></div>
</section><h1 itemprop="name">QTIPSHACKS</h1><div id="CampaignContainer" class="campaign"><h2 class="sr-only">QTIPSHACKS Campaign</h2><div class="lrg-grid clearfix"><div class="hero">
<img class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_hero.jpg,qx20440.pagespeed.ic.lBRmVjxunS.jpg" style="width:100%;display:none" alt="A Qtips Product for all of Life's Unexpected Moments" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sorting-nav"><ul class="menu desktop"><li data-filter=".beauty">Beauty</li><li data-filter=".baby">Baby</li><li data-filter=".arts-crafts">Arts + Crafts</li><li data-filter=".home-pets">Home + Pets</li><li class="active" data-filter=".box">All</li></ul></div><div class="grid clearfix"><div class="box clearfix arts-crafts med left-align" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-diy-waterproof-bathroom-tray.jpg);">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">DIY Waterproof Bathroom Tray</h2><p>Grab an enamel tray and line up Q-tips<sup>®</sup> in a chevron pattern adding glue to the ends of the swabs. Let the design dry fully. Next, add in Mod Podge to fill in the base of the tray until all of the Q-tips<sup>®</sup> are covered. Release any bubbles and let it dry for a nice, smooth layer to set products on.</p>
</a></div><div class="box clearfix arts-crafts light-blue" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_single_princess-makeup.jpg);">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Easy Princess Makeup</h2>
</a></div><div class="box clearfix arts-crafts light-blue" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_single-qtips-blocks.jpg);">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Create Q-tips<sup>®</sup> Blocks</h2>
</a></div><div class="box clearfix arts-crafts med right-align" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-paint-confetti-plates.jpg);">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Paint Confetti Plates</h2><p>Grab Q-tips<sup>®</sup> cotton swabs to paint colorful dots and lines for a fun party effect on plates! When finished, let the pattern dry completely and then spray with a finishing coat of Mod Podge so you have a food-safe surface.</p>
</a></div><div class="box clearfix beauty light-pink" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_single-beatuy-disposable-001.jpg);">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Disposable Eye Shadow Brushes</h2>
</a></div><div class="box clearfix baby icon-baby light-blue">
<a class="box-link"><h3 class="category-group">Baby</h3><h2 class="category-title">Clean the Grooves of Tiny Shoes</h2><p>Q-tips® cotton swabs are the perfect size for removing dirt from your baby’s tiny shoes. Press firmly in the grips of the shoe to remove excess dirt and particles picked up from walking around the house and outside.</p>
</a></div><div class="box clearfix beauty icon-beauty light-blue">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Keep Your Pout in Place</h2><p>Keep lip color from bleeding by using Q-tips<sup>®</sup> cotton swabs to apply loose translucent powder along the outer edge of the lips.</p>
</a></div><div class="box clearfix home-pets light-purple" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_single-home-pets-keyboard.jpg);">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Keep Your Computer Spotless</h2>
</a></div><div class="box clearfix beauty med right-align pale-blue" data-mobile-img="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/custom-nail-color-with-eye-shadow.jpg" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-beauty-diy-nail-polish.jpg);background-position:right 0;">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Create a Custom Nail Color with Eye Shadow</h2><p>Crumple pigments of shadow into any nail polish color. Mix with a Q-tips<sup>®</sup> cotton swab and apply your new DIY color via Q-tips<sup>®</sup>!</p>
</a></div><div class="box clearfix beauty icon-beauty mint-green">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">A Flake-less Finish</h2><p>Fold a Q-tips<sup>®</sup> Beauty Round in half, creating a semi-circle shape, and place under your eye when applying eye shadow. This catches the unwanted excess shimmery flakes that fall under eyes.</p>
</a></div><div class="box clearfix home-pets sky-blue" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_single-home-pets-houseplants.jpg);">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Clean Indoor Houseplants</h2>
</a></div><div class="box clearfix home-pets icon-pets light-blue">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Q-tips<sup>®</sup> as a Collar Stays</h2><p>One of our favorite hacks – substitute Q-tips<sup>®</sup> cotton swabs as collar stays to keep the collars of your shirt crisp.</p>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-wrapping-paper.jpg);">
<a href="/diy-wrapping-paper" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">DIY Wrapping Paper</h2><p>Rather than running out for wrapping paper, detail your own on brown craft paper using Q-tips<sup>®</sup> cotton swabs as paintbrushes for a personal touch.</p></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-wrapping-001.jpg,qx20440.pagespeed.ic.-0LGIG67n8.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-wrapping-002.jpg,qx20440.pagespeed.ic.FiaGxoKJAn.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-wrapping-003.jpg,qx20440.pagespeed.ic.SgVZAHHcGG.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/diy-wrapping-paper" class="more mobile">Create Your Own</a></div><div class="box clearfix arts-crafts med right-align" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-paper-garland.jpg);">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Paper Garland</h2><p>Use Q-tips<sup>®</sup> to paint a design onto watercolor paper. Once the paper is dry, divide it into a grid of squares cutting them out individually. Next, cut out an indented “V” shape from the bottom of each square. Hole punch the tops of each square at the top corners and string through the holes with yarn to hang.</p>
</a></div><div class="box clearfix beauty icon-beauty pink">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Keep Nail Polish Bottles Clean</h2><p>Apply a coat of vegetable oil around the rim of your nail polish bottles with Q-tips<sup>®</sup> Precision Tips<sup>™</sup> to keep the polish from getting the tops stuck.</p>
</a></div><div class="box clearfix arts-crafts lrg right-align grey-blue" data-mobile-img="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/bow-and-arrow-toy.jpg" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_fw-ac-bow-arrow.jpg);">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Bow and Arrow Toy</h2><p>Nail the bulls-eye with this craft for kids using Q-tips<sup>®</sup> Precision Tips<sup>™</sup>. To create the bow, soak a popsicle stick in cold water for an hour to make it bend easily. Then cut two notches in each end and tie fishing wire around as the string. The Precision Tips™ are the ideal DIY arrows for kids.</p>
</a></div><div class="box clearfix arts-crafts icon-arts light-blue">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Accent Sunglasses</h2><p>Add some flair to your sunglasses by adding rhinestones to the perimeter of the shades using glue and Q-tips<sup>®</sup> Precision Tips<sup>™</sup>.</p>
</a></div><div class="box clearfix arts-crafts med left-align light-yellow" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-ac-dandelion.jpg);">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Q-tips Flowers</h2><p>Cut Q-tips<sup>®</sup> cotton swabs in half, poking them into a Styrofoam ball. Dip tips of cotton swabs in paint for added color. Take thick straws and poke them into the base of each Styrofoam ball using hot glue to secure. Place in a vase and enjoy!</p>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-sheep.jpg);">
<a href="/create-a-crafty-lamb" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">Create a Crafty Lamb</h2><p>Create a lamb out of Q-tips<sup>®</sup> Beauty Rounds and Q-tips<sup>®</sup> cotton swabs. Use one Q-tips<sup>®</sup> Beauty Round for the body, and one for the head. Cut two Beauty Rounds into ears, then glue on cotton swabs for legs and a tail.</p></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-sheep-001.jpg,qx20440.pagespeed.ic.ugTpxxg1vr.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-sheep-002.jpg,qx20440.pagespeed.ic.i-dsQiDdly.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-sheep-003.jpg,qx20440.pagespeed.ic.ZoQ6KuIQlz.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/create-a-crafty-lamb" class="more mobile">Create Your Own</a></div><div class="box clearfix baby icon-baby mint-green">
<a class="box-link"><h3 class="category-group">Baby</h3><h2 class="category-title">Taking Care of a Newborn's Needs</h2><p>Dip a Q-tips® cotton swab in rubbing alcohol to clean around your newborn's umbilical cord.</p>
</a></div><div class="box clearfix arts-crafts med icon-arts light-blue">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Textured Clay Candle Votive</h2><p>After using clay to create a candle votive (or other small craft), use Q-tips<sup>®</sup> cotton swabs to create texture in the air-dry clay.</p>
</a></div><div class="box clearfix beauty lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-beauty-highlight-brows.jpg);">
<a href="/highlight-brows-and-cheekbones" class="box-link"><h3 class="category-group">Beauty</h3><div class="sub-col first"><h2 class="category-title">Highlight Brows and Cheekbones</h2><p>Use a Q-tips<sup>®</sup> cotton swab to apply a natural shade of shimmer powder to the upper brow area and along the cheekbone.</p></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-beauty-highlight-001.jpg,qx20440.pagespeed.ic.PD8pe183Kk.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-beauty-highlight-002.jpg,qx20440.pagespeed.ic.3XWyHcHT_3.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-beauty-highlight-003.jpg,qx20440.pagespeed.ic.VxRT-E53R3.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/highlight-brows-and-cheekbones" class="more mobile">Create Your Own</a></div><div class="box clearfix baby med left-align light-yellow" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-baby-nasal-cleaner.jpg);">
<a class="box-link"><h3 class="category-group">Baby</h3><h2 class="category-title">Meticulously Clean Baby Bottles</h2><p>Use Q-tips® cotton swabs to clean a baby’s bottle, getting into the ultimate hard-to-reach places with ease thanks to the swabs’ sturdy paper sticks.</p>
</a></div><div class="box clearfix baby med left-align blue-green" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-baby-ointment.jpg);">
<a class="box-link"><h3 class="category-group">Baby</h3><h2 class="category-title">Medicine Application for Active Tots</h2><p>Q-tips® cotton swabs are great for applying medications and ointments to minor cuts and bruises – they are convenient, clean and disposable.</p>
</a></div><div class="box clearfix home-pets med right-align grey-blue" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-home-pets-baseball.jpg);">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Oiling Baseball Mitts</h2><p>Use Q-tips<sup>®</sup> Beauty Rounds and Q-tips<sup>®</sup> cotton swabs to put oil on baseball mitts. It is a great way to get the oil into all of the nooks and crannies of the mitt and keep it flexible!</p>
</a></div><div class="box clearfix arts-crafts icon-arts pink">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Easy Touch-Ups with Fresh Paint</h2><p>Q-tips® cotton swabs and Q-tips® Precision Tips™ are the perfect tool to touch-up hard-to-reach areas on freshly painted model airplanes and cars – or even dollhouses.</p>
</a></div><div class="box clearfix home-pets light-yellow" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_single-beauty-flowers.jpg);"></div><div class="box clearfix med home-pets icon-pets light-teal">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Perfect for Dirty Paws</h2><p>Q-tips® cotton swabs are just the right size for cleaning in between your pet’s paws, underneath nails, and around the outside of their ears. Place a dime size amount of animal-approved shampoo on one end of a Q-tips® cotton swab and gently clean those hard to reach places.</p>
</a></div><div class="box clearfix beauty med left-align pale-yellow" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-beauty-smokey-eye.jpg);">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">The Ultimate Quick Fix</h2><p>To achieve a quick smokey eye, draw a thick line close to your lash line using your eyeliner. Smudge upwards with a Q-tips<sup>®</sup> cotton swab to create a “smokey” effect.</p>
</a></div><div class="box clearfix home-pets icon-pets mint-green">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Wipe Away the Sleep</h2><p>Q-tips® cotton swabs are soft and gentle, making them the perfect tool to remove discharge from around your dog's eyes.</p>
</a></div><div class="box clearfix beauty light-yellow" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_single-beauty-tictactoe.jpg);"></div><div class="box clearfix beauty pink" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_single-beauty-remove-dirt.jpg);">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Remove Dirt and Grime Easily</h2>
</a></div><div class="box clearfix beauty lrg single-h right-align sky-blue" style="background:#abdefb url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_fw-beauty-fakelashes.jpg) 0 0 no-repeat;">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Apply Fake Lashes</h2><p>Use Q-tips<sup>®</sup> Precision Tips<sup>™</sup> to help apply fake lashes! Start by applying a dab of lash adhesive to the tip. Keep the tip close to the lash line and use it to guide the application of the faux lash strip.</p>
</a></div><div class="box clearfix beauty lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-beauty-dazzling-nails.jpg);">
<a href="/dazzling-nails" class="box-link"><h3 class="category-group">Beauty</h3><div class="sub-col first"><h2 class="category-title">Dazzling Nails</h2><p>Enhance your nails with a glitter accent! Apply with adhesive using Q-tips® Precision Tips™.</p></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-beauty-dazzling-001.jpg,qx20440.pagespeed.ic.kpgn_F0Nlt.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-beauty-dazzling-002.jpg,qx20440.pagespeed.ic.xUOG88rRll.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-beauty-dazzling-003.jpg,qx20440.pagespeed.ic.7bOOjwxoj3.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/dazzling-nails" class="more mobile">Create Your Own</a></div><div class="box clearfix home-pets icon-pets light-yellow">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">A Cute AND Clean Face!</h2><p>Use Q-tips® cotton swabs for cleaning the small crevices of your dog or cat's face.</p>
</a></div><div class="box clearfix beauty med right-align pink" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-beauty-crazy-eyebrows.jpg);background-position:right 0;">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Control Crazy Eyebrows</h2><p>Control unruly brows by applying a small amount of Vaseline® petroleum jelly using Q-tips® cotton swabs.</p>
</a></div><div class="box clearfix beauty med right-align light-blue" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-beauty-brighter-eyes.jpg);background-position:right 0;">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Make Eyes Brighter</h2><p>To instantly brighten your eyes, add a dab of a light shimmer to the inner corners with Q-tips<sup>®</sup> Precision Tips<sup>™</sup>.</p>
</a></div><div class="box clearfix beauty icon-beauty mint-green">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Apply Lipstick Perfectly</h2><p>Soften your lip liner look by making a "dot-dot-dash" pattern and blend with a Q-tips<sup>®</sup> Precision Tip<sup>™</sup> before applying lipstick, then cleaning up the edges via Q-tips<sup>®</sup> Precision Tip<sup>™</sup>.</p>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-winter-trees.jpg);">
<a href="/make-mini-trees" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">Make Mini Trees</h2><p>Cut the ends of Q-tips® cotton swabs at varying lengths – about 10 of each length. Glue the longest swabs in a circle at the base of another cotton swab, and then use the shorter swabs for each row of "leaves" above the base. Decorate as desired with glitter or paint!</p></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-winter-trees-001.jpg,qx20440.pagespeed.ic.E7sJPLdXii.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-winter-trees-002.jpg,qx20440.pagespeed.ic.8_laRahhv5.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-winter-trees-003.jpg,qx20440.pagespeed.ic.4_lSuMUyew.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/make-mini-trees" class="more mobile">Create Your Own</a></div><div class="box clearfix beauty icon-beauty light-yellow">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Hide Under-Eye Circles</h2><p>Hide under-eye circles by using one end of a Q-tips<sup>®</sup> cotton swab or Q-tips<sup>®</sup> Precision Tip<sup>™</sup> to dab on three dots of concealer. Use the other end to blend for a seamless finish.</p>
</a></div><div class="box clearfix beauty med left-align sky-blue" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-beauty-undo-bronzer.jpg);background-position:right 0;">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">"Undo" Too Much Bronzer</h2><p>Using a Q-tips<sup>®</sup> Beauty Round, blend bronzer, then apply translucent powder via a new Q-tips<sup>®</sup> Beauty Round to mitigate the heaviness of the darker hue.</p>
</a></div><div class="box clearfix beauty lrg single-h right-align blue-green" style="background:#abdefb url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_fw-beauty-no-bags.jpg) 0 0 no-repeat;">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Get Rid of Under-Eye Bags</h2><p>Dampen Q-tips<sup>®</sup> Beauty Rounds and chill them in a plastic bag in the refrigerator for 10 minutes. Once cool, remove and place under eyes to banish bags. The coolness will help reduce the appearance of puffiness.</p>
</a></div><div class="box clearfix beauty med left-align pale-pink" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-beauty-home-mani.jpg);background-position:right 0;">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">At-Home Manicure</h2><p>Give yourself a salon-perfect at-home manicure or pedicure with Q-tips<sup>®</sup> cotton swabs by lightly moistening the end with nail polish remover to instantly erase excess nail polish from your cuticles.</p>
</a></div><div class="box clearfix beauty icon-beauty pink">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Fun Face Paint for Halloween</h2><p>Use Q-tips<sup>®</sup> cotton swabs or Q-tips<sup>®</sup> Precision Tips<sup>™</sup> to paint images like daisies, rainbows, hearts and stars on the face using different colors of liquid eyeliner and eye shadows.</p>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-snowflake.jpg);">
<a href="/a-sparkling-snowflake" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">A Sparkling Snowflake</h2><p>Design a snowflake by creating corners with neighboring Q-tips<sup>®</sup> cotton swabs. Glue the sticks together at their mid-points. Squeeze glue over each joint and once dry, dip in glitter.</p></div><div class="sub-col-2">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-snowflake-001.jpg,qx20440.pagespeed.ic.YZmL-Tm5tH.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col-2 last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-snowflake-002.jpg,qx20440.pagespeed.ic.y5sLMy2VU3.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/a-sparkling-snowflake" class="more mobile">Create Your Own</a></div><div class="box clearfix beauty med left-align reg-blue" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-beauty-nail-tattoos.jpg);background-position:right 0;">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Apply Nail Stickers</h2><p>To apply a nail sticker or flash tattoo press a wet Q-tips<sup>®</sup> Beauty Round against the sticker or temporary tattoo for a perfect application.</p>
</a></div><div class="box clearfix beauty med right-align magenta" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-beauty-remove-polish.jpg);background-position:right 0;">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Easily Remove Tough Nail Polish</h2><p>Ditch the cotton balls and pour a little nail polish remover on Q-tips<sup>®</sup> Beauty Rounds. They have a layer of spunlace for fortitude and the most soft cotton.</p>
</a></div><div class="box clearfix beauty icon-beauty sky-blue">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Perfectly Flushed Cheeks</h2><p>Apply blush on-the-go using a Q-tips<sup>®</sup> Beauty Round to add a little flush to your cheeks! Blend for a seamless finish. The outcome? No streaks!</p>
</a></div><div class="box clearfix beauty icon-beauty light-yellow" data-mobile-img="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/on-the-go-beauty.jpg" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_single-home-pets-headphones.jpg);">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">On-the-Go-Beauty</h2><p>Have an empty Q-tips<sup>®</sup> Travel Pack? Store your headphones in the case for easy access.</p>
</a></div><div class="box clearfix beauty med icon-beauty light-blue">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Soak Off Gel Polish</h2><p>To remove tricky gel polish, soak Q-tips<sup>®</sup> Beauty Rounds in acetone then place on top of your nails. Wrap your nails (with the Q-tips<sup>®</sup> Beauty Rounds on top of them) in aluminum foil for five minutes then gently remove gel polish.</p>
</a></div><div class="box clearfix beauty med right-align sky-blue" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-beauty-fix-eyeshadow.jpg);background-position:right 0;">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Salvage Your Favorite Eye Shadow</h2><p>Pack eye shadow pigments into a container using a few drops of rubbing alcohol and a Q-tips<sup>®</sup> cotton swab.</p>
</a></div><div class="box clearfix arts-crafts icon-arts mint-green">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Extra Glue for Arts & Crafts</h2><p>Q-tips<sup>®</sup> cotton swabs are great for applying glue to models and arts and crafts projects. Use one tip to apply the glue and the other to remove any excess before it dries.</p>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-glittercard.jpg);">
<a href="/create-specialized-invitations" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">Create Specialized Invitations</h2><p>Cut your favorite word out of construction paper. Use as a stencil on top of thick construction cards. Dot glue inside the stencil, using a Q-tips<sup>®</sup> cotton swab to spread glue evenly. Sprinkle glitter and carefully remove stencil.</p></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-glittercard-001.jpg,qx20440.pagespeed.ic.mjNkMtasfH.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-glittercard-002.jpg,qx20440.pagespeed.ic.YmfV0ZxrU7.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-glittercard-003.jpg,qx20440.pagespeed.ic.mOBacF3_Fc.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/create-specialized-invitations" class="more mobile">Create Your Own</a></div><div class="box clearfix beauty icon-beauty light-blue">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Easy Mascara and Eye Makeup Removal</h2><p>Hold a Q-tips<sup>®</sup> Beauty Round soaked in eye makeup remover on your lashes for a few seconds, then wipe away makeup. This technique gently removes mascara and eye makeup without any harsh rubbing on eyelashes or eyelids.</p>
</a></div><div class="box clearfix beauty med left-align reg-blue" data-mobile-img="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/avoid-eye-shadow-breakage.jpg" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-beauty-travel-eyeshadow.jpg);background-position:right 0;">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">Avoid Eye Shadow Breakage</h2><p>Carefully stuff Q-tips<sup>®</sup> Beauty Rounds inside your palettes to keep them from breaking when traveling.</p>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-customkey.jpg);">
<a href="/customize-your-gym-house-keys" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">Customize Your Gym and House Keys</h2><p>Use Q-tips<sup>®</sup> cotton swabs or Precision Tips<sup>™</sup> to paint your gym or house keys so that each key is easy for you to quickly identify.</p></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-customkey-001.jpg,qx20440.pagespeed.ic.hoPyw8JoWJ.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-customkey-002.jpg,qx20440.pagespeed.ic.m1uMvW3NlX.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-customkey-003.jpg,qx20440.pagespeed.ic.lC2tW9QZ7O.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/customize-your-gym-house-keys" class="more mobile">Create Your Own</a></div><div class="box clearfix home-pets icon-pets light-blue">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">The Perfect Tiny Duster</h2><p>Remove dust from picture frames, scroll-work and statues with Q-tips<sup>®</sup> Precision Tips<sup>™</sup>. Q-tips<sup>®</sup> Precision Tips<sup>™</sup> boast tapered ends to get into smaller spaces, perfect for detailed cleaning.</p>
</a></div><div class="box clearfix arts-crafts med right-align light-pink" data-mobile-img="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/impromptu-watercolor-coaster.jpg" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-ac-watercolor-rounds.jpg);">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Impromptu Watercolor Coaster</h2><p>After painting blank tiles with watercolors, glue three plush Q-tips<sup>®</sup> Beauty Rounds to the bottom of each tile to make your own coaster. This will prevent scratches on wood surfaces and soak up any droplets from drinking glasses.</p>
</a></div><div class="box clearfix beauty lrg single-h right-align mint-green" style="background:#abdefb url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_fw-ac-pumpkin-paint.jpg) 0 0 no-repeat;">
<a class="box-link"><h3 class="category-group">Beauty</h3><h2 class="category-title">DIY DÉCOR Pumpkins</h2><p>To celebrate the holidays, paint or spray paint pumpkins to get in the spirit – using Q-tips® cotton swabs to DIY accents such as faces or even detailed sprinkles. ></p>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-snowman.jpg);">
<a href="/craft-a-snowman" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">Craft a Snowman</h2><p>Create a snowman out of Q-tips<sup>®</sup> Beauty Rounds! Gather 16 or more Beauty Rounds, and cut 8 in half and then cut one-quarter off of the other 8. Glue the edges of the half-Rounds together for the head, and the edges of the three-quarter-Rounds together for the body.</p></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-snowman-001.jpg,qx20440.pagespeed.ic.x9UUyQfsAL.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-snowman-002.jpg,qx20440.pagespeed.ic.vnN3Y-by5k.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-snowman-003.jpg,qx20440.pagespeed.ic.TMhof9dNpS.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/craft-a-snowman" class="more mobile">Create Your Own</a></div><div class="box clearfix home-pets icon-pets pink">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Remove Dirt From the Grooves of Your Remote</h2><p>Dab Q-tips<sup>®</sup> Precision Tips<sup>™</sup> in rubbing alcohol or hand sanitizer, and use them to clean dust and dirt flakes from around the buttons of your remote controls.</p>
</a></div><div class="box clearfix med left-align arts-crafts soft-green" data-mobile-img="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/customized-tote.jpg" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-ac-totebag.jpg);">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Customized Tote</h2><p>Cut out a favorite shape or word to create a stencil, and lightly tape the back to a blank canvas tote. Using a Q-tips<sup>®</sup> cotton swab, paint small dots around the word or shape, keeping them close together near to the shape or letters. Once dry, remove the shape or letters to reveal the shape or word underneath!</p>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-garland.jpg);">
<a href="/watercolor-garland" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">Watercolor Garland</h2><p>Spray Q-tips<sup>®</sup> Beauty Rounds with paint, decorate with glitter, and glue together. Hang as desired for a wonderful room or party decoration!</p></div><div class="sub-col-2">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-garland-001.jpg,qx20440.pagespeed.ic.W3UgltkpUV.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col-2 last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-garland-002.jpg,qx20440.pagespeed.ic.ytBKWtrRvS.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/watercolor-garland" class="more mobile">Create Your Own</a></div><div class="box clearfix arts-crafts med left-align orange" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-ac-pumpkin.jpg);">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Craft a Halloween Pumpkin</h2><p>Cut one-quarter off of the side of 12 or more Q-tips<sup>®</sup> Beauty Rounds. Then, glue the edges together to create a fan-like pumpkin shape. Bend a Q-tips<sup>®</sup> cotton swab, cut the end off, and glue to the top for a fun stem. Decorate with orange and green paint!</p>
</a></div><div class="box clearfix home-pets icon-pets light-yellow">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Detailing Car Consoles</h2><p>Q-tips<sup>®</sup> Precision Tips<sup>™</sup> are the perfect size for detailing the crevices of your car's console.</p>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-xmaslights.jpg);">
<a href="/miniature-holiday-lights" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">Miniature Holiday Lights</h2><p>Dip the tapered ends of Q-tips® Precision Tips™ in acrylic paint and lay out on wax paper. Once dry, cut off the tips so there’s just a little bit of white showing. Finally, hot-glue the tips to a string and hang on a mini tree!</p></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-xmaslights-001.jpg,qx20440.pagespeed.ic.zBQvbOkMfy.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-xmaslights-002.jpg,qx20440.pagespeed.ic.09v-aHFIRi.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-xmaslights-003.jpg,qx20440.pagespeed.ic.ABQZU7eWQM.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/miniature-holiday-lights" class="more mobile">Create Your Own</a></div><div class="box clearfix home-pets icon-pets pink">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Applying Grease and Oils to Tools</h2><p>Use Q-tips<sup>®</sup> cotton swabs to apply grease and oils to tools and equipment without making a mess.</p>
</a></div><div class="box clearfix arts-crafts med icon-arts pink">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">A Colorful Way to Practice Math</h2><p>Put several drops of liquid watercolor into a cup, and add water to create the desired colors. Dip the ends of Q-tips<sup>®</sup> cotton swabs into each color for an assortment of cotton swabs in varying colors, and dry on wax paper. The Q-tips<sup>®</sup> cotton swabs can be used for activities like forming patterns, addition, subtraction, and building letters or shapes!</p>
</a></div><div class="box clearfix arts-crafts med icon-arts mint-green">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">DIY Penguins</h2><p>Cut penguin arms and feet from black construction paper, and tape to the sides and bottom of a water bottle. Wrap paper around the bottle cap for the head. Glue on eyes and an orange felt nose. Stuff the bottle with Q-tips<sup>®</sup> Beauty Rounds for a white fluffy stomach. Last, glue black feathers to the penguin’s arms and the back of its head!</p>
</a></div><div class="box clearfix baby icon-baby light-blue">
<a class="box-link"><h3 class="category-group">Baby</h3><h2 class="category-title">Clean Tiny Toes</h2><p>Access those tiny spaces between baby’s toes for a complete clean or gently apply salves to hard-to-reach affected areas.</p>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-emoji.jpg);">
<a href="/emoji-ornament" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">Emoji Ornament</h2><p>DIY your own emoji holiday ornament. Print and cut out your favorite emoji face. Trace the eyes and mouth onto your ornament using a permanent marker. Dip Q-tips<sup>®</sup> Precision Tips™ in paint and fill the area you just traced. Once it’s dry, hang on your tree!</p></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-emoji-001.jpg,qx20440.pagespeed.ic.dfLdgmIm6_.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-emoji-002.jpg,qx20440.pagespeed.ic.MZoGvbd5x5.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-emoji-003.jpg,qx20440.pagespeed.ic.9blKre7ehe.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/emoji-ornament" class="more mobile">Create Your Own</a></div><div class="box clearfix baby icon-baby pink">
<a class="box-link"><h3 class="category-group">Baby</h3><h2 class="category-title">Caring for Newly-pierced Ears</h2><p>Apply antibiotic cream or ointment to newly-pierced ears using a disposable and sanitary Q-tips<sup>®</sup> cotton swab.</p>
</a></div><div class="box clearfix arts-crafts med icon-arts light-blue">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">Holiday Santa Craft</h2><p>Tie red yarn around the handle of the spoon until it looks as if it could be Santa’s hat. Glue a Q-tips<sup>®</sup> Beauty Round on top of the base of the spoon as the face. Fold a Beauty Round in half and glue onto the first round for the mouth. Finally, glue googly eyes and a red fuzzy nose to Santa’s face!</p>
</a></div><div class="box clearfix home-pets med icon-pets light-yellow">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Extend the Life of Daffodils</h2><p>Have a fabulous bouquet of daffodils? Fill the hollow stems with some water, and plug them up with a Q-tips<sup>®</sup> Beauty Round. This will help them last longer, as the cotton will help them soak up water and stay hydrated longer.</p>
</a></div><div class="box clearfix home-pets mint-green" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_single-home-pets-keyboard.jpg);">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Keep Your Computer Spotless</h2>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-dotjar.jpg);">
<a href="/polka-dot-vase" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">Polka-Dot Vase</h2><p>Begin with a round glass vase, liquid paint, and Q-tips® cotton swabs. Use Q-tips<sup>®</sup> cotton swabs to paint dots on the vase. When you’ve painted the vase fully, leave it flat for 10 minutes to dry. Enjoy your new vase!</p></div><div class="sub-col-2">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-dotjar-001.jpg,qx20440.pagespeed.ic.bP1Hdn_HQe.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col-2 last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-dotjar-002.jpg,qx20440.pagespeed.ic.5J-gTFJjfR.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/polka-dot-vase" class="more mobile">Create Your Own</a></div><div class="box clearfix home-pets med icon-pets pink">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Combat Mildew</h2><p>All those nooks and crannies in the bathroom are prime spots for mildew and can be difficult to reach. Soak Q-tips<sup>®</sup> Beauty Rounds in bleach, place in those hard-to-reach areas, and let sit for a couple of hours. Rinse with warm water and the spot will be good as new!</p>
</a></div><div class="box clearfix home-pets med icon-pets mint-green">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Grow Beans</h2><p>For a fun and easy project, grow beans indoors with the help of some Q-tips<sup>®</sup> Beauty Rounds. Place 2-3 dry beans in a mason jar filled with damp Q-tips<sup>®</sup> Beauty Rounds. Watch the beans begin to sprout into small roots with tendrils when placed by with window. Add a little water daily to the Q-tips<sup>®</sup> Beauty Rounds in the jar.</p>
</a></div><div class="box clearfix home-pets light-yellow" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_single-home-pets-cleanlenses.jpg);">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Delicately Clean Eyeglass Lenses</h2>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-marblemug.jpg);">
<a href="/diy-marbled-mug" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">DIY Marbled Mug</h2><p>Fill a tray with water, and drop in a few drops of nail polish. Take a blank mug and dunk into the water at various angles for various lengths of time (to achieve lighter or darker colors). Use a Q-tips<sup>®</sup> cotton swab to apply spots of color or fill blank spaces.</p></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-marblemug-001.jpg,qx20440.pagespeed.ic.V-aS2QRHoT.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-marblemug-002.jpg,qx20440.pagespeed.ic.nYOsCzmDqf.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-marblemug-003.jpg,qx20440.pagespeed.ic.XAz0V3xC-L.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/diy-marbled-mug" class="more mobile">Create Your Own</a></div><div class="box clearfix home-pets icon-pets light-blue">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Perfect for Dirty Paws</h2><p>Q-tips® cotton swabs are just the right size for cleaning in between your pet's paws, underneath nails, and around the outside of their ears. Place a dime size amount of animal-approved shampoo on one end of a Q-tips<sup>®</sup> cotton swab and gently clean those hard to reach places.</p>
</a></div><div class="box clearfix home-pets med right-align mint-green" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-home-pets-gymbag.jpg);">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Keep Your Gym Bag Fresh</h2><p>Spray a Q-tips<sup>®</sup> Beauty Round with your favorite perfume and toss into your gym bag or purse to keep your bag and its contents smelling fresh.</p>
</a></div><div class="box clearfix arts-crafts lrg double-h beige" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-h-ac-bunnymask.jpg);">
<a href="/spring-bunny-mask" class="box-link"><h3 class="category-group">Arts + Crafts</h3><div class="sub-col first"><h2 class="category-title">Spring Bunny Mask</h2><p>Cut a paper plate in half. Use Q-tips<sup>®</sup> cotton swabs to paint eyes, a nose, and blushed cheeks on one half plate. Use the other half plate to create ears. Paint and glue them on the top of the face. Last, add a striped straw to hold the mask!</p></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-bunnymask-001.jpg,qx20440.pagespeed.ic.h_k0jrTVDD.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-bunnymask-002.jpg,qx20440.pagespeed.ic.xYLS6HY3CS.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div><div class="sub-col last">
<img alt="QTIPS HACKS" class="img-responsive" data-pagespeed-lazy-src="https://www.qtips.com/wp-content/uploads/sites/95/2018/01/ximg_double-h-ac-img-bunnymask-003.jpg,qx20440.pagespeed.ic.lvwK_Uy1wB.jpg" src="https://www.qtips.com/wp-content/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div></a><a href="/spring-bunny-mask" class="more mobile">Create Your Own</a></div><div class="box clearfix home-pets med right-align light-yellow" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-home-pets-perfume.jpg);">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">"Undo" Too Much Perfume</h2><p>Apply unscented lotion or rubbing alcohol to your over-scented area with a Q-tips<sup>®</sup> Beauty Round.</p>
</a></div><div class="box clearfix home-pets med left-align light-blue" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-home-pets-zipper.jpg);">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Unstick a Stuck Zipper</h2><p>Nothing ruins our day like a stuck zipper. Dip a Q-tips<sup>®</sup> cotton swab in a little shampoo and apply to the zipper for smooth sliding and less tugging.</p>
</a></div><div class="box clearfix home-pets med left-align light-teal" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-home-pets-nailpolish.jpg);">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Know Which Nail Polish is Which</h2><p>From a bird’s eye view, it may be impossible to tell the colors of your nail polish. For a quick fix, dot the tops of nail polish caps using a Q-tips<sup>®</sup> cotton swab for easily-distinguishable colors!</p>
</a></div><div class="box clearfix home-pets med left-align pink" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-home-pets-shoecuff.jpg);">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Fix Scuff Marks on Patent Leather</h2><p>Use a Q-tips<sup>®</sup> cotton swab dipped in Vaseline petroleum jelly to buff out marks on patent leather heels! Q-tips cotton swabs are sturdy yet have a flexible stick so you can buff away then keep dancing.</p>
</a></div><div class="box clearfix home-pets med right-align light-yellow" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-home-pets-necklace.jpg);">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Prevent Jewelry Tangles</h2><p>Wrap delicate necklaces and bracelets around Q-tips<sup>®</sup> cotton swabs to prevent tangles and keep them organized in your suitcase.</p>
</a></div><div class="box clearfix home-pets med left-align muted-pink" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-home-pets-piano.jpg);">
<a class="box-link"><h3 class="category-group">Home + Pets</h3><h2 class="category-title">Keep Piano Keys Spotless</h2><p>Use Q-tips<sup>®</sup> Precision Tips<sup>™</sup> to clean the hard-to-reach places around the keys of your piano or other instruments.</p>
</a></div><div class="box clearfix arts-crafts med right-align pale-grey" style="background-image: url(https://www.qtips.com/wp-content/uploads/sites/95/2018/01/img_double-ac-paintbrush.jpg);">
<a class="box-link"><h3 class="category-group">Arts + Crafts</h3><h2 class="category-title">A Creative Twist on Painting</h2><p>Clump Q-tips<sup>®</sup> cotton swabs together and secure with a rubber band to create a different kind of paintbrush for a fun and creative twist on painting.</p>
</a></div></div><div class="load-more"><a href="#">Load More</a></div><div id="allStories" style="display:none"></div></div></div><footer id="footer" class="modern-footer"><div class="container">
<nav id="footer_nav"><ul class="inline"><li class="footer-item-4108 visible-phone"> <a data-ct-category='Engagement' data-ct-action='Click To Action' data-ct-information='Contact Us 1-800-265-7964 - tel:1-800-265-7964' data-ct-identifier='nav-id-4108' data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="Footer_nav-4108" data-ct-information="Footer Navigation-Contact Us 1-800-265-7964-tel:1-800-265-7964" title="Contact Us 1-800-265-7964" href="tel:1-800-265-7964" class="navItemLink">Contact Us 1-800-265-7964</a></li><li class="footer-item-7 "> <a data-ct-category='Engagement' data-ct-action='Click To Action' data-ct-information='About - https://www.qtips.com/about/' data-ct-identifier='nav-id-10' data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="Footer_nav-10" data-ct-information="Footer Navigation-About-https://www.qtips.com/about/" title="About" href="https://www.qtips.com/about/" class="navItemLink">About</a></li><li class="footer-item-4194 "> <a data-ct-category='Engagement' data-ct-action='Click To Action' data-ct-information='FAQ - https://www.qtips.com/faq/' data-ct-identifier='nav-id-4225' data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="Footer_nav-4225" data-ct-information="Footer Navigation-FAQ-https://www.qtips.com/faq/" title="FAQ" href="https://www.qtips.com/faq/" class="navItemLink">FAQ</a></li><li class="footer-item-6 "> <a data-ct-category='Engagement' data-ct-action='Click To Action' data-ct-information='Contact Q-tips<sup>®</sup> - https://www.qtips.com/contactus/' data-ct-identifier='nav-id-4297' data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="Footer_nav-4297" data-ct-information="Footer Navigation-Contact Q-tips<sup>®</sup>-https://www.qtips.com/contactus/" title="Contact Q-tips<sup>®</sup>" href="https://www.qtips.com/contactus/" class="navItemLink">Contact Q-tips<sup>®</sup></a></li><li class="footer-item-4438 "> <a data-ct-category='Engagement' data-ct-action='Click To Action' data-ct-information='Where to Buy - https://www.qtips.com/where-to-buy/' data-ct-identifier='nav-id-4448' data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="Footer_nav-4448" data-ct-information="Footer Navigation-Where to Buy-https://www.qtips.com/where-to-buy/" title="Where to Buy" href="https://www.qtips.com/where-to-buy/" class="navItemLink">Where to Buy</a></li><li class="footer-item-8 "> <a data-ct-category='Engagement' data-ct-action='Click To Action' data-ct-information='Site Map - https://www.qtips.com/site-map/' data-ct-identifier='nav-id-12' data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="Footer_nav-12" data-ct-information="Footer Navigation-Site Map-https://www.qtips.com/site-map/" title="Site Map" href="https://www.qtips.com/site-map/" class="navItemLink">Site Map</a></li><li class="footer-item-31 "> <a data-ct-category='Engagement' data-ct-action='Click To Action' data-ct-information='Terms of Service - https://www.unileverus.com/terms/termsofuse.html' data-ct-identifier='nav-id-31' data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="Footer_nav-31" data-ct-information="Footer Navigation-Terms of Service-https://www.unileverus.com/terms/termsofuse.html" aria-label='Open Link in New Window' target="_blank" rel="nofollow" title="Terms of Service" href="https://www.unileverus.com/terms/termsofuse.html" class="navItemLink">Terms of Service</a></li><li class="footer-item-32 "> <a data-ct-category='Engagement' data-ct-action='Click To Action' data-ct-information='Privacy Notice - https://www.unilevernotices.com/privacy-notices/usa-english.html' data-ct-identifier='nav-id-32' data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="Footer_nav-32" data-ct-information="Footer Navigation-Privacy Notice-https://www.unilevernotices.com/privacy-notices/usa-english.html" aria-label='Open Link in New Window' target="_blank" rel="nofollow" title="Privacy Notice" href="https://www.unilevernotices.com/privacy-notices/usa-english.html" class="navItemLink">Privacy Notice</a></li><li class="footer-item-30 "> <a data-ct-category='Engagement' data-ct-action='Click To Action' data-ct-information='Unilever - https://www.unileverusa.com/' data-ct-identifier='nav-id-30' data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="Footer_nav-30" data-ct-information="Footer Navigation-Unilever-https://www.unileverusa.com/" aria-label='Open Link in New Window' target="_blank" rel="nofollow" title="Unilever" href="https://www.unileverusa.com/" class="navItemLink">Unilever</a></li><li class="footer-item-4406 "> <a data-ct-category='Engagement' data-ct-action='Click To Action' data-ct-information='Do not sell or share my personal information - https://privacy.unileversolutions.com/en/rights-request-form.html' data-ct-identifier='nav-id-4406' data-ct-action="Click To Action" data-ct-category="Engagement" data-ct-identifier="Footer_nav-4406" data-ct-information="Footer Navigation-Do not sell or share my personal information-https://privacy.unileversolutions.com/en/rights-request-form.html" aria-label='Open Link in New Window' target="_blank" title="Do not sell or share my personal information" href="https://privacy.unileversolutions.com/en/rights-request-form.html" class="navItemLink">Do not sell or share my personal information</a></li><li><span class="evidon-notice-link"></span></li></ul>
</nav> <aside class="footer-banner clearfix"><p><ul class="social hidden-desktop">
<br/><li class="footer-item-3667 insticon hidden-desktop"><a href="https://www.instagram.com/qtips/" class="navItemLink" title="Social insta" data-ct-action="Navigation Click" data-ct-category="Custom" data-ct-identifier="Footer_nav-3667" data-ct-information="Footer Navigation-Social insta">Social insta</a></li>
<br/><li class="footer-item-3666 pinicon hidden-desktop"><a href="https://www.pinterest.com/qtips" class="navItemLink" title="Social pin" data-ct-action="Navigation Click" data-ct-category="Custom" data-ct-identifier="Footer_nav-3666" data-ct-information="Footer Navigation-Social pin">Social pin</a></li>
<br/><li class="footer-item-3668 tweeticon hidden-desktop"><a href="https://twitter.com/qtips" class="navItemLink" title="Social tweet" data-ct-action="Navigation Click" data-ct-category="Custom" data-ct-identifier="Footer_nav-3668" data-ct-information="Footer Navigation-Social tweet">Social tweet</a></li>
<br/><li class="footer-item-3665 fbicon hidden-desktop"><a href="https://www.facebook.com/qtips" class="navItemLink" title="Social Fb" data-ct-action="Navigation Click" data-ct-category="Custom" data-ct-identifier="Footer_nav-3665" data-ct-information="Footer Navigation-Social Fb">Social Fb</a></li>
<br/></ul>
<br/><p class="copyright">© 2020 Unilever. All rights reserved.</p></p><p class="site-footer"><div>This website is directed only to U.S. consumers for products and services of Unilever United States.<br> This website is not directed to consumers outside of the U.S.</div>
<br/><div>Q-TIPS<sup>®</sup> is a registered trademark of Unilever and is NOT a name for just any cotton swabs. The Q-TIPS<sup>®</sup> trademark can only be used to refer to the specific cotton swab products manufactured and sold by Unilever and should not be used to refer to cotton swab products of other companies or to cotton swabs generally. Appropriate generic terminology for cotton swabs includes the terms "cotton", "stick(s)" and "swab(s)". Misuse of the Q-TIPS<sup>®</sup> trademark constitutes an infringement of Unilever's exclusive rights in the mark.</div>
<br/><div>*From the end of the stick to the top of the swab. This claim applies to Q-TIPS<sup>®</sup> cotton swabs only.</div></p> </aside></div>
</footer><input type="hidden" name="bws_global_brand_name" value="Q-Tips"/>
<input type="hidden" name="bws_ct_server_url" value="wa-na.unileversolutions.com"/>
<input type="hidden" name="bws_local_brand_name" value="Q-Tips"/>
<input type="hidden" name="bws_global_brand_category" value="Personal Care"/>
<input type="hidden" name="bws_global_tagging_channel" value="Brand Site"/>
<input type="hidden" name="bws_global_tagging_mobile_channel" value="Mobile Site"/>
<input type="hidden" name="bws_tagging_gid" value="ae9b21d0c466e1d19519265dfb37609e"/>
<input type="hidden" name="bws_tagging_ga" value="UA-34147723-14,G-FWE2GDLEC1,G-K257S23T0D"/>
<input type="hidden" name="bws_global_brand_country" value="US"/>
<input type="hidden" name="bws_domain" value=".www.qtips.com"/>
<input type="hidden" name="bws_site_type" value="Digital 2.0 Lite"/>
<input type="hidden" name="bws_google_webmaster_code" value=""/>
<input type="hidden" name="bws_bing_webmaster_code" value=""/>
<script type="text/javascript" data-pagespeed-no-defer>pagespeed.lazyLoadImages.overrideAttributeFunctions();</script><script>document.addEventListener('DOMContentLoaded', function(){
					function youtube(){
						
						var tk = document.createElement('script');
						tk.src = 'https://www.qtips.com/wp-content/themes/bwslite_r1/js/libs/youtube_player_api-3.8.3.js';
						tk.type = 'text/javascript';
						tk.id ='youtube';
						tk.async = 'true';
						
						var s = document.getElementsByTagName('script')[0];
						s.parentNode.insertBefore(tk, s);
					};
					try{
							bwsliteLiberary.App.onWindowLoadTrigger(youtube,[]);
						}catch(error){
							console.log('footer.php says:'+ error)
						}
					
					
				});</script><script>function cqcs(n,t){this.Set=function(n){var u,t,i,r;if(!this.done){u="Content-Security-Policy";t=document.createElement("meta");t.setAttribute("http-equiv",u);t.setAttribute("content",n);t.setAttribute("X-CookieQ","true");i=document.getElementsByTagName("head")[0];r=i.getElementsByTagName("script");r?i.insertBefore(t,r[0]):i.appendChild(t);try{localStorage.__cqCSPCache=n}catch(f){}this.done=!0}};var i;try{i=localStorage.__cqCSPCache}catch(r){return}this.enabled=!0;i?this.Set(i):n&&(i="default-src 'self' data:  'unsafe-inline' 'unsafe-eval' "+t+" code.jquery.com az417220.vo.msecnd.net gsk-baycloud.azureedge.net baycloud.azureedge.net *.baycloud.com;",this.Set(i))}if(typeof __cqcs=="undefined")var __cqcs=cqcs();</script> <script type="text/javascript" src="https://az417220.vo.msecnd.net/tg.js" async></script> <input type="hidden" value="100" name="backtopscroll" class="" id=""><a id="back2Top" class="btn" title="Back to top" href="#" style="display:none;position: fixed; bottom: 50px; right: 0px;">Top</a>
<script type="text/javascript" src="https://www.qtips.com/wp-content/cache/minify/95/6ae6f.js?x20440"></script> </body></html>