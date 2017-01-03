FROM apereo/cas:v5.0.1

RUN mkdir -p /cas-overlay/src/main/java/org/apereo/cas/authentication/handler/support

ADD cas2.cer /cas2.cer
ADD pom_xml.txt /cas-overlay/pom.xml
ADD AbstractUsernamePasswordAuthenticationHandler.java /cas-overlay/src/main/java/org/apereo/cas/authentication/handler/support/AbstractUsernamePasswordAuthenticationHandler.java
ADD QueryDatabaseAuthenticationHandler.java /cas-overlay/src/main/java/org/apereo/cas/adaptors/jdbc/QueryDatabaseAuthenticationHandler.java

RUN ./build.sh package;\
keytool -import -noprompt -keystore /opt/jre-home/lib/security/cacerts -file /cas2.cer -alias cas2 -keypass changeit -storepass changeit;
