server {
        listen 80; #default_server;
        server_name a.penchat.ru *.a.penchat.ru;
        #listen [::]:80 default_server ipv6only=on;
        root /home/ars/penchat/pack1 ; #/usr/share/nginx/html;
        index first.html index.htm;
        # Make site accessible from http://localhost/
        #server_name localhost;
        error_page 404 /404.html;
        error_page 403 /403.html;
        error_page 500 502 503 504 /50x.html;
}
server {
  listen                *:80;
  server_name           api.penchat.ru *.api.penchat.ru;
  #access_log            /var/log/nginx/app.dev.access.log;
  #error_log             /var/log/nginx/app.dev.error.log;

  location / {

    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header X-Forwarded-For $remote_addr;
  }
}


server {
  listen                *:80;
  server_name           api.thebigbuy.ru *.api.thebigbuy.ru;
  #access_log            /var/log/nginx/app.dev.access.log;
  #error_log             /var/log/nginx/app.dev.error.log;

  location / {

    proxy_pass http://127.0.0.1:7000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header X-Forwarded-For $remote_addr;
  }
}
server {
  listen                *:80;

  server_name           arsenicum32.ru *.arsenicum32.ru;

  #access_log            /var/log/nginx/app.dev.access.log;
  #error_log             /var/log/nginx/app.dev.error.log;

  location / {
    proxy_pass http://127.0.0.1:5000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header X-Forwarded-For $remote_addr;
  }
}
server {
  listen                *:80;

  server_name           arsenicum32.xyz *.arsenicum32.xyz;

  #access_log            /var/log/nginx/app.dev.access.log;
  #error_log             /var/log/nginx/app.dev.error.log;

  location / {
    proxy_pass http://127.0.0.1:2500;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header X-Forwarded-For $remote_addr;
  }
}
server {
        listen 80; #default_server;
        server_name hseartanddesignschool.ru *.hseartanddesignschool.ru;
        root /home/ars/hseartanddesignschool ;
        index index.html index.htm;
        error_page 404 /404.html;
        error_page 403 /403.html;
        error_page 500 502 503 504 /50x.html;
}
server {
        listen 80; #default_server;
        server_name creative.penchat.ru *.creative.penchat.ru;
        #listen [::]:80 default_server ipv6only=on;
        root /home/ars/penchat/creative;
        index index.html index.htm;
        # Make site accessible from http://localhost/
        #server_name localhost;
        error_page 404 /404.html;
        error_page 403 /403.html;
        error_page 500 502 503 504 /50x.html;
}

##
# You should look at the following URL's in order to grasp a solid understanding
# of Nginx configuration files in order to fully unleash the power of Nginx.
# http://wiki.nginx.org/Pitfalls
# http://wiki.nginx.org/QuickStart
# http://wiki.nginx.org/Configuration
#
# Generally, you will want to move this file somewhere, and start with a clean
# file but keep this around for reference. Or just disable in sites-enabled.
#
# Please see /usr/share/doc/nginx-doc/examples/ for more detailed examples.
##


  #location ~ \.php$ {
        #       fastcgi_split_path_info ^(.+\.php)(/.+)$;
                # NOTE: You should have "cgi.fix_pathinfo = 0;" in php.ini
        #       fastcgi_pass 127.0.0.1:9000;
                # With php5-fpm:
        #       fastcgi_pass unix:/var/run/php5-fpm.sock;
        #       fastcgi_index index.php;
        #       include fastcgi_params;
        #}
        #location ~ /\.ht {
        #       deny all;
        #}
# another virtual host using mix of IP-, name-, and port-based configuration
#
#server {
#	listen 8000;
#	listen somename:8080;
#	server_name somename alias another.alias;
#	root html;
#	index index.html index.htm;
#
#	location / {
#		try_files $uri $uri/ =404;
#	}
#}


# HTTPS server
#
#server {
#	listen 443;
#	server_name localhost;
#
#	root html;
#	index index.html index.htm;
#
#	ssl on;
#	ssl_certificate cert.pem;
#	ssl_certificate_key cert.key;
#
#	ssl_session_timeout 5m;
#
#	ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
#	ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";
#	ssl_prefer_server_ciphers on;
#
#	location / {
#		try_files $uri $uri/ =404;
#	}
#}
#server {
#  listen                *:80;

#  server_name           ~^(www\.)?(?<domain>.+)$;

#  access_log            /var/log/nginx/app.dev.access.log;
#  error_log             /var/log/nginx/app.dev.error.log;

#  location / {
#    proxy_pass http://127.0.0.1:XXXXX;
#    proxy_http_version 1.1;
#    proxy_set_header Upgrade $http_upgrade;
#    proxy_set_header Connection 'upgrade';
#    proxy_set_header X-Forwarded-For $remote_addr;
#  }
#}
server {
  listen                *:80;
  server_name           fs.penchat.ru *.fs.penchat.ru;
  #access_log            /var/log/nginx/app.dev.access.log;
  #error_log             /var/log/nginx/app.dev.error.log;

  location / {

    proxy_pass http://127.0.0.1:3030;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header X-Forwarded-For $remote_addr;
  }
}
server {
        listen 80; #default_server;
        server_name penchat.ru *.penchat.ru;
        #listen [::]:80 default_server ipv6only=on;
        root /home/ars/penchat/promo ; #/usr/share/nginx/html;
        index index.html index.htm;
        # Make site accessible from http://localhost/
        #server_name localhost;
        error_page 404 /404.html;
        error_page 403 /403.html;
        error_page 500 502 503 504 /50x.html;
}
server {
        listen 80; #default_server;
        server_name promo.penchat.ru *.promo.penchat.ru;
        #listen [::]:80 default_server ipv6only=on;
        root /home/ars/penchat/promo ; #/usr/share/nginx/html;
        index index.html index.htm;
        # Make site accessible from http://localhost/
        #server_name localhost;
        error_page 404 /404.html;
        error_page 403 /403.html;
        error_page 500 502 503 504 /50x.html;
}
server {
        listen 21; #default_server;
        server_name ssh.arsenicum32.ru *.ssh.arsenicum32.ru;
        #listen [::]:80 default_server ipv6only=on;
        root /home/ars/penchat/promo ; #/usr/share/nginx/html;
        index index.html index.htm;
        # Make site accessible from http://localhost/
        #server_name localhost;
        error_page 404 /404.html;
        error_page 403 /403.html;
        error_page 500 502 503 504 /50x.html;
}

server {
        listen 80 default_server;
        server_name ars.arsenicum32.ru *.ars.arsenicum32.ru;
        listen [::]:80 default_server ipv6only=on;
        root /home/ars/public/;#/usr/share/nginx/html;
        index index.htm index.html;
        # Make site accessible from http://localhost/
        server_name localhost;
        #location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
        #       try_files $uri $uri/ =404;
                # Uncomment to enable naxsi on this location
                # include /etc/nginx/naxsi.rules
        #}
        # Only for nginx-naxsi used with nginx-naxsi-ui : process denied requests
        #location /RequestDenied {
        #       proxy_pass http://127.0.0.1:8080;
        #}
        error_page 404 /404.html;
        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
                root /home/ars/errpages;
        }
}
server {
        listen 80;
        server_name simplelamp.ru *.simplelamp.ru static.simplelamp.ru *.static.simplelamp.ru;
        #listen [::]:80 default_server ipv6only=on;
        root /home/ars/simplelamp/static ;
        index index.html index.htm;
        # Make site accessible from http://localhost/
        #server_name localhost;
        error_page 404 /404.html;
        error_page 403 /403.html;
        error_page 500 502 503 504 /50x.html;
}
server {
        listen 80; #default_server;
        server_name thebigbuy.ru *.thebigbuy.ru;
        location / {
        	root /home/ars/thebigbuy/$subdomain; #/usr/share/nginx/html;
        	index index.html index.htm;
	}
        set $subdomain "";
    	if ($host ~* ^([a-z0-9-\.]+)\.thebigbuy.ru$) {
        	set $subdomain $1;
    	}
    	if ($host ~* ^www.thebigbuy.ru$) {
        	set $subdomain "";
    	}
        error_page 404 /404.html;
        error_page 403 /403.html;
        error_page 500 502 503 504 /50x.html;
}
