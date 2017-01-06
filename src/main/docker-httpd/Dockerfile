FROM centos

ADD mod_auth_cas-1.1-20161225git7298249.x86_64.rpm /

RUN yum -y install httpd mod_ssl mod_proxy_html /mod_auth_cas-1.1-20161225git7298249.x86_64.rpm; \
mkdir /var/cache/httpd/cas; \
chown apache:apache /var/cache/httpd/cas;
