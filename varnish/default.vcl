vcl 4.1;

backend app { .host = "192.168.1.141"; .port = "3000"; }

sub vcl_backend_response {
  set beresp.ttl = 30s;    # Hard TTL: adjust as needed
  set beresp.grace = 0s;   # do NOT serve stale; followers will wait

  # Ignore origin no-store/private by sanitizing headers
  unset beresp.http.Cache-Control;
  unset beresp.http.Expires;
  unset beresp.http.Pragma;

  # No cookies
  unset beresp.http.Set-Cookie;
}